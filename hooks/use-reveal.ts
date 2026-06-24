"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

/**
 * Reveals all elements matching the given (CSS-module-hashed) class name
 * inside the returned ref with a scroll-triggered entrance.
 */
export function useReveal<T extends HTMLElement = HTMLElement>(
  revealClass: string,
) {
  const scope = useRef<T>(null)

  useEffect(() => {
    const el = scope.current
    if (!el) return
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    const items = Array.from(
      el.querySelectorAll<HTMLElement>(`.${revealClass}`),
    )
    if (items.length === 0) return

    const ctx = gsap.context(() => {
      if (reduce) {
        gsap.set(items, { opacity: 1, y: 0 })
        return
      }
      items.forEach((item) => {
        gsap.to(item, {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: item,
            start: "top 88%",
            toggleActions: "play none none none",
          },
        })
      })
      // Recalculate positions once everything (video/layout) settles.
      ScrollTrigger.refresh()
    }, scope)

    return () => ctx.revert()
  }, [revealClass])

  return scope
}
