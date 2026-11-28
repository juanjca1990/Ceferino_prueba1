import { useEffect, useRef, useState } from 'react'
import colectivoImage from '../imagenes/imagen_principal.jpeg'
import doubleDeckUnit1 from '../imagenes/doble_piso1.jpeg'
import doubleDeckUnit2 from '../imagenes/doble_piso2.jpeg'
import doubleDeckUnit3 from '../imagenes/doble_piso3.jpeg'
import doubleDeckUnit4 from '../imagenes/doble_piso4.jpeg'
import fleetRangeImage from '../imagenes/unidades.jpeg'
import accessibilityImage from '../imagenes/butaca3.jpeg'
import seatViewImage from '../imagenes/butaca4.png'
import seatDetailImage from '../imagenes/butaca5.png'
import onboardService1 from '../imagenes/servicio1.jpeg'
import onboardService2 from '../imagenes/servicio2.png'
import onboardService3 from '../imagenes/servicio3.jpeg'
import onboardService4 from '../imagenes/servicio4.jpeg'
import confidenceImage from '../imagenes/confianza.jpeg'
import ceferinoLogo from '../imagenes/logo_cefe1.jpeg'
import './App.css'

const currentYear = new Date().getFullYear()

const doubleDeckPhotos = [
  {
    image: doubleDeckUnit1,
    alt: 'Colectivo doble piso de Ceferino en ruta',
  },
  {
    image: doubleDeckUnit2,
    alt: 'Interior de una unidad doble piso de Ceferino',
  },
  {
    image: doubleDeckUnit3,
    alt: 'Unidades doble piso de Ceferino',
  },
  {
    image: doubleDeckUnit4,
    alt: 'Colectivo doble piso de Ceferino en ruta',
  },
]

const onboardServices = [
  {
    image: onboardService1,
    title: 'Conexión a bordo',
    alt: 'Pasajera usando una computadora portátil en su asiento',
  },
  {
    image: onboardService2,
    title: 'Conector de carga a tus manos',
    alt: 'Conector ubicado junto a una butaca',
  },
  {
    image: onboardService3,
    title: 'Bebidas a bordo',
    alt: 'Dispensadores de bebidas entre las butacas',
  },
  {
    image: onboardService4,
    title: 'Entretenimiento',
    alt: 'Pantallas de entretenimiento frente a las butacas',
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

function WhatsAppIcon() {
  return (
    <svg
      aria-hidden="true"
      className="contact-icon"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20.4 11.6a8.5 8.5 0 0 1-12.6 7.5L3 20l.9-4.6a8.5 8.5 0 1 1 16.5-3.8Z" />
      <path d="M8.2 7.9c.2-.5.5-.5.8-.5h.5c.2 0 .4.1.5.4l.8 1.8c.1.2.1.4 0 .6l-.6.7c-.2.2-.2.4-.1.6.4.8 1 1.4 1.8 1.9.2.1.4.1.6-.1l.7-.8c.2-.2.4-.2.6-.1l1.7.8c.3.1.4.3.4.5 0 .3-.2 1.4-.8 1.7-.5.3-1.1.4-1.8.2-1.1-.3-2.4-1-3.5-2.1-1.1-1-1.9-2.3-2.2-3.4-.3-.8-.1-1.5.1-2.2Z" />
    </svg>
  )
}

function MailIcon() {
  return (
    <svg
      aria-hidden="true"
      className="contact-icon"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m4 7 8 6 8-6" />
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
          <img className="wordmark-logo" src={ceferinoLogo} alt="" />
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
            Unidades
          </a>
          <a href="#confort" onClick={closeMenu}>
            Confort
          </a>
          <a href="#servicios-a-bordo" onClick={closeMenu}>
            Servicios
          </a>
          <a href="#confianza" onClick={closeMenu}>
            Confianza
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
            Transportes Ceferino
          </p>
          <h1 className="split-heading">
            <SplitText text="La calidad se construye" />
            <br />
          </h1>
          <p className="hero-description">
            <SplitText text="Años de experiencia y un compromiso que se renueva en cada recorrido" />
          </p>
          <div className="hero-actions">
            <a className="button button-dark" href="#contacto">
              Contactanos <ArrowIcon />
            </a>
            <a className="text-link" href="#servicios-a-bordo">
              Ver nuestros servicios
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
        <div className="fleet-heading">
          <p className="eyebrow">Nuestra flota</p>
          <h2 className="fleet-title">
            <SplitText text="Servicio doble piso, unidades pensadas para viajar mejor" />
          </h2>
        </div>

        <div className="fleet-gallery">
          {doubleDeckPhotos.map((photo) => (
            <figure className="fleet-photo" key={photo.image}>
              <img
                src={photo.image}
                alt={photo.alt}
                loading="lazy"
              />
            </figure>
          ))}
        </div>
        <div className="fleet-range">
          <img
            src={fleetRangeImage}
            alt="Minibús y ómnibus de Ceferino estacionados juntos"
            loading="lazy"
          />
          <p className="fleet-range-copy">
            <SplitText text="Unidades para cada grupo elegí, la opción ideal según la cantidad de pasajeros." />
          </p>
        </div>
      </section>

      <section className="comfort-section" id="confort">
        <div className="comfort-layout section-wrap">
          <div className="comfort-split">
            <figure className="comfort-panel">
              <img
                src={seatViewImage}
                alt="Vista del pasillo y las butacas reclinables del colectivo"
                loading="lazy"
              />
            </figure>
            <figure className="comfort-panel">
              <img
                src={seatDetailImage}
                alt="Detalle de las butacas amplias del colectivo"
                loading="lazy"
              />
            </figure>
          </div>
          <div className="comfort-copy">
            <p className="eyebrow">Pensado para tu viaje</p>
            <h2 className="comfort-title" id="comfort-title">
              <SplitText text="Confort en cada recorrido" />
            </h2>
            <p className="comfort-description">
              <SplitText text="Cada detalle tiene un propósito. Porque el confort también forma parte del viaje." />
            </p>
          </div>
        </div>
        <div className="comfort-accessibility section-wrap">
          <p className="comfort-accessibility-copy">
            <SplitText text="Asientos confortables y espaciosos, incluyendo un sector especial para personas con movilidad reducida" />
          </p>
          <figure className="comfort-accessibility-image">
            <img
              src={accessibilityImage}
              alt="Butaca y sector accesible para personas con movilidad reducida"
              loading="lazy"
            />
          </figure>

        </div>
      </section>

      <section
        className="onboard-services section-wrap"
        id="servicios-a-bordo"
        aria-labelledby="onboard-services-title"
      >
        <div className="section-heading">
          <div>
            <p className="eyebrow">Una experiencia más completa</p>
            <h2 id="onboard-services-title">
              <SplitText text="Servicios a bordo" />
            </h2>
          </div>
          <p className="section-intro">
            <SplitText text="Detalles que acompañan y hacen más agradable cada viaje." />
          </p>
        </div>
        <div className="onboard-services-grid">
          {onboardServices.map((service) => (
            <article className="onboard-service-card" key={service.title}>
              <img src={service.image} alt={service.alt} loading="lazy" />
              <h3>
                <SplitText text={service.title} />
              </h3>
            </article>
          ))}
        </div>
      </section>

      <section
        className="confidence-section"
        id="confianza"
        aria-labelledby="confidence-title"
      >
        <div className="confidence-inner section-wrap">
          <img
            className="confidence-image"
            src={confidenceImage}
            alt="Pasajera disfrutando de su viaje en colectivo"
            loading="lazy"
          />
          <div className="confidence-copy">
            <p className="eyebrow">La experiencia de viajar con Ceferino</p>
            <h2 className="confidence-title" id="confidence-title">
              <SplitText text="La confianza de quienes nos eligen. La confianza que construimos viaje a viaje." />
            </h2>
          </div>
        </div>
      </section>

      <section className="about section-wrap" id="nosotros">
        <div className="about-marker">
          <img className="about-logo" src={ceferinoLogo} alt="Logo de Ceferino" />
          <span>Desde 1989<br />Trelew, Chubut</span>
        </div>
        <div className="about-copy">
          <p className="eyebrow">Nuestra historia</p>
          <h2><SplitText text="Nosotros" /></h2>
          <p>
            <SplitText text="Desde 1989, en Ceferino construimos mucho más que una empresa de transporte: construimos una historia de esfuerzo, compromiso y pasión por conectar personas y comunidades." />
          </p>
          <p>
            <SplitText text="Nacimos en Trelew con un sueño y, a lo largo de más de 35 años, crecimos acompañando el desarrollo de nuestra región, recorriendo nuevos caminos y asumiendo cada desafío con la misma responsabilidad de nuestros comienzos." />
          </p>
          <p>
            <SplitText text="Hoy contamos con una flota moderna de más de 20 unidades, tecnología de vanguardia y servicios adaptados a las necesidades de nuestros pasajeros. Pero, por encima de todo, seguimos manteniendo aquello que nos identifica desde el primer día: el trabajo en equipo, la cercanía y el compromiso con nuestra gente." />
          </p>
          <p className="about-signature">
            <strong>Ceferino, más de 35 años creciendo juntos y compartiendo el camino.</strong>
          </p>
        </div>
      </section>

      <section className="contact-section" id="contacto">
        <div className="contact-inner section-wrap">
          <p className="eyebrow">Estamos para ayudarte</p>
          <h2><SplitText text="Tu próximo viaje, planealo con nosotros." /></h2>
          <p>
            <SplitText text="Escribinos para organizar tu próximo recorrido." />
          </p>
          <div className="contact-actions">
            <a
              className="button button-light contact-button"
              href="https://wa.me/?text=Hola%2C%20quiero%20hacer%20una%20consulta%20sobre%20Ceferino"
              rel="noreferrer"
              target="_blank"
            >
              <WhatsAppIcon /> WhatsApp
            </a>
            <a
              className="button contact-button contact-button-email"
              href="mailto:juancruzalvarez1990@gmail.com"
            >
              <MailIcon /> Email
            </a>
          </div>
          <span className="contact-decoration" aria-hidden="true">c.</span>
        </div>
      </section>

      <footer className="site-footer section-wrap">
        <a className="wordmark" href="#inicio">
          <img className="wordmark-logo" src={ceferinoLogo} alt="" />
          ceferino
        </a>
        <p>Viaja con nosotros.</p>
        <span>© {currentYear} Transportes Ceferino</span>
      </footer>
    </main>
  )
}

export default App
