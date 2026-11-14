"use client";

import { useEffect, useState } from "react";
import { ArrowDown, ArrowDownRight, ArrowRight, ArrowUpRight, Clock3, Cross, Instagram, MapPin, Menu, Play, X } from "lucide-react";

const photos = {
  hero: "https://images.unsplash.com/photo-1611761574166-781d3d9637e2?auto=format&fit=crop&w=2400&q=85",
  community: "https://files.adventistas.org/noticias/pt/2021/09/grupomultietnicoestudobiblia.jpeg",
  young: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=1000&q=85",
  kids: "https://images.unsplash.com/photo-1472162072942-cd5147eb3902?auto=format&fit=crop&w=1000&q=85",
  worship: "https://images.unsplash.com/photo-1507692049790-de58290a4334?auto=format&fit=crop&w=1000&q=85",
  event: "https://images.unsplash.com/photo-1517457373958-b7e?auto=format&fit=crop&w=900&q=80",
  sermon: "https://images.unsplash.com/photo-1504052434569-70ad5836ab65?auto=format&fit=crop&w=1800&q=85",
};

const links = [["Inicio", "inicio"], ["Nosotros", "nosotros"], ["Ministerios", "ministerios"], ["Eventos", "eventos"], ["Predicaciones", "predicaciones"], ["Contacto", "contacto"]];
const ministries = [
  { n: "01", title: "Jóvenes", text: "Un espacio para crecer en la fe, compartir y construir amistades.", image: "https://images.squarespace-cdn.com/content/v1/62d6bf5d738b0077c47739f5/f810a51f-9fc9-4faa-a202-dab3368802de/091921wfc241%2B%281%29.jpg?format=1200w", alt: "Jóvenes reunidos en un grupo de conversación" },
  { n: "02", title: "Niños", text: "Acompañamos a los más pequeños en sus primeros pasos de fe.", image: photos.kids, alt: "Infancias compartiendo al aire libre" },
  { n: "03", title: "Adoración", text: "Un espacio para expresar nuestra fe a través de la música.", image: photos.worship, alt: "Músico en un espacio de adoración" },
];
const events = [
  { day: "21", month: "NOV", title: "Encuentro de jóvenes", detail: "Una noche para conectar, compartir y crecer juntos.", time: "SÁBADO · 19:30 HS" },
  { day: "27", month: "NOV", title: "Noche de adoración", detail: "Un tiempo para hacer silencio y encontrarnos con Dios.", time: "VIERNES · 20:00 HS" },
  { day: "29", month: "NOV", title: "Domingo en casa", detail: "Compartimos la mesa, la palabra y un nuevo comienzo.", time: "DOMINGO · 10:30 HS" },
];

function Brand({ footer = false }: { footer?: boolean }) {
  return <a className={`brand ${footer ? "brand-footer" : ""}`} href="#inicio" aria-label="Casa de Fe, inicio"><span className="brand-mark"><Cross size={19} strokeWidth={1.35} /></span><span className="brand-name">CASA DE FE<span>LEANDRO N. ALEM · MISIONES</span></span></a>;
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("inicio");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      const ids = links.map(([, id]) => id);
      const current = ids.map((id) => document.getElementById(id)).filter((el): el is HTMLElement => Boolean(el)).filter((el) => el.getBoundingClientRect().top <= 160).at(-1);
      if (current) setActive(current.id);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => { if (entry.isIntersecting) entry.target.classList.add("is-visible"); }), { threshold: 0.12 });
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => { window.removeEventListener("scroll", onScroll); observer.disconnect(); };
  }, []);

  function closeMenu() { setMenuOpen(false); }

  return <>
    <header className={`site-header ${scrolled ? "header-scrolled" : ""}`}>
      <div className="nav-wrap"><Brand /><nav className={`nav-links ${menuOpen ? "nav-open" : ""}`} aria-label="Navegación principal">{links.map(([label, id]) => <a key={id} className={active === id ? "nav-active" : ""} href={`#${id}`} onClick={closeMenu}>{label}</a>)}<a className="nav-mobile-visit" href="#contacto" onClick={closeMenu}>Planificá tu visita <ArrowUpRight size={15} /></a></nav><a className="button button-small nav-visit" href="#contacto">Visitanos <ArrowUpRight size={14} /></a><button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}>{menuOpen ? <X /> : <Menu />}</button></div>
    </header>

    <main>
      <section className="hero" id="inicio" style={{ "--hero-image": `url('${photos.hero}')` } as React.CSSProperties}>
        <div className="hero-shade" />
        <div className="hero-content wrap"><div className="eyebrow hero-eyebrow"><span /> IGLESIA CRISTIANA · LEANDRO N. ALEM</div><h1>La fe se vive<br />mejor <em>juntos.</em></h1><p>Una comunidad protestante, independiente y no denominacional.<br className="desktop-break" /> Un lugar para crecer en la fe y hacer amigos.</p><div className="hero-actions"><a className="button button-light" href="#nosotros">Conocé nuestra iglesia <ArrowRight size={16} /></a><a className="text-link hero-secondary" href="#horarios">Horarios de reunión <ArrowDownRight size={16} /></a></div></div>
        <div className="hero-bottom wrap"><span>LEANDRO N. ALEM · MISIONES</span><a href="#nosotros">DESLIZÁ PARA CONOCERNOS <ArrowDown size={13} /></a></div>
      </section>

      <section className="intro section-pad" id="nosotros"><div className="wrap intro-grid"><div className="intro-image-wrap reveal"><img className="intro-image" src={photos.community} alt="Amigos compartiendo un momento en comunidad" /><span className="image-note">UN LUGAR EN LA MESA PARA VOS</span><span className="image-index">01 / 05</span></div><div className="intro-copy reveal"><div className="eyebrow"><span /> BIENVENIDOS A CASA</div><h2>Más que una iglesia,<br /><em>una familia.</em></h2><p className="intro-lead">Somos una iglesia cristiana protestante, independiente y no denominacional.</p><p>Nos reunimos en Leandro N. Alem para seguir a Jesús, crecer en la fe y compartir la vida. Seas quien seas y vengas de donde vengas, hay un lugar para vos.</p><div className="mission"><span className="mission-rule" /><div><small>NUESTRA MISIÓN</small><p>Caminar juntos. Amar sin medida. Hacer lugar.</p></div></div><a className="text-link" href="#contacto">Conocé nuestra historia <ArrowUpRight size={15} /></a></div></div></section>

      <section className="services section-pad" id="horarios"><div className="wrap"><div className="section-heading services-heading reveal"><div><div className="eyebrow"><span /> SIEMPRE HAY UN MOMENTO</div><h2>Nos encontramos<br /><em>durante la semana.</em></h2></div><p>No importa si es tu primera vez o si ya nos conocés. <strong>Te esperamos.</strong></p></div><div className="service-list reveal"><div className="service-row"><span className="service-day">DOMINGO</span><span className="service-time">09:00 <small>HS</small></span><span className="service-name">Reunión general</span><span className="service-arrow"><ArrowUpRight /></span></div><div className="service-row"><span className="service-day">DOMINGO</span><span className="service-time">19:00 <small>HS</small></span><span className="service-name">Celebración</span><span className="service-arrow"><ArrowUpRight /></span></div><div className="service-row"><span className="service-day">MIÉRCOLES</span><span className="service-time">20:00 <small>HS</small></span><span className="service-name">Reunión de oración</span><span className="service-arrow"><ArrowUpRight /></span></div></div><div className="service-location reveal"><div><MapPin size={16} /><span>Leandro N. Alem, Misiones</span></div><a className="text-link" href="#contacto">Cómo llegar <ArrowUpRight size={15} /></a></div></div></section>

      <section className="ministries section-pad" id="ministerios"><div className="wrap"><div className="section-heading ministries-heading reveal"><div><div className="eyebrow"><span /> CRECEMOS JUNTOS</div><h2>Hay un lugar<br /><em>para vos.</em></h2></div><p>Distintas historias, una misma familia.<br />Encontrá tu espacio.</p></div><div className="ministry-grid">{ministries.map((item) => <article className="ministry-card reveal" key={item.n}><a href="#contacto" className="ministry-image-link" aria-label={`Conocer más sobre ${item.title}`}><img src={item.image} alt={item.alt} /><span className="card-arrow"><ArrowUpRight size={18} /></span></a><div className="ministry-meta"><span>{item.n} — MINISTERIO</span><span>CASA DE FE</span></div><h3>{item.title}</h3><p>{item.text}</p><a className="text-link" href="#contacto">Conocer más <ArrowRight size={14} /></a></article>)}</div></div></section>

      <section className="events section-pad" id="eventos"><div className="wrap"><div className="events-top reveal"><div><div className="eyebrow"><span /> AGENDA ABIERTA</div><h2>Lo que está<br /><em>pasando.</em></h2></div><a className="text-link events-all" href="#contacto">Vení a compartir <ArrowUpRight size={15} /></a></div><div className="events-list">{events.map((event, i) => <article className="event-row reveal" key={event.title}><div className="event-date"><strong>{event.day}</strong><span>{event.month}</span></div><div className="event-content"><span className="event-time"><Clock3 size={12} /> {event.time}</span><h3>{event.title}</h3><p>{event.detail}</p></div><a className="event-link" href="#contacto" aria-label={`Más información: ${event.title}`}><ArrowUpRight size={18} /></a>{i < 2 && <span className="event-divider" />}</article>)}</div></div></section>

      <section className="sermon" id="predicaciones" style={{ "--sermon-image": `url('${photos.sermon}')` } as React.CSSProperties}><div className="sermon-overlay" /><div className="wrap sermon-inner reveal"><div className="eyebrow"><span /> UN MOMENTO PARA ESCUCHAR</div><h2>Palabras que<br /><em>transforman.</em></h2><div className="sermon-feature"><div><span className="sermon-kicker">MENSAJE RECIENTE · 08 NOV 2026</span><h3>Caminando en fe</h3><p>Pastor Martín Benítez <span>·</span> 28 min</p></div><a className="play-button" href="#contacto" aria-label="Ver mensaje Caminando en fe"><Play size={17} fill="currentColor" /></a></div><span className="sermon-caption">UNA PALABRA PARA LLEVAR CON VOS</span></div></section>

      <section className="contact section-pad" id="contacto"><div className="wrap"><div className="contact-heading reveal"><div className="eyebrow"><span /> NOS ENCANTARÍA CONOCERTE</div><h2>Hay un lugar<br /><em>para vos.</em></h2><p>La primera vez siempre se siente un poquito distinta.<br />Queremos que te sientas en casa desde el primer momento.</p></div><div className="contact-grid reveal"><div className="contact-details"><div className="contact-item"><span>ENCONTRANOS</span><p>Leandro N. Alem<br />Misiones, Argentina</p><a className="text-link" href="https://maps.google.com/?q=Leandro+N.+Alem,+Misiones,+Argentina" target="_blank" rel="noreferrer">Cómo llegar <ArrowUpRight size={14} /></a></div><div className="contact-item"><span>ESCRIBINOS</span><a href="mailto:hola@casadefe.org.ar">hola@casadefe.org.ar</a><a href="https://wa.me/5491123456789" target="_blank" rel="noreferrer">+54 9 11 2345-6789</a></div><div className="contact-item"><span>SEGUINOS</span><a href="https://instagram.com" target="_blank" rel="noreferrer">@casadefe.ba <Instagram size={14} /></a></div></div><div className="map-card"><div className="map-lines" /><div className="map-pin"><MapPin size={18} fill="currentColor" /></div><div className="map-label"><span>CASA DE FE</span><strong>Leandro N. Alem, Misiones</strong></div><a href="https://maps.google.com/?q=Leandro+N.+Alem,+Misiones,+Argentina" target="_blank" rel="noreferrer" className="map-open" aria-label="Abrir mapa"><ArrowUpRight size={16} /></a><span className="map-coords">MISIONES · ARGENTINA</span></div></div><div className="contact-cta reveal"><span>¿VENÍS POR PRIMERA VEZ?</span><a className="button button-light" href="https://wa.me/5491123456789" target="_blank" rel="noreferrer">Planificá tu visita <ArrowRight size={15} /></a></div></div></section>
    </main>

    <footer className="footer"><div className="wrap"><div className="footer-main"><div className="footer-brand-col"><Brand footer /><p>Un lugar para encontrar fe,<br />esperanza y comunidad.</p><span className="footer-welcome">SIEMPRE HAY LUGAR EN LA MESA.</span></div><div className="footer-nav-col"><span className="footer-label">EXPLORÁ</span><div className="footer-links">{links.map(([label, id]) => <a href={`#${id}`} key={id}>{label}</a>)}</div></div><div className="footer-social-col"><span className="footer-label">SEGUINOS</span><a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram <ArrowUpRight size={13} /></a><a href="https://youtube.com" target="_blank" rel="noreferrer">YouTube <ArrowUpRight size={13} /></a></div><div className="footer-visit-col"><span className="footer-label">VENÍ A CASA</span><p>Domingos · 09:00 y 19:00 hs<br />Leandro N. Alem, Misiones</p><a className="text-link" href="#contacto">Cómo llegar <ArrowUpRight size={14} /></a></div></div><div className="footer-bottom"><span>© 2026 CASA DE FE · LEANDRO N. ALEM, MISIONES</span><span>HECHO CON AMOR, PARA COMPARTIR.</span><a href="#inicio">VOLVER ARRIBA ↑</a></div></div></footer>
  </>;
}

