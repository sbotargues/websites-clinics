export type LegalLocale = "es" | "en" | "fr" | "de" | "it" | "pt" | "ca" | "ru" | "nl" | "ka";

type LegalSection = {
  heading: string;
  paragraphs: string[];
};

type LegalDocument = {
  title: string;
  updatedLabel: string;
  updatedValue: string;
  intro: string;
  sections: LegalSection[];
};

type CookieBannerCopy = {
  message: string;
  policyLink: string;
  accept: string;
  reject: string;
  manage: string;
  dialogTitle: string;
  dialogDescription: string;
  essentialLabel: string;
  essentialHint: string;
  analyticsLabel: string;
  analyticsHint: string;
  save: string;
  cancel: string;
};

export type LegalCopy = {
  header: {
    brandLine1: string;
    brandLine2: string;
    home: string;
  };
  links: {
    privacy: string;
    cookies: string;
    terms: string;
  };
  privacy: LegalDocument;
  cookies: LegalDocument;
  terms: LegalDocument;
  banner: CookieBannerCopy;
};

const baseDate = "06/04/2026";

const es: LegalCopy = {
  header: { brandLine1: "webs", brandLine2: "para clinicas", home: "Volver a inicio" },
  links: { privacy: "Politica de privacidad", cookies: "Politica de cookies", terms: "Terminos y condiciones" },
  privacy: {
    title: "Politica de privacidad",
    updatedLabel: "Ultima actualizacion",
    updatedValue: baseDate,
    intro: "Este sitio recopila datos de contacto de forma minima para responder consultas comerciales y mejorar la experiencia de navegacion.",
    sections: [
      {
        heading: "Datos que tratamos",
        paragraphs: [
          "Podemos tratar nombre, email, telefono y el contenido del mensaje cuando utilizas formularios o canales de contacto.",
          "No solicitamos categorias especiales de datos ni informacion no necesaria para atenderte.",
        ],
      },
      {
        heading: "Finalidad del tratamiento",
        paragraphs: [
          "Gestionar solicitudes de informacion, preparar propuestas y mantener comunicacion profesional contigo.",
          "Realizar mediciones agregadas de uso del sitio cuando el usuario lo autoriza en el panel de cookies.",
        ],
      },
      {
        heading: "Conservacion y derechos",
        paragraphs: [
          "Conservamos los datos el tiempo necesario para la finalidad indicada o hasta que se solicite su supresion.",
          "Puedes solicitar acceso, rectificacion, supresion u oposicion escribiendo al email de contacto mostrado en esta web.",
        ],
      },
    ],
  },
  cookies: {
    title: "Politica de cookies",
    updatedLabel: "Ultima actualizacion",
    updatedValue: baseDate,
    intro: "Utilizamos cookies tecnicas necesarias para el funcionamiento basico y, opcionalmente, cookies de analitica anonima.",
    sections: [
      {
        heading: "Cookies necesarias",
        paragraphs: [
          "Permiten funciones esenciales como recordar idioma, preferencias de interfaz y estado de consentimiento.",
          "Estas cookies no requieren consentimiento previo porque son imprescindibles para prestar el servicio solicitado.",
        ],
      },
      {
        heading: "Cookies opcionales",
        paragraphs: [
          "Solo si lo autorizas, podemos activar medicion estadistica agregada para entender el rendimiento del sitio.",
          "No se usan para vender datos ni para publicidad comportamental en esta web.",
        ],
      },
      {
        heading: "Gestion de preferencias",
        paragraphs: [
          "Puedes aceptar o rechazar cookies opcionales desde el banner inicial o desde el modal de preferencias.",
          "Tu decision se guarda localmente y puedes cambiarla en cualquier momento.",
        ],
      },
    ],
  },
  terms: {
    title: "Terminos y condiciones",
    updatedLabel: "Ultima actualizacion",
    updatedValue: baseDate,
    intro: "Este sitio ofrece informacion general sobre servicios de diseno web para clinicas. Su uso implica la aceptacion de estas condiciones.",
    sections: [
      {
        heading: "Uso del sitio",
        paragraphs: [
          "El usuario se compromete a utilizar la web de forma licita, respetuosa y sin causar danos tecnicos ni de reputacion.",
          "El contenido tiene finalidad informativa y puede actualizarse sin previo aviso.",
        ],
      },
      {
        heading: "Propiedad intelectual",
        paragraphs: [
          "Textos, diseno, codigo y elementos graficos del sitio estan protegidos por derechos de propiedad intelectual.",
          "No se permite su reproduccion o reutilizacion comercial sin autorizacion expresa.",
        ],
      },
      {
        heading: "Limitacion de responsabilidad",
        paragraphs: [
          "No garantizamos ausencia absoluta de errores o interrupciones, aunque aplicamos medidas razonables para evitarlos.",
          "No nos responsabilizamos del contenido de sitios externos enlazados por terceros.",
        ],
      },
    ],
  },
  banner: {
    message: "Usamos cookies necesarias para que la web funcione y cookies opcionales para medir uso de forma agregada.",
    policyLink: "Leer politica de cookies",
    accept: "Aceptar",
    reject: "Rechazar",
    manage: "Configurar",
    dialogTitle: "Preferencias de cookies",
    dialogDescription: "Gestiona que tipos de cookies quieres permitir en esta web.",
    essentialLabel: "Cookies necesarias",
    essentialHint: "Siempre activas",
    analyticsLabel: "Cookies de analitica",
    analyticsHint: "Medicion anonima para mejorar el sitio",
    save: "Guardar seleccion",
    cancel: "Cancelar",
  },
};

const en: LegalCopy = {
  header: { brandLine1: "websites", brandLine2: "for clinics", home: "Back to home" },
  links: { privacy: "Privacy Policy", cookies: "Cookie Policy", terms: "Terms and Conditions" },
  privacy: {
    title: "Privacy Policy",
    updatedLabel: "Last updated",
    updatedValue: baseDate,
    intro: "This website collects minimal contact data to answer business inquiries and improve browsing experience.",
    sections: [
      { heading: "Data we process", paragraphs: ["We may process name, email, phone number and message content when you contact us.", "We do not request sensitive categories of personal data."] },
      { heading: "Purpose", paragraphs: ["Handle information requests, prepare proposals and keep professional communication.", "Run aggregated usage analytics only when users allow it in cookie settings."] },
      { heading: "Retention and rights", paragraphs: ["Data is kept only for as long as needed for the stated purpose.", "You may request access, rectification, deletion or objection via the contact email shown on this website."] },
    ],
  },
  cookies: {
    title: "Cookie Policy",
    updatedLabel: "Last updated",
    updatedValue: baseDate,
    intro: "We use necessary cookies for core functionality and optional anonymous analytics cookies.",
    sections: [
      { heading: "Necessary cookies", paragraphs: ["These enable essential features such as language, UI preferences and consent status.", "They are required to provide the requested service."] },
      { heading: "Optional cookies", paragraphs: ["If you consent, we may enable aggregated analytics to understand website performance.", "We do not sell data or run behavioral ads on this website."] },
      { heading: "Managing preferences", paragraphs: ["You can accept or reject optional cookies from the banner or settings dialog.", "Your choice is stored locally and can be changed anytime."] },
    ],
  },
  terms: {
    title: "Terms and Conditions",
    updatedLabel: "Last updated",
    updatedValue: baseDate,
    intro: "This site provides general information about website design services for clinics. Using it implies acceptance of these terms.",
    sections: [
      { heading: "Website use", paragraphs: ["Users must use this website lawfully and respectfully.", "Content is informational and may be updated without prior notice."] },
      { heading: "Intellectual property", paragraphs: ["Texts, design, code and visual assets are protected by intellectual property rights.", "Commercial reuse is not allowed without explicit authorization."] },
      { heading: "Liability", paragraphs: ["We apply reasonable measures to avoid errors and downtime, but cannot guarantee absolute continuity.", "We are not responsible for third-party external websites linked from this site."] },
    ],
  },
  banner: {
    message: "We use necessary cookies for site operation and optional cookies for anonymous analytics.",
    policyLink: "Read cookie policy",
    accept: "Accept",
    reject: "Reject",
    manage: "Manage",
    dialogTitle: "Cookie preferences",
    dialogDescription: "Choose which cookie categories you want to allow on this website.",
    essentialLabel: "Necessary cookies",
    essentialHint: "Always enabled",
    analyticsLabel: "Analytics cookies",
    analyticsHint: "Anonymous measurement to improve the site",
    save: "Save selection",
    cancel: "Cancel",
  },
};

const fr: LegalCopy = {
  ...en,
  header: { brandLine1: "sites web", brandLine2: "pour cliniques", home: "Retour a l'accueil" },
  links: { privacy: "Politique de confidentialite", cookies: "Politique de cookies", terms: "Conditions generales" },
  privacy: {
    ...en.privacy,
    title: "Politique de confidentialite",
    updatedLabel: "Derniere mise a jour",
    intro: "Ce site collecte un minimum de donnees de contact pour repondre aux demandes et ameliorer la navigation.",
    sections: [
      { heading: "Donnees traitees", paragraphs: ["Nous pouvons traiter le nom, l'email, le telephone et le contenu du message quand vous nous contactez.", "Nous ne demandons pas de categories sensibles de donnees personnelles."] },
      { heading: "Finalite", paragraphs: ["Gerer les demandes d'information, preparer des propositions et maintenir une communication professionnelle.", "Realiser des mesures d'usage agregees uniquement si l'utilisateur l'autorise dans les preferences de cookies."] },
      { heading: "Conservation et droits", paragraphs: ["Les donnees sont conservees uniquement le temps necessaire a la finalite indiquee.", "Vous pouvez demander l'acces, la rectification, la suppression ou l'opposition via l'email de contact du site."] },
    ],
  },
  cookies: {
    ...en.cookies,
    title: "Politique de cookies",
    updatedLabel: "Derniere mise a jour",
    intro: "Nous utilisons des cookies necessaires et des cookies analytiques anonymes optionnels.",
    sections: [
      { heading: "Cookies necessaires", paragraphs: ["Ils permettent les fonctions essentielles comme la langue, les preferences d'interface et le consentement.", "Ils sont indispensables pour fournir le service demande."] },
      { heading: "Cookies optionnels", paragraphs: ["Avec votre accord, nous activons une mesure statistique agregee pour comprendre les performances du site.", "Nous ne vendons pas de donnees et n'utilisons pas de publicite comportementale sur ce site."] },
      { heading: "Gestion des preferences", paragraphs: ["Vous pouvez accepter ou refuser les cookies optionnels depuis la banniere ou le dialogue de preferences.", "Votre choix est enregistre localement et peut etre modifie a tout moment."] },
    ],
  },
  terms: {
    ...en.terms,
    title: "Conditions generales",
    updatedLabel: "Derniere mise a jour",
    intro: "Ce site fournit des informations generales sur des services de conception web pour cliniques.",
    sections: [
      { heading: "Utilisation du site", paragraphs: ["L'utilisateur doit utiliser le site de maniere legale et respectueuse.", "Le contenu est informatif et peut etre mis a jour sans preavis."] },
      { heading: "Propriete intellectuelle", paragraphs: ["Les textes, le design, le code et les elements graphiques sont proteges par des droits de propriete intellectuelle.", "La reutilisation commerciale n'est pas autorisee sans autorisation expresse."] },
      { heading: "Limitation de responsabilite", paragraphs: ["Nous appliquons des mesures raisonnables pour eviter erreurs et interruptions, sans garantie absolue de continuite.", "Nous ne sommes pas responsables du contenu des sites externes tiers lies depuis ce site."] },
    ],
  },
  banner: { ...en.banner, message: "Nous utilisons des cookies necessaires et des cookies optionnels d'analyse anonyme.", policyLink: "Voir la politique de cookies", accept: "Accepter", reject: "Refuser", manage: "Configurer", dialogTitle: "Preferences de cookies", dialogDescription: "Choisissez les cookies a autoriser.", essentialLabel: "Cookies necessaires", essentialHint: "Toujours actifs", analyticsLabel: "Cookies d'analyse", analyticsHint: "Mesure anonyme", save: "Enregistrer", cancel: "Annuler" },
};

const de: LegalCopy = {
  ...en,
  header: { brandLine1: "websites", brandLine2: "fur praxen", home: "Zur Startseite" },
  links: { privacy: "Datenschutzerklarung", cookies: "Cookie-Richtlinie", terms: "Allgemeine Bedingungen" },
  privacy: {
    ...en.privacy,
    title: "Datenschutzerklarung",
    updatedLabel: "Zuletzt aktualisiert",
    intro: "Diese Website verarbeitet minimale Kontaktdaten zur Beantwortung von Anfragen.",
    sections: [
      { heading: "Verarbeitete Daten", paragraphs: ["Wir konnen Name, E-Mail, Telefonnummer und Nachrichteninhalt verarbeiten, wenn Sie uns kontaktieren.", "Wir fragen keine sensiblen Kategorien personenbezogener Daten ab."] },
      { heading: "Zweck", paragraphs: ["Bearbeitung von Informationsanfragen, Erstellung von Angeboten und professionelle Kommunikation.", "Aggregierte Nutzungsanalyse erfolgt nur mit Zustimmung in den Cookie-Einstellungen."] },
      { heading: "Speicherung und Rechte", paragraphs: ["Daten werden nur so lange gespeichert, wie es fur den genannten Zweck erforderlich ist.", "Sie konnen Auskunft, Berichtigung, Loschung oder Widerspruch uber die Kontakt-E-Mail beantragen."] },
    ],
  },
  cookies: {
    ...en.cookies,
    title: "Cookie-Richtlinie",
    updatedLabel: "Zuletzt aktualisiert",
    intro: "Wir verwenden notwendige Cookies und optionale anonyme Analyse-Cookies.",
    sections: [
      { heading: "Notwendige Cookies", paragraphs: ["Sie ermoglichen essentielle Funktionen wie Sprache, UI-Praferenzen und Einwilligungsstatus.", "Diese Cookies sind fur die Bereitstellung des angeforderten Dienstes erforderlich."] },
      { heading: "Optionale Cookies", paragraphs: ["Nur mit Ihrer Zustimmung aktivieren wir aggregierte Statistik zur Leistungsanalyse der Website.", "Wir verkaufen keine Daten und verwenden keine verhaltensbasierte Werbung auf dieser Website."] },
      { heading: "Einstellungen verwalten", paragraphs: ["Optionale Cookies konnen uber Banner oder Einstellungsdialog akzeptiert oder abgelehnt werden.", "Ihre Auswahl wird lokal gespeichert und kann jederzeit geandert werden."] },
    ],
  },
  terms: {
    ...en.terms,
    title: "Allgemeine Bedingungen",
    updatedLabel: "Zuletzt aktualisiert",
    intro: "Diese Website stellt allgemeine Informationen zu Webdesign-Dienstleistungen fur Kliniken bereit.",
    sections: [
      { heading: "Nutzung der Website", paragraphs: ["Nutzer mussen die Website rechtmassig und respektvoll verwenden.", "Inhalte dienen Informationszwecken und konnen ohne Vorankundigung aktualisiert werden."] },
      { heading: "Geistiges Eigentum", paragraphs: ["Texte, Design, Code und grafische Elemente sind urheberrechtlich geschutzt.", "Kommerzielle Wiederverwendung ist ohne ausdruckliche Genehmigung nicht erlaubt."] },
      { heading: "Haftung", paragraphs: ["Wir treffen angemessene Massnahmen gegen Fehler und Ausfalle, konnen aber keine absolute Verfugbarkeit garantieren.", "Fur Inhalte externer Drittseiten, die verlinkt sind, ubernehmen wir keine Verantwortung."] },
    ],
  },
  banner: { ...en.banner, message: "Wir verwenden notwendige Cookies und optionale anonyme Analyse-Cookies.", policyLink: "Cookie-Richtlinie lesen", accept: "Akzeptieren", reject: "Ablehnen", manage: "Einstellen", dialogTitle: "Cookie-Einstellungen", dialogDescription: "Wahlen Sie, welche Cookies erlaubt sind.", essentialLabel: "Notwendige Cookies", essentialHint: "Immer aktiv", analyticsLabel: "Analyse-Cookies", analyticsHint: "Anonyme Messung", save: "Auswahl speichern", cancel: "Abbrechen" },
};

const it: LegalCopy = {
  ...en,
  header: { brandLine1: "siti web", brandLine2: "per cliniche", home: "Torna alla home" },
  links: { privacy: "Informativa sulla privacy", cookies: "Informativa sui cookie", terms: "Termini e condizioni" },
  privacy: {
    ...en.privacy,
    title: "Informativa sulla privacy",
    updatedLabel: "Ultimo aggiornamento",
    intro: "Questo sito raccoglie dati minimi di contatto per rispondere alle richieste.",
    sections: [
      { heading: "Dati trattati", paragraphs: ["Possiamo trattare nome, email, telefono e contenuto del messaggio quando ci contatti.", "Non richiediamo categorie sensibili di dati personali."] },
      { heading: "Finalita", paragraphs: ["Gestire richieste informative, preparare proposte e mantenere comunicazioni professionali.", "Le misurazioni aggregate di utilizzo vengono effettuate solo con consenso nelle preferenze cookie."] },
      { heading: "Conservazione e diritti", paragraphs: ["I dati sono conservati solo per il tempo necessario alle finalita indicate.", "Puoi richiedere accesso, rettifica, cancellazione o opposizione tramite l'email di contatto del sito."] },
    ],
  },
  cookies: {
    ...en.cookies,
    title: "Informativa sui cookie",
    updatedLabel: "Ultimo aggiornamento",
    intro: "Utilizziamo cookie necessari e cookie analitici anonimi opzionali.",
    sections: [
      { heading: "Cookie necessari", paragraphs: ["Abilitano funzioni essenziali come lingua, preferenze interfaccia e stato del consenso.", "Sono indispensabili per fornire il servizio richiesto."] },
      { heading: "Cookie opzionali", paragraphs: ["Solo con il tuo consenso attiviamo analisi aggregate per capire le prestazioni del sito.", "Non vendiamo dati e non usiamo pubblicita comportamentale su questo sito."] },
      { heading: "Gestione preferenze", paragraphs: ["Puoi accettare o rifiutare i cookie opzionali dal banner o dal dialogo impostazioni.", "La scelta viene salvata localmente e puo essere modificata in qualsiasi momento."] },
    ],
  },
  terms: {
    ...en.terms,
    title: "Termini e condizioni",
    updatedLabel: "Ultimo aggiornamento",
    intro: "Questo sito fornisce informazioni generali su servizi web per cliniche.",
    sections: [
      { heading: "Uso del sito", paragraphs: ["Gli utenti devono usare il sito in modo lecito e rispettoso.", "I contenuti sono informativi e possono essere aggiornati senza preavviso."] },
      { heading: "Proprieta intellettuale", paragraphs: ["Testi, design, codice ed elementi grafici sono protetti da diritti di proprieta intellettuale.", "Il riutilizzo commerciale non e consentito senza autorizzazione esplicita."] },
      { heading: "Limitazione di responsabilita", paragraphs: ["Applichiamo misure ragionevoli per evitare errori e interruzioni, ma non garantiamo continuita assoluta.", "Non siamo responsabili dei contenuti di siti esterni di terze parti collegati da questo sito."] },
    ],
  },
  banner: { ...en.banner, message: "Usiamo cookie necessari e cookie opzionali di analisi anonima.", policyLink: "Leggi la cookie policy", accept: "Accetta", reject: "Rifiuta", manage: "Configura", dialogTitle: "Preferenze cookie", dialogDescription: "Scegli quali cookie consentire.", essentialLabel: "Cookie necessari", essentialHint: "Sempre attivi", analyticsLabel: "Cookie analitici", analyticsHint: "Misurazione anonima", save: "Salva selezione", cancel: "Annulla" },
};

const pt: LegalCopy = {
  ...en,
  header: { brandLine1: "sites", brandLine2: "para clinicas", home: "Voltar ao inicio" },
  links: { privacy: "Politica de privacidade", cookies: "Politica de cookies", terms: "Termos e condicoes" },
  privacy: {
    ...en.privacy,
    title: "Politica de privacidade",
    updatedLabel: "Ultima atualizacao",
    intro: "Este site recolhe dados minimos de contacto para responder a pedidos.",
    sections: [
      { heading: "Dados tratados", paragraphs: ["Podemos tratar nome, email, telefone e conteudo da mensagem quando nos contacta.", "Nao solicitamos categorias sensiveis de dados pessoais."] },
      { heading: "Finalidade", paragraphs: ["Gerir pedidos de informacao, preparar propostas e manter comunicacao profissional.", "As medicoes agregadas de uso so sao feitas com consentimento nas preferencias de cookies."] },
      { heading: "Conservacao e direitos", paragraphs: ["Os dados sao conservados apenas durante o tempo necessario para a finalidade indicada.", "Pode solicitar acesso, retificacao, apagamento ou oposicao atraves do email de contacto do site."] },
    ],
  },
  cookies: {
    ...en.cookies,
    title: "Politica de cookies",
    updatedLabel: "Ultima atualizacao",
    intro: "Usamos cookies necessarios e cookies opcionais de analise anonima.",
    sections: [
      { heading: "Cookies necessarios", paragraphs: ["Permitem funcoes essenciais como idioma, preferencias de interface e estado de consentimento.", "Sao indispensaveis para prestar o servico solicitado."] },
      { heading: "Cookies opcionais", paragraphs: ["Com o seu consentimento, ativamos analise agregada para compreender o desempenho do site.", "Nao vendemos dados nem usamos publicidade comportamental neste site."] },
      { heading: "Gestao de preferencias", paragraphs: ["Pode aceitar ou rejeitar cookies opcionais no banner inicial ou no dialogo de preferencias.", "A sua escolha e guardada localmente e pode ser alterada a qualquer momento."] },
    ],
  },
  terms: {
    ...en.terms,
    title: "Termos e condicoes",
    updatedLabel: "Ultima atualizacao",
    intro: "Este site fornece informacao geral sobre servicos web para clinicas.",
    sections: [
      { heading: "Utilizacao do site", paragraphs: ["O utilizador deve usar o site de forma legal e respeitosa.", "O conteudo e informativo e pode ser atualizado sem aviso previo."] },
      { heading: "Propriedade intelectual", paragraphs: ["Textos, design, codigo e elementos graficos estao protegidos por direitos de propriedade intelectual.", "A reutilizacao comercial nao e permitida sem autorizacao expressa."] },
      { heading: "Limitacao de responsabilidade", paragraphs: ["Aplicamos medidas razoaveis para evitar erros e interrupcoes, mas sem garantia absoluta de continuidade.", "Nao somos responsaveis pelo conteudo de sites externos de terceiros ligados a este site."] },
    ],
  },
  banner: { ...en.banner, message: "Usamos cookies necessarios e cookies opcionais de analise anonima.", policyLink: "Ler politica de cookies", accept: "Aceitar", reject: "Rejeitar", manage: "Configurar", dialogTitle: "Preferencias de cookies", dialogDescription: "Escolha os tipos de cookies permitidos.", essentialLabel: "Cookies necessarios", essentialHint: "Sempre ativos", analyticsLabel: "Cookies de analise", analyticsHint: "Medicao anonima", save: "Guardar selecao", cancel: "Cancelar" },
};

const ca: LegalCopy = {
  ...en,
  header: { brandLine1: "webs", brandLine2: "per a cliniques", home: "Tornar a l'inici" },
  links: { privacy: "Politica de privacitat", cookies: "Politica de cookies", terms: "Termes i condicions" },
  privacy: {
    ...en.privacy,
    title: "Politica de privacitat",
    updatedLabel: "Darrera actualitzacio",
    intro: "Aquest lloc recull dades minimes de contacte per respondre consultes.",
    sections: [
      { heading: "Dades que tractem", paragraphs: ["Podem tractar nom, correu, telefon i contingut del missatge quan contactes amb nosaltres.", "No demanem categories sensibles de dades personals."] },
      { heading: "Finalitat", paragraphs: ["Gestionar consultes, preparar propostes i mantenir comunicacio professional.", "Les mesures agregades d'us nomes s'activen amb consentiment a les preferencies de cookies."] },
      { heading: "Conservacio i drets", paragraphs: ["Les dades es conserven nomes el temps necessari per a la finalitat indicada.", "Pots demanar acces, rectificacio, supressio o oposicio per correu de contacte del lloc."] },
    ],
  },
  cookies: {
    ...en.cookies,
    title: "Politica de cookies",
    updatedLabel: "Darrera actualitzacio",
    intro: "Fem servir cookies necessaries i cookies opcionals d'analitica anonima.",
    sections: [
      { heading: "Cookies necessaries", paragraphs: ["Permeten funcions essencials com idioma, preferencies d'interficie i estat del consentiment.", "Son imprescindibles per oferir el servei sollicitat."] },
      { heading: "Cookies opcionals", paragraphs: ["Amb el teu consentiment, podem activar mesura agregada per entendre el rendiment del lloc.", "No venem dades ni fem publicitat comportamental en aquest lloc."] },
      { heading: "Gestio de preferencies", paragraphs: ["Pots acceptar o rebutjar cookies opcionals des del banner o el dialeg de preferencies.", "La teva decisio es desa localment i es pot canviar en qualsevol moment."] },
    ],
  },
  terms: {
    ...en.terms,
    title: "Termes i condicions",
    updatedLabel: "Darrera actualitzacio",
    intro: "Aquest lloc ofereix informacio general sobre serveis web per a cliniques.",
    sections: [
      { heading: "Us del lloc", paragraphs: ["L'usuari s'ha de fer servir el lloc de manera legal i respectuosa.", "El contingut es informatiu i pot actualitzar-se sense avis previ."] },
      { heading: "Propietat intellectual", paragraphs: ["Texts, disseny, codi i elements grafics estan protegits per drets de propietat intellectual.", "La reutilitzacio comercial no esta permesa sense autoritzacio expressa."] },
      { heading: "Limitacio de responsabilitat", paragraphs: ["Apliquem mesures raonables per evitar errors i interrupcions, sense garantia absoluta de continuitat.", "No som responsables del contingut de llocs externs de tercers enllacats des d'aquest lloc."] },
    ],
  },
  banner: { ...en.banner, message: "Fem servir cookies necessaries i cookies opcionals d'analitica anonima.", policyLink: "Llegir politica de cookies", accept: "Acceptar", reject: "Rebutjar", manage: "Configurar", dialogTitle: "Preferencies de cookies", dialogDescription: "Tria quines cookies vols permetre.", essentialLabel: "Cookies necessaries", essentialHint: "Sempre actives", analyticsLabel: "Cookies d'analitica", analyticsHint: "Mesura anonima", save: "Desar seleccio", cancel: "Cancelar" },
};

const ru: LegalCopy = {
  ...en,
  header: { brandLine1: "сайты", brandLine2: "для клиник", home: "На главную" },
  links: { privacy: "Политика конфиденциальности", cookies: "Политика cookie", terms: "Условия использования" },
  privacy: {
    ...en.privacy,
    title: "Политика конфиденциальности",
    updatedLabel: "Последнее обновление",
    intro: "Сайт обрабатывает минимальные контактные данные для ответа на запросы.",
    sections: [
      { heading: "Какие данные обрабатываются", paragraphs: ["Мы можем обрабатывать имя, email, телефон и содержание сообщения при обращении через формы связи.", "Мы не запрашиваем чувствительные категории персональных данных."] },
      { heading: "Цели обработки", paragraphs: ["Обработка запросов, подготовка предложений и профессиональная коммуникация.", "Сводная аналитика использования включается только при согласии пользователя в настройках cookie."] },
      { heading: "Хранение и права", paragraphs: ["Данные хранятся только в течение срока, необходимого для заявленных целей.", "Вы можете запросить доступ, исправление, удаление или возражение по контактному email, указанному на сайте."] },
    ],
  },
  cookies: {
    ...en.cookies,
    title: "Политика cookie",
    updatedLabel: "Последнее обновление",
    intro: "Мы используем обязательные cookie и необязательные анонимные аналитические cookie.",
    sections: [
      { heading: "Обязательные cookie", paragraphs: ["Они обеспечивают базовые функции: язык, настройки интерфейса и состояние согласия.", "Эти cookie необходимы для предоставления запрошенного сервиса."] },
      { heading: "Необязательные cookie", paragraphs: ["Только с вашего согласия мы включаем агрегированную статистику для анализа работы сайта.", "Мы не продаем данные и не используем поведенческую рекламу на этом сайте."] },
      { heading: "Управление настройками", paragraphs: ["Вы можете принять или отклонить необязательные cookie через баннер или диалог настроек.", "Ваш выбор сохраняется локально и может быть изменен в любой момент."] },
    ],
  },
  terms: {
    ...en.terms,
    title: "Условия использования",
    updatedLabel: "Последнее обновление",
    intro: "Сайт предоставляет общую информацию об услугах веб-дизайна для клиник.",
    sections: [
      { heading: "Использование сайта", paragraphs: ["Пользователь обязан использовать сайт законно и уважительно.", "Контент носит информационный характер и может обновляться без предварительного уведомления."] },
      { heading: "Интеллектуальная собственность", paragraphs: ["Тексты, дизайн, код и графические элементы защищены правами интеллектуальной собственности.", "Коммерческое использование без явного разрешения запрещено."] },
      { heading: "Ограничение ответственности", paragraphs: ["Мы применяем разумные меры для предотвращения ошибок и сбоев, но не гарантируем абсолютную непрерывность.", "Мы не несем ответственности за содержимое внешних сайтов третьих лиц, на которые могут вести ссылки."] },
    ],
  },
  banner: { ...en.banner, message: "Мы используем обязательные cookie и необязательные анонимные аналитические cookie.", policyLink: "Открыть политику cookie", accept: "Принять", reject: "Отклонить", manage: "Настроить", dialogTitle: "Настройки cookie", dialogDescription: "Выберите, какие cookie разрешить.", essentialLabel: "Обязательные cookie", essentialHint: "Всегда включены", analyticsLabel: "Аналитические cookie", analyticsHint: "Анонимная статистика", save: "Сохранить выбор", cancel: "Отмена" },
};

const nl: LegalCopy = {
  ...en,
  header: { brandLine1: "websites", brandLine2: "voor klinieken", home: "Terug naar home" },
  links: { privacy: "Privacybeleid", cookies: "Cookiebeleid", terms: "Algemene voorwaarden" },
  privacy: {
    ...en.privacy,
    title: "Privacybeleid",
    updatedLabel: "Laatst bijgewerkt",
    intro: "Deze website verwerkt minimale contactgegevens om op aanvragen te reageren.",
    sections: [
      { heading: "Welke gegevens we verwerken", paragraphs: ["We kunnen naam, e-mail, telefoonnummer en berichtinhoud verwerken wanneer je contact met ons opneemt.", "We vragen geen gevoelige categorieen persoonsgegevens op."] },
      { heading: "Doel van verwerking", paragraphs: ["Afhandelen van informatieaanvragen, opstellen van voorstellen en professionele communicatie.", "Geaggregeerde gebruiksmeting wordt alleen uitgevoerd met toestemming via cookie-instellingen."] },
      { heading: "Bewaartermijn en rechten", paragraphs: ["Gegevens worden alleen bewaard zolang nodig is voor het aangegeven doel.", "Je kunt inzage, correctie, verwijdering of bezwaar aanvragen via het contact-e-mailadres op deze website."] },
    ],
  },
  cookies: {
    ...en.cookies,
    title: "Cookiebeleid",
    updatedLabel: "Laatst bijgewerkt",
    intro: "We gebruiken noodzakelijke cookies en optionele anonieme analytische cookies.",
    sections: [
      { heading: "Noodzakelijke cookies", paragraphs: ["Deze maken basisfuncties mogelijk zoals taal, interfacevoorkeuren en toestemmingsstatus.", "Ze zijn noodzakelijk om de gevraagde dienst te leveren."] },
      { heading: "Optionele cookies", paragraphs: ["Alleen met toestemming activeren we geaggregeerde analyses om prestaties van de website te begrijpen.", "We verkopen geen gegevens en gebruiken geen gedragsadvertenties op deze website."] },
      { heading: "Voorkeuren beheren", paragraphs: ["Je kunt optionele cookies accepteren of weigeren via de banner of instellingen-dialoog.", "Je keuze wordt lokaal opgeslagen en kan op elk moment worden aangepast."] },
    ],
  },
  terms: {
    ...en.terms,
    title: "Algemene voorwaarden",
    updatedLabel: "Laatst bijgewerkt",
    intro: "Deze website geeft algemene informatie over webdesigndiensten voor klinieken.",
    sections: [
      { heading: "Gebruik van de website", paragraphs: ["De gebruiker moet de website op een wettelijke en respectvolle manier gebruiken.", "Inhoud is informatief en kan zonder voorafgaande kennisgeving worden bijgewerkt."] },
      { heading: "Intellectueel eigendom", paragraphs: ["Teksten, ontwerp, code en grafische elementen zijn beschermd door intellectuele eigendomsrechten.", "Commercieel hergebruik is niet toegestaan zonder uitdrukkelijke toestemming."] },
      { heading: "Aansprakelijkheidsbeperking", paragraphs: ["We nemen redelijke maatregelen om fouten en onderbrekingen te voorkomen, maar garanderen geen absolute continuiteit.", "We zijn niet verantwoordelijk voor inhoud van externe websites van derden waarnaar wordt gelinkt."] },
    ],
  },
  banner: { ...en.banner, message: "We gebruiken noodzakelijke cookies en optionele anonieme analytische cookies.", policyLink: "Lees cookiebeleid", accept: "Accepteren", reject: "Weigeren", manage: "Instellen", dialogTitle: "Cookievoorkeuren", dialogDescription: "Kies welke cookies je toestaat.", essentialLabel: "Noodzakelijke cookies", essentialHint: "Altijd actief", analyticsLabel: "Analytische cookies", analyticsHint: "Anonieme meting", save: "Keuze opslaan", cancel: "Annuleren" },
};

const ka: LegalCopy = {
  ...en,
  header: { brandLine1: "ვებსაიტები", brandLine2: "კლინიკებისთვის", home: "მთავარზე დაბრუნება" },
  links: { privacy: "კონფიდენციალურობის პოლიტიკა", cookies: "ქუქიების პოლიტიკა", terms: "წესები და პირობები" },
  privacy: {
    ...en.privacy,
    title: "კონფიდენციალურობის პოლიტიკა",
    updatedLabel: "ბოლო განახლება",
    intro: "ეს საიტი ამუშავებს მინიმალურ საკონტაქტო მონაცემებს მოთხოვნებზე საპასუხოდ.",
    sections: [
      { heading: "რა მონაცემებს ვამუშავებთ", paragraphs: ["კონტაქტისას შეიძლება დავამუშაოთ სახელი, ელფოსტა, ტელეფონი და შეტყობინების შინაარსი.", "მგრძნობიარე კატეგორიის პერსონალურ მონაცემებს არ ვითხოვთ."] },
      { heading: "მიზანი", paragraphs: ["საინფორმაციო მოთხოვნებზე პასუხი, შეთავაზების მომზადება და პროფესიული კომუნიკაცია.", "გამოყენების აგრეგირებული ანალიზი სრულდება მხოლოდ cookie-ის პარამეტრებში თანხმობის შემთხვევაში."] },
      { heading: "შენახვა და უფლებები", paragraphs: ["მონაცემები ინახება მხოლოდ იმდენ ხანს, რამდენიც საჭიროა მითითებული მიზნისთვის.", "შეგიძლიათ მოითხოვოთ წვდომა, გასწორება, წაშლა ან წინააღმდეგობა საიტის საკონტაქტო ელფოსტაზე."] },
    ],
  },
  cookies: {
    ...en.cookies,
    title: "ქუქიების პოლიტიკა",
    updatedLabel: "ბოლო განახლება",
    intro: "ვიყენებთ აუცილებელ ქუქიებს და სურვილისამებრ ანონიმურ ანალიტიკურ ქუქიებს.",
    sections: [
      { heading: "აუცილებელი ქუქიები", paragraphs: ["უზრუნველყოფს ძირითად ფუნქციებს: ენა, ინტერფეისის პრეფერენციები და თანხმობის სტატუსი.", "ეს ქუქიები აუცილებელია მოთხოვნილი სერვისის მიწოდებისთვის."] },
      { heading: "არასავალდებულო ქუქიები", paragraphs: ["მხოლოდ თქვენი თანხმობით ვრთავთ აგრეგირებულ ანალიზს საიტის წარმადობის გასაზომად.", "ამ საიტზე მონაცემებს არ ვყიდით და ქცევით რეკლამას არ ვიყენებთ."] },
      { heading: "პარამეტრების მართვა", paragraphs: ["არასავალდებულო ქუქიების მიღება ან უარყოფა შესაძლებელია ბანერიდან ან პარამეტრების დიალოგიდან.", "თქვენი არჩევანი ინახება ლოკალურად და ნებისმიერ დროს შეიძლება შეიცვალოს."] },
    ],
  },
  terms: {
    ...en.terms,
    title: "წესები და პირობები",
    updatedLabel: "ბოლო განახლება",
    intro: "ეს საიტი კლინიკებისთვის ვებდიზაინის სერვისებზე ზოგად ინფორმაციას აწვდის.",
    sections: [
      { heading: "საიტის გამოყენება", paragraphs: ["მომხმარებელი ვალდებულია საიტი გამოიყენოს კანონიერი და პატივისცემით სავსე ფორმით.", "კონტენტი საინფორმაციოა და შეიძლება წინასწარი შეტყობინების გარეშე განახლდეს."] },
      { heading: "ინტელექტუალური საკუთრება", paragraphs: ["ტექსტები, დიზაინი, კოდი და გრაფიკული ელემენტები დაცულია ინტელექტუალური საკუთრების უფლებებით.", "კომერციული ხელახალი გამოყენება ნებადართული არ არის მკაფიო ავტორიზაციის გარეშე."] },
      { heading: "პასუხისმგებლობის შეზღუდვა", paragraphs: ["ვიღებთ გონივრულ ზომებს შეცდომებისა და შეფერხებების თავიდან ასაცილებლად, თუმცა აბსოლუტურ უწყვეტობას ვერ ვადასტურებთ.", "არ ვართ პასუხისმგებელი მესამე მხარის გარე საიტების შინაარსზე, რომლებზეც შეიძლება იყოს ბმულები."] },
    ],
  },
  banner: { ...en.banner, message: "ვიყენებთ აუცილებელ ქუქიებს და სურვილისამებრ ანონიმურ ანალიტიკურ ქუქიებს.", policyLink: "ქუქიების პოლიტიკის ნახვა", accept: "დათანხმება", reject: "უარყოფა", manage: "მორგება", dialogTitle: "ქუქიების პარამეტრები", dialogDescription: "აირჩიეთ რომელი ქუქიებია ნებადართული.", essentialLabel: "აუცილებელი ქუქიები", essentialHint: "ყოველთვის ჩართული", analyticsLabel: "ანალიტიკური ქუქიები", analyticsHint: "ანონიმური გაზომვა", save: "შენახვა", cancel: "გაუქმება" },
};

const legalByLocale: Record<LegalLocale, LegalCopy> = {
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

export function getLegalCopy(locale: string): LegalCopy {
  return legalByLocale[(locale as LegalLocale) || "es"] ?? es;
}
