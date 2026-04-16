type KnownZone = {
  label: string;
  countryCode: string;
  neighborhoods: string[];
  clinicFocus: string;
};

export type Zone = {
  slug: string;
  label: string;
  countryCode: string;
  neighborhoods: string[];
  clinicFocus: string;
  known: boolean;
};

export type ZonePageCopy = {
  heroBadge: string;
  heroTitlePre: string;
  heroTitleHighlight: string;
  heroTitlePost: string;
  heroSubtitle: string;
  demosTitle: string;
  demosSubtitle: string;
  featuresTitle: string;
  featuresSubtitle: string;
  faqTitle: string;
  faqSubtitle: string;
  ctaTitle: string;
  ctaSubtitle: string;
  ctaPlaceholder: string;
  metaTitle: string;
  metaDescription: string;
  serviceType: string;
  cityPanelLabel: string;
  cityPanelText: string;
  clinicPanelLabel: string;
  seoCardTitle: string;
  seoCardText: string;
  conversionCardTitle: string;
  conversionCardText: string;
};

const KNOWN_ZONES: Record<string, KnownZone> = {
  valencia: {
    label: "Valencia",
    countryCode: "ES",
    neighborhoods: [
      "Algiros",
      "Benicalap",
      "Benimaclet",
      "Camins al Grau",
      "Campanar",
      "Extramurs",
      "Jesus",
      "La Saidia",
      "L'Olivereta",
      "Patraix",
      "Pla del Real",
      "Poblats de l'Oest",
      "Poblats del Nord",
      "Poblats del Sud",
      "Poblats Maritims",
      "Quatre Carreres",
      "Rascanya",
    ],
    clinicFocus: "Clinicas que quieren dominar SEO local y WhatsApp.",
  },
  barcelona: {
    label: "Barcelona",
    countryCode: "ES",
    neighborhoods: [
      "Antiga Esquerra de l'Eixample",
      "Baro de Viver",
      "Barri Gotic",
      "Camp de l'Arpa del Clot",
      "Camp d'en Grassot i Gracia Nova",
      "Can Baro",
      "Canyelles",
      "Ciutat Meridiana",
      "Diagonal Mar",
      "Dreta de l'Eixample",
      "El Baix Guinardo",
      "El Besos i el Maresme",
      "El Bon Pastor",
      "El Carmel",
      "El Clot",
      "El Coll",
      "El Congres i els Indians",
      "El Guinardo",
      "El Parc i la Llacuna del Poblenou",
      "El Poblenou",
      "El Putxet i el Farro",
      "El Raval",
      "El Turo de la Peira",
      "Font de la Guatlla",
      "Fort Pienc",
      "Horta",
      "Hostafrancs",
      "La Barceloneta",
      "La Bordeta",
      "La Clota",
      "La Font d'en Fargues",
      "La Guineueta",
      "La Maternitat i Sant Ramon",
      "La Prosperitat",
      "La Sagrera",
      "La Salut",
      "La Teixonera",
      "La Trinitat Nova",
      "La Vall d'Hebron",
      "La Verneda i la Pau",
      "Les Corts",
      "Les Roquetes",
      "Les Tres Torres",
      "Marina de Port",
      "Marina del Prat Vermell",
      "Montbau",
      "Nova Esquerra de l'Eixample",
      "Pedralbes",
      "Poble Sec",
      "Porta",
      "Provencals del Poblenou",
      "Sagrada Familia",
      "Sant Andreu",
      "Sant Antoni",
      "Sant Genis dels Agudells",
      "Sant Gervasi Galvany",
      "Sant Gervasi la Bonanova",
      "Sant Marti de Provencals",
      "Sant Pere Santa Caterina i la Ribera",
      "Sants",
      "Sants Badal",
      "Sarria",
      "Torre Baro",
      "Vallcarca i els Penitents",
      "Vallvidrera",
      "Verdun",
      "Vila de Gracia",
      "Vila Olimpica del Poblenou",
      "Vilapicina i la Torre Llobeta",
    ],
    clinicFocus: "Clinicas en zonas competidas que necesitan destacar rapido.",
  },
  madrid: {
    label: "Madrid",
    countryCode: "ES",
    neighborhoods: [
      "Centro",
      "Arganzuela",
      "Retiro",
      "Salamanca",
      "Chamartin",
      "Tetuan",
      "Chamberi",
      "Fuencarral-El Pardo",
      "Moncloa-Aravaca",
      "Latina",
      "Carabanchel",
      "Usera",
      "Puente de Vallecas",
      "Moratalaz",
      "Ciudad Lineal",
      "Hortaleza",
      "Villaverde",
      "Villa de Vallecas",
      "Vicalvaro",
      "San Blas-Canillejas",
      "Barajas",
    ],
    clinicFocus: "Clinicas que quieren mas primeras visitas desde Google.",
  },
};

function toWords(value: string) {
  return value
    .split("-")
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1).toLowerCase())
    .join(" ");
}

export function normalizeZoneSlug(slug: string) {
  return slug
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

export function getZone(slug: string) {
  const normalizedSlug = normalizeZoneSlug(slug);
  const knownZone = KNOWN_ZONES[normalizedSlug];

  if (knownZone) {
    return {
      slug: normalizedSlug,
      label: knownZone.label,
      countryCode: knownZone.countryCode,
      neighborhoods: knownZone.neighborhoods,
      clinicFocus: knownZone.clinicFocus,
      known: true,
    };
  }

  return {
    slug: normalizedSlug,
    label: toWords(normalizedSlug),
    countryCode: "ES",
    neighborhoods: [],
    clinicFocus: "Clinicas que quieren una web mejor orientada a captar pacientes.",
    known: false,
  };
}

export function getSuggestedZoneSlugs() {
  return Object.keys(KNOWN_ZONES);
}

export function getZonePageCopy(locale: string, zone: Zone): ZonePageCopy {
  // Get first 3-5 neighborhoods for SEO
  const topNeighborhoods = zone.neighborhoods.slice(0, 3);
  const neighborhoodsList = topNeighborhoods.slice(0, 1).join(", ");
  const firstThreeNeighborhoods = topNeighborhoods.join(", ");
  
  // English
  if (locale === "en") {
    return {
      heroBadge: `Dental Clinic Web Design in ${zone.label}`,
      heroTitlePre: "Website for clinics in",
      heroTitleHighlight: zone.label,
      heroTitlePost: "",
      heroSubtitle: `Fast websites and local SEO for dental clinics in ${firstThreeNeighborhoods}, ${zone.label} and beyond.`,
      demosTitle: `Website formats that work for clinics in ${zone.label}`,
      demosSubtitle: `Single-page, multi-page or online booking websites adapted to how clinics in ${zone.label} attract local patients.`,
      featuresTitle: `What your clinic in ${zone.label} gets`,
      featuresSubtitle: `More visibility in the areas that matter, less wasted traffic and a sharper local sales message.`,
      faqTitle: `Questions clinics in ${zone.label} usually ask`,
      faqSubtitle: `Focused on local SEO, mobile conversion and how to turn city traffic into real enquiries.`,
      ctaTitle: `Want more patient requests in ${zone.label}?`,
      ctaSubtitle: `Book a 15-minute call or send us a WhatsApp message. We will show you how to turn local traffic in ${zone.label} into appointments.`,
      ctaPlaceholder: `Tell us about your clinic in ${zone.label}, your services and the areas you want to rank in...`,
      metaTitle: `Dental Clinic Web Design in ${zone.label}`,
      metaDescription: `Web design & local SEO for dental clinics in ${zone.label}: ${neighborhoodsList} and more. Fast sites, real patient traffic.`,
      serviceType: `Web design and local SEO for dental clinics in ${zone.label}`,
      cityPanelLabel: "City signal",
      cityPanelText: `Local relevance, clearer positioning and a stronger acquisition message for clinics in ${zone.label}.`,
      clinicPanelLabel: "Clinic offer",
      seoCardTitle: "Local SEO",
      seoCardText: "Structure, messaging and service pages aligned with the areas you want to rank in.",
      conversionCardTitle: "Conversion",
      conversionCardText: "WhatsApp, call and form flows adapted to local intent and first appointments.",
    };
  }

  // French
  if (locale === "fr") {
    return {
      heroBadge: `Conception web pour cliniques dentaires a ${zone.label}`,
      heroTitlePre: "Site web pour cliniques a",
      heroTitleHighlight: zone.label,
      heroTitlePost: "",
      heroSubtitle: `Sites web rapides et SEO local pour cliniques dentaires a ${firstThreeNeighborhoods}, ${zone.label} et plus.`,
      demosTitle: `Modeles de sites qui fonctionnent a ${zone.label}`,
      demosSubtitle: `Sites monopage, multipages ou reservation en ligne adaptes a la maniere dont les cliniques de ${zone.label} attirent les patients locaux.`,
      featuresTitle: `Ce que votre clinique a ${zone.label} obtient`,
      featuresSubtitle: `Plus de visibilite aux endroits qui comptent, moins de trafic perdu et un message de vente local plus percutant.`,
      faqTitle: `Questions frequemment posees par les cliniques de ${zone.label}`,
      faqSubtitle: `Axe sur le SEO local, la conversion mobile et la maniere de transformer le trafic en vraies demandes.`,
      ctaTitle: `Voulez-vous plus de demandes de patients a ${zone.label}?`,
      ctaSubtitle: `Reservez un appel de 15 minutes ou envoyez-nous un message WhatsApp. Nous vous montrerons comment transformer le trafic local a ${zone.label} en rendez-vous.`,
      ctaPlaceholder: `Parlez-nous de votre clinique a ${zone.label}, de vos services et des secteurs ou vous voulez vous positionner...`,
      metaTitle: `Conception web pour cliniques dentaires a ${zone.label}`,
      metaDescription: `Web & SEO local pour cliniques dentaires a ${zone.label}: ${neighborhoodsList} et plus. Sites rapides, vrais patients.`,
      serviceType: `Conception web et SEO local pour cliniques dentaires a ${zone.label}`,
      cityPanelLabel: "Signal local",
      cityPanelText: `Pertinence locale, positionnement plus clair et un message d'acquisition plus fort pour les cliniques de ${zone.label}.`,
      clinicPanelLabel: "Offre clinique",
      seoCardTitle: "SEO local",
      seoCardText: "Structure, messages et pages de service alignes avec les secteurs ou vous voulez vous classer.",
      conversionCardTitle: "Conversion",
      conversionCardText: "Flux WhatsApp, appel et formulaire adaptes aux besoins locaux et aux premiers rendez-vous.",
    };
  }

  // German
  if (locale === "de") {
    return {
      heroBadge: `Webdesign fuer Zahnarztpraxen in ${zone.label}`,
      heroTitlePre: "Website fuer Praxen in",
      heroTitleHighlight: zone.label,
      heroTitlePost: "",
      heroSubtitle: `Schnelle Websites und lokale SEO fuer Zahnarztpraxen in ${firstThreeNeighborhoods}, ${zone.label} und mehr.`,
      demosTitle: `Website-Formate, die in ${zone.label} funktionieren`,
      demosSubtitle: `Einseitige, mehrseitige oder Online-Buchungs-Websites, angepasst an die Art und Weise, wie Praxen in ${zone.label} lokale Patienten anlocken.`,
      featuresTitle: `Was Ihre Praxis in ${zone.label} erhaelt`,
      featuresSubtitle: `Mehr Sichtbarkeit an den Orten, die zaehlen, weniger verschwendeter Verkehr und eine staerkere lokale Verkaufsbotschaft.`,
      faqTitle: `Haeufig gestellte Fragen von Praxen in ${zone.label}`,
      faqSubtitle: `Mit Fokus auf lokale SEO, mobile Konvertierung und wie man lokalen Verkehr in echte Anfragen umwandelt.`,
      ctaTitle: `Moechten Sie mehr Patientenanfragen in ${zone.label}?`,
      ctaSubtitle: `Buchen Sie ein 15-Minuten-Gespraech oder senden Sie uns eine WhatsApp-Nachricht. Wir zeigen Ihnen, wie Sie lokalen Verkehr in ${zone.label} in Termine umwandeln.`,
      ctaPlaceholder: `Erzaehlen Sie uns von Ihrer Praxis in ${zone.label}, Ihren Dienstleistungen und den Bereichen, in denen Sie sich positionieren moechten...`,
      metaTitle: `Webdesign fuer Zahnarztpraxen in ${zone.label}`,
      metaDescription: `Web & SEO fuer Zahnarztpraxen in ${zone.label}: ${neighborhoodsList} und mehr. Schnelle Seiten, echte Patienten.`,
      serviceType: `Webdesign und lokale SEO fuer Zahnarztpraxen in ${zone.label}`,
      cityPanelLabel: "Lokales Signal",
      cityPanelText: `Lokale Relevanz, klarere Positionierung und eine staerkere Akquisitionsbotschaft fuer Praxen in ${zone.label}.`,
      clinicPanelLabel: "Praxisangebot",
      seoCardTitle: "Lokale SEO",
      seoCardText: "Struktur, Botschaften und Service-Seiten ausgerichtet auf die Bereiche, in denen Sie ranken moechten.",
      conversionCardTitle: "Konvertierung",
      conversionCardText: "WhatsApp-, Anruf- und Formularfluesse angepasst an lokale Absichten und erste Termine.",
    };
  }

  // Italian
  if (locale === "it") {
    return {
      heroBadge: `Web design per cliniche dentali a ${zone.label}`,
      heroTitlePre: "Sito web per cliniche a",
      heroTitleHighlight: zone.label,
      heroTitlePost: "",
      heroSubtitle: `Siti web veloci e SEO locale per cliniche dentali a ${firstThreeNeighborhoods}, ${zone.label} e oltre.`,
      demosTitle: `Formati di siti che funzionano a ${zone.label}`,
      demosSubtitle: `Siti a pagina singola, multipagina o prenotazione online adattati al modo in cui le cliniche di ${zone.label} attirano i pazienti locali.`,
      featuresTitle: `Cosa ottiene la tua clinica a ${zone.label}`,
      featuresSubtitle: `Piu visibilita nelle aree che contano, meno traffico perso e un messaggio di vendita locale piu incisivo.`,
      faqTitle: `Domande frequenti delle cliniche di ${zone.label}`,
      faqSubtitle: `Incentrato su SEO locale, conversione mobile e come trasformare il traffico locale in vere richieste.`,
      ctaTitle: `Vuoi piu richieste di pazienti a ${zone.label}?`,
      ctaSubtitle: `Prenota una chiamata di 15 minuti o inviaci un messaggio WhatsApp. Ti mostreremo come trasformare il traffico locale a ${zone.label} in appuntamenti.`,
      ctaPlaceholder: `Parlaci della tua clinica a ${zone.label}, dei tuoi servizi e delle aree in cui vuoi posizionarti...`,
      metaTitle: `Web design per cliniche dentali a ${zone.label}`,
      metaDescription: `Web & SEO locale per cliniche dentali a ${zone.label}: ${neighborhoodsList} e altri. Siti veloci, pazienti veri.`,
      serviceType: `Web design e SEO locale per cliniche dentali a ${zone.label}`,
      cityPanelLabel: "Segnale locale",
      cityPanelText: `Rilevanza locale, posizionamento piu chiaro e un messaggio di acquisizione piu forte per le cliniche di ${zone.label}.`,
      clinicPanelLabel: "Offerta clinica",
      seoCardTitle: "SEO locale",
      seoCardText: "Struttura, messaggi e pagine di servizio allineate alle aree in cui vuoi posizionarti.",
      conversionCardTitle: "Conversione",
      conversionCardText: "Flussi WhatsApp, chiamata e modulo adattati alle intenzioni locali e ai primi appuntamenti.",
    };
  }

  // Portuguese
  if (locale === "pt") {
    return {
      heroBadge: `Design web para clinicas dentarias em ${zone.label}`,
      heroTitlePre: "Site web para clinicas em",
      heroTitleHighlight: zone.label,
      heroTitlePost: "",
      heroSubtitle: `Sites rapidos e SEO local para clinicas dentarias em ${firstThreeNeighborhoods}, ${zone.label} e alem.`,
      demosTitle: `Formatos de site que funcionam em ${zone.label}`,
      demosSubtitle: `Sites de pagina unica, multipagina ou agendamento online adaptados ao modo como as clinicas em ${zone.label} atraem pacientes locais.`,
      featuresTitle: `O que sua clinica em ${zone.label} obtem`,
      featuresSubtitle: `Mais visibilidade nas areas que importam, menos trafego desperdicado e uma mensagem de vendas local mais forte.`,
      faqTitle: `Perguntas frequentes de clinicas em ${zone.label}`,
      faqSubtitle: `Focado em SEO local, conversao mobile e como transformar trafego local em verdadeiras solicitacoes.`,
      ctaTitle: `Quer mais solicitudes de pacientes em ${zone.label}?`,
      ctaSubtitle: `Agende uma chamada de 15 minutos ou envie-nos uma mensagem WhatsApp. Mostraremos como transformar o trafego local em ${zone.label} em consultas.`,
      ctaPlaceholder: `Conte-nos sobre sua clinica em ${zone.label}, seus servicos e as areas em que deseja se posicionar...`,
      metaTitle: `Design web para clinicas dentarias em ${zone.label}`,
      metaDescription: `Web & SEO local para clinicas dentarias em ${zone.label}: ${neighborhoodsList} e mais. Sites rapidos, pacientes reais.`,
      serviceType: `Design web e SEO local para clinicas dentarias em ${zone.label}`,
      cityPanelLabel: "Sinal local",
      cityPanelText: `Relevancia local, posicionamento mais claro e uma mensagem de aquisicao mais forte para clinicas em ${zone.label}.`,
      clinicPanelLabel: "Oferta clinica",
      seoCardTitle: "SEO local",
      seoCardText: "Estrutura, mensagens e paginas de servico alinhadas com as areas onde voce deseja se posicionar.",
      conversionCardTitle: "Conversao",
      conversionCardText: "Fluxos WhatsApp, chamada e formulario adaptados a intencao local e primeiras consultas.",
    };
  }

  // Catalan
  if (locale === "ca") {
    return {
      heroBadge: `Diseny web per cliniques dentals a ${zone.label}`,
      heroTitlePre: "Web per cliniques a",
      heroTitleHighlight: zone.label,
      heroTitlePost: "",
      heroSubtitle: `Webs rapides i SEO local per cliniques dentals a ${firstThreeNeighborhoods}, ${zone.label} i mes.`,
      demosTitle: `Formats de web que funcionen a ${zone.label}`,
      demosSubtitle: `Una pagina, multi-pagina o reserves en linia: adaptats a com busca pacient local a ${zone.label}.`,
      featuresTitle: `Que guanya la teva clinica a ${zone.label}`,
      featuresSubtitle: `Mes visibilitat on importa, menys traffic perdut i una proposta molt mes local.`,
      faqTitle: `Preguntes habituals de cliniques a ${zone.label}`,
      faqSubtitle: `Centrades en SEO local, conversio mobil i com transformar busquedas locals en cites reals.`,
      ctaTitle: `Vols mes demandes de pacients a ${zone.label}?`,
      ctaSubtitle: `Reserva una trucada de 15 minuts o escriu-nos per WhatsApp. Et'explicarem com convertir traffic local de ${zone.label} en cites reals.`,
      ctaPlaceholder: `Contem sobre la teva clinica a ${zone.label}, els teus tractaments i on vols posicionar-te...`,
      metaTitle: `Diseny web per cliniques dentals a ${zone.label}`,
      metaDescription: `Web & SEO local per cliniques dentals a ${zone.label}: ${neighborhoodsList} i mes. Webs rapides, pacients reals.`,
      serviceType: `Diseny web i SEO local per cliniques dentals a ${zone.label}`,
      cityPanelLabel: "Senal local",
      cityPanelText: `Rellevancia local, millor posicionament i una proposta mes clara per cliniques a ${zone.label}.`,
      clinicPanelLabel: "Oferta clinica",
      seoCardTitle: "SEO local",
      seoCardText: "Estructura, missatges i pagines de servei alineades amb les zones on vols aparixer.",
      conversionCardTitle: "Conversio",
      conversionCardText: "WhatsApp, trucada i formulari pensats per convertir traffic local en primeres visites.",
    };
  }

  // Russian
  if (locale === "ru") {
    return {
      heroBadge: `Veb-dizajn dlya zubnykh klinik v ${zone.label}`,
      heroTitlePre: "Vebsajt dlya klinik v",
      heroTitleHighlight: zone.label,
      heroTitlePost: "",
      heroSubtitle: `Bystrye vebsajty i lokal'nyj SEO dlya zubnykh klinik v ${firstThreeNeighborhoods}, ${zone.label} i bol'she.`,
      demosTitle: `Formaty vebsajtov, kotorye rabotayut v ${zone.label}`,
      demosSubtitle: `Odnostranichnyj, mnogostranichnyj ili onlajn-bronirovanie, prilagaemye k tomu, kak kliniki v ${zone.label} privlekayut lokal'nykh pacientov.`,
      featuresTitle: `Chto poluchaet vasha klinika v ${zone.label}`,
      featuresSubtitle: `Bol'shaya vidimost' tam, gde eto vazhnо, men'she poteryannogo trafika i bolee sil'noe lokal'noe predlozhenie.`,
      faqTitle: `Chastye voprosy klinik v ${zone.label}`,
      faqSubtitle: `Na osnove lokal'nogo SEO, mobilnoj konversii i preobrazovaniya lokal'nogo trafika v real'nye zaprosy.`,
      ctaTitle: `Khotite bol'she zaprosov pacientov v ${zone.label}?`,
      ctaSubtitle: `Zaregistrirujtes' na 15-minutnyj zvonok ili otpravte nam soobshchenie v WhatsApp. My pokazhem, kak prevratit' lokal'nyj trafik v ${zone.label} v priem pacientov.`,
      ctaPlaceholder: `Rasskazhite nam o vashej klinike v ${zone.label}, vashikh uslugakh i oblastyakh, gde vy khotite zarabotat'...`,
      metaTitle: `Veb-dizajn dlya zubnykh klinik v ${zone.label}`,
      metaDescription: `Veb & SEO dlya zubnykh klinik v ${zone.label}: ${neighborhoodsList} i bol'she. Bystrye stranicy, real'nye pacienty.`,
      serviceType: `Veb-dizajn i lokal'nyj SEO dlya zubnykh klinik v ${zone.label}`,
      cityPanelLabel: "Lokal'nyj signal",
      cityPanelText: `Lokal'naya relevantnost', bolee chetko vyrazhennoe pozicionirovanie i bolee sil'noe soobshchenie o prikhode dlya klinik v ${zone.label}.`,
      clinicPanelLabel: "Predlozhenie kliniki",
      seoCardTitle: "Lokal'nyj SEO",
      seoCardText: "Struktura, soobshcheniya i stranicy uslug vyravieny s oblastyami, gde vy khotite imet' vysokuyu ranzhistirovku.",
      conversionCardTitle: "Konversiya",
      conversionCardText: "Pototoki WhatsApp, zvonkov i form, prilagaemye k lokal'nym namereniyam i pervym priem pacientov.",
    };
  }

  // Dutch
  if (locale === "nl") {
    return {
      heroBadge: `Webdesign voor tandartsklineken in ${zone.label}`,
      heroTitlePre: "Website voor klinieken in",
      heroTitleHighlight: zone.label,
      heroTitlePost: "",
      heroSubtitle: `Snelle websites en lokale SEO voor tandartsklineken in ${firstThreeNeighborhoods}, ${zone.label} en meer.`,
      demosTitle: `Website-formaten die werken in ${zone.label}`,
      demosSubtitle: `Eenpagina, meerpagina of online boeken, aangepast aan hoe klinieken in ${zone.label} lokale patienten aantrekken.`,
      featuresTitle: `Wat krijgt uw kliniek in ${zone.label}`,
      featuresSubtitle: `Meer zichtbaarheid waar het toe doet, minder verspild verkeer en een sterker lokaal verkoopbericht.`,
      faqTitle: `Veelgestelde vragen van klinieken in ${zone.label}`,
      faqSubtitle: `Gericht op lokale SEO, mobiele conversie en hoe u lokaal verkeer in echte aanvragen kan omzetten.`,
      ctaTitle: `Wilt u meer patiĩntenverzoeken in ${zone.label}?`,
      ctaSubtitle: `Boek een 15-minuten gesprek of stuur ons een WhatsApp-bericht. We laten u zien hoe u lokaal verkeer in ${zone.label} in afspraken omzet.`,
      ctaPlaceholder: `Vertel ons over uw kliniek in ${zone.label}, uw diensten en de gebieden waar u zich wilt onderscheiden...`,
      metaTitle: `Webdesign voor tandartsklineken in ${zone.label}`,
      metaDescription: `Web & SEO voor tandartsklineken in ${zone.label}: ${neighborhoodsList} en meer. Snelle sites, echte patienten.`,
      serviceType: `Webdesign en lokale SEO voor tandartsklineken in ${zone.label}`,
      cityPanelLabel: "Lokaal signaal",
      cityPanelText: `Lokale relevantie, duidelijker positionering en een sterker acquisitiebericht voor klinieken in ${zone.label}.`,
      clinicPanelLabel: "Kliniek aanbod",
      seoCardTitle: "Lokale SEO",
      seoCardText: "Structuur, berichten en servicepaginas afgestemd op de gebieden waar u zich wilt onderscheiden.",
      conversionCardTitle: "Conversie",
      conversionCardText: "WhatsApp-, bel- en formulierstromen aangepast aan lokale intenties en eerste afspraken.",
    };
  }

  // Georgian
  if (locale === "ka") {
    return {
      heroBadge: `ვებ დიზაინი კბილის კლინიკებისთვის ${zone.label}-ში`,
      heroTitlePre: "ვებსაიტი კლინიკებისთვის",
      heroTitleHighlight: zone.label,
      heroTitlePost: "-ში",
      heroSubtitle: `სწრაფი ვებსაიტები და ლოკალური SEO კბილის კლინიკებისთვის ${firstThreeNeighborhoods}, ${zone.label} და სხვა.`,
      demosTitle: `ვებსაიტის ფორმატები, რომლებიც მუშაობენ ${zone.label}-ში`,
      demosSubtitle: `ერთი გვერდი, მრავალ გვერდი ან ონლაინ დაჯავშნა, რომელიც მორგებულია იმ მეთოდზე, როგორც კლინიკები ${zone.label}-ში იზიდავენ ლოკალურ პაციენტებს.`,
      featuresTitle: `რა მიიღებს თქვენი კლინიკა ${zone.label}-ში`,
      featuresSubtitle: `მეტი ხილვადობა, სადაც ეს მნიშვნელოვანია, ნაკლები დაკარგული ტრაფიკი და უფრო ძლიერი ლოკალური გაყიდვის შეტყობინება.`,
      faqTitle: `ნაკადი კითხვები კლინიკებიდან ${zone.label}-ში`,
      faqSubtitle: `ფოკუსირებული ლოკალურ SEO-ზე, მობილური კონვერტაციაზე და როგორ გარდააქმნოთ ლოკალური ტრაფიკი რეალურ მოთხოვნებად.`,
      ctaTitle: `გინდათ მეტი პაციენტის მოთხოვნა ${zone.label}-ში?`,
      ctaSubtitle: `დაჯავშნეთ 15 წუთიანი მოწვევა ან გამოგვიგზავნეთ WhatsApp შეტყობინება. ჩვენ გაჩვენებთ, თუ როგორ გარდააქმნოთ ლოკალური ტრაფიკი ${zone.label}-ში ჯამდენებად.`,
      ctaPlaceholder: `გვითხარით თქვენი კლინიკის შესახებ ${zone.label}-ში, თქვენი სერვისების და იმ სფეროების შესახებ, სადაც გინდათ თქვენი პოზიცია...`,
      metaTitle: `ვებ დიზაინი კბილის კლინიკებისთვის ${zone.label}-ში`,
      metaDescription: `ვებ & SEO კბილის კლინიკებისთვის ${zone.label}-ში: ${neighborhoodsList} და სხვა. სწრაფი საიტები, რეალური პაციენტები.`,
      serviceType: `ვებ დიზაინი და ლოკალური SEO კბილის კლინიკებისთვის ${zone.label}-ში`,
      cityPanelLabel: "ლოკალური სიგნალი",
      cityPanelText: `ლოკალური რელევანტურობა, უფრო ნათელი პოზიცია და უფრო ძლიერი შეძენის შეტყობინება კლინიკებისთვის ${zone.label}-ში.`,
      clinicPanelLabel: "კლინიკის შეთავაზება",
      seoCardTitle: "ლოკალური SEO",
      seoCardText: "სტრუქტურა, შეტყობინებები და სერვისის გვერდები, რომლებიც გამიზნული იმ ზონებზე, სადაც გინდათ რეიტინგი.",
      conversionCardTitle: "კონვერტაციოი",
      conversionCardText: "WhatsApp, ზარი და ფორმის ნაკადები, რომელიც მორგებულია ლოკალურ განზრახვაზე და პირველი ჯამდენებზე.",
    };
  }

  // Spanish (fallback)
  return {
    heroBadge: `Diseno web para clinicas dentales en ${zone.label}`,
    heroTitlePre: "Web para clinicas en",
    heroTitleHighlight: zone.label,
    heroTitlePost: "",
    heroSubtitle: `Webs rapidas y SEO local para clinicas dentales en ${firstThreeNeighborhoods}, ${zone.label} y mas.`,
    demosTitle: `Modelos de web que funcionan en ${zone.label}`,
    demosSubtitle: `Pagina unica, web multipagina o citas online: elegimos la estructura que mejor encaja con como busca paciente local en ${zone.label}.`,
    featuresTitle: `Lo que gana tu clinica en ${zone.label}`,
    featuresSubtitle: `Mas visibilidad en los barrios que te interesan, menos trafico perdido y una propuesta mucho mas local.`,
    faqTitle: `Preguntas habituales de clinicas en ${zone.label}`,
    faqSubtitle: `Centradas en SEO local, conversion movil y como transformar busquedas de ciudad en citas reales.`,
    ctaTitle: `Quieres mas solicitudes de pacientes en ${zone.label}?`,
    ctaSubtitle: `Reserva una llamada de 15 minutos o escribenos por WhatsApp. Te explicamos como convertir trafico local de ${zone.label} en citas reales.`,
    ctaPlaceholder: `Cuentanos sobre tu clinica en ${zone.label}, tus tratamientos y en que zonas quieres posicionarte...`,
    metaTitle: `Diseno web para clinicas dentales en ${zone.label}`,
    metaDescription: `Diseno web & SEO local para clinicas dentales en ${zone.label}: ${neighborhoodsList} y mas. Webs rapidas, pacientes reales.`,
    serviceType: `Diseno web y SEO local para clinicas dentales en ${zone.label}`,
    cityPanelLabel: "Senal local",
    cityPanelText: `Relevancia local, mejor posicionamiento y una propuesta mas clara para clinicas en ${zone.label}.`,
    clinicPanelLabel: "Oferta clinica",
    seoCardTitle: "SEO local",
    seoCardText: "Estructura, mensajes y paginas de servicio alineadas con las zonas donde quieres aparecer.",
    conversionCardTitle: "Conversion",
    conversionCardText: "WhatsApp, llamada y formulario pensados para convertir trafico local en primeras visitas.",
  };
}
