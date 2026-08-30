const BUSINESS = {
  name: "Kamps Montage Techniek",
  owner: "Luca Kamps",
  phone: "06 25129630",
  phoneHref: "tel:+31625129630",
  whatsapp: "06 25129630",
  whatsappDigits: "31625129630",
  whatsappHref: "https://wa.me/31625129630?text=Goedendag%20Kamps%20Montage%20Techniek%2C%20ik%20wil%20graag%20contact%20over%20mijn%20dak.",
  emergencyWhatsappHref: "https://wa.me/31625129630?text=Goedendag%2C%20ik%20heb%20lekkage%20aan%20mijn%20platte%20dak.%20Kunt%20u%20meekijken%3F",
  email: "contact@kamps.nl",
  kvk: "KvK 98998722",
  kvkNumber: "98998722",
  vestigingsnummer: "000064122794",
  vestiging: "Hoofdvestiging",
  street: "Amstelwijckweg 4",
  postalCode: "3316 BB",
  city: "Dordrecht",
  address: "Amstelwijckweg 4, 3316 BB Dordrecht",
  logo: "/assets/logo.png",
  url: "https://www.kampsmontagetechniek.nl"
};

const NAV = [
  ["/", "Home"],
  ["/diensten/", "Diensten"],
  ["/projecten/", "Projecten"],
  ["/werkgebied/", "Werkgebied"],
  ["/reviews/", "Reviews"],
  ["/over-ons/", "Over ons"],
  ["/contact/", "Contact"]
];

const REVIEWS = [
  {
    text: "Duidelijke communicatie, snel geholpen en netjes werk geleverd. Het dak is strak afgewerkt en alles is schoon achtergelaten.",
    author: "Particuliere klant, Noord-Brabant"
  },
  {
    text: "Goede uitleg vooraf en een realistische offerte op maat. De bestaande bitumen laag is eerst beoordeeld voordat het dak is overlaagd.",
    author: "Verhuurder, Utrecht"
  },
  {
    text: "Bij lekkage direct contact via WhatsApp. Foto's gestuurd, snel reactie gekregen en de schade is vakkundig hersteld.",
    author: "Woningeigenaar, Gelderland"
  }
];

const PROJECTS = [
  {
    title: "Plat bitumen dak vernieuwd in Rotterdam",
    place: "Rotterdam",
    service: "Dakdekken",
    before: "De bestaande dakbedekking was verouderd en de randen moesten opnieuw waterdicht worden afgewerkt.",
    work: ["Bestaande daklaag gecontroleerd", "Nieuwe bitumen dakbedekking aangebracht", "Dakranden en doorvoeren opnieuw afgewerkt"],
    result: "Nieuwe bitumen daklaag met nette aansluitingen langs dakranden en doorvoeren.",
    cta: "Ook uw plat dak laten vernieuwen?",
    slug: "dakdekken",
    alt: "Plat bitumen dak vernieuwd door Kamps Montage Techniek in Rotterdam"
  },
  {
    title: "Plat dak overlaagd met bitumen in Utrecht",
    place: "Utrecht",
    service: "Dak overlagen",
    before: "Het platte dak was technisch geschikt voor overlagen, waardoor volledige sloop niet nodig was.",
    work: ["Onderconstructie en bestaande daklaag beoordeeld", "Geschikte delen voorbereid", "Nieuwe bitumen laag over bestaande dakbedekking geplaatst"],
    result: "Bestaande dakbedekking beoordeeld en overlaagd met een nieuwe waterdichte bitumen laag.",
    cta: "Wilt u weten of overlagen mogelijk is?",
    slug: "dak-overlagen",
    alt: "Plat dak overlaagd met bitumen dakbedekking in Utrecht"
  },
  {
    title: "Daklekkage hersteld in Eindhoven",
    place: "Eindhoven",
    service: "Spoedservice",
    before: "Er was lekkage aan een aansluiting van het platte dak, met risico op verdere waterschade.",
    work: ["Lekkageplek beoordeeld", "Naden en aansluitingen gecontroleerd", "Herstel uitgevoerd om verdere schade te beperken"],
    result: "Lekkage opgespoord bij een aansluiting en hersteld om verdere gevolgschade te beperken.",
    cta: "Heeft u lekkage aan uw plat dak?",
    slug: "lekkageherstel-spoedservice",
    alt: "Daklekkage aan plat dak hersteld in Eindhoven"
  },
  {
    title: "Plat dak vernieuwd met isolatie",
    place: "Nederland",
    service: "Dakisolatie",
    before: "Het dak was toe aan renovatie en bood ruimte om isolatie mee te nemen in de nieuwe dakopbouw.",
    work: ["Dakopbouw beoordeeld", "Isolatie meegenomen in renovatieadvies", "Nieuwe bitumen daklaag waterdicht afgewerkt"],
    result: "Dakrenovatie gecombineerd met isolatie en nieuwe bitumen dakbedekking.",
    cta: "Dakrenovatie combineren met isolatie?",
    slug: "dakisolatie",
    alt: "Dakrenovatie plat dak met isolatie en bitumen"
  }
];

const FAQS = [
  ["Werkt Kamps Montage Techniek in heel Nederland?", "Ja, Kamps Montage Techniek voert dakwerk en montagewerk uit in heel Nederland."],
  ["Waarin is Kamps Montage Techniek gespecialiseerd?", "Kamps Montage Techniek is gespecialiseerd in bitumen dakdekken voor platte daken."],
  ["Werkt u ook met EPDM?", "Nee, Kamps Montage Techniek richt zich op bitumen dakbedekking."],
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
  "Er is lekkage aan uw platte dak of vocht zichtbaar binnen.",
  "U wilt weten of dak overlagen mogelijk is.",
  "U wilt dakrenovatie combineren met isolatie."
];

const SERVICES = {
  "dakdekken": {
    title: "Bitumen dakdekker voor platte daken",
    seoTitle: "Bitumen dakdekker plat dak | Kamps Montage Techniek",
    navTitle: "Bitumen dakdekken",
    eyebrow: "Hoofddienst",
    description: "Kamps Montage Techniek is bitumen dakdekker voor platte daken. Vanuit Dordrecht wordt in heel Nederland gewerkt aan vernieuwen, herstellen en waterdicht afwerken van bitumen dakbedekking.",
    meta: "Bitumen dakdekker voor platte daken vanuit Dordrecht, werkzaam in heel Nederland. Vernieuwen, herstellen en afwerken van bitumen dakbedekking. Offerte op maat.",
    about: "Bitumen dakdekken is de hoofddienst. Het gaat om platte daken: nieuwe dakbedekking, renovatie van een verouderde bitumen laag, herstel van naden en het netjes afwerken van dakranden, doorvoeren en opstanden. U heeft rechtstreeks contact met de uitvoerder.",
    when: ["De bitumen laag is verouderd, broos of laat los.", "U ziet blazen, scheuren of open naden.", "Dakranden, kimmen of doorvoeren zijn niet meer waterdicht.", "U wilt renovatie combineren met een nieuwe, strakke afwerking."],
    points: ["Platte daken dakdekken met bitumen", "Dakbedekking vervangen of herstellen", "Dakranden, doorvoeren en aansluitingen netjes afwerken", "Nieuwe daklaag combineren met dakisolatie", "Werk voor particulieren, bedrijven, verhuurders en VvE's"],
    not: ["Geen EPDM of andere rubberen dakbanen.", "Geen hellende pannendaken als hoofddienst.", "Geen vaste m²-prijs; eerst beoordeling, daarna offerte op maat."],
    process: ["Uw dak wordt beoordeeld op staat, bereikbaarheid en bestaande dakopbouw. Foto's via WhatsApp helpen bij een eerste inschatting.", "U ontvangt een eerlijk advies: herstellen, overlagen of volledig vernieuwen.", "Het dakwerk wordt uitgevoerd met aandacht voor waterdichtheid, kimmen, randen en een nette oplevering."],
    image: "/assets/bitumen-dak-hero.png",
    imageAlt: "Bitumen dakbedekking aanbrengen op een plat dak"
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
    image: "/assets/bitumen-dak-hero.png",
    imageAlt: "Bitumen baan wordt aangebracht op een plat dak"
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
    image: "/assets/bitumen-dak-hero.png",
    imageAlt: "Nieuwe bitumen laag op een bestaand plat dak"
  },
  "lekkageherstel-spoedservice": {
    title: "Lekkage aan uw platte bitumen dak",
    seoTitle: "Lekkage plat dak | spoedbeoordeling",
    navTitle: "Lekkageherstel / Spoedservice",
    eyebrow: "Eerst beoordelen, dan herstellen",
    cluster: "roof",
    urgent: true,
    description: "Lekkage op een plat dak zit vaak bij een naad, kim, doorvoer of dakrand — zelden midden op een gave baan. Bel of stuur foto's via WhatsApp. Kamps Montage Techniek beoordeelt eerst waar het water binnenkomt en of tijdelijk of definitief herstel mogelijk is.",
    meta: "Lekkage aan een plat bitumen dak? Bel of WhatsApp Kamps Montage Techniek voor een snelle beoordeling van naden, randen en doorvoeren.",
    about: "Spoed betekent: snel meekijken, niet automatisch dezelfde dag een volledig nieuw dak. Foto's van de lekkage binnen, de dakzijde en de aansluiting helpen. Daarna volgt herstel van de zwakke plek of, als de laag te ver is, advies tot renovatie.",
    when: ["Er is vocht of een lekkageplek onder het platte dak.", "Na regen komt water binnen bij een doorvoer, lichtkoepel of dakrand.", "U wilt schade aan isolatie of plafond beperken."],
    points: ["Eerste beoordeling via bel of WhatsApp-foto's", "Inspectie van naden, kimmen, randen en doorvoeren", "Tijdelijke noodvoorziening waar dat nodig is", "Definitief herstel van de bitumen aansluiting", "Advies als de hele daklaag aan vervanging toe is"],
    not: ["Dit is geen 24-uursgarantie zonder opname.", "Wij herstellen bitumen platte daken; geen EPDM-specialisme."],
    process: ["U belt of stuurt foto's van de lekkage en het dak.", "De waarschijnlijke intredepunt wordt beoordeeld.", "Waar mogelijk volgt tijdelijk of definitief herstel van de bitumen aansluiting."],
    image: "/assets/bitumen-dak-hero.png",
    imageAlt: "Bitumen dakwerk op een plat dak, relevant bij lekkageherstel"
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
    image: "/assets/bitumen-dak-hero.png",
    imageAlt: "Plat dak dat wordt gerenoveerd, het moment om isolatie mee te nemen"
  },
  "trespa-plaatsen": {
    title: "Trespa, boeidelen en dakranden",
    seoTitle: "Trespa en boeidelen plaatsen",
    navTitle: "Trespa plaatsen",
    eyebrow: "Aanvullend op dak- en gevelwerk",
    cluster: "montage",
    description: "Trespa-achtige HPL-bekleding, boeidelen en overstekken zijn aanvullende montage, geen hoofddienst. Kamps Montage Techniek plaatst dit vooral waar het aansluit op dakranden, gevels of een lopende dakklus.",
    meta: "Trespa, boeidelen en dakranden als aanvullende montage bij Kamps Montage Techniek. Geen zelfstandige gevelrenovatie-specialisatie.",
    about: "Deze pagina is voor buitenafwerking rondom het dak: boeidelen, dakranden, overstekken en HPL-platen zoals Trespa. Het is maatwerk in overleg, geen aparte showroom of merkenpakket. Stuur foto's van de bestaande situatie.",
    when: ["Boeidelen of dakranden zijn rot, verweerd of incompleet.", "U wilt onderhoudsarme bekleding aansluitend op dakwerk.", "De klus hoort bij een lopende renovatie."],
    points: ["Boeidelen en dakranden afwerken", "HPL / Trespa-achtige platen plaatsen", "Overstekken netjes bekleden", "Aansluiting op bestaand dak- of gevelwerk", "Combinatie met bitumen dakwerk waar dat speelt"],
    not: ["Geen volledige gevelrenovatie als kerndienst.", "Geen belofte van een specifiek Trespa-kleurprogramma zonder opname."],
    process: ["U stuurt foto's van boeidelen, dakrand of gevelstrook.", "Materiaal, kleur en aansluiting worden besproken.", "De montage wordt ingemeten en strak afgewerkt."]
  },
  "rolluiken-plaatsen": {
    title: "Rolluiken plaatsen of vervangen",
    seoTitle: "Rolluiken plaatsen of vervangen",
    navTitle: "Rolluiken plaatsen",
    eyebrow: "Aanvullende montage",
    cluster: "montage",
    description: "Rolluiken plaatsen of vervangen doen wij als aanvullende montage aan woning, garage of klein bedrijfspand. Dit is geen rolluikenspeciaalzaak: de nadruk ligt op nette montage en of de situatie past bij ons werk.",
    meta: "Rolluiken plaatsen of vervangen als aanvullende montage. Kamps Montage Techniek beoordeelt eerst of de opening en belijning geschikt zijn.",
    about: "Een rolluik moet recht, stevig en passend op de gevel. Wij kijken naar de latei, de zijgeleiders en of vervangen van een bestaand rolluik logischer is dan nieuw plaatsen. Voor een losse showroomkeuze of elk merk-op-voorraad bent u hier niet aan het juiste adres.",
    when: ["Een bestaand rolluik is stuk of aan vervanging toe.", "U wilt een rolluik bij een woning of garage in combinatie met ander montagewerk.", "De opening is overzichtelijk en bereikbaar."],
    points: ["Bestaand rolluik vervangen", "Nieuw rolluik plaatsen waar de opening het toelaat", "Montage aan woning, garage of klein bedrijfspand", "Afwerking van kast en geleiders in overleg", "Combinatie met ander buitenwerk mogelijk"],
    not: ["Geen complete rolluikenwinkel of elk merk uit voorraad.", "Geen montage zonder beoordeling van latei, waterkering en bevestiging."],
    process: ["De opening, latei en bestaande kast worden beoordeeld.", "U krijgt advies over vervangen of nieuw plaatsen.", "Het rolluik wordt uitgelijnd gemonteerd en nagelopen."]
  },
  "garagedeuren-plaatsen": {
    title: "Garagedeur plaatsen of vervangen",
    seoTitle: "Garagedeur plaatsen of vervangen",
    navTitle: "Garagedeuren plaatsen",
    eyebrow: "Aanvullende montage",
    cluster: "montage",
    description: "Een garagedeur plaatsen of vervangen is aanvullende montage. Kamps Montage Techniek kijkt naar de bestaande opening, de ophanging en of de deur netjes in de gevel valt. Geen showroom met alle deursystemen op voorraad.",
    meta: "Garagedeur plaatsen of vervangen als aanvullende montage. Eerst de opening beoordelen, daarna passende montage en afwerking.",
    about: "De deur moet passen in de bestaande dagmaat, vrij lopen en strak aansluiten. Wij doen dit als technische montageklus, vaak naast ander buitenwerk. Type deur, aandrijving en kleur volgen uit de situatie, niet uit een vaste catalogus op deze website.",
    when: ["De huidige garagedeur klemt, lekt of is versleten.", "U wilt een nieuwe deur in een bestaande opening.", "De klus is te combineren met ander montage- of gevelwerk."],
    points: ["Bestaande garagedeur vervangen", "Nieuwe deur in een bestaande opening", "Aansluiting op metselwerk of gevelbekleding", "Praktische planning en nette afwerking", "Combinatie met rolluik- of gevelwerk in overleg"],
    not: ["Geen complete garagedeurenshowroom.", "Geen belofte van elk deursysteem zonder opname van de opening."],
    process: ["De opening, latei en bestaande ophanging worden nagemeten.", "Uitvoering en afwerking worden afgestemd.", "De deur wordt passend gemonteerd en gecontroleerd op loop en sluiting."]
  },
  "montagewerk": {
    title: "Overige montage, in overleg",
    seoTitle: "Overige montagewerkzaamheden",
    navTitle: "Montagewerk",
    eyebrow: "Geen vrije-inkoop-van-alles",
    cluster: "montage",
    description: "Naast bitumen dakwerk neemt Kamps Montage Techniek soms gerelateerde buitenmontage aan: afwerking, een kleine technische klus, herstel rondom het dak. Stuur een korte omschrijving en foto's. Niet iedere klus past.",
    meta: "Overige buitenmontage en afwerking in overleg bij Kamps Montage Techniek. Eerst beoordelen of de klus bij het werk past.",
    about: "Deze pagina is geen extra hoofddienst. Het is de route voor een specifieke klus die tegen dak-, rand- of gevelwerk aanzit. U omschrijft wat er moet gebeuren; wij zeggen of we het doen en hoe.",
    when: ["De klus zit tegen bestaand dak- of gevelwerk aan.", "U heeft foto's en een duidelijke vraag.", "Het is geen specialisme dat een ander vak beter oppakt."],
    points: ["Buitenmontage rondom woning of klein bedrijfspand", "Afwerking na renovatie", "Klein herstel- of bevestigingswerk", "Beoordeling op foto of op locatie", "Offerte of eerlijke afwijzing als het niet past"],
    not: ["Geen aannemer voor complete verbouwingen.", "Geen klus die buiten onze uitvoering valt alleen omdat het 'montage' heet."],
    process: ["U omschrijft de klus en stuurt foto's.", "Wij beoordelen of uitvoering bij ons past.", "U krijgt een inschatting, een offerte, of het advies om een andere vakman te zoeken."]
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
  "rolluiken-plaatsen",
  "garagedeuren-plaatsen",
  "montagewerk"
];

const PAGE_META = {
  home: {
    title: "Bitumen dakdekker plat dak | Kamps Montage Techniek",
    description: "Bitumen dakdekker voor platte daken vanuit Dordrecht, werkzaam in heel Nederland. Vernieuwen, herstellen en waterdicht afwerken. Bel of WhatsApp voor een offerte op maat."
  },
  diensten: {
    title: "Diensten | Bitumen dakdekken en aanvullende montage",
    description: "Hoofddienst: bitumen dakdekken voor platte daken. Aanvullend: overlagen, isolatie, lekkagebeoordeling en montage zoals Trespa, rolluiken of een garagedeur."
  },
  projecten: {
    title: "Projecten | Bitumen dakwerk Kamps Montage Techniek",
    description: "Voorbeelden van bitumen dakdekken, overlagen, lekkageherstel en dakisolatie. Echte projectfoto's volgen; de cases tonen hoe een beoordeling is opgebouwd."
  },
  werkgebied: {
    title: "Bitumen dakdekker heel Nederland | vanaf Dordrecht",
    description: "Hoofdvestiging in Dordrecht. Kamps Montage Techniek voert bitumen dakwerk aan platte daken uit in heel Nederland. Geen aparte plaatsnaam-pagina's zonder eigen project."
  },
  reviews: {
    title: "Reviews | Kamps Montage Techniek",
    description: "Wat klanten zeggen over communicatie, afwerking en bitumen dakwerk. Voorbeeldreviews tot echte, goedgekeurde reacties de teksten vervangen."
  },
  "over-ons": {
    title: "Over Kamps Montage Techniek | Luca Kamps, Dordrecht",
    description: "Kamps Montage Techniek is van Luca Kamps. Hoofdvestiging Amstelwijckweg 4, Dordrecht. Specialist in platte bitumen daken, landelijk inzetbaar."
  },
  contact: {
    title: "Contact en offerte | Kamps Montage Techniek Dordrecht",
    description: "Bel 06 25129630, WhatsApp of mail contact@kamps.nl. Offerte op maat voor bitumen dakwerk aan uw platte dak. Hoofdvestiging Dordrecht."
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

function setMeta() {
  document.title = pageTitle();
  const meta = document.querySelector("meta[name='description']");
  if (meta) meta.setAttribute("content", pageDescription());
  const slug = serviceSlug();
  let robots = document.querySelector("meta[name='robots']");
  if (isAdditionalService(slug)) {
    if (!robots) {
      robots = document.createElement("meta");
      robots.name = "robots";
      document.head.appendChild(robots);
    }
    robots.content = "noindex,follow";
  } else if (robots) {
    robots.remove();
  }
  const canonical = document.querySelector("link[rel='canonical']") || document.createElement("link");
  canonical.rel = "canonical";
  canonical.href = `${BUSINESS.url}${location.pathname}`;
  document.head.appendChild(canonical);
  [
    ["property", "og:title", pageTitle()],
    ["property", "og:description", pageDescription()],
    ["property", "og:type", "website"],
    ["property", "og:url", canonical.href],
    ["property", "og:image", `${BUSINESS.url}/assets/bitumen-dak-hero.png`],
    ["name", "twitter:card", "summary_large_image"]
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
          <a class="btn light" href="${BUSINESS.phoneHref}">Bel direct</a>
          <a class="btn whatsapp" href="${BUSINESS.whatsappHref}">WhatsApp</a>
        </div>
      </div>
      <div class="service-nav-wrap">
        <nav class="service-nav" aria-label="Alle diensten">
          ${serviceLinks(PRIMARY_SERVICE_SLUGS)}
          ${otherServicesMenu()}
        </nav>
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
            <p>Dakdekker voor platte bitumen daken, dakrenovatie, dak overlagen, dakisolatie en spoed bij lekkage in heel Nederland.</p>
            <div class="cta-row">
              <a class="btn primary" href="${BUSINESS.phoneHref}">Bel direct</a>
              <a class="btn whatsapp" href="${BUSINESS.whatsappHref}">WhatsApp</a>
            </div>
          </div>
          <div>
            <div class="footer-title">Hoofddienst</div>
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
        <span class="tag">Hoofddienst</span>
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

function reviewsMarkup(limit = REVIEWS.length) {
  return REVIEWS.slice(0, limit).map((review) => `
    <article class="card review">
      <div class="card-body">
        <div class="stars" aria-label="5 van 5 sterren">5/5</div>
        <p class="quote">"${review.text}"</p>
        <div class="author">${review.author}</div>
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

function requestPanelMarkup(title = "Snel een beoordeling?", text = "Stuur foto's van uw platte dak via WhatsApp of vraag direct een offerte op maat aan.") {
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
          <a class="btn light full" href="/contact/">Offerte aanvragen</a>
        </div>
      </div>
    </div>
  `;
}

function serviceOptionsMarkup(selected = "") {
  return Object.values(SERVICES).map((service) => {
    const isSelected = service.navTitle === selected ? "selected" : "";
    return `<option ${isSelected}>${service.navTitle}</option>`;
  }).join("");
}

function offerteFormMarkup(selectedService = "") {
  return `
    <form class="contact-form" data-contact-form>
      <div class="grid cols-2">
        <div class="field"><label for="name">Naam</label><input id="name" name="naam" autocomplete="name" required></div>
        <div class="field"><label for="phone">Telefoonnummer</label><input id="phone" name="telefoon" autocomplete="tel" required></div>
      </div>
      <div class="grid cols-2">
        <div class="field"><label for="email">E-mailadres</label><input id="email" name="email" type="email" autocomplete="email"></div>
        <div class="field"><label for="place">Plaats</label><input id="place" name="plaats" autocomplete="address-level2"></div>
      </div>
      <div class="grid cols-2">
        <div class="field"><label for="type">Soort klus</label><select id="type" name="soort">${serviceOptionsMarkup(selectedService)}</select></div>
        <div class="field"><label for="preference">Voorkeur contact</label><select id="preference" name="contactvoorkeur"><option>Bellen</option><option>WhatsApp</option><option>E-mail</option></select></div>
      </div>
      <div class="field"><label for="message">Omschrijving</label><textarea id="message" name="omschrijving" placeholder="Beschrijf kort uw klus, situatie of gewenste montage."></textarea></div>
      <div class="field"><label for="photos">Foto's uploaden</label><input id="photos" name="fotos" type="file" multiple accept="image/*"></div>
      <button class="btn primary" type="submit">Vraag een offerte op maat aan</button>
      <div class="form-note" role="status">Uw aanvraag staat klaar. Gebruik de directe e-mail- of WhatsApp-knop om deze te versturen.</div>
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

function homePage() {
  return `
    <section class="hero">
      <div class="section-inner">
        <span class="eyebrow">Specialist in platte bitumen daken</span>
        <h1>Kamps Montage Techniek</h1>
        <p>Bitumen dakdekker voor platte daken, vanuit Dordrecht werkzaam in heel Nederland. De hoofddienst is bitumen dakdekken: vernieuwen, herstellen en waterdicht afwerken.</p>
        <div class="hero-actions">
          <a class="btn primary" href="${BUSINESS.phoneHref}">Bel direct</a>
          <a class="btn whatsapp" href="${BUSINESS.emergencyWhatsappHref}">WhatsApp bij lekkage</a>
          <a class="btn light" href="/contact/">Vraag een offerte aan</a>
        </div>
        <div class="hero-proof">
          <div class="proof-pill"><strong>Bitumen specialist</strong><span>Voor platte daken</span></div>
          <div class="proof-pill"><strong>Spoed bij lekkage</strong><span>Bel of WhatsApp direct</span></div>
          <div class="proof-pill"><strong>Heel Nederland</strong><span>Particulier en zakelijk</span></div>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="section-inner">
        <div class="card urgent-band">
          <div class="card-body split">
            <div>
              <h2>Daklekkage? Neem direct contact op.</h2>
              <p>Bij lekkage aan een plat dak is snelle actie belangrijk. Bel of WhatsApp Kamps Montage Techniek voor een snelle beoordeling van de situatie. Stuur indien mogelijk direct foto's mee via WhatsApp.</p>
            </div>
            <div class="cta-row">
              <a class="btn urgent full" href="${BUSINESS.phoneHref}">Bel direct bij daklekkage</a>
              <a class="btn whatsapp full" href="${BUSINESS.emergencyWhatsappHref}">WhatsApp foto's van de lekkage</a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="section tight">
      <div class="section-inner">
        ${conversionSignalsMarkup()}
      </div>
    </section>
    <section class="section soft">
      <div class="section-inner">
        <div class="section-header">
          <div>
            <span class="eyebrow">Diensten</span>
            <h2>Bitumen dakdekken is de hoofddienst</h2>
          </div>
          <p>De hoofddienst is bitumen dakdekken voor platte daken. Andere klussen, zoals Trespa, rolluiken of een garagedeur, zijn aanvullend en altijd in overleg.</p>
        </div>
        ${groupedServiceCards()}
      </div>
    </section>
    <section class="section">
      <div class="section-inner split">
        <div>
          <span class="eyebrow">Waarom kiezen</span>
          <h2>Praktisch, persoonlijk en gericht op nette afwerking</h2>
          <p>U heeft rechtstreeks contact met de uitvoerder. Uw dak wordt zorgvuldig beoordeeld, de mogelijkheden worden helder besproken en de uitvoering is gericht op waterdichtheid, duurzaamheid en een nette afwerking.</p>
          <ul class="check-list">
            <li>Gespecialiseerd in platte bitumen daken.</li>
            <li>Eerlijke beoordeling of overlagen mogelijk is.</li>
            <li>Bellen en WhatsApp prominent voor snelle opvolging.</li>
            <li>Geen vaste dakprijzen, maar een offerte op maat.</li>
          </ul>
          ${contactTriggersMarkup()}
        </div>
        <div class="visual-panel">
          <img src="/assets/bitumen-dak-hero.png" alt="Bitumen dakbedekking aangebracht door Kamps Montage Techniek">
        </div>
      </div>
    </section>
    <section class="section soft">
      <div class="section-inner">
        <div class="section-header">
          <div>
            <span class="eyebrow">Projectfoto's</span>
            <h2>Voorbeelden van uitgevoerd dakwerk</h2>
          </div>
          <a class="btn light" href="/projecten/">Bekijk projecten</a>
        </div>
        <div class="grid cols-4">${projectsMarkup(4)}</div>
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
        <div class="grid cols-3">${reviewsMarkup(3)}</div>
      </div>
    </section>
    <section class="section soft">
      <div class="section-inner split">
        <div>
          <span class="eyebrow">Werkgebied</span>
          <h2>Dakdekker actief in heel Nederland</h2>
          <p>Kamps Montage Techniek voert dakwerk en montagewerk uit in heel Nederland. Lokale vindbaarheid groeit verder door echte projecten met plaatsnamen, foto's en unieke projectinformatie te tonen.</p>
          <a class="btn light" href="/werkgebied/">Bekijk werkgebied</a>
        </div>
        <div>
          <div class="grid cols-2">
            <div class="card"><div class="card-body"><h3>Particulieren</h3><p>Voor woningeigenaren met een plat dak, lekkage of verouderde dakbedekking.</p></div></div>
            <div class="card"><div class="card-body"><h3>Zakelijk</h3><p>Voor kleine bedrijven, verhuurders en VvE's die duidelijk dakadvies willen.</p></div></div>
          </div>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="section-inner split">
        <div>
          <span class="eyebrow">Over ons</span>
          <h2>Rechtstreeks contact met ${BUSINESS.owner}</h2>
          <p>Kamps Montage Techniek is gespecialiseerd in dakwerk voor platte bitumen daken. U heeft rechtstreeks contact met de uitvoerder, waardoor communicatie duidelijk en persoonlijk blijft.</p>
          <a class="btn light" href="/over-ons/">Meer over Kamps Montage Techniek</a>
        </div>
        <div class="card"><div class="card-body"><h3>Offerteprocedure</h3><ul class="check-list"><li>Stuur foto's van uw dak of lekkage.</li><li>Ontvang een eerste beoordeling.</li><li>Plan een opname of bespreek de offerte.</li></ul></div></div>
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
    ${ctaBlock("Neem contact op voor dakwerk", "Wilt u uw plat dak laten vernieuwen, overlagen of isoleren? Bel of WhatsApp voor een offerte op maat.")}
  `;
}

function servicesOverview() {
  return `
    ${pageHero("Diensten", "Bitumen dakdekken als hoofddienst", "Kamps Montage Techniek is bitumen dakdekker voor platte daken. Overlagen, isolatie en lekkage horen bij dat dakwerk. Trespa, rolluiken, garagedeuren en overige montage zijn aanvullend.")}
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
            <a class="btn light" href="${offerTarget}">Vraag offerte aan</a>
          </div>
          <div class="page-hero-proof">
            <span>Offerte op maat</span>
            <span>Platte bitumen daken</span>
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

function projectsForSlug(slug, limit = 3) {
  const related = PROJECTS.filter((project) => project.slug === slug);
  return projectsMarkup(limit, related.length ? related : PROJECTS);
}

function projectsMarkup(limit = PROJECTS.length, source = PROJECTS) {
  return source.slice(0, limit).map((project) => `
    <article class="card project-case">
      <div class="project-image" role="img" aria-label="${escapeHtml(project.alt)}"></div>
      <div class="card-body">
        <div class="project-meta">
          <span class="tag">${project.place}</span>
          <span class="tag">${project.service}</span>
        </div>
        <h3>${project.title}</h3>
        <div class="case-grid">
          <div>
            <strong>Beginsituatie</strong>
            <p>${project.before}</p>
          </div>
          <div>
            <strong>Uitgevoerd</strong>
            <ul class="mini-list">${project.work.map((item) => `<li>${item}</li>`).join("")}</ul>
          </div>
        </div>
        <p><strong>Resultaat:</strong> ${project.result}</p>
        <a class="inline-link" href="/contact/">${project.cta}</a>
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
          <p>Ieder plat dak is anders. De prijs hangt af van oppervlak, staat van de bitumen laag, bereikbaarheid, doorvoeren, aansluitingen, isolatie en planning. Daarom geen vaste dakprijs op de website.</p>
          ${priceFactorsMarkup()}
          ${contactTriggersMarkup()}
        </article>
        ${sidebar()}
      </div>
    </section>
    <section class="section soft">
      <div class="section-inner">
        <div class="section-header"><div><span class="eyebrow">Voorbeelden</span><h2>Zo wordt een dakklus beschreven</h2></div><p>De cases hieronder volgen de werkwijze: beginsituatie, uitvoering en resultaat. Echte projectfoto's vervangen de huidige voorbeeldfoto zodra die er zijn.</p></div>
        <div class="grid cols-3">${projectsForSlug(slug, 3)}</div>
      </div>
    </section>
    <section class="section"><div class="section-inner"><div class="grid cols-3">${reviewsMarkup(3)}</div></div></section>
    ${ctaBlock("Neem contact op over bitumen dakdekken", "Bel of WhatsApp. Stuur foto's van uw platte dak voor een eerste beoordeling.")}
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
            ? `Dit blijft bitumen dakwerk. De <a class="inline-link" href="/diensten/dakdekken/">hoofddienst bitumen dakdekken</a> is het startpunt als u nog niet weet of herstel, overlagen of vernieuwen nodig is.`
            : `De hoofddienst blijft <a class="inline-link" href="/diensten/dakdekken/">bitumen dakdekken</a>. Deze montageklus nemen wij alleen aan als de situatie past.`}</p>
        </article>
        <aside class="card" id="offerte-aanvraag">
          <div class="card-body">
            <h2>Contact of offerte aanvragen</h2>
            <p>Omschrijf de klus kort. Foto's van het dak, de opening of de bestaande situatie maken de eerste beoordeling concreter.</p>
            ${offerteFormMarkup(service.navTitle)}
          </div>
        </aside>
      </div>
    </section>
  `;
}

function projectsPage() {
  return `
    ${pageHero("Projecten", "Zo ziet een beoordeling eruit", "De cases hieronder tonen de opbouw: beginsituatie, werkzaamheden en resultaat. Zodra echte projectfoto's beschikbaar zijn, vervangen die deze voorbeelden.")}
    <section class="section soft"><div class="section-inner"><div class="grid cols-2">${projectsMarkup()}</div></div></section>
    ${ctaBlock("Ook uw project laten beoordelen?", "Stuur foto's van uw plat dak of montageklus via WhatsApp voor een eerste beoordeling.")}
  `;
}

function werkgebiedPage() {
  const places = ["Noord-Brabant", "Limburg", "Gelderland", "Zuid-Holland", "Utrecht", "Eindhoven", "Rotterdam", "Tilburg", "Nijmegen"];
  return `
    ${pageHero("Bitumen dakdekker in heel Nederland", "Hoofdvestiging Dordrecht", "Kamps Montage Techniek zit aan de Amstelwijckweg 4 in Dordrecht en voert bitumen dakwerk aan platte daken uit in heel Nederland. Aanvullende montage in overleg.")}
    <section class="section">
      <div class="section-inner content-layout">
        <article>
          <h2>Vanuit Dordrecht, landelijk inzetbaar</h2>
          <p>De hoofdvestiging is in Dordrecht. Het werkgebied is heel Nederland: een plat bitumen dak in Brabant, Zuid-Holland of ergens anders wordt hetzelfde beoordeeld op staat, bereikbaarheid en opbouw. Reistijd en planning zitten in de offerte, niet in een vaste plaats-prijs.</p>
          <ul class="check-list">
            <li>Hoofdvestiging: ${BUSINESS.street}, ${BUSINESS.postalCode} ${BUSINESS.city}.</li>
            <li>Hoofddienst: bitumen dakdekken voor platte daken.</li>
            <li>Aanvullend: overlagen, isolatie, lekkagebeoordeling en montage in overleg.</li>
          </ul>
          <h2>Geen losse stadspagina zonder eigen project</h2>
          <p>Plaatsnamen hieronder zijn herkenningspunten, geen belofte van een vestiging of een aparte lokale dienst. Een pagina per stad volgt alleen als er een echt project met foto's en eigen toelichting is.</p>
          <div class="project-meta">${places.map((place) => `<span class="tag">${place}</span>`).join("")}</div>
        </article>
        ${sidebar()}
      </div>
    </section>
    ${ctaBlock("Dakwerk in uw regio?", "Bel of WhatsApp om uw dak of lekkage te bespreken. Kamps Montage Techniek werkt in heel Nederland.")}
  `;
}

function reviewsPage() {
  return `
    ${pageHero("Reviews", "Wat klanten zeggen", "Deze reacties laten zien hoe Kamps Montage Techniek communiceert en dakwerk oplevert. Nieuwe, goedgekeurde klantervaringen vervangen de huidige voorbeelden.")}
    <section class="section soft"><div class="section-inner"><div class="grid cols-3">${reviewsMarkup()}</div></div></section>
    ${ctaBlock("Wilt u ook duidelijk dakadvies?", "Bel of WhatsApp voor een beoordeling van uw plat dak.")}
  `;
}

function overOnsPage() {
  return `
    ${pageHero("Over Kamps Montage Techniek", "Persoonlijk en professioneel", "Kamps Montage Techniek is gespecialiseerd in dakwerk voor platte bitumen daken. U heeft rechtstreeks contact met de uitvoerder.")}
    <section class="section">
      <div class="section-inner split">
        <div>
          <h2>Rechtstreeks contact met ${BUSINESS.owner}</h2>
          <p>Of het nu gaat om dakdekken, dak overlagen, dakisolatie of lekkageherstel: elk project wordt zorgvuldig bekeken en uitgevoerd met aandacht voor waterdichtheid, afwerking en duurzaamheid.</p>
          <p>U bereikt Kamps Montage Techniek rechtstreeks in Dordrecht. Vanuit de hoofdvestiging wordt dakwerk en montagewerk in heel Nederland uitgevoerd.</p>
          <ul class="check-list">
            <li>Specialisatie in platte bitumen daken.</li>
            <li>Duidelijke communicatie voor en tijdens het werk.</li>
            <li>Nette afwerking van randen, aansluitingen en doorvoeren.</li>
            <li>Offertes op maat, passend bij de situatie.</li>
          </ul>
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
            ${offerteFormMarkup()}
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
    ${pageHero("Privacyverklaring", "Contactgegevens en aanvragen", "Deze conceptpagina beschrijft hoe Kamps Montage Techniek met contactgegevens uit offerteaanvragen, telefoongesprekken en WhatsApp-berichten omgaat. Laat deze tekst juridisch controleren voor publicatie.", { showActions: false })}
    <section class="section">
      <div class="section-inner content-layout">
        <article>
          <h2>Welke gegevens worden gebruikt?</h2>
          <p>Wanneer u contact opneemt, kunnen uw naam, telefoonnummer, e-mailadres, plaats, omschrijving van de klus en meegestuurde foto's worden gebruikt om uw aanvraag te beoordelen en contact met u op te nemen.</p>
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
    image: `${origin}${BUSINESS.logo}`,
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
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const note = form.querySelector(".form-note");
      if (note) {
        const formData = new FormData(form);
        const get = (name) => String(formData.get(name) || "").trim();
        const files = form.querySelector("#photos")?.files?.length || 0;
        const message = [
          "Goedendag Kamps Montage Techniek,",
          "",
          "Ik wil graag een offerte op maat aanvragen.",
          "",
          `Naam: ${get("naam")}`,
          `Telefoonnummer: ${get("telefoon")}`,
          `E-mailadres: ${get("email") || "-"}`,
          `Plaats: ${get("plaats") || "-"}`,
          `Soort dak of klus: ${get("soort")}`,
          `Voorkeur contact: ${get("contactvoorkeur")}`,
          "",
          "Omschrijving:",
          get("omschrijving") || "-",
          "",
          files ? `Aantal geselecteerde foto's: ${files}. Ik voeg deze toe in de e-mail of WhatsApp.` : "Ik stuur eventuele foto's apart mee."
        ].join("\n");
        const mailHref = `mailto:${BUSINESS.email}?subject=${encodeURIComponent(`Offerteaanvraag ${get("soort") || "dakwerk"}`)}&body=${encodeURIComponent(message)}`;
        const whatsappHref = `https://wa.me/${BUSINESS.whatsappDigits}?text=${encodeURIComponent(message)}`;
        note.innerHTML = `
          <strong>Uw aanvraag staat klaar.</strong>
          <span>Verstuur de tekst via e-mail of WhatsApp. Foto's kunt u daarna toevoegen in uw mail- of WhatsApp-app.</span>
          <div class="form-note-actions">
            <a class="btn light" href="${mailHref}">Open e-mail</a>
            <a class="btn whatsapp" href="${whatsappHref}">Open WhatsApp</a>
          </div>
        `;
        note.classList.add("is-visible");
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
