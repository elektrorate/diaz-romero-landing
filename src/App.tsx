import { useEffect, useState, type FormEvent } from 'react';
import {
  ArrowDown,
  ArrowRight,
  Check,
  ChevronDown,
  FileText,
  Globe2,
  Handshake,
  Mail,
  MapPin,
  Menu,
  Phone,
  Scale,
  ShieldCheck,
  X,
} from 'lucide-react';

const brandHeader = '/assets/brand-header.jpg';
const patrimonyDetail = '/assets/patrimony-detail.jpg';
const legalDetail = '/assets/legal-detail.jpg';
const phoneUs = '+17869403621';
const phonePe = '+51997930932';
const email = 'diazyromerosolucionespatrimonialesperu@gmail.com';

const services = [
  ['01', 'Saneamiento físico y legal', 'Ordenamos la realidad de su inmueble para que vuelva a tener respaldo y valor.'],
  ['02', 'Sucesiones intestadas y declaratoria de herederos', 'Acompañamos a su familia a reconocer y proteger lo que le corresponde.'],
  ['03', 'División y partición de bienes', 'Convertimos una situación compartida en acuerdos claros y ejecutables.'],
  ['04', 'Conflictos familiares y copropiedad', 'Intervenimos con criterio legal y humano cuando el patrimonio divide.'],
  ['05', 'Regularización de documentación registral', 'Revisamos, corregimos y encaminamos sus documentos ante los registros.'],
  ['06', 'Obtención de certificados de Estados Unidos', 'Gestionamos los certificados necesarios para que el trámite avance en Perú.'],
  ['07', 'Gestión legal para venta de inmuebles', 'Vendemos con la documentación lista, sin viajes innecesarios ni sorpresas.'],
  ['08', 'Asesoría legal para compra de propiedades en Perú', 'Verificamos antes de que usted comprometa su inversión y su tranquilidad.'],
];

const faqs = [
  ['¿Puedo iniciar el trámite sin viajar a Perú?', 'Sí. Diseñamos el proceso para personas que viven en Estados Unidos: coordinamos la revisión, documentos y gestiones en Perú, con atención virtual y seguimiento personalizado.'],
  ['¿Qué pasa si mi propiedad no está inscrita o tiene documentos pendientes?', 'Empezamos por un diagnóstico. Identificamos qué falta, qué debe corregirse y trazamos el camino legal y registral más seguro para su caso.'],
  ['¿Atienden sucesiones cuando los herederos están en distintos países?', 'Sí. Organizamos la información familiar y documental, coordinamos con los herederos y explicamos cada paso para que todos puedan decidir con claridad.'],
  ['¿Cómo es la primera consulta?', 'Conversamos sobre su situación, revisamos la información esencial y le explicamos las alternativas. Puede escribirnos o llamarnos directamente desde Estados Unidos o Perú.'],
];

const processSteps = [
  ['01', 'Nos cuenta', 'Escuchamos su situación y el objetivo que quiere alcanzar.'],
  ['02', 'Revisamos', 'Estudiamos documentos, antecedentes y riesgos del caso.'],
  ['03', 'Trazamos', 'Le presentamos una ruta concreta, con prioridades y tiempos.'],
  ['04', 'Gestionamos', 'Nos encargamos del proceso en Perú y le mantenemos al tanto.'],
];

function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const elements = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  const closeMenu = () => setMenuOpen(false);
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="site-shell noise">
      <header className="fixed top-0 left-0 right-0 z-40 border-b border-[hsl(var(--border)/.65)] bg-[hsl(var(--background)/.93)] backdrop-blur-md">
        <div className="container-wide relative flex h-[72px] items-center justify-between">
          <a href="#inicio" className="flex items-center gap-3 no-underline" onClick={closeMenu} data-testid="link-brand">
            <span className="brand-crop h-10 w-[132px] sm:w-[190px]">
              <img src={brandHeader} alt="Díaz & Romero, Soluciones Patrimoniales Perú – EE. UU." className="brand-header-image" />
            </span>
          </a>
          <nav className="desktop-nav flex items-center gap-7" aria-label="Navegación principal">
            <a className="nav-link" href="#servicios" data-testid="link-services">Servicios</a>
            <a className="nav-link" href="#proceso" data-testid="link-process">Cómo trabajamos</a>
            <a className="nav-link" href="#equipo" data-testid="link-team">El equipo</a>
            <a className="nav-link" href="#preguntas" data-testid="link-faq">Preguntas</a>
            <a className="gold-button ml-1" href="#contacto" data-testid="link-nav-contact">Conversemos <ArrowRight size={14} /></a>
          </nav>
          <button className="grid h-10 w-10 place-items-center border border-[hsl(var(--border))] text-[hsl(var(--primary))] sm:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'} data-testid="button-mobile-menu">
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
          {menuOpen && <nav className="mobile-menu" aria-label="Menú móvil">
            <a href="#servicios" onClick={closeMenu} data-testid="link-mobile-services">Servicios</a>
            <a href="#proceso" onClick={closeMenu} data-testid="link-mobile-process">Cómo trabajamos</a>
            <a href="#equipo" onClick={closeMenu} data-testid="link-mobile-team">El equipo</a>
            <a href="#preguntas" onClick={closeMenu} data-testid="link-mobile-faq">Preguntas frecuentes</a>
            <a href="#contacto" onClick={closeMenu} data-testid="link-mobile-contact">Solicitar orientación</a>
          </nav>}
        </div>
      </header>

      <main>
        <section id="inicio" className="relative pt-[72px]">
          <div className="container-wide hero-grid min-h-[720px] py-20 lg:min-h-[800px]">
            <div className="reveal">
              <span className="eyebrow">Su patrimonio, al otro lado del mapa</span>
              <h1 className="mt-7 max-w-[670px] font-display text-[clamp(49px,7vw,88px)] font-semibold leading-[.94] tracking-[-.055em] text-[hsl(var(--primary))]">
                Lo que es suyo<br /><em className="text-[hsl(var(--accent))] not-italic">merece estar</em><br />en buenas manos.
              </h1>
              <p className="mt-8 max-w-[535px] text-[16px] leading-[1.7] text-[hsl(var(--muted-foreground))]">
                Asesoría legal patrimonial para peruanos que viven en Estados Unidos. Resolvemos en Perú lo que usted necesita proteger, regularizar o hacer crecer, sin dejar su vida en pausa.
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <a className="gold-button" href="#contacto" data-testid="link-hero-contact">Solicitar orientación <ArrowRight size={15} /></a>
                <a className="outline-button" href={`tel:${phoneUs}`} data-testid="link-hero-phone"><Phone size={14} /> +1 786 940 3621</a>
              </div>
              <div className="mt-12 flex items-center gap-3 text-[11px] text-[hsl(var(--muted-foreground))]">
                <ShieldCheck size={18} className="text-[hsl(var(--accent))]" />
                <span>Atención virtual, personalizada y con seguimiento de principio a fin.</span>
              </div>
            </div>

            <div className="hero-art reveal delay-2" aria-label="Identidad visual y detalle patrimonial">
              <div className="hero-composition">
                <div className="brand-plaque">
                  <div className="brand-crop">
                    <img src={brandHeader} alt="" className="brand-header-image" />
                  </div>
                  <div className="brand-caption"><span>Perú — Estados Unidos</span><span>Desde 2018</span></div>
                </div>
                <figure className="hero-photo">
                  <img src={patrimonyDetail} alt="Escritura pública, llaves y mapa del Perú" />
                </figure>
                <div className="art-stamp">Perú<br /><span className="text-[hsl(var(--accent))]">↔</span><br />EE. UU.<small>cerca, siempre</small></div>
                <div className="hero-corner"><Handshake size={17} /> Su proceso en Perú.<br />Usted, en Estados Unidos.</div>
              </div>
            </div>
          </div>
          <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 items-center gap-3 font-mono text-[9px] tracking-[.16em] text-[hsl(var(--muted-foreground))] lg:flex"><ArrowDown size={13} /> DESCUBRA NUESTRO ACOMPAÑAMIENTO</div>
        </section>

        <section className="trust-band" aria-label="Alcance de la firma">
          <div className="container-wide trust-items">
            <div className="trust-item"><Globe2 size={23} className="text-[hsl(var(--accent))]" /><div><div className="trust-number">2 países</div><div className="trust-label">Una misma mirada<br />para su patrimonio</div></div></div>
            <div className="trust-item"><div><div className="trust-number">08</div><div className="trust-label">áreas de asesoría<br />especializada</div></div></div>
            <div className="trust-item"><div><div className="trust-number">1:1</div><div className="trust-label">atención directa<br />y personalizada</div></div></div>
            <div className="trust-item"><div><div className="trust-number">0</div><div className="trust-label">viajes obligatorios<br />para empezar</div></div></div>
          </div>
        </section>

        <section id="servicios" className="section-pad">
          <div className="container-wide">
            <div className="section-heading reveal">
              <span className="eyebrow">Lo que resolvemos</span>
              <h2>Un solo equipo para todo el recorrido de su propiedad.</h2>
              <p>Desde una primera revisión documental hasta la firma que cierra una venta. Le damos orden a cada paso y claridad a cada decisión.</p>
            </div>
            <div className="services-layout mt-16">
              <div className="service-hero reveal delay-1">
                <Scale className="seal" size={42} strokeWidth={1} />
                <span className="font-mono text-[9px] font-bold tracking-[.14em] text-[hsl(var(--accent))]">ASESORÍA PATRIMONIAL</span>
                <h3>Su distancia no tiene por qué convertirse en un riesgo.</h3>
                <p>Conocemos las preguntas que aparecen cuando una propiedad, una herencia o una copropiedad se quedan en Perú mientras la familia construye su vida en otro país.</p>
              </div>
              <div className="service-list reveal delay-2">
                {services.map(([number, title, description]) => <div className="service-row" key={number} data-testid={`service-row-${number}`}>
                  <span className="service-index">{number}</span>
                  <div><h4>{title}</h4><p>{description}</p></div>
                  <ArrowRight size={16} className="text-[hsl(var(--accent))]" />
                </div>)}
              </div>
            </div>
            <div className="editorial-strip reveal delay-2">
              <div className="editorial-thumb"><img src={legalDetail} alt="Detalle de servicios legales y contacto de la firma" /></div>
              <div className="editorial-note"><strong>Documentos claros. Decisiones tranquilas.</strong><span>Le ayudamos a leer lo importante antes de firmar, vender, heredar o invertir.</span></div>
            </div>
          </div>
        </section>

        <section id="proceso" className="process-section section-pad">
          <div className="container-wide">
            <div className="section-heading reveal">
              <span className="eyebrow">Así lo hacemos</span>
              <h2>De la incertidumbre a un plan que sí puede seguir.</h2>
              <p>La distancia se vuelve manejable cuando cada documento tiene un lugar y cada conversación, un siguiente paso.</p>
            </div>
            <div className="process-grid reveal delay-1">
              {processSteps.map(([number, title, description]) => <div className="process-card" key={number} data-testid={`process-card-${number}`}><span className="process-num">{number}</span><h3>{title}</h3><p>{description}</p></div>)}
            </div>
            <div className="process-feature reveal delay-2">
              <div className="process-feature-image"><img src={legalDetail} alt="Detalle de servicios y promesa de gestión legal en Perú" /></div>
              <div className="process-feature-copy"><FileText size={27} /><p><strong>Una ruta visible en cada etapa.</strong><br />Le informamos qué estamos haciendo, qué necesitamos de usted y cuál es el siguiente movimiento, mientras su vida continúa en Estados Unidos.</p></div>
            </div>
            <div className="bridge-note reveal delay-2"><strong>Usted permanece en Estados Unidos.</strong><span>Nosotros nos ocupamos de que su patrimonio esté presente en Perú.</span><Globe2 className="text-[hsl(var(--accent))]" size={25} /></div>
          </div>
        </section>

        <section id="equipo" className="section-pad">
          <div className="container-wide people-layout">
            <div className="reveal">
              <span className="eyebrow">Las personas detrás del proceso</span>
              <div className="people-quote mt-9">Un patrimonio no es solo un registro. Es la historia que una familia quiere <em>cuidar.</em></div>
              <p className="people-copy">Por eso nuestra atención no termina en una respuesta. Yraza Díaz y Marlene Romero trabajan de manera cercana, explicando lo complejo en palabras claras y acompañando cada decisión con criterio profesional.</p>
              <a href="#contacto" className="dark-button mt-8" data-testid="link-team-contact">Hablar con el equipo <ArrowRight size={15} /></a>
            </div>
            <div className="attorney-grid reveal delay-1">
              <article className="attorney-card" data-testid="card-attorney-yraza">
                <span className="attorney-monogram">YD</span><div className="attorney-line" /><h3>Yraza Díaz</h3><span>Abogada · Soluciones patrimoniales</span><p>Mirada estratégica para ordenar, proteger y hacer valer sus bienes en Perú.</p>
              </article>
              <article className="attorney-card" data-testid="card-attorney-marlene">
                <span className="attorney-monogram">MR</span><div className="attorney-line" /><h3>Marlene Romero</h3><span>Abogada · Soluciones patrimoniales</span><p>Acompañamiento cercano para que cada trámite tenga sentido para su familia.</p>
              </article>
            </div>
          </div>
        </section>

        <section id="preguntas" className="section-pad border-t border-[hsl(var(--border))]">
          <div className="container-wide faq-grid">
            <div className="section-heading reveal"><span className="eyebrow">Antes de empezar</span><h2>Las preguntas que suelen aparecer primero.</h2><p>Si la suya no está aquí, escríbanos. Una conversación breve puede darle el punto de partida que necesita.</p><a href="#contacto" className="outline-button mt-7" data-testid="link-faq-contact">Hacer otra pregunta <ArrowRight size={14} /></a></div>
            <div className="faq-list reveal delay-1">
              {faqs.map(([question, answer], index) => <div className="faq-item" key={question}>
                <button className={`faq-question ${openFaq === index ? 'open' : ''}`} onClick={() => setOpenFaq(openFaq === index ? null : index)} aria-expanded={openFaq === index} data-testid={`button-faq-${index}`}><span>{question}</span><ChevronDown size={19} /></button>
                {openFaq === index && <div className="faq-answer" data-testid={`text-faq-answer-${index}`}>{answer}</div>}
              </div>)}
            </div>
          </div>
        </section>

        <section id="contacto" className="contact-section section-pad">
          <div className="container-wide contact-layout">
            <div className="reveal">
              <span className="eyebrow">Empecemos por su caso</span>
              <h2 className="mt-6 max-w-[510px] font-display text-[clamp(42px,5vw,68px)] font-semibold leading-[.98] tracking-[-.045em] text-[hsl(var(--primary))]">Ponga su patrimonio en orden, desde donde esté.</h2>
              <p className="mt-6 max-w-[420px] text-[15px] leading-[1.65] text-[hsl(var(--muted-foreground))]">Cuéntenos brevemente qué necesita resolver. Le responderemos para coordinar una primera orientación virtual.</p>
              <div className="contact-details">
                <a className="contact-link" href={`tel:${phoneUs}`} data-testid="link-contact-us"><Phone size={17} /><span><small>Estados Unidos</small>+1 786 940 3621</span></a>
                <a className="contact-link" href={`tel:${phonePe}`} data-testid="link-contact-peru"><Phone size={17} /><span><small>Perú</small>+51 997 930 932</span></a>
                <a className="contact-link" href={`mailto:${email}`} data-testid="link-contact-email"><Mail size={17} /><span><small>Correo electrónico</small>{email}</span></a>
                <a className="contact-link" href="https://wa.me/17869403621" target="_blank" rel="noreferrer" data-testid="link-contact-whatsapp"><Handshake size={17} /><span><small>Mensajería directa</small>Escribir por WhatsApp</span></a>
              </div>
            </div>
            <form className="contact-form reveal delay-1" onSubmit={handleSubmit} data-testid="form-contact">
              {submitted ? <div className="form-success" data-testid="status-form-success"><Check size={18} className="mb-2" /><strong className="block">Gracias por escribirnos.</strong> Hemos recibido su consulta. Puede llamarnos directamente si necesita una respuesta inmediata.</div> : <>
                <h3>Cuéntenos qué necesita.</h3>
                <div className="form-grid">
                  <div className="form-field"><label htmlFor="name">Nombre</label><input id="name" name="name" required placeholder="Su nombre" data-testid="input-name" /></div>
                  <div className="form-field"><label htmlFor="email">Correo</label><input id="email" name="email" type="email" required placeholder="correo@ejemplo.com" data-testid="input-email" /></div>
                  <div className="form-field"><label htmlFor="phone">Teléfono</label><input id="phone" name="phone" placeholder="+1 ..." data-testid="input-phone" /></div>
                  <div className="form-field"><label htmlFor="location">¿Dónde se encuentra?</label><input id="location" name="location" placeholder="Estados Unidos / Perú" data-testid="input-location" /></div>
                  <div className="form-field full"><label htmlFor="message">¿Qué desea resolver?</label><textarea id="message" name="message" required placeholder="Cuéntenos sobre su propiedad, herencia o trámite..." data-testid="input-message" /></div>
                </div>
                <button className="gold-button mt-6 w-full" type="submit" data-testid="button-submit-contact">Enviar solicitud <ArrowRight size={15} /></button>
                <p className="mt-4 text-center text-[10px] leading-[1.5] text-[hsl(var(--muted-foreground))]">Sus datos se utilizarán únicamente para responder a su consulta.</p>
              </>}
            </form>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container-wide">
          <div className="footer-grid">
            <div>
              <div className="brand-crop h-[47px] w-[250px]"><img src={brandHeader} alt="Díaz & Romero" className="brand-header-image" /></div>
              <p className="mt-5 max-w-[280px]">El proceso en Perú, la tranquilidad de saber que alguien está pendiente.</p>
            </div>
            <div><h4>Explorar</h4><a href="#servicios" data-testid="link-footer-services">Servicios</a><br /><a href="#proceso" data-testid="link-footer-process">Cómo trabajamos</a><br /><a href="#equipo" data-testid="link-footer-team">Nuestro equipo</a></div>
            <div><h4>Contacto</h4><a href={`tel:${phoneUs}`} data-testid="link-footer-us">EE. UU. +1 786 940 3621</a><br /><a href={`tel:${phonePe}`} data-testid="link-footer-pe">Perú +51 997 930 932</a><br /><a href={`mailto:${email}`} data-testid="link-footer-email">Escribir por correo</a></div>
          </div>
          <div className="footer-bottom"><span>© {new Date().getFullYear()} Díaz &amp; Romero. Todos los derechos reservados.</span><span className="flex items-center gap-2"><MapPin size={12} /> Perú · Estados Unidos</span></div>
        </div>
      </footer>
      <button className="fixed bottom-5 right-5 z-30 grid h-12 w-12 place-items-center rounded-full bg-[hsl(var(--accent))] text-[hsl(var(--primary))] shadow-[0_10px_25px_rgba(28,43,64,.18)] transition-transform hover:-translate-y-1" onClick={() => scrollToId('contacto')} aria-label="Ir a contacto" data-testid="button-floating-contact"><Mail size={19} /></button>
    </div>
  );
}

export default App;