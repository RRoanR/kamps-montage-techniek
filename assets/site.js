const BUSINESS = {
  name: "Kamps Montage Techniek",
  owner: "Luca Kamps",
  phone: "06 25129630",
  phoneHref: "tel:+31625129630",
  whatsapp: "06 25129630",
  whatsappDigits: "31625129630",
  whatsappHref: "https://wa.me/31625129630?text=Goedendag%20Kamps%20Montage%20Techniek%2C%20ik%20wil%20graag%20contact%20over%20mijn%20dak.",
  emergencyWhatsappHref: "https://wa.me/31625129630?text=Goedendag%2C%20ik%20heb%20lekkage%20aan%20mijn%20dak.%20Kunt%20u%20meekijken%3F",
  email: "contact@kampsmontagetechniek.nl",
  kvk: "KvK 98998722",
  kvkNumber: "98998722",
  vestigingsnummer: "000064122794",
  vestiging: "Hoofdvestiging",
  street: "Amstelwijckweg 4",
  postalCode: "3316 BB",
  city: "Dordrecht",
  address: "Amstelwijckweg 4, 3316 BB Dordrecht",
  logo: "/assets/logo.png?v=21",
  ogImage: "/assets/og-image.jpg",
  url: "https://www.kampsmontagetechniek.nl",
  web3formsAccessKey: "570f0c79-5556-4240-bf4d-68d2b8b98198"
};

const NAV = [
  ["/diensten/", "Diensten"],
  ["/projecten/", "Projecten"],
  ["/reviews/", "Reviews"],
  ["/over-ons/", "Over ons"],
  ["/contact/", "Contact"]
];

// Stay empty until Luca supplies approved real reviews and written project cases.
const REVIEWS = [];
const PROJECTS = [];

const WORK_PHOTOS = [
  { src: "/assets/werk/werk-02-dakbedekking.jpg", alt: "Nieuwe bitumen banen met rechte naden op een plat woonhuisdak" },
  { src: "/assets/werk/werk-07-uitbouw.jpg", alt: "Vierkant plat bitumen dak van een uitbouw" },
  { src: "/assets/werk/werk-17-dakrand-uitbouw.jpg", alt: "Uitbouw met bitumen dak en witte dakrand" },
  { src: "/assets/werk/werk-06-overlagen.jpg", alt: "Groot plat bitumen dak na oplevering" },
  { src: "/assets/werk/werk-08-dakkapel.jpg", alt: "Plat bitumen dak naast een pannendak, met airco en dakkapel" },
  { src: "/assets/werk/werk-01-dakdekken.jpg", alt: "Uitvoerder op een net opgeleverd bitumen plat dak" },
  { src: "/assets/werk/werk-03-dakvlak.jpg", alt: "Strak bitumen dakvlak met opstaande kim" },
  { src: "/assets/werk/werk-04-doorvoer.jpg", alt: "Bitumen dak met ontluchting en hemelwaterafvoer" },
  { src: "/assets/werk/werk-05-dakrand.jpg", alt: "Witte dakrandafwerking op een gemetselde uitbouw" },
  { src: "/assets/werk/werk-09-doorvoeren.jpg", alt: "Bitumen dak met afgewerkte ontluchtingen bij een dakterras" },
  { src: "/assets/werk/werk-10-groot-dak.jpg", alt: "Groot plat bitumen dak met doorvoeren" },
  { src: "/assets/werk/werk-11-dakraam.jpg", alt: "Bitumen dakbedekking rondom een dakraam" },
  { src: "/assets/werk/werk-12-dakraam-2.jpg", alt: "Plat bitumen dak met lichtstraat en dakraam" },
  { src: "/assets/werk/werk-13-kimmen.jpg", alt: "Afgewerkte bitumen kimmen rond dakdoorvoeren" },
  { src: "/assets/werk/werk-14-woonhuisdak.jpg", alt: "Opgeleverd plat bitumen woonhuisdak" },
  { src: "/assets/werk/werk-15-l-vorm.jpg", alt: "L-vormig plat bitumen dak met rechte naden" },
  { src: "/assets/werk/werk-16-bedrijfsdak.jpg", alt: "Groot plat bitumen dak tijdens oplevering" },
  { src: "/assets/werk/werk-18-lichtkoepel.jpg", alt: "Bitumen dakbedekking rondom een lichtkoepel" },
  { src: "/assets/werk/werk-19-lichtkoepel-2.jpg", alt: "Lichtkoepel waterdicht aangesloten in bitumen" },
  { src: "/assets/werk/werk-20-strook.jpg", alt: "Smalle bitumen dakstrook langs gevel en lichtstraat" },
  { src: "/assets/werk/werk-21-langs-gevel.jpg", alt: "Lange bitumen baan langs een gemetselde gevel" },
  { src: "/assets/werk/werk-22-zonnepanelen.jpg", alt: "Plat bitumen dak met zonnepanelen en doorvoeren" },
  { src: "/assets/werk/werk-23-appartement.jpg", alt: "Opgeleverd plat bitumen dak op een appartement" },
  { src: "/assets/werk/werk-24-wit-bitumen.jpg", alt: "Licht bitumen dakvlak met ontluchting" },
  { src: "/assets/werk/werk-25-uitvoering.jpg", alt: "Bitumen dakwerk in uitvoering op een groot plat dak" },
  { src: "/assets/werk/werk-26-groot-woonblok.jpg", alt: "Groot plat bitumen dak op een woonblok" },
  { src: "/assets/werk/werk-27-opgeleverd.jpg", alt: "Net opgeleverd plat bitumen dak" }
];


const FAQS = [
  ["Werkt Kamps Montage Techniek in heel Nederland?", "Ja, Kamps Montage Techniek voert dakwerk en montagewerk uit in heel Nederland."],
  ["Waarin is Kamps Montage Techniek gespecialiseerd?", "Dakdekker voor alle soorten dakwerken. De focus ligt op bitumen daken. Ook schuine daken met pannen en overige dakrenovatie. Geen EPDM."],
  ["Werkt u ook met EPDM?", "Nee. Kamps Montage Techniek werkt niet met EPDM."],
  ["Doet u ook schuine daken of pannendaken?", "Ja. Schuine daken met pannen en andere dakrenovatie horen bij het werk. Bitumen dakdekken blijft de focus."],
  ["Kan ik foto's sturen via WhatsApp?", "Ja, u kunt foto's van uw dak of lekkage via WhatsApp sturen voor een eerste beoordeling."],
  ["Biedt u spoedservice bij lekkage?", "Ja, bij daklekkage kunt u direct bellen of WhatsAppen voor een snelle beoordeling."],
  ["Kan mijn dak overlaagd worden?", "Dat hangt af van de staat van de bestaande dakbedekking en onderconstructie. Dit wordt eerst beoordeeld."],
  ["Waarom staan er geen prijzen op de website?", "Ieder dak is anders. Daarom werkt Kamps Montage Techniek met offertes op maat."]
];

const PRICE_FACTORS = [
  "Dakoppervlak",
  "Staat van de bestaande dakbedekking",
  "Bereikbaarheid van het dak",
  "Aantal dakdoorvoeren",
  "Aansluitingen en dakranden",
  "Isolatie en materiaalopbouw",
  "Spoed of normale planning"
];

const CONVERSION_SIGNALS = [
  {
    title: "Direct contact met de uitvoerder",
    text: "Geen onduidelijke tussenstappen. U bespreekt uw dak of lekkage rechtstreeks met Kamps Montage Techniek."
  },
  {
    title: "Foto's via WhatsApp",
    text: "Stuur foto's van het dak, de lekkage of de dakrand mee voor een eerste beoordeling."
  },
  {
    title: "Offerte op maat",
    text: "U krijgt advies op basis van dakoppervlak, staat van de dakbedekking, bereikbaarheid en gewenste uitvoering."
  }
];

const CONTACT_TRIGGERS = [
  "Uw bitumen dakbedekking is verouderd of beschadigd.",
  "U ziet blazen, scheuren, losse naden of slechte aansluitingen.",
  "Er is lekkage aan uw dak of vocht zichtbaar binnen.",
  "U wilt een schuin dak, pannendak of andere dakrenovatie laten uitvoeren.",
  "U wilt weten of dak overlagen mogelijk is.",
  "U wilt dakrenovatie combineren met isolatie."
];

const SERVICES = {
  "dakdekken": {
    title: "Bitumen dakdekker voor platte daken",
    seoTitle: "Bitumen dakdekker plat dak | Kamps Montage Techniek",
    navTitle: "Bitumen dakdekken",
    eyebrow: "Platte daken",
    description: "Kamps Montage Techniek is bitumen dakdekker voor platte daken. Bitumen wordt gebrand en waterdicht afgewerkt. Andere dakwerken, zoals schuine daken met pannen, in overleg. Vanuit Dordrecht, in heel Nederland.",
    meta: "Bitumen dakdekker voor platte daken vanuit Dordrecht, werkzaam in heel Nederland. Bitumen branden, vernieuwen en afwerken. Andere dakwerken in overleg. Offerte op maat.",
    about: "Bitumen branden is de kern: wij vernieuwen of herstellen de waterdichte laag, inclusief naden, dakranden, doorvoeren en opstanden. Andere dakwerken, zoals een schuin dak of pannendak, doen wij in overleg. U heeft rechtstreeks contact met de uitvoerder.",
    when: ["De bitumen laag is verouderd, broos of laat los.", "U ziet blazen, scheuren of open naden.", "Dakranden, kimmen of doorvoeren zijn niet meer waterdicht.", "U wilt renovatie combineren met een nieuwe, strakke afwerking."],
    points: ["Bitumen dakdekken: branden, vernieuwen en herstellen", "Dakranden, doorvoeren en aansluitingen netjes afwerken", "Andere dakwerken en pannendaken in overleg", "Nieuwe daklaag combineren met dakisolatie", "Werk voor particulieren, bedrijven, verhuurders en VvE's"],
    not: ["Geen EPDM of andere rubberen dakbanen.", "Geen vaste m²-prijs; eerst beoordeling, daarna offerte op maat."],
    process: ["Uw dak wordt beoordeeld op staat, bereikbaarheid en bestaande dakopbouw. Foto's via WhatsApp helpen bij een eerste inschatting.", "U ontvangt een eerlijk advies: herstellen, overlagen of volledig vernieuwen.", "Het dakwerk wordt uitgevoerd met aandacht voor waterdichtheid, kimmen, randen en een nette oplevering."],
    image: "/assets/werk/werk-01-dakdekken.jpg",
    imageAlt: "Uitvoerder op een net opgeleverd bitumen plat dak"
  },
  "bitumen-dakbedekking": {
    title: "Bitumen dakbedekking voor platte daken",
    seoTitle: "Bitumen dakbedekking plat dak",
    navTitle: "Bitumen dakbedekking",
    eyebrow: "Materiaal en uitvoering",
    cluster: "roof",
    description: "Bitumen dakbedekking is het materiaal waarmee Kamps Montage Techniek platte daken waterdicht maakt. Deze pagina gaat over het aanbrengen, vervangen en onderhouden van die bitumen laag — niet over EPDM.",
    meta: "Bitumen dakbedekking aanbrengen of vervangen op een plat dak. Uitleg over naden, randen en wanneer vernieuwen verstandiger is dan overlagen.",
    about: "Bitumen wordt in banen aangebracht en bij de naden, kimmen en doorvoeren zorgvuldig gesloten. De kwaliteit van een plat dak zit zelden alleen in het vlak, maar in die aansluitingen. Kamps Montage Techniek beoordeelt eerst de bestaande laag voordat er materiaal bij komt.",
    when: ["De minerale afwerking slijt of de baan wordt stug.", "Naden en overlap laten los.", "U plant een renovatie en wilt weten welke bitumen opbouw past."],
    points: ["Nieuwe bitumen dakbedekking aanbrengen", "Verouderde bitumen banen vervangen", "Bestaande laag overlagen als de ondergrond dat toelaat", "Naden, randen en doorvoeren waterdicht afwerken", "Geen EPDM: de specialisatie is bitumen"],
    not: ["Wij leveren geen EPDM-daken.", "Overlagen gebeurt alleen na controle op vocht, hechting en onderconstructie."],
    process: ["De huidige dakbedekking, opstanden en afvoeren worden bekeken.", "U krijgt advies: plaatselijk herstel, overlagen of volledige vervanging.", "De nieuwe bitumen laag wordt strak en waterdicht afgewerkt."],
    image: "/assets/werk/werk-02-dakbedekking.jpg",
    imageAlt: "Nieuwe bitumen banen met rechte naden op een plat woonhuisdak"
  },
  "dak-overlagen": {
    title: "Plat dak overlagen met bitumen",
    seoTitle: "Plat dak overlagen met bitumen",
    navTitle: "Dak overlagen",
    eyebrow: "Alleen als de ondergrond het toelaat",
    cluster: "roof",
    description: "Overlagen betekent: een nieuwe bitumen laag over een bestaande, nog geschikte dakbedekking. Dat scheelt sloop, maar is geen standaardoplossing. Eerst moet duidelijk zijn of de oude laag droog, hechtend en constructief in orde is.",
    meta: "Plat dak overlagen met bitumen alleen na beoordeling. Kamps Montage Techniek zegt eerlijk of overlagen kan of dat vervangen verstandiger is.",
    about: "Een extra laag is lichter en sneller dan het dak kaal maken, maar een natte, blazerige of losse ondergrond overlagen sluit vocht in. Daarom begint deze dienst met een technische beoordeling, niet met een belofte dat overlagen altijd kan.",
    when: ["De bestaande bitumen laag is nog vast, maar wel verouderd aan de oppervlakte.", "Er is geen aanhoudend vocht in de dakopbouw.", "U wilt renovatie zonder onnodig sloopwerk."],
    points: ["Beoordeling van hechting, blazen, scheuren en vocht", "Nieuwe bitumen laag waar de ondergrond geschikt is", "Minder sloop dan volledige vervanging", "Eerlijk advies als vervangen beter is", "Aansluitingen en dakranden opnieuw meenemen"],
    not: ["Niet elk plat dak kan worden overlaagd.", "Bij vocht, losse banen of een zwakke onderconstructie adviseren wij vervangen in plaats van een extra laag."],
    process: ["De bestaande daklaag en onderconstructie worden beoordeeld.", "Er wordt gekeken naar vocht, blazen, kimmen en aansluitingen.", "U hoort of overlagen verantwoord is, of dat vernieuwen beter is."],
    image: "/assets/werk/werk-06-overlagen.jpg",
    imageAlt: "Groot plat bitumen dak na oplevering"
  },
  "lekkageherstel-spoedservice": {
    title: "Lekkage aan uw dak",
    seoTitle: "Lekkage dak | spoedbeoordeling",
    navTitle: "Lekkageherstel / Spoedservice",
    eyebrow: "Eerst beoordelen, dan herstellen",
    cluster: "roof",
    urgent: true,
    description: "Lekkage aan uw dak? Bel of stuur foto's via WhatsApp. Kamps Montage Techniek beoordeelt eerst waar het water binnenkomt en of tijdelijk of definitief herstel mogelijk is.",
    meta: "Lekkage aan uw dak? Bel of WhatsApp Kamps Montage Techniek voor een snelle beoordeling. Foto's via WhatsApp helpen.",
    about: "Spoed betekent: snel meekijken, niet automatisch dezelfde dag een volledig nieuw dak. Foto's van de lekkage binnen, de dakzijde en de aansluiting helpen. Daarna volgt herstel van de zwakke plek of, als de laag te ver is, advies tot renovatie.",
    when: ["Er is vocht of een lekkageplek onder het dak.", "Na regen komt water binnen bij een doorvoer, lichtkoepel, dakrand of pannen.", "U wilt schade aan isolatie of plafond beperken."],
    points: ["Eerste beoordeling via bel of WhatsApp-foto's", "Inspectie van naden, kimmen, randen, doorvoeren of pannen", "Tijdelijke noodvoorziening waar dat nodig is", "Definitief herstel van de zwakke aansluiting", "Advies als de hele daklaag aan vervanging toe is"],
    not: ["Dit is geen 24-uursgarantie zonder opname.", "Wij herstellen geen EPDM-daken."],
    process: ["U belt of stuurt foto's van de lekkage en het dak.", "De waarschijnlijke intredepunt wordt beoordeeld.", "Waar mogelijk volgt tijdelijk of definitief herstel van de bitumen aansluiting."],
    image: "/assets/werk/werk-13-kimmen.jpg",
    imageAlt: "Afgewerkte bitumen kimmen rond dakdoorvoeren"
  },
  "dakisolatie": {
    title: "Plat dak isoleren bij bitumen renovatie",
    seoTitle: "Plat dak isoleren bij dakrenovatie",
    navTitle: "Dakisolatie",
    eyebrow: "Meestal samen met een nieuwe daklaag",
    cluster: "roof",
    description: "Dakisolatie op een plat dak hoort bij de opbouw, niet als los plaatje ergens tussendoor. Kamps Montage Techniek neemt isolatie mee als het dak toch open of vernieuwd wordt, en sluit daarna weer af met bitumen dakbedekking.",
    meta: "Plat dak isoleren tijdens bitumen renovatie. Isolatie wordt afgestemd op de bestaande opbouw en waterdicht afgewerkt met bitumen.",
    about: "Isoleren zonder de waterdichte laag goed te herstellen lost weinig op. Andersom is een nieuwe bitumen laag het moment om de isolatiedikte en opbouw te bekijken. Wat kan, hangt af van de bestaande constructie, de opstandhoogte en de afvoeren.",
    when: ["Het dak gaat sowieso in renovatie.", "Het huis verliest veel warmte via het platte dak.", "U wilt isolatie en nieuwe bitumen in één werkgang."],
    points: ["Isolatie meenemen in het renovatieadvies", "Opbouw afstemmen op het bestaande dak", "Nieuwe bitumen laag als waterdichte afwerking", "Aandacht voor opstanden, afvoeren en aansluitingen", "Geen losse isolatiebelofte zonder dakbeoordeling"],
    not: ["Geen standaard isolatiedikte voor ieder dak.", "Geen isolatie zonder plan voor de waterdichte bitumen afwerking."],
    process: ["De bestaande dakopbouw en opstanden worden bekeken.", "Isolatiemogelijkheden worden afgestemd op constructie en details.", "De nieuwe bitumen dakbedekking sluit de opbouw waterdicht af."],
    image: "/assets/dakisolatie.png",
    imageAlt: "Isolatieplaten op een plat dak, klaar voor de bitumen afwerking"
  },
  "trespa-plaatsen": {
    title: "Trespa, boeidelen en dakranden",
    seoTitle: "Trespa en boeidelen plaatsen",
    navTitle: "Trespa plaatsen",
    eyebrow: "Aanvullend op dak- en gevelwerk",
    cluster: "montage",
    description: "Trespa-achtige HPL-bekleding, boeidelen en overstekken plaatsen wij vooral waar het aansluit op dakranden, gevels of een lopende dakklus.",
    meta: "Trespa, boeidelen en dakranden als aanvullende montage bij Kamps Montage Techniek. Geen zelfstandige gevelrenovatie-specialisatie.",
    about: "Deze pagina is voor buitenafwerking rondom het dak: boeidelen, dakranden, overstekken en HPL-platen zoals Trespa. Het is maatwerk in overleg, geen aparte showroom of merkenpakket. Stuur foto's van de bestaande situatie.",
    when: ["Boeidelen of dakranden zijn rot, verweerd of incompleet.", "U wilt onderhoudsarme bekleding aansluitend op dakwerk.", "De klus hoort bij een lopende renovatie."],
    points: ["Boeidelen en dakranden afwerken", "HPL / Trespa-achtige platen plaatsen", "Overstekken netjes bekleden", "Aansluiting op bestaand dak- of gevelwerk", "Combinatie met bitumen dakwerk waar dat speelt"],
    not: ["Geen volledige gevelrenovatie als kerndienst.", "Geen belofte van een specifiek Trespa-kleurprogramma zonder opname."],
    process: ["U stuurt foto's van boeidelen, dakrand of gevelstrook.", "Materiaal, kleur en aansluiting worden besproken.", "De montage wordt ingemeten en strak afgewerkt."],
    image: "/assets/werk/werk-05-dakrand.jpg",
    imageAlt: "Witte dakrandafwerking op een gemetselde uitbouw"
  },
  "montagewerk": {
    title: "Overige montage, in overleg",
    seoTitle: "Overige montagewerkzaamheden",
    navTitle: "Montagewerk",
    eyebrow: "Geen vrije-inkoop-van-alles",
    cluster: "montage",
    description: "Naast bitumen dakwerk neemt Kamps Montage Techniek soms gerelateerde buitenmontage aan: afwerking, een kleine technische klus, herstel rondom het dak. Stuur een korte omschrijving en foto's. Niet iedere klus past.",
    meta: "Overige buitenmontage en afwerking in overleg bij Kamps Montage Techniek. Eerst beoordelen of de klus bij het werk past.",
    about: "Voor een specifieke klus die tegen dak-, rand- of gevelwerk aanzit. U omschrijft wat er moet gebeuren; wij zeggen of we het doen en hoe.",
    when: ["De klus zit tegen bestaand dak- of gevelwerk aan.", "U heeft foto's en een duidelijke vraag.", "Het is geen specialisme dat een ander vak beter oppakt."],
    points: ["Buitenmontage rondom woning of klein bedrijfspand", "Afwerking na renovatie", "Klein herstel- of bevestigingswerk", "Beoordeling op foto of op locatie", "Offerte of eerlijke afwijzing als het niet past"],
    not: ["Geen aannemer voor complete verbouwingen.", "Geen klus die buiten onze uitvoering valt alleen omdat het 'montage' heet."],
    process: ["U omschrijft de klus en stuurt foto's.", "Wij beoordelen of uitvoering bij ons past.", "U krijgt een inschatting, een offerte, of het advies om een andere vakman te zoeken."],
    image: "/assets/werk/werk-17-dakrand-uitbouw.jpg",
    imageAlt: "Uitbouw met bitumen dak en witte dakrand"
  }
};

const PRIMARY_SERVICE_SLUGS = [
  "dakdekken"
];

const ADDITIONAL_SERVICE_SLUGS = [
  "bitumen-dakbedekking",
  "dak-overlagen",
  "dakisolatie",
  "lekkageherstel-spoedservice",
  "trespa-plaatsen",
  "montagewerk"
];

const PAGE_META = {
  home: {
    title: "Een waterdicht dak, vakkundig aangebracht | Kamps Montage Techniek",
    description: "Bitumen dakdekker in heel Nederland. Dakbedekking, dakreparatie en renovatie voor woningen en bedrijfspanden. Bel of stuur foto's via WhatsApp voor een beoordeling."
  },
  diensten: {
    title: "Diensten | Bitumen dakdekken en aanvullende montage",
    description: "Bitumen dakdekken is de focus. Ook schuine daken met pannen, overlagen, isolatie, lekkagebeoordeling en montage in overleg."
  },
  projecten: {
    title: "Projecten | Bitumen dakwerk Kamps Montage Techniek",
    description: "Foto's van recent bitumen dakwerk van Kamps Montage Techniek. Stuur foto's van uw dak voor een beoordeling."
  },
  werkgebied: {
    title: "Bitumen dakdekker heel Nederland | vanaf Dordrecht",
    description: "Hoofdvestiging in Dordrecht. Kamps Montage Techniek voert dakwerk uit in heel Nederland. Focus op bitumen daken. Reistijd zit in de offerte."
  },
  reviews: {
    title: "Reviews | Kamps Montage Techniek",
    description: "Wat klanten zeggen over communicatie, afwerking en dakwerk van Kamps Montage Techniek."
  },
  "over-ons": {
    title: "Over Kamps Montage Techniek | Luca Kamps, Dordrecht",
    description: "Kamps Montage Techniek is van Luca Kamps. Hoofdvestiging Amstelwijckweg 4, Dordrecht. Dakdekker voor alle soorten dakwerken, focus bitumen. Landelijk inzetbaar."
  },
  contact: {
    title: "Contact en offerte | Kamps Montage Techniek Dordrecht",
    description: "Bel 06 25129630, WhatsApp of mail contact@kampsmontagetechniek.nl. Offerte op maat voor dakwerk. Hoofdvestiging Dordrecht."
  },
  privacyverklaring: {
    title: "Privacyverklaring | Kamps Montage Techniek",
    description: "Privacyverklaring voor contactaanvragen, bellen, WhatsApp en offerteverzoeken via Kamps Montage Techniek."
  }
};

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  })[char]);
}

function pathForPage() {
  return document.body.dataset.page || "home";
}

function serviceSlug() {
  return document.body.dataset.service || "";
}

function pageTitle() {
  const slug = serviceSlug();
  if (slug && SERVICES[slug]) {
    return SERVICES[slug].seoTitle
      ? (SERVICES[slug].seoTitle.includes("Kamps Montage Techniek")
        ? SERVICES[slug].seoTitle
        : `${SERVICES[slug].seoTitle} | Kamps Montage Techniek`)
      : `${SERVICES[slug].title} | Kamps Montage Techniek`;
  }
  return PAGE_META[pathForPage()]?.title || PAGE_META.home.title;
}

function pageDescription() {
  const slug = serviceSlug();
  if (slug && SERVICES[slug]) return SERVICES[slug].meta;
  return PAGE_META[pathForPage()]?.description || PAGE_META.home.description;
}

function serviceLinks(slugs = Object.keys(SERVICES)) {
  return slugs.map((slug) => {
    const service = SERVICES[slug];
    const href = `/diensten/${slug}/`;
    const current = location.pathname.endsWith("/") ? location.pathname : `${location.pathname}/`;
    return `<a href="${href}" ${current === href ? 'aria-current="page"' : ""}>${service.navTitle}</a>`;
  }).join("");
}

function isAdditionalService(slug) {
  return ADDITIONAL_SERVICE_SLUGS.includes(slug);
}

function otherServicesMenu() {
  return `
    <div class="other-services-menu">
      <button class="other-services-toggle" type="button" aria-expanded="false">Andere diensten</button>
      <div class="other-services-panel">
        ${serviceLinks(ADDITIONAL_SERVICE_SLUGS)}
      </div>
    </div>
  `;
}

function pageUrl() {
  const path = location.pathname.endsWith("/") ? location.pathname : `${location.pathname}/`;
  return `${BUSINESS.url}${path === "//" ? "/" : path}`;
}

function shareImageUrl() {
  return `${BUSINESS.url}${BUSINESS.ogImage}`;
}

function setMeta() {
  const title = pageTitle();
  const description = pageDescription();
  const image = shareImageUrl();
  document.title = title;
  const meta = document.querySelector("meta[name='description']");
  if (meta) meta.setAttribute("content", description);
  const slug = serviceSlug();
  let robots = document.querySelector("meta[name='robots']");
  if (isAdditionalService(slug)) {
    if (!robots) {
      robots = document.createElement("meta");
      robots.name = "robots";
      document.head.appendChild(robots);
    }
    robots.content = "noindex,follow";
  } else if (robots && robots.content.includes("noindex")) {
    robots.remove();
  }
  const canonical = document.querySelector("link[rel='canonical']") || document.createElement("link");
  canonical.rel = "canonical";
  canonical.href = pageUrl();
  document.head.appendChild(canonical);
  [
    ["property", "og:title", title],
    ["property", "og:description", description],
    ["property", "og:type", "website"],
    ["property", "og:url", canonical.href],
    ["property", "og:image", image],
    ["property", "og:image:alt", "Dakwerk van Kamps Montage Techniek"],
    ["property", "og:image:width", "1200"],
    ["property", "og:image:height", "630"],
    ["property", "og:site_name", BUSINESS.name],
    ["property", "og:locale", "nl_NL"],
    ["name", "twitter:card", "summary_large_image"],
    ["name", "twitter:title", title],
    ["name", "twitter:description", description],
    ["name", "twitter:image", image]
  ].forEach(([attr, key, value]) => {
    let element = document.head.querySelector(`meta[${attr}="${key}"]`);
    if (!element) {
      element = document.createElement("meta");
      element.setAttribute(attr, key);
      document.head.appendChild(element);
    }
    element.setAttribute("content", value);
  });
}

function header() {
  const current = location.pathname.endsWith("/") ? location.pathname : `${location.pathname}/`;
  return `
    <a class="skip-link" href="#main">Naar inhoud</a>
    <header class="site-header">
      <div class="topbar">
        <div class="topbar-inner">
          <span><strong>Daklekkage?</strong> Bel of WhatsApp voor een snelle beoordeling.</span>
          <span><a href="${BUSINESS.phoneHref}">${BUSINESS.phone}</a> · Werkgebied: heel Nederland</span>
        </div>
      </div>
      <div class="nav-inner">
        <a class="brand" href="/" aria-label="Kamps Montage Techniek home">
          <img src="${BUSINESS.logo}" alt="Kamps Montage Techniek">
        </a>
        <button class="nav-toggle" type="button" aria-label="Menu openen" aria-expanded="false">☰</button>
        <nav class="main-nav" aria-label="Hoofdnavigatie">
          ${NAV.map(([href, label]) => `<a href="${href}" ${current === href ? 'aria-current="page"' : ""}>${label}</a>`).join("")}
        </nav>
        <div class="nav-actions">
          <a class="btn primary" href="${BUSINESS.phoneHref}">Bel direct</a>
          <a class="btn whatsapp" href="${BUSINESS.whatsappHref}">WhatsApp</a>
        </div>
      </div>
    </header>
  `;
}

function footer() {
  return `
    <footer class="site-footer">
      <div class="footer-inner">
        <div class="footer-grid">
          <div>
            <img class="footer-logo" src="${BUSINESS.logo}" width="210" height="128" alt="Kamps Montage Techniek">
            <p>Gespecialiseerd in bitumen dakbedekking, dakreparatie en renovatie. Vanuit Dordrecht, werkzaam in heel Nederland.</p>
            <div class="cta-row">
              <a class="btn primary" href="${BUSINESS.phoneHref}">Bel direct</a>
              <a class="btn whatsapp" href="${BUSINESS.whatsappHref}">WhatsApp</a>
            </div>
          </div>
          <div>
            <div class="footer-title">Dakwerk</div>
            <div class="footer-links">
              ${serviceLinks(PRIMARY_SERVICE_SLUGS)}
            </div>
          </div>
          <div>
            <details class="footer-details">
              <summary>Andere diensten</summary>
              <div class="footer-links">
                ${serviceLinks(ADDITIONAL_SERVICE_SLUGS)}
              </div>
            </details>
            <div class="footer-title footer-title-spaced">Website</div>
            <div class="footer-links">
              <a href="/projecten/">Projecten</a>
              <a href="/reviews/">Reviews</a>
            </div>
          </div>
          <div>
            <div class="footer-title">Contact</div>
            <div class="footer-links">
              <a href="${BUSINESS.phoneHref}">${BUSINESS.phone}</a>
              <a href="mailto:${BUSINESS.email}">${BUSINESS.email}</a>
              <a href="${BUSINESS.whatsappHref}">WhatsApp ${BUSINESS.whatsapp}</a>
              <address class="footer-address">
                <span>${BUSINESS.street}</span>
                <span>${BUSINESS.postalCode} ${BUSINESS.city}</span>
                <span>${BUSINESS.vestiging}</span>
              </address>
              <span>${BUSINESS.kvk}</span>
              <span>Vestigingsnummer ${BUSINESS.vestigingsnummer}</span>
              <span>Werkgebied: heel Nederland</span>
              <a href="/werkgebied/">Werkgebied</a>
              <a href="/over-ons/">Over ons</a>
              <a href="/contact/">Contact</a>
            </div>
          </div>
        </div>
        <div class="footer-bottom">
          <span>© ${new Date().getFullYear()} Kamps Montage Techniek. Alle rechten voorbehouden.</span>
          <span><a href="/privacyverklaring/">Privacyverklaring</a> · Offertes op maat</span>
        </div>
      </div>
    </footer>
    <div class="sticky-mobile-cta" aria-label="Snelle contactacties">
      <a class="btn primary" href="${BUSINESS.phoneHref}">Bel direct</a>
      <a class="btn whatsapp" href="${BUSINESS.emergencyWhatsappHref}">WhatsApp</a>
    </div>
  `;
}

function serviceCards(slugs = Object.keys(SERVICES)) {
  return slugs.map((slug) => [slug, SERVICES[slug]]).map(([slug, service]) => `
    <article class="card service-card">
      <div class="card-body">
        <div class="service-icon" aria-hidden="true">${service.urgent ? "!" : "▰"}</div>
        <h3>${service.navTitle}</h3>
        <p>${service.meta}</p>
        <a href="/diensten/${slug}/">Bekijk dienst</a>
      </div>
    </article>
  `).join("");
}

function mainServiceCard() {
  const service = SERVICES.dakdekken;
  return `
    <article class="card service-card main-service-card">
      <div class="card-body">
        <span class="tag">Specialist</span>
        <h3>${service.navTitle}</h3>
        <p>${service.meta}</p>
        <a class="btn primary" href="/diensten/dakdekken/">Bekijk bitumen dakdekken</a>
      </div>
    </article>
  `;
}

function groupedServiceCards() {
  return `
    ${mainServiceCard()}
    <details class="other-services-block">
      <summary>Andere diensten</summary>
      <div class="other-services-content grid cols-4">
        ${serviceCards(ADDITIONAL_SERVICE_SLUGS)}
      </div>
    </details>
  `;
}

function reviewsEmptyMarkup() {
  return `
    <article class="card empty-state">
      <div class="card-body">
        <h3>Heeft u recent dakwerk laten uitvoeren?</h3>
        <p>Stuur uw ervaring via WhatsApp. Na akkoord plaatsen wij die hier.</p>
        <a class="btn whatsapp" href="${BUSINESS.whatsappHref}">Stuur uw ervaring</a>
      </div>
    </article>
  `;
}

function reviewsMarkup(limit = REVIEWS.length) {
  if (!REVIEWS.length) return reviewsEmptyMarkup();
  return REVIEWS.slice(0, limit).map((review) => `
    <article class="card review">
      <div class="card-body">
        <div class="stars" aria-label="5 van 5 sterren">5/5</div>
        <p class="quote">"${escapeHtml(review.text)}"</p>
        <div class="author">${escapeHtml(review.author)}</div>
      </div>
    </article>
  `).join("");
}


function priceFactorsMarkup() {
  return `
    <div class="card price-card">
      <div class="card-body">
        <h3>Waarom een offerte op maat?</h3>
        <p>Dakwerk is afhankelijk van de situatie op het dak. Daarom staan er geen vaste prijzen op de website.</p>
        <ul class="mini-list price-list">
          ${PRICE_FACTORS.map((factor) => `<li>${factor}</li>`).join("")}
        </ul>
      </div>
    </div>
  `;
}

function conversionSignalsMarkup() {
  return `
    <div class="conversion-strip" aria-label="Waarom bezoekers contact opnemen">
      ${CONVERSION_SIGNALS.map((signal) => `
        <div class="conversion-signal">
          <strong>${signal.title}</strong>
          <span>${signal.text}</span>
        </div>
      `).join("")}
    </div>
  `;
}

function contactTriggersMarkup() {
  return `
    <div class="card trigger-card">
      <div class="card-body">
        <h3>Wanneer is contact verstandig?</h3>
        <ul class="check-list compact-list">
          ${CONTACT_TRIGGERS.map((trigger) => `<li>${trigger}</li>`).join("")}
        </ul>
        <div class="cta-row">
          <a class="btn primary full" href="${BUSINESS.phoneHref}">Dak laten beoordelen</a>
          <a class="btn whatsapp full" href="${BUSINESS.whatsappHref}">Stuur foto's via WhatsApp</a>
        </div>
      </div>
    </div>
  `;
}

function requestPanelMarkup(title = "Snel een beoordeling?", text = "Stuur foto's van uw dak via WhatsApp of vraag direct een offerte op maat aan.") {
  return `
    <div class="card request-panel">
      <div class="card-body">
        <span class="tag">Aanvragen in 3 stappen</span>
        <h3>${title}</h3>
        <ol class="steps-list">
          <li><strong>1. Stuur foto's</strong><span>Gebruik WhatsApp of het formulier.</span></li>
          <li><strong>2. Eerste beoordeling</strong><span>U krijgt duidelijk advies over de vervolgstap.</span></li>
          <li><strong>3. Offerte op maat</strong><span>Bij passend dakwerk volgt een gerichte offerte.</span></li>
        </ol>
        <p>${text}</p>
        <div class="cta-row">
          <a class="btn primary full" href="${BUSINESS.phoneHref}">Bel direct</a>
          <a class="btn whatsapp full" href="${BUSINESS.whatsappHref}">WhatsApp foto's</a>
          <a class="btn light full" href="/contact/">Ontvang een vrijblijvende offerte</a>
        </div>
      </div>
    </div>
  `;
}

function serviceOptionsMarkup(selected = "") {
  const extras = ["Schuin dak / pannendak", "Andere dakrenovatie"];
  return [...Object.values(SERVICES).map((service) => service.navTitle), ...extras].map((label) => {
    const isSelected = label === selected ? "selected" : "";
    return `<option ${isSelected}>${label}</option>`;
  }).join("");
}

function offerteFormMarkup(selectedService = "", kind = "offerte") {
  const prefix = kind === "contact" ? "contact" : "offerte";
  const submitLabel = kind === "contact" ? "Verstuur uw aanvraag" : "Vraag een offerte op maat aan";
  return `
    <form class="contact-form" data-contact-form data-form-kind="${kind}" action="https://api.web3forms.com/submit" method="POST">
      <input type="hidden" name="access_key" value="${BUSINESS.web3formsAccessKey}">
      <div class="hp-field" aria-hidden="true">
        <label>Niet invullen<input type="checkbox" name="botcheck" tabindex="-1" autocomplete="off"></label>
      </div>
      <div class="grid cols-2">
        <div class="field"><label for="${prefix}-name">Naam</label><input id="${prefix}-name" name="naam" autocomplete="name" required></div>
        <div class="field"><label for="${prefix}-phone">Telefoonnummer</label><input id="${prefix}-phone" name="telefoon" autocomplete="tel" required></div>
      </div>
      <div class="grid cols-2">
        <div class="field"><label for="${prefix}-email">E-mailadres</label><input id="${prefix}-email" name="email" type="email" autocomplete="email"></div>
        <div class="field"><label for="${prefix}-place">Plaats</label><input id="${prefix}-place" name="plaats" autocomplete="address-level2"></div>
      </div>
      <div class="grid cols-2">
        <div class="field"><label for="${prefix}-type">Soort klus</label><select id="${prefix}-type" name="soort">${serviceOptionsMarkup(selectedService)}</select></div>
        <div class="field"><label for="${prefix}-preference">Voorkeur contact</label><select id="${prefix}-preference" name="contactvoorkeur"><option>Bellen</option><option>WhatsApp</option><option>E-mail</option></select></div>
      </div>
      <div class="field"><label for="${prefix}-message">Omschrijving</label><textarea id="${prefix}-message" name="omschrijving" placeholder="Beschrijf kort uw klus, situatie of gewenste montage."></textarea></div>
      <p class="field-hint">Foto's stuurt u via WhatsApp. Die komen niet mee met dit formulier.</p>
      <button class="btn primary" type="submit">${submitLabel}</button>
      <div class="form-note" role="status"></div>
    </form>
  `;
}

function ctaBlock(title = "Dak laten beoordelen?", text = "Neem contact op voor een offerte op maat. U kunt bellen of direct foto's via WhatsApp sturen voor een eerste beoordeling.") {
  return `
    <section class="section dark">
      <div class="section-inner split">
        <div>
          <span class="eyebrow">Offerte op maat</span>
          <h2>${title}</h2>
          <p>${text}</p>
          ${conversionSignalsMarkup()}
        </div>
        ${requestPanelMarkup("Direct contact", "Ieder dak is anders. Daarom ontvangt u advies en een offerte op maat.")}
      </div>
    </section>
  `;
}

function faqMarkup(items = FAQS) {
  return `
    <div class="faq">
      ${items.map(([q, a]) => `<details><summary>${q}</summary><p>${a}</p></details>`).join("")}
    </div>
  `;
}

function homeServiceCardsMarkup() {
  const cards = [
    {
      slug: "dakdekken",
      title: "Bitumen dakbedekking",
      text: "Bitumen branden, vernieuwen en waterdicht afwerken op platte daken."
    },
    {
      slug: "dak-overlagen",
      title: "Dakrenovatie / overlagen",
      text: "Nieuwe bitumen laag over bestaande dakbedekking, als de ondergrond dat toelaat."
    },
    {
      slug: "lekkageherstel-spoedservice",
      title: "Dakreparatie &amp; lekkage",
      text: "Lekkage of beschadiging? Bel of stuur foto's via WhatsApp voor een snelle beoordeling."
    },
    {
      slug: "dakisolatie",
      title: "Dakisolatie",
      text: "Isolatie meenemen bij dakrenovatie, afgestemd op de bestaande dakopbouw."
    }
  ];
  return cards.map((card) => `
    <article class="card service-card">
      <div class="card-body">
        <div class="service-icon" aria-hidden="true">▰</div>
        <h3>${card.title}</h3>
        <p>${card.text}</p>
        <a href="/diensten/${card.slug}/">Bekijk dienst</a>
      </div>
    </article>
  `).join("");
}

function homeTrustStripMarkup() {
  const items = [
    ["Rechtstreeks contact met de uitvoerder", "U bespreekt uw dak of lekkage zonder tussenlaag."],
    ["Particulier &amp; zakelijk", "Woningen, bedrijfspanden, verhuurders en VvE's."],
    ["Snelle beoordeling via bel of WhatsApp", "Foto's van het dak helpen bij een eerste inschatting."]
  ];
  return `
    <div class="trust-strip" aria-label="Waarom contact opnemen">
      ${items.map(([title, text]) => `
        <div class="trust-item">
          <strong>${title}</strong>
          <span>${text}</span>
        </div>
      `).join("")}
    </div>
  `;
}

function homeProcessStepsMarkup() {
  const steps = [
    ["Contact", "U belt of stuurt foto's via WhatsApp."],
    ["Beoordeling", "Wij kijken naar staat, bereikbaarheid en dakopbouw."],
    ["Offerte", "U ontvangt advies en een offerte op maat."],
    ["Uitvoering", "Het dakwerk wordt vakkundig en waterdicht afgewerkt."]
  ];
  return `
    <ol class="process-steps">
      ${steps.map(([title, text], index) => `
        <li>
          <strong>${index + 1}. ${title}</strong>
          <span>${text}</span>
        </li>
      `).join("")}
    </ol>
  `;
}

function homePage() {
  return `
    <section class="hero">
      <div class="section-inner hero-split">
        <div>
          <span class="eyebrow">Bitumen dakdekker · heel Nederland</span>
          <h1>Een waterdicht dak, vakkundig aangebracht.</h1>
          <p>Kamps Montage Techniek is gespecialiseerd in bitumen dakbedekking, dakreparatie en renovatie voor woningen en bedrijfspanden. Heeft u lekkage of wilt u uw dak laten vernieuwen? Bel direct of stuur foto's via WhatsApp.</p>
          <div class="hero-actions">
            <a class="btn primary" href="${BUSINESS.phoneHref}">Bel direct</a>
            <a class="btn whatsapp" href="${BUSINESS.emergencyWhatsappHref}">WhatsApp foto's</a>
          </div>
          <p class="hero-offer"><a class="inline-link" href="/contact/">Liever eerst advies? Ontvang een vrijblijvende offerte</a></p>
          <ul class="check-list hero-checks">
            <li>Particulier &amp; zakelijk</li>
            <li>Snelle beoordeling</li>
            <li>Werkzaam door heel Nederland</li>
          </ul>
        </div>
        <div class="visual-panel hero-photo">
          <img src="/assets/werk/werk-01-dakdekken.jpg" alt="Uitvoerder op een net opgeleverd bitumen plat dak">
        </div>
      </div>
    </section>
    <section class="section tight">
      <div class="section-inner">
        ${homeTrustStripMarkup()}
      </div>
    </section>
    <section class="section soft">
      <div class="section-inner">
        <div class="section-header">
          <div>
            <span class="eyebrow">Diensten</span>
            <h2>Bitumen dakwerk, van renovatie tot lekkage</h2>
          </div>
          <p>Vier hoofddiensten. Trespa en overige montage staan onder andere diensten.</p>
        </div>
        <div class="grid cols-4">${homeServiceCardsMarkup()}</div>
        <details class="other-services-block">
          <summary>Andere diensten</summary>
          <div class="other-services-content grid cols-2">
            ${serviceCards(["trespa-plaatsen", "montagewerk"])}
          </div>
        </details>
      </div>
    </section>
    <section class="section">
      <div class="section-inner">
        <div class="section-header">
          <div>
            <span class="eyebrow">Projecten</span>
            <h2>Recent bitumen dakwerk</h2>
          </div>
          <a class="btn light" href="/projecten/">Bekijk projecten</a>
        </div>
        <div class="work-gallery-lg">${workGalleryMarkup(8, 4)}</div>
      </div>
    </section>
    <section class="section soft">
      <div class="section-inner">
        <div class="section-header">
          <div>
            <span class="eyebrow">Werkwijze</span>
            <h2>Van contact tot uitvoering</h2>
          </div>
          <p>Eerst beoordelen, dan een offerte op maat. Geen standaardprijs op de website.</p>
        </div>
        ${homeProcessStepsMarkup()}
      </div>
    </section>
    <section class="section">
      <div class="section-inner">
        <div class="section-header">
          <div>
            <span class="eyebrow">Reviews</span>
            <h2>Wat klanten zeggen</h2>
          </div>
          <a class="btn light" href="/reviews/">Alle reviews</a>
        </div>
        <div class="${REVIEWS.length ? "grid cols-3" : ""}">${reviewsMarkup(3)}</div>
      </div>
    </section>
    <section class="section soft">
      <div class="section-inner">
        <div class="section-header">
          <div>
            <span class="eyebrow">FAQ</span>
            <h2>Veelgestelde vragen</h2>
          </div>
          <p>Antwoorden op de belangrijkste vragen over bitumen dakbedekking, spoedservice, overlagen en offertes op maat.</p>
        </div>
        ${faqMarkup()}
      </div>
    </section>
    ${ctaBlock("Klaar voor een waterdicht dak?", "Bel of stuur foto's via WhatsApp. U ontvangt advies en een vrijblijvende offerte.")}
  `;
}

function servicesOverview() {
  return `
    ${pageHero("Diensten", "Dakwerken", "De focus ligt op bitumen dakdekken. Ook schuine daken met pannen, overlagen, isolatie, lekkage en montage in overleg.")}
    <section class="section soft"><div class="section-inner">${groupedServiceCards()}</div></section>
    ${ctaBlock()}
  `;
}

function pageHero(title, eyebrow, description, options = {}) {
  const showActions = options.showActions !== false;
  const whatsappTarget = options.urgent ? BUSINESS.emergencyWhatsappHref : BUSINESS.whatsappHref;
  const offerTarget = pathForPage() === "contact" ? "#offerte-aanvraag" : "/contact/#offerte-aanvraag";
  return `
    <section class="page-hero">
      <div class="section-inner">
        <div class="breadcrumb"><a href="/">Home</a><span>/</span><span>${title}</span></div>
        <span class="eyebrow">${eyebrow}</span>
        <h1>${title}</h1>
        <p>${description}</p>
        ${showActions ? `
          <div class="page-hero-actions">
            <a class="btn primary" href="${BUSINESS.phoneHref}">Bel direct</a>
            <a class="btn whatsapp" href="${whatsappTarget}">WhatsApp foto's</a>
            <a class="btn light" href="${offerTarget}">Ontvang een vrijblijvende offerte</a>
          </div>
          <div class="page-hero-proof">
            <span>Offerte op maat</span>
            <span>Focus: bitumen dakdekken</span>
            <span>Werkgebied: heel Nederland</span>
          </div>
        ` : ""}
      </div>
    </section>
  `;
}

function sidebar() {
  return `
    <aside class="sidebar">
      <div class="card urgent-band">
        <div class="card-body">
          <h3>Daklekkage?</h3>
          <p>Bel of WhatsApp direct voor een snelle beoordeling. Stuur indien mogelijk foto's mee.</p>
          <div class="cta-row">
            <a class="btn urgent full" href="${BUSINESS.phoneHref}">Bel direct</a>
            <a class="btn whatsapp full" href="${BUSINESS.emergencyWhatsappHref}">WhatsApp</a>
          </div>
        </div>
      </div>
      ${requestPanelMarkup("Offerte op maat", "Laat uw dak beoordelen en ontvang advies over herstellen, vervangen, overlagen of isoleren.")}
      <div class="card">
        <div class="card-body">
          <h3>Diensten</h3>
          <div class="footer-links">${serviceLinks(PRIMARY_SERVICE_SLUGS)}</div>
          <details class="sidebar-details">
            <summary>Andere diensten</summary>
            <div class="footer-links">${serviceLinks(ADDITIONAL_SERVICE_SLUGS)}</div>
          </details>
        </div>
      </div>
    </aside>
  `;
}

function workGalleryMarkup(limit = WORK_PHOTOS.length, eager = 0) {
  const photos = WORK_PHOTOS.slice(0, limit);
  if (!photos.length) return projectsEmptyMarkup();
  return `
    <div class="work-gallery">
      ${photos.map((photo, index) => `
        <figure class="work-shot">
          <img src="${photo.src}" alt="${escapeHtml(photo.alt)}"${index >= eager ? ' loading="lazy"' : ""}>
        </figure>
      `).join("")}
    </div>
  `;
}

function projectsForSlug(slug, limit = 3) {
  const related = PROJECTS.filter((project) => project.slug === slug);
  if (related.length) return projectsMarkup(limit, related);
  if (PROJECTS.length) return projectsMarkup(limit, PROJECTS);
  return workGalleryMarkup(limit);
}

function projectsEmptyMarkup() {
  return `
    <article class="card empty-state">
      <div class="card-body">
        <h3>Stuur foto's van uw dak</h3>
        <p>Projectcases komen hier zodra er een echt project met eigen foto is. Stuur foto's via WhatsApp voor een eerste beoordeling.</p>
        <a class="btn whatsapp" href="${BUSINESS.whatsappHref}">WhatsApp foto's</a>
      </div>
    </article>
  `;
}

function projectsMarkup(limit = PROJECTS.length, source = PROJECTS) {
  if (!source.length) return projectsEmptyMarkup();
  return source.slice(0, limit).map((project) => `
    <article class="card project-case">
      <div class="project-image" role="img" aria-label="${escapeHtml(project.alt)}"${project.image ? ` style="background-image:url('${project.image}')"` : ""}></div>
      <div class="card-body">
        <div class="project-meta">
          <span class="tag">${escapeHtml(project.place)}</span>
          <span class="tag">${escapeHtml(project.service)}</span>
        </div>
        <h3>${escapeHtml(project.title)}</h3>
        <div class="case-grid">
          <div>
            <strong>Beginsituatie</strong>
            <p>${escapeHtml(project.before)}</p>
          </div>
          <div>
            <strong>Uitgevoerd</strong>
            <ul class="mini-list">${project.work.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
          </div>
        </div>
        <p><strong>Resultaat:</strong> ${escapeHtml(project.result)}</p>
        <a class="inline-link" href="/contact/">${escapeHtml(project.cta)}</a>
      </div>
    </article>
  `).join("");
}

function serviceList(items = [], className = "check-list") {
  if (!items.length) return "";
  return `<ul class="${className}">${items.map((item) => `<li>${item}</li>`).join("")}</ul>`;
}

function servicePage(slug) {
  const service = SERVICES[slug] || SERVICES.dakdekken;
  if (isAdditionalService(slug)) return additionalServicePage(slug);
  return `
    ${pageHero(service.title, service.eyebrow, service.description, { urgent: service.urgent })}
    <section class="section">
      <div class="section-inner content-layout">
        <article>
          ${service.urgent ? `<div class="card urgent-band"><div class="card-body"><h2>Bel direct bij daklekkage</h2><p>Snelle actie beperkt vaak verdere schade. Stuur foto's via WhatsApp voor een eerste beoordeling.</p><div class="cta-row"><a class="btn urgent" href="${BUSINESS.phoneHref}">Bel direct bij daklekkage</a><a class="btn whatsapp" href="${BUSINESS.emergencyWhatsappHref}">WhatsApp foto's van de lekkage</a></div></div></div>` : ""}
          <h2>Wat bitumen dakdekken inhoudt</h2>
          <p>${service.about}</p>
          <div class="visual-panel service-visual">
            <img src="${service.image}" alt="${escapeHtml(service.imageAlt || service.title)}">
          </div>
          ${serviceList(service.points)}
          <h2>Wanneer is deze dienst aan de orde?</h2>
          ${serviceList(service.when)}
          <h2>Wat wij wel en niet doen</h2>
          ${serviceList(service.not, "plain-list")}
          <h2>Werkwijze</h2>
          <div class="grid cols-3">
            ${service.process.map((step, index) => `<div class="card"><div class="card-body"><span class="tag">Stap ${index + 1}</span><h3>${["Beoordeling", "Advies", "Uitvoering"][index] || "Afwerking"}</h3><p>${step}</p></div></div>`).join("")}
          </div>
          <h2>Offerte op maat</h2>
          <p>Ieder dak is anders. De prijs hangt af van oppervlak, staat van de bitumen laag, bereikbaarheid, doorvoeren, aansluitingen, isolatie en planning. Daarom geen vaste dakprijs op de website.</p>
          ${priceFactorsMarkup()}
          ${contactTriggersMarkup()}
        </article>
        ${sidebar()}
      </div>
    </section>
    <section class="section soft">
      <div class="section-inner">
        <div class="section-header"><div><span class="eyebrow">Projecten</span><h2>Recent bitumen dakwerk</h2></div><p>Foto's van uitgevoerd bitumen dakwerk.</p></div>
        <div class="${PROJECTS.length ? "grid cols-3" : ""}">${projectsForSlug(slug, 3)}</div>
      </div>
    </section>
    <section class="section"><div class="section-inner"><div class="${REVIEWS.length ? "grid cols-3" : ""}">${reviewsMarkup(3)}</div></div></section>
    ${ctaBlock("Neem contact op over bitumen dakdekken", "Bel of WhatsApp. Stuur foto's van uw dak voor een eerste beoordeling.")}
  `;
}

function additionalServicePage(slug) {
  const service = SERVICES[slug] || SERVICES.montagewerk;
  const isRoof = service.cluster === "roof";
  const image = service.image
    ? `<div class="visual-panel simple-service-image"><img src="${service.image}" alt="${escapeHtml(service.imageAlt || service.title)}"></div>`
    : "";
  return `
    <section class="page-hero simple-service-hero">
      <div class="section-inner">
        <div class="breadcrumb"><a href="/">Home</a><span>/</span><a href="/diensten/">Diensten</a><span>/</span><span>${service.navTitle}</span></div>
        <span class="eyebrow">${isRoof ? "Onderdeel van het dakwerk" : "Aanvullende montage"}</span>
        <h1>${service.title}</h1>
        <p>${service.description}</p>
      </div>
    </section>
    <section class="section">
      <div class="section-inner simple-service-layout">
        <article>
          ${image}
          <h2>Wat deze dienst wel en niet is</h2>
          <p>${service.about}</p>
          ${serviceList(service.points)}
          <h2>Wanneer heeft dit zin?</h2>
          ${serviceList(service.when)}
          <h2>Grenzen</h2>
          ${serviceList(service.not, "plain-list")}
          <h2>Werkwijze</h2>
          <div class="grid cols-3">
            ${service.process.map((step, index) => `<div class="card"><div class="card-body"><span class="tag">Stap ${index + 1}</span><h3>${["Beoordeling", "Advies", "Uitvoering"][index] || "Afwerking"}</h3><p>${step}</p></div></div>`).join("")}
          </div>
          <p>${isRoof
            ? `Dit blijft bitumen dakwerk. <a class="inline-link" href="/diensten/dakdekken/">Bitumen dakdekken</a> is het startpunt als u nog niet weet of herstel, overlagen of vernieuwen nodig is.`
            : `Bitumen dakdekken blijft onze specialisatie. Deze montageklus nemen wij alleen aan als de situatie past. Bekijk ook <a class="inline-link" href="/diensten/dakdekken/">bitumen dakdekken</a>.`}</p>
        </article>
        <aside class="card" id="offerte-aanvraag">
          <div class="card-body">
            <h2>Contact of offerte aanvragen</h2>
            <p>Omschrijf de klus kort. Foto's van het dak, de opening of de bestaande situatie maken de eerste beoordeling concreter.</p>
            ${offerteFormMarkup(service.navTitle, "offerte")}
          </div>
        </aside>
      </div>
    </section>
  `;
}

function projectsPage() {
  return `
    ${pageHero("Projecten", "Recent bitumen dakwerk", "Foto's van recent bitumen dakwerk. Stuur foto's van uw dak voor een eerste beoordeling.")}
    <section class="section soft"><div class="section-inner">${PROJECTS.length ? `<div class="grid cols-2">${projectsMarkup()}</div>` : workGalleryMarkup()}</div></section>
    ${ctaBlock("Ook uw project laten beoordelen?", "Stuur foto's van uw dak of montageklus via WhatsApp voor een eerste beoordeling.")}
  `;
}

function werkgebiedPage() {
  return `
    ${pageHero("Bitumen dakdekker in heel Nederland", "Hoofdvestiging Dordrecht", "Kamps Montage Techniek zit aan de Amstelwijckweg 4 in Dordrecht en voert dakwerk uit in heel Nederland. De focus ligt op bitumen daken. Aanvullende montage in overleg.")}
    <section class="section">
      <div class="section-inner content-layout">
        <article>
          <h2>Vanuit Dordrecht, landelijk inzetbaar</h2>
          <p>U belt of WhatsApp. Wij beoordelen uw dak op staat, bereikbaarheid en opbouw — of dat nu in Dordrecht is of elders in het land. Reistijd en planning zitten in de offerte, niet in een vaste plaats-prijs.</p>
          <ul class="check-list">
            <li>Hoofdvestiging: ${BUSINESS.street}, ${BUSINESS.postalCode} ${BUSINESS.city}.</li>
            <li>Focus: bitumen dakdekken. Ook schuine daken, pannendaken en overige dakrenovatie.</li>
            <li>Aanvullend: overlagen, isolatie, lekkagebeoordeling en montage in overleg.</li>
          </ul>
          <h2>Wat landelijk werken betekent</h2>
          <p>Geen aparte vestiging per stad. Eén team, één werkwijze. Een dak wordt overal hetzelfde beoordeeld: eerst de situatie, daarna een offerte op maat.</p>
        </article>
        ${sidebar()}
      </div>
    </section>
    ${ctaBlock("Dakwerk in uw regio?", "Bel of WhatsApp om uw dak of lekkage te bespreken. Kamps Montage Techniek werkt in heel Nederland.")}
  `;
}

function reviewsPage() {
  return `
    ${pageHero("Reviews", "Wat klanten zeggen", "Wat klanten zeggen over communicatie, afwerking en bitumen dakwerk.")}
    <section class="section soft"><div class="section-inner"><div class="${REVIEWS.length ? "grid cols-3" : ""}">${reviewsMarkup()}</div></div></section>
    ${ctaBlock("Wilt u ook duidelijk dakadvies?", "Bel of WhatsApp voor een beoordeling van uw dak.")}
  `;
}

function overOnsPage() {
  return `
    ${pageHero("Over Kamps Montage Techniek", "Persoonlijk en professioneel", "Kamps Montage Techniek doet alle soorten dakwerken. De focus ligt op bitumen daken. U heeft rechtstreeks contact met de uitvoerder.")}
    <section class="section">
      <div class="section-inner split">
        <div>
          <h2>Rechtstreeks contact met ${BUSINESS.owner}</h2>
          <p>Of het nu gaat om dakdekken, dak overlagen, dakisolatie of lekkageherstel: elk project wordt zorgvuldig bekeken en uitgevoerd met aandacht voor waterdichtheid, afwerking en duurzaamheid.</p>
          <p>U bereikt Kamps Montage Techniek rechtstreeks in Dordrecht. Vanuit de hoofdvestiging wordt dakwerk en montagewerk in heel Nederland uitgevoerd.</p>
          <ul class="check-list">
            <li>Focus op bitumen dakdekken; ook pannendaken en andere dakrenovatie.</li>
            <li>Duidelijke communicatie voor en tijdens het werk.</li>
            <li>Nette afwerking van randen, aansluitingen en doorvoeren.</li>
            <li>Offertes op maat, passend bij de situatie.</li>
          </ul>
          <div class="visual-panel">
            <img src="/assets/werk/werk-01-dakdekken.jpg" alt="Uitvoerder op een net opgeleverd bitumen plat dak">
          </div>
        </div>
        <div class="card"><div class="card-body">
          <h3>Hoofdvestiging</h3>
          <div class="footer-links">
            <span>${BUSINESS.street}</span>
            <span>${BUSINESS.postalCode} ${BUSINESS.city}</span>
            <a href="${BUSINESS.phoneHref}">${BUSINESS.phone}</a>
            <a href="mailto:${BUSINESS.email}">${BUSINESS.email}</a>
            <span>${BUSINESS.kvk}</span>
            <span>Vestigingsnummer ${BUSINESS.vestigingsnummer}</span>
          </div>
        </div></div>
      </div>
    </section>
    ${ctaBlock("Maak kennis en bespreek uw dak", "Neem rechtstreeks contact op voor dakwerk, lekkageherstel of montagewerk.")}
  `;
}

function contactPage() {
  return `
    ${pageHero("Contact en offerte aanvragen", "Bel, WhatsApp of stuur een aanvraag", "Neem contact op voor dakdekken, dak overlagen, bitumen dakbedekking, dakisolatie, lekkageherstel of montagewerk.")}
    <section class="section" id="offerte-aanvraag">
      <div class="section-inner content-layout">
        <article class="card">
          <div class="card-body">
            <h2>Vraag een offerte op maat aan</h2>
            <p>Vul uw gegevens in en omschrijf de situatie. Voor lekkage is bellen of WhatsApp sneller.</p>
            ${conversionSignalsMarkup()}
            ${priceFactorsMarkup()}
            ${offerteFormMarkup("", "contact")}
          </div>
        </article>
        <aside class="sidebar">
          <div class="card urgent-band"><div class="card-body"><h3>Spoed bij lekkage</h3><p>Bel direct of stuur foto's via WhatsApp voor een snelle beoordeling.</p><div class="cta-row"><a class="btn urgent full" href="${BUSINESS.phoneHref}">Bel direct</a><a class="btn whatsapp full" href="${BUSINESS.emergencyWhatsappHref}">WhatsApp foto's</a></div></div></div>
          <div class="card"><div class="card-body"><h3>Contactgegevens</h3><div class="footer-links"><a href="${BUSINESS.phoneHref}">${BUSINESS.phone}</a><a href="mailto:${BUSINESS.email}">${BUSINESS.email}</a><a href="${BUSINESS.whatsappHref}">WhatsApp ${BUSINESS.whatsapp}</a><span>${BUSINESS.street}</span><span>${BUSINESS.postalCode} ${BUSINESS.city}</span><span>${BUSINESS.vestiging}</span><span>${BUSINESS.kvk}</span><span>Vestigingsnummer ${BUSINESS.vestigingsnummer}</span><span>Werkgebied: heel Nederland</span></div></div></div>
        </aside>
      </div>
    </section>
    <section class="section soft">
      <div class="section-inner">
        <div class="section-header">
          <div>
            <span class="eyebrow">FAQ</span>
            <h2>Vragen voor contact</h2>
          </div>
          <p>Voor spoed bij lekkage is bellen of WhatsApp meestal de snelste route.</p>
        </div>
        ${faqMarkup()}
      </div>
    </section>
  `;
}

function privacyPage() {
  return `
    ${pageHero("Privacyverklaring", "Contactgegevens en aanvragen", "Hoe Kamps Montage Techniek omgaat met gegevens uit bellen, WhatsApp en offerteaanvragen.", { showActions: false })}
    <section class="section">
      <div class="section-inner content-layout">
        <article>
          <h2>Welke gegevens worden gebruikt?</h2>
          <p>Wanneer u contact opneemt, kunnen uw naam, telefoonnummer, e-mailadres, plaats, omschrijving van de klus en meegestuurde foto's worden gebruikt om uw aanvraag te beoordelen en contact met u op te nemen.</p>
          <p>Een formulier op deze website wordt verstuurd via Web3Forms. De inhoud komt binnen op ${BUSINESS.email}.</p>
          <h2>Waarvoor worden gegevens gebruikt?</h2>
          <ul class="check-list">
            <li>Het beantwoorden van vragen over dakwerk of montagewerk.</li>
            <li>Het beoordelen van foto's van een dak, lekkage of klus.</li>
            <li>Het opstellen en opvolgen van een offerte op maat.</li>
            <li>Administratie rondom uitgevoerde werkzaamheden.</li>
          </ul>
          <h2>Contact</h2>
          <p>Heeft u vragen over uw gegevens? Neem contact op via ${BUSINESS.email} of bel ${BUSINESS.phone}.</p>
        </article>
        ${sidebar()}
      </div>
    </section>
  `;
}

function genericPage(page) {
  if (page === "diensten") return servicesOverview();
  if (page === "projecten") return projectsPage();
  if (page === "werkgebied") return werkgebiedPage();
  if (page === "reviews") return reviewsPage();
  if (page === "over-ons") return overOnsPage();
  if (page === "contact") return contactPage();
  if (page === "privacyverklaring") return privacyPage();
  return homePage();
}

function schema() {
  const origin = BUSINESS.url;
  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "RoofingContractor",
    name: BUSINESS.name,
    url: origin,
    image: [`${origin}${BUSINESS.ogImage}`, `${origin}${BUSINESS.logo}`],
    logo: `${origin}${BUSINESS.logo}`,
    telephone: "+31625129630",
    email: BUSINESS.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: BUSINESS.street,
      postalCode: BUSINESS.postalCode,
      addressLocality: BUSINESS.city,
      addressCountry: "NL"
    },
    identifier: [
      { "@type": "PropertyValue", name: "KvK", value: BUSINESS.kvkNumber },
      { "@type": "PropertyValue", name: "Vestigingsnummer", value: BUSINESS.vestigingsnummer }
    ],
    areaServed: "Nederland",
    founder: BUSINESS.owner,
    description: PAGE_META.home.description,
    makesOffer: PRIMARY_SERVICE_SLUGS.map((slug) => SERVICES[slug]).map((service) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: service.navTitle } }))
  };
  const slug = serviceSlug();
  const items = [localBusiness];
  if (slug && SERVICES[slug]) {
    items.push({
      "@type": "Service",
      name: SERVICES[slug].navTitle,
      provider: { "@type": "RoofingContractor", name: BUSINESS.name },
      areaServed: "Nederland",
      description: SERVICES[slug].meta
    });
  }
  if (pathForPage() === "home" || pathForPage() === "contact") {
    items.push({
      "@type": "FAQPage",
      mainEntity: FAQS.map(([question, answer]) => ({
        "@type": "Question",
        name: question,
        acceptedAnswer: { "@type": "Answer", text: answer }
      }))
    });
  }
  const script = document.createElement("script");
  script.type = "application/ld+json";
  script.textContent = JSON.stringify(items.length === 1 ? items[0] : { "@context": "https://schema.org", "@graph": items });
  document.head.appendChild(script);
}

function bindInteractions() {
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".main-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(open));
    });
  }
  document.querySelectorAll(".other-services-menu").forEach((menu) => {
    const button = menu.querySelector(".other-services-toggle");
    if (!button) return;
    button.addEventListener("click", () => {
      const open = menu.classList.toggle("is-open");
      button.setAttribute("aria-expanded", String(open));
    });
  });
  document.addEventListener("click", (event) => {
    if (event.target.closest(".other-services-menu")) return;
    document.querySelectorAll(".other-services-menu.is-open").forEach((menu) => {
      menu.classList.remove("is-open");
      menu.querySelector(".other-services-toggle")?.setAttribute("aria-expanded", "false");
    });
  });
  document.addEventListener("keydown", (event) => {
    if (event.key !== "Escape") return;
    document.querySelectorAll(".other-services-menu.is-open").forEach((menu) => {
      menu.classList.remove("is-open");
      menu.querySelector(".other-services-toggle")?.setAttribute("aria-expanded", "false");
    });
  });
  document.querySelectorAll("[data-contact-form]").forEach((form) => {
    form.addEventListener("submit", async (event) => {
      event.preventDefault();
      const note = form.querySelector(".form-note");
      const button = form.querySelector("[type=submit]");
      if (!note || !button || button.disabled) return;

      const formData = new FormData(form);
      const get = (name) => String(formData.get(name) || "").trim();
      const kind = form.dataset.formKind === "contact" ? "contact" : "offerte";
      const soort = get("soort") || "dakwerk";
      const payload = {
        access_key: BUSINESS.web3formsAccessKey,
        subject: kind === "contact" ? `Contactaanvraag: ${soort}` : `Offerteaanvraag: ${soort}`,
        from_name: get("naam") || BUSINESS.name,
        aanvraag: kind === "contact" ? "Contact" : "Offerte",
        naam: get("naam"),
        telefoon: get("telefoon"),
        plaats: get("plaats") || "-",
        soort,
        contactvoorkeur: get("contactvoorkeur"),
        omschrijving: get("omschrijving") || "-"
      };
      const email = get("email");
      if (email) payload.email = email;
      if (form.querySelector("[name=botcheck]")?.checked) payload.botcheck = "on";

      const previousLabel = button.textContent;
      button.disabled = true;
      button.textContent = "Versturen…";
      note.classList.remove("is-error");
      note.classList.add("is-visible");
      note.textContent = "Uw aanvraag wordt verstuurd.";

      try {
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: JSON.stringify(payload)
        });
        const result = await response.json().catch(() => ({}));
        if (!response.ok || result.success === false) {
          throw new Error(result.message || result.body?.message || "submit failed");
        }
        form.reset();
        note.classList.remove("is-error");
        note.classList.add("is-visible");
        note.innerHTML = `
          <strong>Uw aanvraag is verstuurd.</strong>
          <span>Wij nemen contact met u op. Foto's van de situatie stuurt u via WhatsApp.</span>
          <div class="form-note-actions">
            <a class="btn whatsapp" href="${BUSINESS.whatsappHref}">Stuur foto's via WhatsApp</a>
          </div>
        `;
      } catch (error) {
        note.classList.add("is-visible", "is-error");
        note.innerHTML = `
          <strong>Versturen is niet gelukt.</strong>
          <span>Bel of WhatsApp ons, dan nemen wij uw aanvraag alsnog aan.</span>
          <div class="form-note-actions">
            <a class="btn primary" href="${BUSINESS.phoneHref}">Bel ${escapeHtml(BUSINESS.phone)}</a>
            <a class="btn whatsapp" href="${BUSINESS.whatsappHref}">WhatsApp</a>
          </div>
        `;
      } finally {
        button.disabled = false;
        button.textContent = previousLabel;
      }
    });
  });
}

function render() {
  setMeta();
  document.body.insertAdjacentHTML("afterbegin", header());
  const main = document.querySelector("#main");
  if (main) {
    const slug = serviceSlug();
    main.innerHTML = slug ? servicePage(slug) : genericPage(pathForPage());
  }
  document.body.insertAdjacentHTML("beforeend", footer());
  schema();
  bindInteractions();
}

render();
