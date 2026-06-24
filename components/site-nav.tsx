"use client"

import { useEffect, useState, useCallback } from "react"
import { Menu, X } from "lucide-react"
import { portfolio } from "@/lib/portfolio-data"
import styles from "./site-nav.module.css"

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const go = useCallback((e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    setOpen(false)
    const el = document.querySelector(href)
    el?.scrollIntoView({ behavior: "smooth" })
  }, [])

  return (
    <header className={`${styles.nav} ${scrolled ? styles.navScrolled : ""}`}>
      <a
        href="#top"
        className={styles.brand}
        onClick={(e) => go(e, "#top")}
        aria-label="Neeraj Ram — home"
      >
        NEERAJ<span>RAM</span>
      </a>

      <nav className={styles.links} aria-label="Primary">
        {portfolio.nav.map((item) => (
          <a key={item.href} href={item.href} onClick={(e) => go(e, item.href)}>
            {item.label}
          </a>
        ))}
      </nav>

      <a
        href="#contact"
        className={styles.cta}
        onClick={(e) => go(e, "#contact")}
      >
        Let&apos;s Talk
      </a>

      <button
        type="button"
        className={styles.menuBtn}
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
      >
        {open ? <X size={20} /> : <Menu size={20} />}
      </button>

      {open && (
        <div className={styles.mobileMenu}>
          {portfolio.nav.map((item) => (
            <a key={item.href} href={item.href} onClick={(e) => go(e, item.href)}>
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className={styles.mobileCta}
            onClick={(e) => go(e, "#contact")}
          >
            Let&apos;s Talk
          </a>
        </div>
      )}
    </header>
  )
}
