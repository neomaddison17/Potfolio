"use client"

import { useEffect, useRef } from "react"
import * as THREE from "three"
import styles from "./cinematic-layer.module.css"

/**
 * CinematicLayer
 * A floating, dreamy bokeh/particle field rendered with Three.js.
 * - Warm orange + soft white glowing particles
 * - Additive blending for a luminous, atmospheric feel
 * - Slow sine-wave floating motion
 * - Subtle mouse parallax on the camera
 * - Carefully disposes all GPU resources on unmount
 */
export function CinematicLayer() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    // Respect reduced-motion preferences.
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches

    const scene = new THREE.Scene()

    const camera = new THREE.PerspectiveCamera(
      60,
      container.clientWidth / container.clientHeight,
      0.1,
      100,
    )
    camera.position.z = 18

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: false,
      powerPreference: "high-performance",
    })
    renderer.setClearColor(0x000000, 0)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setSize(container.clientWidth, container.clientHeight)
    container.appendChild(renderer.domElement)

    // --- Soft circular glow sprite, generated on a canvas ---
    const createGlowTexture = () => {
      const size = 128
      const canvas = document.createElement("canvas")
      canvas.width = size
      canvas.height = size
      const ctx = canvas.getContext("2d")!
      const gradient = ctx.createRadialGradient(
        size / 2,
        size / 2,
        0,
        size / 2,
        size / 2,
        size / 2,
      )
      gradient.addColorStop(0, "rgba(255,255,255,1)")
      gradient.addColorStop(0.2, "rgba(255,236,210,0.85)")
      gradient.addColorStop(0.45, "rgba(255,180,110,0.35)")
      gradient.addColorStop(1, "rgba(255,150,80,0)")
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, size, size)
      const texture = new THREE.CanvasTexture(canvas)
      texture.needsUpdate = true
      return texture
    }

    const glowTexture = createGlowTexture()

    // Scale particle count to viewport / device for performance.
    const area = container.clientWidth * container.clientHeight
    const isMobile = container.clientWidth < 768
    const COUNT = Math.round(
      Math.min(isMobile ? 90 : 220, Math.max(60, area / 9000)),
    )

    const positions = new Float32Array(COUNT * 3)
    const colors = new Float32Array(COUNT * 3)
    const sizes = new Float32Array(COUNT)
    // Per-particle motion phase + speed for organic sine oscillation.
    const phases = new Float32Array(COUNT)
    const speeds = new Float32Array(COUNT)
    const amplitudes = new Float32Array(COUNT)

    const warm = new THREE.Color(0xff9a4d) // warm orange
    const ember = new THREE.Color(0xffc278) // amber
    const soft = new THREE.Color(0xfff4e6) // soft white

    for (let i = 0; i < COUNT; i++) {
      const i3 = i * 3
      positions[i3] = (Math.random() - 0.5) * 46
      positions[i3 + 1] = (Math.random() - 0.5) * 30
      positions[i3 + 2] = (Math.random() - 0.5) * 24

      // Mostly warm tones, occasional soft white highlights.
      const pick = Math.random()
      const c = pick > 0.82 ? soft : pick > 0.4 ? warm : ember
      colors[i3] = c.r
      colors[i3 + 1] = c.g
      colors[i3 + 2] = c.b

      sizes[i] = Math.random() * 2.4 + 0.6
      phases[i] = Math.random() * Math.PI * 2
      speeds[i] = Math.random() * 0.4 + 0.15
      amplitudes[i] = Math.random() * 0.8 + 0.3
    }

    const geometry = new THREE.BufferGeometry()
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3))
    geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3))
    geometry.setAttribute("size", new THREE.BufferAttribute(sizes, 1))

    // Custom shader material so we can size points individually and keep
    // a soft, additive, depth-rich glow.
    const material = new THREE.ShaderMaterial({
      uniforms: {
        uTexture: { value: glowTexture },
        uOpacity: { value: 0.0 }, // fades in
      },
      vertexShader: /* glsl */ `
        attribute float size;
        varying vec3 vColor;
        void main() {
          vColor = color;
          vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
          gl_PointSize = size * (300.0 / -mvPosition.z);
          gl_Position = projectionMatrix * mvPosition;
        }
      `,
      fragmentShader: /* glsl */ `
        uniform sampler2D uTexture;
        uniform float uOpacity;
        varying vec3 vColor;
        void main() {
          vec4 tex = texture2D(uTexture, gl_PointCoord);
          gl_FragColor = vec4(vColor, 1.0) * tex * uOpacity;
        }
      `,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      depthTest: false,
      vertexColors: true,
    })

    const points = new THREE.Points(geometry, material)
    scene.add(points)

    // --- Interaction state ---
    const pointer = { x: 0, y: 0 }
    const target = { x: 0, y: 0 }

    const handlePointerMove = (e: PointerEvent) => {
      pointer.x = (e.clientX / window.innerWidth) * 2 - 1
      pointer.y = (e.clientY / window.innerHeight) * 2 - 1
    }
    window.addEventListener("pointermove", handlePointerMove, { passive: true })

    const handleResize = () => {
      if (!container) return
      const w = container.clientWidth
      const h = container.clientHeight
      camera.aspect = w / h
      camera.updateProjectionMatrix()
      renderer.setSize(w, h)
    }
    window.addEventListener("resize", handleResize)

    // --- Animation loop ---
    const startTime = performance.now()
    let raf = 0
    let visible = true

    const handleVisibility = () => {
      visible = document.visibilityState === "visible"
    }
    document.addEventListener("visibilitychange", handleVisibility)

    const posAttr = geometry.getAttribute("position") as THREE.BufferAttribute
    const basePositions = positions.slice()

    const animate = () => {
      raf = requestAnimationFrame(animate)
      if (!visible) return

      const t = (performance.now() - startTime) / 1000

      // Fade particles in gently.
      const op = material.uniforms.uOpacity.value as number
      if (op < 1) {
        material.uniforms.uOpacity.value = Math.min(1, op + 0.012)
      }

      if (!prefersReducedMotion) {
        // Slow sine-wave float per particle.
        for (let i = 0; i < COUNT; i++) {
          const i3 = i * 3
          const ph = phases[i]
          const sp = speeds[i]
          const am = amplitudes[i]
          posAttr.array[i3 + 1] =
            basePositions[i3 + 1] + Math.sin(t * sp + ph) * am
          posAttr.array[i3] =
            basePositions[i3] + Math.cos(t * sp * 0.6 + ph) * am * 0.5
        }
        posAttr.needsUpdate = true

        // Gentle overall drift / breathing.
        points.rotation.z = Math.sin(t * 0.04) * 0.06
      }

      // Smooth mouse parallax on the camera.
      target.x += (pointer.x * 1.6 - target.x) * 0.03
      target.y += (pointer.y * 1.0 - target.y) * 0.03
      camera.position.x = target.x
      camera.position.y = -target.y
      camera.lookAt(scene.position)

      renderer.render(scene, camera)
    }
    animate()

    // --- Cleanup: dispose all GPU resources ---
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener("pointermove", handlePointerMove)
      window.removeEventListener("resize", handleResize)
      document.removeEventListener("visibilitychange", handleVisibility)
      geometry.dispose()
      material.dispose()
      glowTexture.dispose()
      renderer.dispose()
      if (renderer.domElement.parentNode === container) {
        container.removeChild(renderer.domElement)
      }
    }
  }, [])

  return <div ref={containerRef} className={styles.canvas} aria-hidden="true" />
}
