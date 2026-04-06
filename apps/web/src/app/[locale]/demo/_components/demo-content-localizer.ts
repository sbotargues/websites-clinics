import type { DemoContent } from "./types";

type CopyPack = {
  heroTitle: [string, string, string];
  heroSubtitle: [string, string, string];
  heroCta: string;
  heroCtaSecondary: string;
  servicesTitle: string;
  servicesSubtitle: string;
  teamTitle: string;
  contactTitle: string;
  contactSubtitle: string;
  testimonialsTitle: string;
  galleryTitle: string;
  blogTitle: string;
  serviceTitlePrefix: string;
  serviceDesc: string;
  role: string;
  specialty: string;
  testimonialText: string;
  galleryLabel: string;
  blogPostTitle: string;
  blogCategory: string;
  stats: {
    patients: string;
    years: string;
    doctors: string;
    google: string;
  };
};

const packs: Record<string, CopyPack> = {
  en: {
    heroTitle: [
      "Your smile deserves the best professionals",
      "Trusted dentistry in the city center",
      "Book your appointment in 30 seconds",
    ],
    heroSubtitle: [
      "Modern dental care with a close and human approach.",
      "Advanced technology, clear treatment plans and real results.",
      "Online booking, digital follow-up and immediate confirmation.",
    ],
    heroCta: "Book Appointment",
    heroCtaSecondary: "View Services",
    servicesTitle: "Our Services",
    servicesSubtitle: "Comprehensive treatments with modern technology.",
    teamTitle: "Our Team",
    contactTitle: "Contact Us",
    contactSubtitle: "Send us a message and we will reply in less than 24h.",
    testimonialsTitle: "What our patients say",
    galleryTitle: "Our Clinic",
    blogTitle: "Dental Blog",
    serviceTitlePrefix: "Treatment",
    serviceDesc: "Personalized care with medical precision and close support.",
    role: "Dental Specialist",
    specialty: "Advanced Dentistry",
    testimonialText: "Excellent experience from day one. Professional and close treatment.",
    galleryLabel: "Clinic area",
    blogPostTitle: "Dental health guide",
    blogCategory: "Advice",
    stats: { patients: "Patients", years: "Years", doctors: "Doctors", google: "Google" },
  },
  fr: {
    heroTitle: [
      "Votre sourire merite les meilleurs professionnels",
      "Dentisterie de confiance au centre-ville",
      "Prenez rendez-vous en 30 secondes",
    ],
    heroSubtitle: [
      "Soins dentaires modernes avec une approche humaine.",
      "Technologie avancee, plans clairs et resultats reels.",
      "Reservation en ligne et confirmation immediate.",
    ],
    heroCta: "Prendre rendez-vous",
    heroCtaSecondary: "Voir les services",
    servicesTitle: "Nos services",
    servicesSubtitle: "Traitements complets avec technologie moderne.",
    teamTitle: "Notre equipe",
    contactTitle: "Contactez-nous",
    contactSubtitle: "Ecrivez-nous et nous repondrons en moins de 24h.",
    testimonialsTitle: "Avis des patients",
    galleryTitle: "Notre clinique",
    blogTitle: "Blog dentaire",
    serviceTitlePrefix: "Traitement",
    serviceDesc: "Soins personnalises avec precision medicale.",
    role: "Specialiste dentaire",
    specialty: "Dentisterie avancee",
    testimonialText: "Excellente experience, equipe professionnelle et proche.",
    galleryLabel: "Espace clinique",
    blogPostTitle: "Guide de sante dentaire",
    blogCategory: "Conseils",
    stats: { patients: "Patients", years: "Annees", doctors: "Docteurs", google: "Google" },
  },
  de: {
    heroTitle: [
      "Ihr Lacheln verdient die besten Profis",
      "Vertrauensvolle Zahnmedizin im Stadtzentrum",
      "Buchen Sie Ihren Termin in 30 Sekunden",
    ],
    heroSubtitle: [
      "Moderne Zahnmedizin mit menschlichem Ansatz.",
      "Fortschrittliche Technik und klare Behandlungsplane.",
      "Online-Buchung mit sofortiger Bestatigung.",
    ],
    heroCta: "Termin buchen",
    heroCtaSecondary: "Leistungen ansehen",
    servicesTitle: "Unsere Leistungen",
    servicesSubtitle: "Ganzheitliche Behandlungen mit moderner Technologie.",
    teamTitle: "Unser Team",
    contactTitle: "Kontakt",
    contactSubtitle: "Schreiben Sie uns, wir antworten in weniger als 24h.",
    testimonialsTitle: "Meinungen unserer Patienten",
    galleryTitle: "Unsere Klinik",
    blogTitle: "Dental Blog",
    serviceTitlePrefix: "Behandlung",
    serviceDesc: "Personliche Betreuung mit medizinischer Prazision.",
    role: "Zahnspezialist",
    specialty: "Moderne Zahnmedizin",
    testimonialText: "Ausgezeichnete Erfahrung, professionell und nahbar.",
    galleryLabel: "Klinikbereich",
    blogPostTitle: "Leitfaden Zahngesundheit",
    blogCategory: "Tipps",
    stats: { patients: "Patienten", years: "Jahre", doctors: "Arzte", google: "Google" },
  },
  it: {
    heroTitle: [
      "Il tuo sorriso merita i migliori professionisti",
      "Odontoiatria di fiducia in centro citta",
      "Prenota la tua visita in 30 secondi",
    ],
    heroSubtitle: [
      "Cura dentale moderna con approccio umano.",
      "Tecnologia avanzata e risultati reali.",
      "Prenotazione online con conferma immediata.",
    ],
    heroCta: "Prenota visita",
    heroCtaSecondary: "Vedi servizi",
    servicesTitle: "I nostri servizi",
    servicesSubtitle: "Trattamenti completi con tecnologia moderna.",
    teamTitle: "Il nostro team",
    contactTitle: "Contattaci",
    contactSubtitle: "Scrivici e risponderemo in meno di 24h.",
    testimonialsTitle: "Opinioni dei pazienti",
    galleryTitle: "La nostra clinica",
    blogTitle: "Blog dentale",
    serviceTitlePrefix: "Trattamento",
    serviceDesc: "Assistenza personalizzata con precisione medica.",
    role: "Specialista dentale",
    specialty: "Odontoiatria avanzata",
    testimonialText: "Esperienza eccellente, team professionale e vicino.",
    galleryLabel: "Area clinica",
    blogPostTitle: "Guida alla salute dentale",
    blogCategory: "Consigli",
    stats: { patients: "Pazienti", years: "Anni", doctors: "Dottori", google: "Google" },
  },
  pt: {
    heroTitle: [
      "O seu sorriso merece os melhores profissionais",
      "Dentisteria de confianca no centro da cidade",
      "Marque a sua consulta em 30 segundos",
    ],
    heroSubtitle: [
      "Cuidados dentarios modernos com abordagem humana.",
      "Tecnologia avancada e resultados reais.",
      "Marcacao online com confirmacao imediata.",
    ],
    heroCta: "Marcar consulta",
    heroCtaSecondary: "Ver servicos",
    servicesTitle: "Nossos servicos",
    servicesSubtitle: "Tratamentos completos com tecnologia moderna.",
    teamTitle: "Nossa equipa",
    contactTitle: "Contacto",
    contactSubtitle: "Escreva-nos e responderemos em menos de 24h.",
    testimonialsTitle: "O que dizem os pacientes",
    galleryTitle: "Nossa clinica",
    blogTitle: "Blog dentario",
    serviceTitlePrefix: "Tratamento",
    serviceDesc: "Atendimento personalizado com precisao medica.",
    role: "Especialista dentario",
    specialty: "Odontologia avancada",
    testimonialText: "Excelente experiencia desde o primeiro dia.",
    galleryLabel: "Area da clinica",
    blogPostTitle: "Guia de saude dentaria",
    blogCategory: "Conselhos",
    stats: { patients: "Pacientes", years: "Anos", doctors: "Doutores", google: "Google" },
  },
  ca: {
    heroTitle: [
      "El teu somriure mereix els millors professionals",
      "Odontologia de confianca al centre",
      "Reserva la teva cita en 30 segons",
    ],
    heroSubtitle: [
      "Atencio dental moderna amb tracte proper.",
      "Tecnologia avancada i resultats reals.",
      "Reserva online amb confirmacio immediata.",
    ],
    heroCta: "Reservar cita",
    heroCtaSecondary: "Veure serveis",
    servicesTitle: "Els nostres serveis",
    servicesSubtitle: "Tractaments complets amb tecnologia moderna.",
    teamTitle: "El nostre equip",
    contactTitle: "Contacta amb nosaltres",
    contactSubtitle: "Escriu-nos i et respondrem en menys de 24h.",
    testimonialsTitle: "Que diuen els pacients",
    galleryTitle: "La nostra clinica",
    blogTitle: "Blog dental",
    serviceTitlePrefix: "Tractament",
    serviceDesc: "Atencio personalitzada amb precisio medica.",
    role: "Especialista dental",
    specialty: "Odontologia avancada",
    testimonialText: "Experiencia excel.lent, equip professional i proper.",
    galleryLabel: "Zona de la clinica",
    blogPostTitle: "Guia de salut dental",
    blogCategory: "Consells",
    stats: { patients: "Pacients", years: "Anys", doctors: "Doctors", google: "Google" },
  },
  ru: {
    heroTitle: [
      "Vasha ulybka zasluzhivaet luchshikh specialistov",
      "Nadezhnaya stomatologiya v tsentre goroda",
      "Zabroniruyte vizit za 30 sekund",
    ],
    heroSubtitle: [
      "Sovremennaya stomatologiya s chelovechnym podkhodom.",
      "Peredovye tekhnologii i realnye rezultaty.",
      "Onlayn-zapis s mgnovennym podtverzhdeniem.",
    ],
    heroCta: "Zapisatsya",
    heroCtaSecondary: "Smotret uslugi",
    servicesTitle: "Nashi uslugi",
    servicesSubtitle: "Kompleksnoe lechenie s sovremennoy tekhnologiey.",
    teamTitle: "Nasha komanda",
    contactTitle: "Svyazhites s nami",
    contactSubtitle: "Napishite nam, my otvetim menee chem za 24 chasa.",
    testimonialsTitle: "Chto govoryat pacienty",
    galleryTitle: "Nasha klinika",
    blogTitle: "Stomatologicheskiy blog",
    serviceTitlePrefix: "Lechenie",
    serviceDesc: "Individualnyy podkhod i meditsinskaya tochnost.",
    role: "Stomatolog",
    specialty: "Sovremennaya stomatologiya",
    testimonialText: "Otlichnyy opyt, professionalnaya i blizkaya komanda.",
    galleryLabel: "Zona kliniki",
    blogPostTitle: "Gid po zdorovyu zubov",
    blogCategory: "Sovety",
    stats: { patients: "Pacienty", years: "Let", doctors: "Vrachi", google: "Google" },
  },
  nl: {
    heroTitle: [
      "Uw glimlach verdient de beste specialisten",
      "Betrouwbare tandzorg in het stadscentrum",
      "Boek uw afspraak in 30 seconden",
    ],
    heroSubtitle: [
      "Moderne tandzorg met een menselijke aanpak.",
      "Geavanceerde technologie en echte resultaten.",
      "Online boeken met directe bevestiging.",
    ],
    heroCta: "Afspraak maken",
    heroCtaSecondary: "Diensten bekijken",
    servicesTitle: "Onze diensten",
    servicesSubtitle: "Complete behandelingen met moderne technologie.",
    teamTitle: "Ons team",
    contactTitle: "Neem contact op",
    contactSubtitle: "Stuur ons een bericht en we reageren binnen 24 uur.",
    testimonialsTitle: "Wat patienten zeggen",
    galleryTitle: "Onze kliniek",
    blogTitle: "Tandheelkundig blog",
    serviceTitlePrefix: "Behandeling",
    serviceDesc: "Persoonlijke zorg met medische precisie.",
    role: "Tandspecialist",
    specialty: "Geavanceerde tandheelkunde",
    testimonialText: "Uitstekende ervaring vanaf dag een.",
    galleryLabel: "Kliniekruimte",
    blogPostTitle: "Gids voor mondgezondheid",
    blogCategory: "Tips",
    stats: { patients: "Patienten", years: "Jaren", doctors: "Artsen", google: "Google" },
  },
  ka: {
    heroTitle: [
      "თქვენი ღიმილი საუკეთესო პროფესიონალებს იმსახურებს",
      "სანდო სტომატოლოგია ქალაქის ცენტრში",
      "დაჯავშნეთ ვიზიტი 30 წამში",
    ],
    heroSubtitle: [
      "თანამედროვე სტომატოლოგია ადამიანური მიდგომით.",
      "მოწინავე ტექნოლოგია და რეალური შედეგები.",
      "ონლაინ ჯავშანი მყისიერი დადასტურებით.",
    ],
    heroCta: "ვიზიტის დაჯავშნა",
    heroCtaSecondary: "სერვისების ნახვა",
    servicesTitle: "ჩვენი სერვისები",
    servicesSubtitle: "სრული მკურნალობა თანამედროვე ტექნოლოგიით.",
    teamTitle: "ჩვენი გუნდი",
    contactTitle: "დაგვიკავშირდით",
    contactSubtitle: "მოგვწერეთ და 24 საათზე ნაკლებ დროში გიპასუხებთ.",
    testimonialsTitle: "რას ამბობენ პაციენტები",
    galleryTitle: "ჩვენი კლინიკა",
    blogTitle: "სტომატოლოგიური ბლოგი",
    serviceTitlePrefix: "მკურნალობა",
    serviceDesc: "პერსონალური ზრუნვა და სამედიცინო სიზუსტე.",
    role: "სტომატოლოგი",
    specialty: "თანამედროვე სტომატოლოგია",
    testimonialText: "შესანიშნავი გამოცდილება პირველივე დღიდან.",
    galleryLabel: "კლინიკის ზონა",
    blogPostTitle: "კბილების ჯანმრთელობის გზამკვლევი",
    blogCategory: "რჩევები",
    stats: { patients: "პაციენტები", years: "წლები", doctors: "ექიმები", google: "Google" },
  },
};

export function localizeDemoContent(content: DemoContent, locale: string, demoId: string): DemoContent {
  if (locale === "es") return content;

  const pack = (packs[locale] ?? packs.en)!;
  const demoIndex = Math.max(0, Math.min(2, Number(demoId) - 1));

  return {
    ...content,
    heroTitle: pack.heroTitle[demoIndex] ?? pack.heroTitle[0],
    heroSubtitle: pack.heroSubtitle[demoIndex] ?? pack.heroSubtitle[0],
    heroCta: pack.heroCta,
    heroCtaSecondary: pack.heroCtaSecondary,
    servicesTitle: pack.servicesTitle,
    servicesSubtitle: pack.servicesSubtitle,
    teamTitle: pack.teamTitle,
    contactTitle: pack.contactTitle,
    contactSubtitle: pack.contactSubtitle,
    testimonialsTitle: content.testimonials ? pack.testimonialsTitle : content.testimonialsTitle,
    galleryTitle: content.galleryItems ? pack.galleryTitle : content.galleryTitle,
    blogTitle: content.blogPosts ? pack.blogTitle : content.blogTitle,
    services: content.services.map((service, i) => ({
      ...service,
      title: `${pack.serviceTitlePrefix} ${i + 1}`,
      desc: pack.serviceDesc,
    })),
    team: content.team.map((member) => ({
      ...member,
      role: pack.role,
      specialty: pack.specialty,
    })),
    stats: content.stats
      ? content.stats.map((stat, i) => {
          const labels = [pack.stats.patients, pack.stats.years, pack.stats.google, pack.stats.doctors];
          return { ...stat, label: labels[i] ?? stat.label };
        })
      : content.stats,
    testimonials: content.testimonials
      ? content.testimonials.map((testimonial) => ({
          ...testimonial,
          text: pack.testimonialText,
        }))
      : content.testimonials,
    galleryItems: content.galleryItems
      ? content.galleryItems.map((item, i) => ({
          ...item,
          label: `${pack.galleryLabel} ${i + 1}`,
        }))
      : content.galleryItems,
    blogPosts: content.blogPosts
      ? content.blogPosts.map((post, i) => ({
          ...post,
          title: `${pack.blogPostTitle} ${i + 1}`,
          cat: pack.blogCategory,
        }))
      : content.blogPosts,
  };
}
