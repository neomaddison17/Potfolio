"use client"

import { useEffect, useRef, useState, useCallback } from "react"
import { gsap } from "gsap"
import { Pause, Play, Volume2, VolumeX, Sparkles } from "lucide-react"
import { CinematicLayer } from "./cinematic-layer"
import styles from "./video-intro.module.css"

const VIDEO_SRC = "/media/portrait-hero.mp4"

export function VideoIntro() {
  const sectionRef = useRef<HTMLElement>(null)
  const fgVideoRef = useRef<HTMLVideoElement>(null)
  const bgVideoRef = useRef<HTMLVideoElement>(null)

  // Refs used for GSAP entrance animation targets.
  const taglineRef = useRef<HTMLParagraphElement>(null)
  const firstNameRef = useRef<HTMLSpanElement>(null)
  const lastNameRef = useRef<HTMLSpanElement>(null)
  const roleRef = useRef<HTMLParagraphElement>(null)
  const controlsRef = useRef<HTMLDivElement>(null)
  const scrollRef = useRef<HTMLButtonElement>(null)
  const overlayRef = useRef<HTMLDivElement>(null)

  const [isPlaying, setIsPlaying] = useState(true)
  const [isMuted, setIsMuted] = useState(true)
  const [showHint, setShowHint] = useState(true)

  // Keep the blurred ambient background roughly in sync with the foreground.
  const syncBackground = useCallback(() => {
    const fg = fgVideoRef.current
    const bg = bgVideoRef.current
    if (!fg || !bg) return
    if (Math.abs(bg.currentTime - fg.currentTime) > 0.3) {
      bg.currentTime = fg.currentTime
    }
  }, [])

  // GSAP entrance timeline + page fade-in.
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } })

      gsap.set(
        [
          taglineRef.current,
          firstNameRef.current,
          lastNameRef.current,
          roleRef.current,
          controlsRef.current,
          scrollRef.current,
        ],
        { autoAlpha: 0, y: 40 },
      )

      tl.to(overlayRef.current, { autoAlpha: 1, duration: 1.4 }, 0)
        .to(
          taglineRef.current,
          { autoAlpha: 1, y: 0, duration: 1, letterSpacing: "0.5em" },
          0.5,
        )
        .to(
          firstNameRef.current,
          { autoAlpha: 1, y: 0, duration: 1.2 },
          0.7,
        )
        .to(
          lastNameRef.current,
          { autoAlpha: 1, y: 0, duration: 1.2 },
          0.9,
        )
        .to(roleRef.current, { autoAlpha: 1, y: 0, duration: 1 }, 1.2)
        .to(controlsRef.current, { autoAlpha: 1, y: 0, duration: 1 }, 1.4)
        .to(scrollRef.current, { autoAlpha: 1, y: 0, duration: 1 }, 1.6)
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  // Auto-hide the "tap for sound" hint.
  useEffect(() => {
    const timer = setTimeout(() => setShowHint(false), 6000)
    return () => clearTimeout(timer)
  }, [])

  // Try to autoplay (muted) on mount.
  useEffect(() => {
    const fg = fgVideoRef.current
    const bg = bgVideoRef.current
    if (fg) fg.play().catch(() => setIsPlaying(false))
    if (bg) bg.play().catch(() => {})
  }, [])

  const togglePlay = useCallback(() => {
    const fg = fgVideoRef.current
    const bg = bgVideoRef.current
    if (!fg) return
    if (fg.paused) {
      fg.play()
      bg?.play()
      setIsPlaying(true)
    } else {
      fg.pause()
      bg?.pause()
      setIsPlaying(false)
    }
  }, [])

  const toggleMute = useCallback(() => {
    const fg = fgVideoRef.current
    if (!fg) return
    const next = !fg.muted
    fg.muted = next
    setIsMuted(next)
    setShowHint(false)
    if (!next) {
      // Unmuting requires the video to be playing.
      fg.play()
      setIsPlaying(true)
    }
  }, [])

  const handleScrollDown = useCallback(() => {
    const next = document.getElementById("about")
    next?.scrollIntoView({ behavior: "smooth" })
  }, [])

  return (
    <>
      <section ref={sectionRef} className={styles.hero} aria-label="Intro">
        <div className={styles.sticky}>
          {/* Ambient blurred background layer */}
          <video
            ref={bgVideoRef}
            className={styles.bgVideo}
            src={VIDEO_SRC}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            aria-hidden="true"
            tabIndex={-1}
          />

          {/* Main foreground video */}
          <video
            ref={fgVideoRef}
            className={styles.fgVideo}
            src={VIDEO_SRC}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            onTimeUpdate={syncBackground}
            aria-label="Portfolio intro video"
          />

          {/* Cinematic gradient overlays */}
          <div className={styles.vignette} aria-hidden="true" />
          <div className={styles.gradientTop} aria-hidden="true" />
          <div className={styles.gradientBottom} aria-hidden="true" />
          <div className={styles.monitorGlow} aria-hidden="true" />

          {/* Three.js particle / bokeh layer */}
          <CinematicLayer />

          {/* Content overlay */}
          <div ref={overlayRef} className={styles.content}>
            <p ref={taglineRef} className={styles.tagline}>
              Product Manager
            </p>

            <h1 className={styles.name}>
              <span ref={firstNameRef} className={styles.nameLine}>
                Neeraj
              </span>
              <span ref={lastNameRef} className={styles.nameLine}>
                Ram
              </span>
            </h1>

            <p ref={roleRef} className={styles.role}>
              EV Product Manager | Built 0&rarr;1 Charging & SaaS Platforms |
              Product Strategy, GTM & Platform Products | IoT & Connected Devices
            </p>
          </div>

          {/* Glassmorphism controls */}
          <div ref={controlsRef} className={styles.controls}>
            <button
              type="button"
              className={styles.controlBtn}
              onClick={togglePlay}
              aria-label={isPlaying ? "Pause video" : "Play video"}
            >
              {isPlaying ? (
                <Pause size={18} strokeWidth={1.75} />
              ) : (
                <Play size={18} strokeWidth={1.75} />
              )}
            </button>

            <button
              type="button"
              className={styles.controlBtn}
              onClick={toggleMute}
              aria-label={isMuted ? "Unmute video" : "Mute video"}
            >
              {isMuted ? (
                <VolumeX size={18} strokeWidth={1.75} />
              ) : (
                <Volume2 size={18} strokeWidth={1.75} />
              )}
            </button>
          </div>

          {/* Tap for sound badge */}
          {showHint && isMuted && (
            <button
              type="button"
              className={styles.soundHint}
              onClick={toggleMute}
            >
              <Sparkles size={14} strokeWidth={1.75} />
              <span>Tap for sound</span>
            </button>
          )}

          {/* Scroll indicator */}
          <button
            ref={scrollRef}
            type="button"
            className={styles.scroll}
            onClick={handleScrollDown}
            aria-label="Scroll to next section"
          >
            <span className={styles.scrollLabel}>Scroll</span>
            <span className={styles.scrollTrack}>
              <span className={styles.scrollPulse} />
            </span>
          </button>
        </div>
      </section>
    </>
  )
}
