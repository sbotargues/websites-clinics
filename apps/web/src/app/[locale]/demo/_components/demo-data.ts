import type { DemoContent } from "./types";

export const demoContents: Record<string, DemoContent> = {
  "1": {
    clinicName: "🦷 Clínica Sonrisa",
    location: "Valencia · Eixample",
    phone: "961 234 567",
    email: "info@clinicasonrisa.es",
    address: "Calle Colón 28, 46004 Valencia",
    hours: "L-V 9:00–20:00 · S 9:00–14:00",
    heroTitle: "Tu sonrisa merece los mejores profesionales",
    heroSubtitle:
      "Más de 15 años cuidando sonrisas en Valencia. Odontología general, implantes, ortodoncia y estética dental.",
    heroCta: "Reservar Cita",
    heroCtaSecondary: "Ver Servicios",
    heroImage:
      "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&h=600&fit=crop",
    servicesTitle: "Nuestros Servicios",
    services: [
      { icon: "🦷", title: "Odontología General", desc: "Revisiones, limpiezas y tratamientos preventivos para toda la familia." },
      { icon: "✨", title: "Estética Dental", desc: "Blanqueamiento, carillas y diseño de sonrisa para un resultado natural." },
      { icon: "🔧", title: "Implantes", desc: "Implantes de titanio de última generación con garantía de por vida." },
      { icon: "😁", title: "Ortodoncia", desc: "Brackets e Invisalign para adultos y niños. Primera consulta gratis." },
      { icon: "👶", title: "Odontopediatría", desc: "Cuidado dental especializado para los más pequeños de la casa." },
      { icon: "🏥", title: "Urgencias", desc: "Atención de urgencias dentales el mismo día. Llámanos." },
    ],
    teamTitle: "Nuestro Equipo",
    team: [
      {
        name: "Dra. María López",
        role: "Directora Médica",
        specialty: "Implantología",
        image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop&crop=face",
      },
      {
        name: "Dr. Carlos Ruiz",
        role: "Odontólogo",
        specialty: "Ortodoncia",
        image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop&crop=face",
      },
      {
        name: "Dra. Ana Martín",
        role: "Odontóloga",
        specialty: "Estética Dental",
        image: "https://images.unsplash.com/photo-1614608682850-e0d6ed316d47?w=400&h=400&fit=crop&crop=face",
      },
    ],
    contactTitle: "Contacta con nosotros",
    contactSubtitle: "Rellena el formulario o llámanos directamente. Te respondemos en menos de 24h.",
  },

  "2": {
    clinicName: "Dental Mediterráneo",
    location: "Barcelona · Eixample",
    phone: "932 123 456",
    email: "hola@dentalmediterraneo.es",
    address: "Carrer de Balmes 42, 08007 Barcelona",
    hours: "L-V 9:00–20:00 · S 9:00–14:00",
    heroTitle: "Odontología de confianza en el corazón de Barcelona",
    heroSubtitle:
      "Tecnología de vanguardia, trato cercano y resultados que hablan por sí solos. Tu primera consulta es gratuita.",
    heroCta: "Primera Consulta Gratis",
    heroCtaSecondary: "Ver Servicios",
    heroImage:
      "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800&h=600&fit=crop",
    stats: [
      { value: "+2.500", label: "Pacientes" },
      { value: "18", label: "Años" },
      { value: "4.9★", label: "Google" },
    ],
    servicesTitle: "Servicios Especializados",
    servicesSubtitle: "Ofrecemos tratamientos integrales con las últimas tecnologías.",
    services: [
      { icon: "🦷", title: "Odontología General", desc: "Revisiones, limpiezas, empastes y tratamientos preventivos." },
      { icon: "💎", title: "Estética Dental", desc: "Blanqueamiento láser, carillas de porcelana, diseño de sonrisa." },
      { icon: "🔩", title: "Implantología", desc: "Implantes Straumann con cirugía guiada por ordenador." },
      { icon: "😁", title: "Ortodoncia", desc: "Invisalign, brackets estéticos y ortodoncia lingual." },
      { icon: "🔬", title: "Endodoncia", desc: "Tratamiento de conductos con microscopio de alta precisión." },
      { icon: "🦴", title: "Periodoncia", desc: "Tratamiento de encías y regeneración ósea." },
      { icon: "👶", title: "Odontopediatría", desc: "Atención dental especializada para niños en un ambiente amable." },
      { icon: "😴", title: "Sedación Consciente", desc: "Para pacientes con miedo al dentista. Sin dolor ni ansiedad." },
    ],
    teamTitle: "Equipo Médico",
    team: [
      { name: "Dr. Jordi Puig", role: "Director", specialty: "Implantología", image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=400&h=400&fit=crop&crop=face" },
      { name: "Dra. Laura Vidal", role: "Ortodoncista", specialty: "Invisalign", image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=400&h=400&fit=crop&crop=face" },
      { name: "Dr. Marc Serra", role: "Endodoncista", specialty: "Estética", image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&h=400&fit=crop&crop=face" },
      { name: "Dra. Marta Font", role: "Odontopediatra", specialty: "Infantil", image: "https://images.unsplash.com/photo-1643297654416-05795d62e39c?w=400&h=400&fit=crop&crop=face" },
    ],
    testimonialsTitle: "Lo que dicen nuestros pacientes",
    testimonials: [
      { text: "Después de años con miedo al dentista, encontré aquí un equipo que me dio confianza desde el primer día.", name: "Ana G.", rating: "⭐⭐⭐⭐⭐", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop&crop=face" },
      { text: "Me hicieron los implantes con cirugía guiada. Sin dolor, sin hinchazón y en un solo día.", name: "Pedro M.", rating: "⭐⭐⭐⭐⭐", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face" },
      { text: "Mis hijos ya no tienen miedo de ir al dentista. La Dra. Marta es espectacular con los niños.", name: "Laura R.", rating: "⭐⭐⭐⭐⭐", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face" },
    ],
    galleryTitle: "Nuestra Clínica",
    galleryItems: [
      { label: "Recepción", image: "https://images.unsplash.com/photo-1629909615184-74f495363b67?w=600&h=400&fit=crop" },
      { label: "Sala de espera", image: "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=600&h=400&fit=crop" },
      { label: "Gabinete", image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=400&h=400&fit=crop" },
      { label: "Equipo", image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=400&h=400&fit=crop" },
      { label: "Radiología", image: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=400&h=400&fit=crop" },
      { label: "Quirófano", image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=400&h=400&fit=crop" },
    ],
    blogTitle: "Blog Dental",
    blogPosts: [
      { title: "¿Cada cuánto hay que ir al dentista?", date: "15 Mar 2026", cat: "Prevención" },
      { title: "Invisalign vs brackets: ¿qué es mejor?", date: "8 Mar 2026", cat: "Ortodoncia" },
      { title: "5 alimentos que dañan tus dientes", date: "1 Mar 2026", cat: "Consejos" },
    ],
    contactTitle: "Contacta con nosotros",
    contactSubtitle: "Rellena el formulario o llámanos directamente. Te respondemos en menos de 24h.",
  },

  "3": {
    clinicName: "SmileLab Dental",
    location: "Madrid · Salamanca",
    phone: "911 456 789",
    email: "citas@smilelabdental.es",
    address: "Calle Serrano 85, 28006 Madrid",
    hours: "L-V 8:00–21:00 · S 9:00–15:00",
    heroTitle: "Reserva tu cita en 30 segundos",
    heroSubtitle:
      "La clínica dental más moderna de Madrid. Reserva online, gestión digital de tu historial y seguimiento post-tratamiento.",
    heroCta: "Reservar Online",
    heroCtaSecondary: "Ver Tratamientos",
    heroImage:
      "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=800&h=600&fit=crop",
    stats: [
      { value: "+5.000", label: "Pacientes" },
      { value: "12", label: "Doctores" },
      { value: "4.9★", label: "Google" },
    ],
    servicesTitle: "Tratamientos",
    servicesSubtitle: "Tecnología de vanguardia para cada tratamiento.",
    services: [
      { icon: "🦷", title: "Odontología General", desc: "Check-ups completos con escáner intraoral 3D." },
      { icon: "💎", title: "Diseño de Sonrisa", desc: "Simulación 3D antes de empezar. Sabrás cómo quedarás." },
      { icon: "🔩", title: "Implantes en 1 día", desc: "Carga inmediata con tecnología All-on-4®." },
      { icon: "😁", title: "Invisalign Diamond", desc: "Somos proveedores Diamond. +500 casos al año." },
      { icon: "🔬", title: "Cirugía Guiada", desc: "Planificación digital y cirugía mínimamente invasiva." },
      { icon: "💤", title: "Sedación Consciente", desc: "Tratamientos sin ansiedad. Despierta con tu nueva sonrisa." },
    ],
    teamTitle: "Nuestros Especialistas",
    team: [
      { name: "Dr. Alejandro Ríos", role: "CEO & Director", specialty: "Implantología Avanzada", image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&h=400&fit=crop&crop=face" },
      { name: "Dra. Sofía Herrera", role: "Head de Ortodoncia", specialty: "Invisalign Diamond", image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop&crop=face" },
      { name: "Dr. Pablo Molina", role: "Cirujano Oral", specialty: "Cirugía Guiada", image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop&crop=face" },
    ],
    testimonialsTitle: "Opiniones reales",
    testimonials: [
      { text: "Reservé online a las 11 de la noche y al día siguiente ya tenía mi cita. Eso es servicio.", name: "Carlos V.", rating: "⭐⭐⭐⭐⭐", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face" },
      { text: "El simulador 3D me dejó flipando. Vi cómo iban a quedar mis carillas antes de empezar.", name: "María J.", rating: "⭐⭐⭐⭐⭐", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face" },
      { text: "Me hicieron los 4 implantes en un solo día. Increíble la tecnología que tienen.", name: "Roberto L.", rating: "⭐⭐⭐⭐⭐", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face" },
    ],
    galleryTitle: "Nuestra Clínica",
    galleryItems: [
      { label: "Recepción", image: "https://images.unsplash.com/photo-1629909615184-74f495363b67?w=600&h=400&fit=crop" },
      { label: "Gabinete principal", image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=600&h=400&fit=crop" },
      { label: "Tecnología 3D", image: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=400&h=400&fit=crop" },
      { label: "Sala de espera", image: "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=400&h=400&fit=crop" },
      { label: "Quirófano", image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=400&h=400&fit=crop" },
      { label: "Equipo", image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=400&h=400&fit=crop" },
    ],
    blogTitle: "Blog SmileLab",
    blogPosts: [
      { title: "Implantes en un solo día: cómo funciona All-on-4", date: "20 Mar 2026", cat: "Implantes" },
      { title: "¿Qué es el escáner intraoral y por qué lo usamos?", date: "12 Mar 2026", cat: "Tecnología" },
      { title: "Invisalign Diamond: ventajas sobre los brackets", date: "5 Mar 2026", cat: "Ortodoncia" },
    ],
    contactTitle: "Reserva tu cita",
    contactSubtitle: "Elige día y hora online o escríbenos. Respondemos al instante.",
  },
};

export const demoThemeMap: Record<string, string> = {
  "1": "teal",
  "2": "indigo",
  "3": "emerald",
};

export interface DemoLayout {
  heroLayout: "centered" | "split";
  serviceColumns: 3 | 4;
  sections: string[];
  navItems: string[];
  multiPage?: boolean;
  /** Map slug → section key for multi-page demos */
  pageMap?: Record<string, string>;
}

export const demoLayouts: Record<string, DemoLayout> = {
  // Demo 1 — Landing simple (una sola página)
  "1": {
    heroLayout: "split",
    serviceColumns: 3,
    sections: ["hero", "services", "team", "contact", "footer"],
    navItems: ["Servicios", "Equipo", "Contacto"],
  },
  // Demo 2 — Web completa (multipágina)
  "2": {
    heroLayout: "split",
    serviceColumns: 4,
    sections: ["hero", "services", "team", "testimonials", "gallery", "blog", "contact", "footer"],
    navItems: ["Servicios", "Equipo", "Opiniones", "Galería", "Blog", "Contacto"],
    multiPage: true,
    pageMap: {
      servicios: "services",
      equipo: "team",
      opiniones: "testimonials",
      galeria: "gallery",
      blog: "blog",
      contacto: "contact",
    },
  },
  // Demo 3 — Todo + reservas online
  "3": {
    heroLayout: "split",
    serviceColumns: 3,
    sections: ["hero", "booking", "services", "team", "testimonials", "gallery", "blog", "contact", "footer"],
    navItems: ["Reservas", "Servicios", "Equipo", "Opiniones", "Galería", "Blog", "Contacto"],
    multiPage: true,
    pageMap: {
      reservas: "booking",
      servicios: "services",
      equipo: "team",
      opiniones: "testimonials",
      galeria: "gallery",
      blog: "blog",
      contacto: "contact",
    },
  },
};
