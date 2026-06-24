"use client"

import { Check, Mail, Phone, MapPin, ArrowUpRight } from "lucide-react"
import { portfolio } from "@/lib/portfolio-data"
import { useReveal } from "@/hooks/use-reveal"
import styles from "./sections.module.css"

export function PortfolioSections() {
  const scope = useReveal<HTMLDivElement>(styles.reveal)
  const { personal, stats, highlights, coreCompetencies, technicalSkills } =
    portfolio
  const { experience, flagship, projects, services, education, certifications } =
    portfolio

  return (
    <div ref={scope}>
      {/* ===================== About ===================== */}
      <section id="about" className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.inner}>
          <div className={`${styles.intro} ${styles.introSplit}`}>
            <div>
              <p className={`${styles.eyebrow} ${styles.reveal}`}>About</p>
              <h2 className={`${styles.heading} ${styles.reveal}`}>
                Turning complex problems into clear outcomes.
              </h2>
            </div>
            <p className={`${styles.lead} ${styles.reveal}`}>{personal.summary}</p>
          </div>

          <div className={styles.aboutGrid}>
            {stats.map((s) => (
              <div key={s.label} className={`${styles.statCard} ${styles.reveal}`}>
                <span className={styles.statValue}>{s.value}</span>
                <span className={styles.statLabel}>{s.label}</span>
              </div>
            ))}
          </div>

          <div className={styles.highlightGrid}>
            {highlights.map((h) => (
              <div
                key={h.title}
                className={`${styles.highlightCard} ${styles.reveal}`}
              >
                <h3 className={styles.highlightTitle}>{h.title}</h3>
                <p className={styles.highlightDesc}>{h.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== Skills ===================== */}
      <section id="skills" className={styles.section}>
        <div className={styles.inner}>
          <p className={`${styles.eyebrow} ${styles.reveal}`}>Skills & Expertise</p>
          <h2 className={`${styles.heading} ${styles.reveal}`}>
            Strategy, discovery & delivery.
          </h2>

          <div className={`${styles.tagCloud} ${styles.reveal}`}>
            {coreCompetencies.map((c) => (
              <span key={c} className={styles.tag}>
                {c}
              </span>
            ))}
          </div>

          <div className={styles.techGrid}>
            {Object.entries(technicalSkills).map(([group, items]) => (
              <div key={group} className={`${styles.techCard} ${styles.reveal}`}>
                <h3 className={styles.techCardTitle}>{group}</h3>
                <div className={styles.techList}>
                  {items.map((i) => (
                    <span key={i} className={styles.techPill}>
                      {i}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== Experience ===================== */}
      <section
        id="experience"
        className={`${styles.section} ${styles.sectionAlt}`}
      >
        <div className={styles.inner}>
          <p className={`${styles.eyebrow} ${styles.reveal}`}>Experience</p>
          <h2 className={`${styles.heading} ${styles.reveal}`}>
            A track record of growth.
          </h2>

          <div className={styles.timeline}>
            {experience.map((job) => (
              <div
                key={job.company}
                className={`${styles.expItem} ${styles.reveal}`}
              >
                <span className={styles.expDot} aria-hidden="true" />
                <div className={styles.expHead}>
                  <h3 className={styles.expRole}>{job.designation}</h3>
                  <span className={styles.expDuration}>{job.duration}</span>
                </div>
                <p className={styles.expCompany}>
                  {job.company}
                  <span className={styles.expIndustry}>{job.industry}</span>
                </p>
                <ul className={styles.expList}>
                  {job.achievements.map((a) => (
                    <li key={a}>{a}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== Flagship + Work ===================== */}
      <section id="work" className={styles.section}>
        <div className={styles.inner}>
          <p className={`${styles.eyebrow} ${styles.reveal}`}>Flagship Product</p>
          <h2 className={`${styles.heading} ${styles.reveal}`}>
            ENERGIC — EV charging, reimagined.
          </h2>

          <div className={`${styles.productCard} ${styles.reveal}`}>
            <div className={styles.productTop}>
              <h3 className={styles.productName}>
                {flagship.url ? (
                  <a href={flagship.url} target="_blank" rel="noreferrer">
                    {flagship.name}
                  </a>
                ) : (
                  flagship.name
                )}
              </h3>
              <span className={styles.productCategory}>{flagship.category}</span>
            </div>
            <p className={styles.productDesc}>{flagship.description}</p>

            <p className={styles.subLabel}>Supported Protocols</p>
            <div className={styles.protocolRow}>
              {flagship.protocols.map((p) => (
                <span key={p} className={styles.protocol}>
                  {p}
                </span>
              ))}
            </div>

            <p className={styles.subLabel}>Platform Modules</p>
            <div className={styles.moduleGrid}>
              {flagship.modules.map((m) => (
                <div key={m} className={styles.moduleItem}>
                  <Check size={16} strokeWidth={2.5} />
                  {m}
                </div>
              ))}
            </div>

            <p className={styles.subLabel}>Core Features</p>
            <div className={styles.featureWrap}>
              {flagship.coreFeatures.map((f) => (
                <span key={f} className={styles.tag}>
                  {f}
                </span>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ===================== Case Studies ===================== */}
      <section id="case-studies" className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.inner}>
          <p className={`${styles.eyebrow} ${styles.reveal}`}>Case Studies</p>
          <h2 className={`${styles.heading} ${styles.reveal}`}>
            Featured Product Case Studies.
          </h2>

          <div className={styles.workList}>
            {projects.map((project) => (
              <div key={project.name} className={`${styles.workRow} ${styles.reveal}`}>
                <span className={styles.workName}>
                  {project.url ? (
                    <a href={project.url} target="_blank" rel="noreferrer">
                      {project.name}
                    </a>
                  ) : (
                    project.name
                  )}
                </span>
                <span className={styles.workType}>{project.type}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== Services ===================== */}
      <section
        id="services"
        className={`${styles.section} ${styles.sectionAlt}`}
      >
        <div className={styles.inner}>
          <p className={`${styles.eyebrow} ${styles.reveal}`}>Services</p>
          <h2 className={`${styles.heading} ${styles.reveal}`}>
            How I help teams ship.
          </h2>

          <div className={styles.serviceGrid}>
            {services.map((s) => (
              <div key={s.no} className={`${styles.serviceCard} ${styles.reveal}`}>
                <span className={styles.serviceNo}>{s.no}</span>
                <h3 className={styles.serviceTitle}>{s.title}</h3>
                <p className={styles.serviceDesc}>{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== Education & Certifications ===================== */}
      <section id="education" className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.inner}>
          <p className={`${styles.eyebrow} ${styles.reveal}`}>Education</p>
          <h2 className={`${styles.heading} ${styles.reveal}`}>
            Academic credentials and professional certifications.
          </h2>

          <div className={styles.eduGrid}>
            <div className={`${styles.eduCard} ${styles.reveal}`}>
              <h4>{education.degree}</h4>
              <p>
                {education.specialization}
                <br />
                {education.institution}
              </p>
            </div>
            {certifications.map((c) => (
              <div key={c.name} className={`${styles.eduCard} ${styles.reveal}`}>
                <h4>{c.name}</h4>
                <p>{c.issuer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== Contact ===================== */}
      <section
        id="contact"
        className={`${styles.section} ${styles.contact}`}
      >
        <div className={styles.inner}>
          <p className={`${styles.eyebrow} ${styles.reveal}`}>Contact</p>
          <h2 className={`${styles.contactHeading} ${styles.reveal}`}>
            Let&apos;s build something <span>worth using.</span>
          </h2>
          <p className={`${styles.contactSub} ${styles.reveal}`}>
            Open to product roles and collaborations where strategy, discovery,
            and execution come together. Reach out — I&apos;d love to talk.
          </p>

          <a
            href={`mailto:${personal.email}`}
            className={`${styles.contactBtn} ${styles.reveal}`}
          >
            Get In Touch
            <ArrowUpRight size={18} strokeWidth={2} />
          </a>

          <div className={`${styles.contactMeta} ${styles.reveal}`}>
            <a href={`mailto:${personal.email}`}>
              <Mail size={16} />
              {personal.email}
            </a>
            <a href={`tel:${personal.phone.replace(/\s/g, "")}`}>
              <Phone size={16} />
              {personal.phone}
            </a>
            <span>
              <MapPin size={16} />
              {personal.location}
            </span>
          </div>

          <div className={styles.footer}>
            <span>© {new Date().getFullYear()} {personal.name}</span>
            <span>{personal.title} · {personal.specialization[0]}</span>
          </div>
        </div>
      </section>
    </div>
  )
}
