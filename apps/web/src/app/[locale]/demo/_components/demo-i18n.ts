export type DemoLocale = "es" | "en" | "fr" | "de" | "it" | "pt" | "ca" | "ru" | "nl" | "ka";

export interface DemoI18n {
  toolbar: {
    back: string;
    viewingDemo: string;
    demo: string;
    cta: string;
    whatsapp: string;
  };
  demoLabels: Record<string, string>;
  header: {
    requestAppointment: string;
  };
  contact: {
    name: string;
    phone: string;
    message: string;
    namePlaceholder: string;
    phonePlaceholder: string;
    messagePlaceholder: string;
    send: string;
  };
  booking: {
    title: string;
    subtitle: string;
    stepTreatment: string;
    stepDateTime: string;
    stepData: string;
    selectTreatment: string;
    pickDate: string;
    availableTime: string;
    confirm: string;
    confirmation: string;
    treatments: string[];
    days: string[];
  };
  footer: {
    rights: string;
  };
  embed: {
    demoTitlePrefix: string;
    viewAllServices: string;
  };
  defaults: {
    blogTitle: string;
    galleryTitle: string;
    testimonialsTitle: string;
  };
}

const es: DemoI18n = {
  toolbar: {
    back: "Volver",
    viewingDemo: "Estas viendo la Demo",
    demo: "Demo",
    cta: "Quiero una web asi",
    whatsapp: "WhatsApp",
  },
  demoLabels: {
    "1": "Pagina unica",
    "2": "Varias paginas",
    "3": "Citas online",
  },
  header: {
    requestAppointment: "Pedir Cita",
  },
  contact: {
    name: "Nombre",
    phone: "Telefono",
    message: "Mensaje",
    namePlaceholder: "Tu nombre",
    phonePlaceholder: "600 000 000",
    messagePlaceholder: "Cuentanos que necesitas...",
    send: "Enviar Mensaje",
  },
  booking: {
    title: "Reserva Online",
    subtitle: "Elige dia, hora y tratamiento. Confirmacion inmediata.",
    stepTreatment: "Tratamiento",
    stepDateTime: "Fecha y hora",
    stepData: "Datos",
    selectTreatment: "Selecciona tratamiento",
    pickDate: "Elige fecha",
    availableTime: "Hora disponible",
    confirm: "Confirmar Reserva",
    confirmation: "Recibiras confirmacion por email y SMS",
    treatments: ["Revision", "Limpieza", "Blanqueamiento", "Implante", "Ortodoncia", "Urgencia"],
    days: ["Lun 7", "Mar 8", "Mie 9", "Jue 10", "Vie 11", "Lun 14", "Mar 15"],
  },
  footer: {
    rights: "Todos los derechos reservados.",
  },
  embed: {
    demoTitlePrefix: "Demo",
    viewAllServices: "Ver todos los servicios",
  },
  defaults: {
    blogTitle: "Blog Dental",
    galleryTitle: "Nuestra Clinica",
    testimonialsTitle: "Lo que dicen nuestros pacientes",
  },
};

const en: DemoI18n = {
  toolbar: {
    back: "Back",
    viewingDemo: "You are viewing Demo",
    demo: "Demo",
    cta: "I want a website like this",
    whatsapp: "WhatsApp",
  },
  demoLabels: {
    "1": "Single page",
    "2": "Multi-page",
    "3": "Online booking",
  },
  header: { requestAppointment: "Book Appointment" },
  contact: {
    name: "Name",
    phone: "Phone",
    message: "Message",
    namePlaceholder: "Your name",
    phonePlaceholder: "600 000 000",
    messagePlaceholder: "Tell us what you need...",
    send: "Send Message",
  },
  booking: {
    title: "Book Online",
    subtitle: "Choose day, time and treatment. Instant confirmation.",
    stepTreatment: "Treatment",
    stepDateTime: "Date & time",
    stepData: "Details",
    selectTreatment: "Select treatment",
    pickDate: "Choose date",
    availableTime: "Available time",
    confirm: "Confirm Booking",
    confirmation: "You will receive confirmation by email and SMS",
    treatments: ["Check-up", "Cleaning", "Whitening", "Implant", "Orthodontics", "Urgency"],
    days: ["Mon 7", "Tue 8", "Wed 9", "Thu 10", "Fri 11", "Mon 14", "Tue 15"],
  },
  footer: { rights: "All rights reserved." },
  embed: { demoTitlePrefix: "Demo", viewAllServices: "View all services" },
  defaults: {
    blogTitle: "Dental Blog",
    galleryTitle: "Our Clinic",
    testimonialsTitle: "What our patients say",
  },
};

const fr: DemoI18n = {
  ...en,
  toolbar: { ...en.toolbar, back: "Retour", viewingDemo: "Vous regardez la Demo", cta: "Je veux un site comme celui-ci" },
  header: { requestAppointment: "Prendre rendez-vous" },
  contact: { ...en.contact, name: "Nom", phone: "Telephone", message: "Message", send: "Envoyer le message" },
  booking: {
    ...en.booking,
    title: "Reservation en ligne",
    subtitle: "Choisissez le jour, l'heure et le traitement. Confirmation immediate.",
    stepTreatment: "Traitement",
    stepDateTime: "Date et heure",
    stepData: "Donnees",
    selectTreatment: "Choisissez un traitement",
    pickDate: "Choisissez une date",
    availableTime: "Heure disponible",
    confirm: "Confirmer la reservation",
    confirmation: "Vous recevrez une confirmation par email et SMS",
  },
  footer: { rights: "Tous droits reserves." },
  embed: { demoTitlePrefix: "Demo", viewAllServices: "Voir tous les services" },
};

const de: DemoI18n = {
  ...en,
  toolbar: { ...en.toolbar, back: "Zuruck", viewingDemo: "Sie sehen Demo", cta: "Ich mochte eine Website wie diese" },
  header: { requestAppointment: "Termin buchen" },
  contact: { ...en.contact, name: "Name", phone: "Telefon", message: "Nachricht", send: "Nachricht senden" },
  booking: {
    ...en.booking,
    title: "Online buchen",
    subtitle: "Wahlen Sie Tag, Uhrzeit und Behandlung. Sofortige Bestatigung.",
    stepTreatment: "Behandlung",
    stepDateTime: "Datum und Uhrzeit",
    stepData: "Daten",
    selectTreatment: "Behandlung auswahlen",
    pickDate: "Datum auswahlen",
    availableTime: "Verfugbare Zeit",
    confirm: "Buchung bestatigen",
    confirmation: "Sie erhalten eine Bestatigung per E-Mail und SMS",
  },
  footer: { rights: "Alle Rechte vorbehalten." },
  embed: { demoTitlePrefix: "Demo", viewAllServices: "Alle Leistungen ansehen" },
};

const it: DemoI18n = {
  ...en,
  toolbar: { ...en.toolbar, back: "Indietro", viewingDemo: "Stai guardando la Demo", cta: "Voglio un sito cosi" },
  header: { requestAppointment: "Prenota visita" },
  contact: { ...en.contact, name: "Nome", phone: "Telefono", message: "Messaggio", send: "Invia messaggio" },
  booking: {
    ...en.booking,
    title: "Prenota online",
    subtitle: "Scegli giorno, ora e trattamento. Conferma immediata.",
    stepTreatment: "Trattamento",
    stepDateTime: "Data e ora",
    stepData: "Dati",
    selectTreatment: "Seleziona trattamento",
    pickDate: "Scegli data",
    availableTime: "Ora disponibile",
    confirm: "Conferma prenotazione",
    confirmation: "Riceverai conferma via email e SMS",
  },
  footer: { rights: "Tutti i diritti riservati." },
  embed: { demoTitlePrefix: "Demo", viewAllServices: "Vedi tutti i servizi" },
};

const pt: DemoI18n = {
  ...en,
  toolbar: { ...en.toolbar, back: "Voltar", viewingDemo: "Voce esta vendo a Demo", cta: "Quero um site assim" },
  header: { requestAppointment: "Marcar consulta" },
  contact: { ...en.contact, name: "Nome", phone: "Telefone", message: "Mensagem", send: "Enviar mensagem" },
  booking: {
    ...en.booking,
    title: "Reserva online",
    subtitle: "Escolha dia, hora e tratamento. Confirmacao imediata.",
    stepTreatment: "Tratamento",
    stepDateTime: "Data e hora",
    stepData: "Dados",
    selectTreatment: "Selecione tratamento",
    pickDate: "Escolha a data",
    availableTime: "Horario disponivel",
    confirm: "Confirmar reserva",
    confirmation: "Recebera confirmacao por email e SMS",
  },
  footer: { rights: "Todos os direitos reservados." },
  embed: { demoTitlePrefix: "Demo", viewAllServices: "Ver todos os servicos" },
};

const ca: DemoI18n = {
  ...es,
  toolbar: { ...es.toolbar, back: "Tornar", viewingDemo: "Estas veient la Demo", cta: "Vull una web aixi" },
  header: { requestAppointment: "Demanar cita" },
  contact: { ...es.contact, phone: "Telefon", send: "Enviar missatge" },
  booking: {
    ...es.booking,
    title: "Reserva online",
    subtitle: "Tria dia, hora i tractament. Confirmacio immediata.",
    pickDate: "Tria data",
    confirmation: "Rebras confirmacio per correu i SMS",
  },
  footer: { rights: "Tots els drets reservats." },
  embed: { demoTitlePrefix: "Demo", viewAllServices: "Veure tots els serveis" },
};

const ru: DemoI18n = {
  ...en,
  toolbar: { ...en.toolbar, back: "Nazad", viewingDemo: "Vy smotrite Demo", cta: "Khochu takoi sait" },
  header: { requestAppointment: "Zapisatsya" },
  contact: { ...en.contact, name: "Imya", phone: "Telefon", message: "Soobshchenie", send: "Otpravit" },
  booking: {
    ...en.booking,
    title: "Online zapis",
    subtitle: "Vyberite den, vremya i uslugu. Mgnovennoe podtverzhdenie.",
    stepTreatment: "Usluga",
    stepDateTime: "Data i vremya",
    stepData: "Dанные",
    selectTreatment: "Vyberite uslugu",
    pickDate: "Vyberite datu",
    availableTime: "Dostupnoe vremya",
    confirm: "Podtverdit zapis",
    confirmation: "Vy poluchite podtverzhdenie po email i SMS",
  },
  footer: { rights: "Vse prava zashchishcheny." },
  embed: { demoTitlePrefix: "Demo", viewAllServices: "Smotret vse uslugi" },
};

const nl: DemoI18n = {
  ...en,
  toolbar: { ...en.toolbar, back: "Terug", viewingDemo: "Je bekijkt Demo", cta: "Ik wil een website zoals deze" },
  header: { requestAppointment: "Afspraak maken" },
  contact: { ...en.contact, name: "Naam", phone: "Telefoon", message: "Bericht", send: "Bericht verzenden" },
  booking: {
    ...en.booking,
    title: "Online boeken",
    subtitle: "Kies dag, tijd en behandeling. Directe bevestiging.",
    stepTreatment: "Behandeling",
    stepDateTime: "Datum en tijd",
    stepData: "Gegevens",
    selectTreatment: "Kies behandeling",
    pickDate: "Kies datum",
    availableTime: "Beschikbare tijd",
    confirm: "Boeking bevestigen",
    confirmation: "Je ontvangt bevestiging per e-mail en sms",
  },
  footer: { rights: "Alle rechten voorbehouden." },
  embed: { demoTitlePrefix: "Demo", viewAllServices: "Bekijk alle diensten" },
};

const ka: DemoI18n = {
  ...en,
  toolbar: { ...en.toolbar, back: "უკან", viewingDemo: "თქვენ უყურებთ დემოს", cta: "მსურს ასეთი საიტი" },
  header: { requestAppointment: "ვიზიტის დაჯავშნა" },
  contact: {
    ...en.contact,
    name: "სახელი",
    phone: "ტელეფონი",
    message: "შეტყობინება",
    namePlaceholder: "თქვენი სახელი",
    messagePlaceholder: "გვიამბეთ რა გჭირდებათ...",
    send: "შეტყობინების გაგზავნა",
  },
  booking: {
    ...en.booking,
    title: "ონლაინ დაჯავშნა",
    subtitle: "აირჩიეთ დღე, დრო და მკურნალობა. მყისიერი დადასტურება.",
    stepTreatment: "მკურნალობა",
    stepDateTime: "თარიღი და დრო",
    stepData: "მონაცემები",
    selectTreatment: "აირჩიეთ მკურნალობა",
    pickDate: "აირჩიეთ თარიღი",
    availableTime: "ხელმისაწვდომი დრო",
    confirm: "დაჯავშნის დადასტურება",
    confirmation: "დადასტურებას მიიღებთ ელფოსტით და SMS-ით",
  },
  footer: { rights: "ყველა უფლება დაცულია." },
  embed: { demoTitlePrefix: "დემო", viewAllServices: "ყველა სერვისის ნახვა" },
};

const messages: Record<string, DemoI18n> = {
  es,
  en,
  fr,
  de,
  it,
  pt,
  ca,
  ru,
  nl,
  ka,
};

export function getDemoI18n(locale: string): DemoI18n {
  return messages[locale] ?? es;
}
