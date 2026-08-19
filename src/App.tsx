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

const brandHeader = `${import.meta.env.BASE_URL}logo-chemita.png`;
const heroImage = `${import.meta.env.BASE_URL}las2.png`;
const attorneyYracema = `${import.meta.env.BASE_URL}yracema.png`;
const attorneyMarlene = `${import.meta.env.BASE_URL}marlene.png`;

const attorneys = [
  {
    name: 'Yracema Díaz',
    photo: attorneyYracema,
    role: 'Abogada · Soluciones patrimoniales',
    short: 'Mirada estratégica para ordenar, proteger y hacer valer sus bienes en Perú.',
    bio: 'Abogada titulada y colegiada, con más de 20 años de experiencia en derecho previsional y una sólida trayectoria en Derecho Civil, Familia, Administrativo y Municipal. Especialista en litigios vinculados a pensiones y sucesiones, cuenta además con formación en gestión pública, derecho penal, conciliación y arbitraje. Actualmente se desempeña como Gerente General del Estudio Jurídico La Gaceta del Jubilado, con presencia a nivel nacional y más de 10.000 casos ganados.',
  },
  {
    name: 'Marlene Romero',
    photo: attorneyMarlene,
    role: 'Abogada · Soluciones patrimoniales',
    short: 'Acompañamiento cercano para que cada trámite tenga sentido para su familia.',
    bio: 'Abogada titulada y colegiada, con sólida experiencia en Derecho Penal y Procesal Penal, especializada en la defensa y asesoría jurídica en procesos penales, elaboración de estrategias legales y representación de clientes en las distintas etapas del procedimiento. Cuenta con formación complementaria mediante diplomados, cursos de especialización y actualización profesional en materia penal, procesal y litigación, orientando su práctica a una defensa rigurosa, estratégica y personalizada.',
  },
] as const;
const phoneUs = '+17869403621';
const phonePe = '+51997930932';
const phoneEs = '+34645690324';
const whatsapp = '51997930932';
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

const serviceDetails = [
  'Ordenamos la situación física y jurídica de su inmueble para que cuente con documentación clara, actualizada y consistente. Revisamos posibles diferencias entre la realidad del predio y lo inscrito, detectamos observaciones y planteamos las acciones necesarias para regularizarlo. El objetivo es que su propiedad vuelva a tener respaldo legal, seguridad y mejores condiciones para venderse, heredarse, dividirse o utilizarse como parte de una operación patrimonial.',
  'Cuando una persona fallece sin testamento, acompañamos a la familia durante el proceso legal necesario para determinar quiénes son sus herederos y formalizar sus derechos. Revisamos la documentación, preparamos el expediente y coordinamos las gestiones notariales o registrales correspondientes. Buscamos que el patrimonio pueda ser transferido de manera ordenada, evitando retrasos, conflictos innecesarios y dificultades posteriores para disponer de los bienes heredados.',
  'Cuando un inmueble o patrimonio pertenece a varias personas, ayudamos a transformar esa copropiedad en una solución clara y jurídicamente viable. Analizamos la situación de cada propietario, las características de los bienes y las alternativas disponibles para llegar a una división, adjudicación o acuerdo. Nuestro objetivo es establecer derechos definidos y facilitar que cada parte pueda disponer de lo que legítimamente le corresponde.',
  'Los conflictos patrimoniales entre familiares requieren tanto conocimiento legal como capacidad para encontrar soluciones viables. Intervenimos en situaciones de desacuerdo relacionadas con herencias, inmuebles, copropiedades o administración de bienes, buscando ordenar posiciones y proteger los derechos de cada parte. Trabajamos para alcanzar acuerdos cuando sea posible y establecer una estrategia legal clara cuando el conflicto requiere una actuación más formal.',
  'Revisamos la documentación relacionada con su propiedad para detectar errores, omisiones, inconsistencias o situaciones que puedan impedir la realización de un trámite. Gestionamos las correcciones y procedimientos necesarios ante registros, notarías y otras entidades correspondientes. El objetivo es que la información jurídica del inmueble sea correcta y esté actualizada, permitiendo realizar futuras operaciones con mayor seguridad y evitando observaciones que puedan retrasar una venta, sucesión o transferencia.',
  'Gestionamos la obtención de certificados y documentos emitidos en Estados Unidos que sean necesarios para realizar trámites legales o patrimoniales en Perú. Orientamos sobre el documento requerido, su solicitud, certificación, apostilla y demás formalidades cuando correspondan. Coordinamos el proceso para reducir desplazamientos y facilitar que la documentación llegue correctamente preparada para ser utilizada ante autoridades, notarías o registros peruanos.',
  'Preparamos jurídicamente su inmueble antes de iniciar o cerrar una operación de venta. Revisamos títulos, antecedentes registrales, documentación pendiente y posibles observaciones que puedan afectar la transferencia. Si el propietario se encuentra fuera del Perú, coordinamos también poderes y documentos necesarios para facilitar el proceso. Buscamos que la operación avance con seguridad, con la documentación preparada y evitando viajes, retrasos o inconvenientes de última hora.',
  'Antes de comprometer su dinero en la compra de una propiedad, revisamos la situación legal del inmueble y de quien lo vende. Analizamos antecedentes registrales, cargas, gravámenes, titularidad y documentación relevante para detectar posibles riesgos. También acompañamos la revisión contractual y el proceso de transferencia. Nuestro objetivo es que usted tome una decisión informada y realice su inversión con mayor seguridad jurídica y tranquilidad.',
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
  const [openService, setOpenService] = useState<number | null>(null);
  const [openAttorney, setOpenAttorney] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (openService === null) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpenService(null); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [openService]);

  useEffect(() => {
    if (openAttorney === null) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpenAttorney(null); };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => { document.body.style.overflow = ''; window.removeEventListener('keydown', onKey); };
  }, [openAttorney]);

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
      <header className="fixed top-0 left-0 right-0 z-40 bg-[hsl(var(--background)/.93)] backdrop-blur-md">
        <div className="container-wide relative flex h-[180px] items-center justify-between">
          <a href="#inicio" className="flex items-center gap-3 no-underline" onClick={closeMenu} data-testid="link-brand">
            <span className="brand-crop h-[120px] translate-y-[12px] max-sm:h-[84px] max-sm:-translate-y-[17px]">
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
                <img src={heroImage} alt="Díaz & Romero — Soluciones Patrimoniales Perú – EE. UU." />
              </div>
            </div>
          </div>
          <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 items-center gap-3 font-mono text-[9px] tracking-[.16em] text-[hsl(var(--muted-foreground))] lg:flex"><ArrowDown size={13} /> DESCUBRA NUESTRO ACOMPAÑAMIENTO</div>
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
                {services.map(([number, title, description], idx) => <button type="button" className="service-row" key={number} onClick={() => setOpenService(idx)} data-testid={`service-row-${number}`}>
                  <span className="service-index">{number}</span>
                  <div><h4>{title}</h4><p>{description}</p></div>
                  <ArrowRight size={16} className="text-[hsl(var(--accent))]" />
                </button>)}
              </div>
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
            <div className="bridge-note reveal delay-2"><strong>Usted permanece en Estados Unidos.</strong><span>Nosotros nos ocupamos de que su patrimonio esté presente en Perú.</span><Globe2 className="text-[hsl(var(--accent))]" size={25} /></div>
          </div>
        </section>

        <section id="equipo" className="section-pad">
          <div className="container-wide people-layout">
            <div className="reveal">
              <span className="eyebrow">Las personas detrás del proceso</span>
              <div className="people-quote mt-9">Un patrimonio no es solo un registro. Es la historia que una familia quiere <em>cuidar.</em></div>
              <p className="people-copy">Por eso nuestra atención no termina en una respuesta. Yracema Díaz y Marlene Romero trabajan de manera cercana, explicando lo complejo en palabras claras y acompañando cada decisión con criterio profesional.</p>
              <a href="#contacto" className="dark-button mt-8" data-testid="link-team-contact">Hablar con el equipo <ArrowRight size={15} /></a>
            </div>
            <div className="attorney-grid reveal delay-1">
              {attorneys.map((attorney, index) => (
                <article className="attorney-card" key={attorney.name} data-testid={`card-attorney-${index === 0 ? 'yraza' : 'marlene'}`}>
                  <img src={attorney.photo} alt={attorney.name} className="attorney-photo" />
                  <div className="attorney-card-body">
                    <div className="attorney-line" />
                    <h3>{attorney.name}</h3>
                    <span>{attorney.role}</span>
                    <p>{attorney.short}</p>
                    <button className="attorney-toggle" onClick={() => setOpenAttorney(index)} data-testid={`button-attorney-toggle-${index}`}>
                      <span>Leer más</span><ArrowRight size={16} />
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {openAttorney !== null && (() => {
            const attorney = attorneys[openAttorney];
            return (
              <div className="modal-overlay" onClick={() => setOpenAttorney(null)} role="dialog" aria-modal="true" aria-label={`Perfil de ${attorney.name}`} data-testid="attorney-modal">
                <div className="attorney-modal" onClick={(e) => e.stopPropagation()}>
                  <button className="modal-close" onClick={() => setOpenAttorney(null)} aria-label="Cerrar" data-testid="button-close-modal"><X size={18} /></button>
                  <div className="attorney-modal-copy">
                    <span className="eyebrow">Perfil profesional</span>
                    <h3>{attorney.name}</h3>
                    <span className="attorney-modal-role">{attorney.role}</span>
                    <p className="attorney-modal-bio" data-testid={`text-attorney-bio-${openAttorney}`}>{attorney.bio}</p>
                  </div>
                  <div className="attorney-modal-photo">
                    <img src={attorney.photo} alt={attorney.name} />
                  </div>
                </div>
              </div>
            );
          })()}
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
                <a className="contact-link" href={`tel:${phoneEs}`} data-testid="link-contact-spain"><Phone size={17} /><span><small>España</small>+34 645 690 324</span></a>
                <a className="contact-link" href={`mailto:${email}`} data-testid="link-contact-email"><Mail size={17} /><span><small>Correo electrónico</small>{email}</span></a>
                <a className="contact-link" href={`https://wa.me/${whatsapp}`} target="_blank" rel="noreferrer" data-testid="link-contact-whatsapp"><Handshake size={17} /><span><small>Mensajería directa</small>Escribir por WhatsApp</span></a>
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

      {openService !== null && <div className="service-modal" onClick={() => setOpenService(null)} role="dialog" aria-modal="true" aria-label={services[openService][1]}>
        <div className="service-modal-panel" onClick={(e) => e.stopPropagation()}>
          <button type="button" className="service-modal-close" onClick={() => setOpenService(null)} aria-label="Cerrar" data-testid="button-service-close"><X size={20} /></button>
          <span className="service-index">{services[openService][0]}</span>
          <h3>{services[openService][1]}</h3>
          <p>{serviceDetails[openService]}</p>
        </div>
      </div>}

      <footer className="footer">
        <div className="container-wide">
          <div className="footer-grid">
            <div>
              <div className="brand-crop h-[47px]"><img src={brandHeader} alt="Díaz & Romero" className="brand-header-image" /></div>
              <p className="mt-5 max-w-[280px]">El proceso en Perú, la tranquilidad de saber que alguien está pendiente.</p>
            </div>
            <div><h4>Explorar</h4><a href="#servicios" data-testid="link-footer-services">Servicios</a><br /><a href="#proceso" data-testid="link-footer-process">Cómo trabajamos</a><br /><a href="#equipo" data-testid="link-footer-team">Nuestro equipo</a></div>
            <div><h4>Contacto</h4><a href={`tel:${phoneUs}`} data-testid="link-footer-us">EE. UU. +1 786 940 3621</a><br /><a href={`tel:${phonePe}`} data-testid="link-footer-pe">Perú +51 997 930 932</a><br /><a href={`tel:${phoneEs}`} data-testid="link-footer-es">España +34 645 690 324</a><br /><a href={`mailto:${email}`} data-testid="link-footer-email">Escribir por correo</a></div>
          </div>
          <div className="footer-bottom"><span>© {new Date().getFullYear()} Díaz &amp; Romero. Todos los derechos reservados.</span><span className="flex items-center gap-2"><MapPin size={12} /> Perú · Estados Unidos</span></div>
        </div>
      </footer>
      <button className="fixed bottom-24 right-5 z-30 grid h-12 w-12 place-items-center rounded-full bg-[hsl(var(--accent))] text-[hsl(var(--primary))] shadow-[0_10px_25px_rgba(28,43,64,.18)] transition-transform hover:-translate-y-1" onClick={() => scrollToId('contacto')} aria-label="Ir a contacto" data-testid="button-floating-contact"><Mail size={19} /></button>
      <a className="whatsapp-float" href={`https://wa.me/${whatsapp}`} target="_blank" rel="noreferrer" aria-label="Escribir por WhatsApp" data-testid="link-whatsapp-float"><WhatsAppIcon size={26} /></a>
    </div>
  );
}

function WhatsAppIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413" />
    </svg>
  );
}

export default App;