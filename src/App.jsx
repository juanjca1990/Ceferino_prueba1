import { useEffect, useRef, useState } from 'react'
import colectivoImage from '../imagenes/ceferino_colectivo1.png'
import weekdaysSchedule from '../imagenes/horarios_1.png'
import specialSchedule from '../imagenes/horarios_2.png'
import holidaysSchedule from '../imagenes/horarios_3.png'
import faresImage from '../imagenes/tarifas_1.png'
import './App.css'

const currentYear = new Date().getFullYear()

const schedules = [
  {
    image: weekdaysSchedule,
    title: 'Lunes a viernes',
    alt: 'Horarios de lunes a viernes',
  },
  {
    image: specialSchedule,
    title: 'Horarios especiales',
    alt: 'Horarios especiales por aniversario',
  },
  {
    image: holidaysSchedule,
    title: 'Domingos y feriados',
    alt: 'Horarios de domingos y feriados',
  },
]

function ArrowIcon({ diagonal = false }) {
  return (
    <svg
      aria-hidden="true"
      className="arrow-icon"
      viewBox="0 0 20 20"
      fill="none"
    >
      {diagonal ? (
        <path d="M5 15 15 5M6 5h9v9" />
      ) : (
        <path d="M3 10h13m-5-5 5 5-5 5" />
      )}
    </svg>
  )
}

function SplitText({ text, className = '' }) {
  const textRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const element = textRef.current
    if (!element) return undefined

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.2 },
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  return (
    <span
      className={`split-text${isVisible ? ' is-visible' : ''}${className ? ` ${className}` : ''}`}
      ref={textRef}
    >
      <span className="split-accessible">{text}</span>
      <span aria-hidden="true" className="split-visual">
        {text.split(/\s+/).map((word, wordIndex) => (
          <span
            className="split-word"
            key={`${word}-${wordIndex}`}
            style={{ '--word-index': wordIndex }}
          >
            {Array.from(word).map((character, characterIndex) => (
              <span
                className="split-character"
                key={`${character}-${characterIndex}`}
                style={{ '--character-index': characterIndex }}
              >
                {character}
              </span>
            ))}
          </span>
        ))}
      </span>
    </span>
  )
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#inicio" onClick={closeMenu}>
          <span className="wordmark-mark" aria-hidden="true">
            c.
          </span>
          ceferino
        </a>

        <button
          aria-expanded={menuOpen}
          aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
          className={`menu-toggle${menuOpen ? ' is-open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          type="button"
        >
          <span />
          <span />
        </button>

        <nav className={`navigation${menuOpen ? ' is-open' : ''}`}>
          <a href="#servicios" onClick={closeMenu}>
            Horarios
          </a>
          <a href="#proyectos" onClick={closeMenu}>
            Tarifas
          </a>
          <a href="#nosotros" onClick={closeMenu}>
            Sobre nosotros
          </a>
          <a className="nav-contact" href="#contacto" onClick={closeMenu}>
            Hablemos <ArrowIcon diagonal />
          </a>
        </nav>
      </header>

      <section className="hero" id="inicio">
        <img
          alt="Colectivo Ceferino estacionado junto a una arboleda"
          className="hero-image"
          src={colectivoImage}
        />
        <div className="hero-copy">
          <p className="eyebrow">
            <span className="eyebrow-dot" />
            Estudio creativo independiente
          </p>
          <h1 className="split-heading">
            <SplitText text="Ideas que se ven bien." />
            <br />
            <SplitText
              className="hero-title-accent"
              text="Resultados que se sienten."
            />
          </h1>
          <p className="hero-description">
            <SplitText text="Creamos marcas y experiencias digitales para negocios con ganas de crecer. Estrategia, diseño y desarrollo, todo en un mismo lugar." />
          </p>
          <div className="hero-actions">
            <a className="button button-dark" href="#contacto">
              Empezar un proyecto <ArrowIcon />
            </a>
            <a className="text-link" href="#proyectos">
              Ver nuestro trabajo
            </a>
          </div>
        </div>
      </section>

      <section className="trust-bar section-wrap" aria-label="Experiencia">
        <p>
          <SplitText text="Un buen comienzo para marcas que van en serio." />
        </p>
        <div className="trust-stat">
          <strong>+30</strong>
          <span>proyectos con propósito</span>
        </div>
        <div className="trust-stat">
          <strong>100%</strong>
          <span>hecho a tu medida</span>
        </div>
        <div className="trust-stat">
          <strong>3×</strong>
          <span>más claridad para crecer</span>
        </div>
      </section>

      <section className="services section-wrap" id="servicios">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Información para viajar</p>
            <h2><SplitText text="Horarios" /></h2>
          </div>
          <p className="section-intro">
            <SplitText text="Consultá los horarios de nuestros servicios y planificá tu viaje." />
          </p>
        </div>

        <div className="schedule-grid">
          {schedules.map((schedule) => (
            <article className="schedule-card" key={schedule.title}>
              <img
                className="schedule-image"
                src={schedule.image}
                alt={schedule.alt}
              />
              <h3><SplitText text={schedule.title} /></h3>
            </article>
          ))}
        </div>
      </section>

      <section className="work-section" id="proyectos">
        <div className="section-wrap">
          <div className="section-heading work-heading">
            <div>
              <p className="eyebrow">Información para viajar</p>
              <h2><SplitText text="Tarifas vigentes" /></h2>
            </div>
            <p className="section-intro">
              <SplitText text="Consultá los valores actuales de nuestros recorridos." />
            </p>
          </div>

          <article className="schedule-card tariff-card">
            <img
              className="schedule-image"
              src={faresImage}
              alt="Tarifas vigentes de los recorridos de Ceferino"
            />
            <h3><SplitText text="Tarifas de los recorridos" /></h3>
          </article>
        </div>
      </section>

      <section className="about section-wrap" id="nosotros">
        <div className="about-marker">
          <span className="about-stamp">C</span>
          <span>Pequeño equipo.<br />Gran atención al detalle.</span>
        </div>
        <div className="about-copy">
          <p className="eyebrow">Hola, somos Ceferino</p>
          <h2><SplitText text="Trabajamos contigo, no solo para ti." /></h2>
          <p>
            <SplitText text="Somos un estudio independiente que cree en las buenas ideas y en hacer las cosas con intención. Nos gusta escuchar, hacer las preguntas importantes y convertir desafíos en marcas que conectan." />
          </p>
          <a className="text-link" href="#contacto">
            Conocé nuestra forma de trabajar <ArrowIcon />
          </a>
        </div>
        <div className="about-note">
          <span>Una buena marca no grita.</span>
          <strong>Se hace escuchar.</strong>
          <span className="note-spark">✳</span>
        </div>
      </section>

      <section className="contact-section" id="contacto">
        <div className="contact-inner section-wrap">
          <p className="eyebrow">Tu próximo capítulo empieza acá</p>
          <h2><SplitText text="¿Tenés una idea dando vueltas?" /></h2>
          <p>
            <SplitText text="Contanos un poco. Nos encantaría escuchar sobre tu proyecto." />
          </p>
          <a className="button button-light" href="mailto:hola@ceferino.studio">
            Escribinos a hola@ceferino.studio <ArrowIcon diagonal />
          </a>
          <span className="contact-decoration" aria-hidden="true">c.</span>
        </div>
      </section>

      <footer className="site-footer section-wrap">
        <a className="wordmark" href="#inicio">
          <span className="wordmark-mark" aria-hidden="true">
            c.
          </span>
          ceferino
        </a>
        <p>Ideas con intención, de principio a fin.</p>
        <span>© {currentYear} Ceferino Estudio</span>
      </footer>
    </main>
  )
}

export default App
