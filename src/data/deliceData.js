export const deliceData = {
  fr: {
    meta: {
      title: "Délice — Resto Lounge | Lévis depuis 1970",
      description: "Pizza Délice depuis 1970. Resto lounge emblématique à Lévis avec 1000 places, terrasse panoramique, live bands et salons privés."
    },
    nav: {
      home: "Accueil",
      menus: "Les menus",
      restaurant: "Le restaurant",
      programming: "Programmation",
      salons: "Salons privés",
      careers: "Carrières",
      reserve: "Réserver une table",
      orderOnline: "Commander en ligne",
      giftCard: "Carte cadeau",
      phone: "418-833-2221",
      email: "resto@delice.ca",
      address: "146 Côte du Passage, Lévis, QC G6V 5S9",
      cart: "Panier",
      close: "Fermer",
      viewAll: "Tout voir",
      learnMore: "En savoir plus"
    },
    hero: {
      subtitle: "Un classique à Lévis depuis 1970",
      title: "Pizza Délice depuis 1970",
      description: "Au cœur de Lévis, alliant chaleur, grandeur et convivialité dans une ambiance vibrante et accueillante. Trois ambiances uniques, des saveurs du monde et des spectacles festifs.",
      ctaReserve: "Réserver une table",
      ctaMenu: "Découvrir nos menus",
      ctaOrder: "Commander en ligne",
      statusOpen: "Ouvert actuellement — Fermeture à",
      statusClosed: "Fermé actuellement — Ouvre à",
      openUntil: "01h00",
      checkHours: "Vérifier les horaires",
      badges: ["1000 places au total", "Terrasse sur le toit", "Musique live & DJs", "Stationnement gratuit"]
    },
    stats: [
      { number: "160", label: "Passionnés dans l’équipe", sub: "Au service de vos plus beaux moments" },
      { number: "1970", label: "Année de fondation", sub: "Plus de 50 ans d'histoire à Lévis" },
      { number: "700", label: "Places en intérieur", sub: "Resto, lounge feutré et mezzanine" },
      { number: "300", label: "Places en terrasse", sub: "Toit panoramique avec 2 bars extérieurs" }
    ],
    menusSection: {
      badge: "Les menus",
      title: "Un choix pour tous les goûts",
      description: "Des saveurs du monde, des ingrédients frais, et des plats pensés pour vous régaler à toute heure de la journée.",
      viewFullMenu: "Consulter la carte complète",
      categories: [
        { id: "all", name: "Tous nos coups de cœur" },
        { id: "pizzas", name: "Pizzas Gourmets & Classiques" },
        { id: "entrees", name: "Entrées & Tartares" },
        { id: "plats", name: "Plats Principaux & Grillades" },
        { id: "cocktails", name: "Cocktails Signature & Vins" },
        { id: "desserts", name: "Desserts Maison" }
      ]
    },
    dailyPleasures: {
      badge: "Plaisirs du jour",
      title: "Nos rendez-vous gourmands de la semaine",
      description: "Chaque jour de la semaine réserve son moment de fête et ses offres irrésistibles au Délice.",
      items: [
        {
          id: "happy-hour",
          title: "Happy Hour",
          tag: "Tous les jours de 14 h à 18 h",
          desc: "Vos fins d’après-midi, rehaussées. Cocktails signatures, pintes de microbrasseries québécoises et bouchées savoureuses à prix doux.",
          icon: "/assets/cocktails.svg",
          bgClass: "bg-delice-wine text-delice-cream"
        },
        {
          id: "midi",
          title: "Spéciaux du midi",
          tag: "Tous les jours de 11 h à 15 h",
          desc: "Pause lunch raffinée à petit prix. Entrée, plat principal et café inclus pour dynamiser vos journées de travail.",
          icon: "/assets/egg.svg",
          bgClass: "bg-delice-forest text-delice-cream"
        },
        {
          id: "fish-chips",
          title: "Mardis Fish & Chips",
          tag: "Tous les mardis de 11 h à 22 h",
          desc: "Croustillant, doré, irrésistible. Aiglefin frais pané à la bière locale, frites maison taillées sur place et sauce tartare relevée.",
          icon: "/assets/fish.svg",
          bgClass: "bg-delice-red text-delice-cream"
        },
        {
          id: "mercredelice",
          title: "Mercredélice — Pizza",
          tag: "20 % de rabais en livraison & à emporter",
          desc: "Le mercredi, on pense pizza! Profitez de nos fameuses pizzas croustillantes cuites à la perfection avec 20 % d'économie.",
          icon: "/assets/pizza.svg",
          bgClass: "bg-delice-orange text-white"
        },
        {
          id: "moules-frites",
          title: "Moules & Frites à volonté",
          tag: "Tous les mercredis de 16 h à 22 h",
          desc: "Un classique sans limite. Moules fraîches marinières ou à la crème d'ail rôti, servies avec nos frites dorées.",
          icon: "/assets/fish.svg",
          bgClass: "bg-delice-forest text-delice-cream"
        },
        {
          id: "vin-moitie",
          title: "Jeudis Vin à 1/2 prix",
          tag: "Tous les jeudis dès 11 h",
          desc: "Toutes nos bouteilles de vin, à moitié prix! L'occasion parfaite de découvrir nos importations privées d'Italie et de France.",
          icon: "/assets/wine.svg",
          bgClass: "bg-delice-wine text-delice-cream"
        }
      ]
    },
    liveProgramming: {
      badge: "Événements et spectacles",
      title: "Des soirées festives où la musique prend vie",
      description: "Profitez de nos DJ résidents dès 17 h les jeudis, vendredis et samedis, et de nos bands live sur scène dès 21 h 30 pour des nuits mémorables.",
      ctaCalendar: "Voir toute la programmation",
      reserveShow: "Réserver pour un spectacle",
      events: [
        {
          id: 1,
          date: "Vendredi 7 Novembre",
          time: "21h30",
          artist: "The Groove",
          genre: "Funk, Soul & Pop Motown",
          image: "/assets/ambiance/the-groove.jpg",
          desc: "Une formation explosive qui revisite les plus grands classiques funk et dance."
        },
        {
          id: 2,
          date: "Jeudi 13 Novembre",
          time: "19h00",
          artist: "Alexis Bouchard-Leblond",
          genre: "Acoustique & Rock Québécois",
          image: "/assets/ambiance/alexandre.jpg",
          desc: "Une voix puissante et un répertoire chaleureux pour lancer le 5 à 7."
        },
        {
          id: 3,
          date: "Samedi 15 Novembre",
          time: "22h00",
          artist: "Time Machine",
          genre: "Rétro 80's & 90's Hits",
          image: "/assets/ambiance/time-machine.jpg",
          desc: "Voyage musical dans les années cultes avec une énergie débordante."
        },
        {
          id: 4,
          date: "Vendredi 21 Novembre",
          time: "21h30",
          artist: "Flashback",
          genre: "Classic Rock & Pop Légendes",
          image: "/assets/ambiance/flashback.jpg",
          desc: "Des solos de guitare mythiques aux hymnes rassembleurs qui font vibrer toute la salle."
        },
        {
          id: 5,
          date: "Samedi 22 Novembre",
          time: "22h00",
          artist: "Les Snoro",
          genre: "Festif & Cuivres",
          image: "/assets/ambiance/les-snoro.jpg",
          desc: "Rythmes entraînants, cuivres rutilants et ambiance survoltée."
        },
        {
          id: 6,
          date: "Samedi 29 Novembre",
          time: "22h30",
          artist: "Electric Groove",
          genre: "Deep House & Live Saxophone",
          image: "/assets/ambiance/electric-groove.jpg",
          desc: "Une fusion électrisante entre beats électroniques sophistiqués et saxophone envoûtant."
        }
      ]
    },
    salons: {
      badge: "Salons privés",
      title: "Célébrez en grand dans nos espaces intimes",
      description: "Idéales pour toutes vos occasions, quelle que soit leur taille. Réunions d'affaires, anniversaires, mariages, cocktails dînatoires ou partys de bureau.",
      ctaQuote: "Demander une soumission",
      rooms: [
        {
          id: "salon-1",
          name: "Salon 1",
          capacity: "16 à 40 places",
          size: "324 pi²",
          image: "/assets/ambiance/salon-1.jpg",
          desc: "Espace lumineux situé au rez-de-chaussée. Ambiance élégante, technologie intégrée (écran 75'', sonorisation indépendante) et service attentionné.",
          amenities: ["Écran 4K 75''", "Visioconférence", "Bar privé possible", "Menu personnalisé"]
        },
        {
          id: "salon-2",
          name: "Salon 2",
          capacity: "16 à 30 places",
          size: "324 pi²",
          image: "/assets/ambiance/resto.jpg",
          desc: "Un salon intime et feutré, très apprécié des petits groupes d'affaires, déjeuners corporatifs et réunions en toute confidentialité.",
          amenities: ["Intimité feutrée", "Wi-Fi haute vitesse", "Service dédié", "Choix à la carte"]
        },
        {
          id: "mezzanine",
          name: "La Mezzanine",
          capacity: "90 à 150 places",
          size: "1 275 pi²",
          image: "/assets/ambiance/lounge.jpg",
          desc: "Un espace en hauteur, lumineux et ouvert, offrant une vue panoramique sur la salle principale et le bar central. Parfait pour de grandes réceptions festives.",
          amenities: ["Vue plongeante", "Accès bar rapide", "Capacité modulable", "Scène visible"]
        },
        {
          id: "grenier",
          name: "Le Grenier VIP",
          capacity: "30 à 80 places",
          size: "850 pi²",
          image: "/assets/ambiance/grenier.jpg",
          desc: "Niché sous nos toits mansardés avec boiseries chaleureuses, éclairage tamisé et atmosphère exclusive digne d'un speakeasy.",
          amenities: ["Bar exclusif", "Ambiance Lounge", "DJ Booth connecté", "Espace dînatoire"]
        }
      ]
    },
    restaurant: {
      badge: "Le restaurant",
      title: "Un classique à Lévis depuis 1970!",
      lead: "Fondé sur la Côte du Passage, le Délice Resto Lounge est devenu au fil des décennies une véritable institution de la Rive-Sud de Québec.",
      story: "Que vous veniez pour un dîner d’affaires, un souper en amoureux, un cocktail entre amis ou un spectacle live, notre établissement de 1000 places sait vous transporter dans l'ambiance parfaite.",
      spaces: [
        {
          name: "Le Resto",
          desc: "Lumineux et accueillant du matin au soir. Banquettes confortables, service aux petits soins et carte gourmande.",
          image: "/assets/ambiance/resto.jpg"
        },
        {
          name: "Le Lounge",
          desc: "Un immense bar central majestueux, des cocktails créatifs élaborés par nos mixologues et une atmosphère tamisée vibrante.",
          image: "/assets/ambiance/lounge.jpg"
        },
        {
          name: "La Terrasse sur le toit",
          desc: "300 places assises avec vue imprenable, deux bars extérieurs, soleil éclatant le jour et lanternes magiques le soir.",
          image: "/assets/ambiance/terrasse.jpg"
        }
      ],
      values: [
        { title: "Qualité", desc: "Des ingrédients frais du Québec et des recettes maîtrisées avec passion." },
        { title: "Ancrage Local", desc: "Fiers citoyens de Lévis, au cœur de notre communauté depuis plus de 50 ans." },
        { title: "Authenticité", desc: "Un accueil chaleureux et sans prétention où chacun se sent comme chez soi." },
        { title: "Expérience Client", desc: "Chaque visiteur est unique; nous mettons tout en œuvre pour vous émerveiller." }
      ]
    },
    careers: {
      badge: "Une carrière chez nous",
      title: "On engage — Rejoins la famille Délice",
      lead: "Amuse-toi. Cultive ta passion. Crée ton avenir. Travailler avec nous, c’est évoluer dans une ambiance dynamique et festive avec d'excellentes conditions.",
      applyNow: "Postuler maintenant",
      jobs: [
        {
          role: "Serveur · se",
          type: "Temps plein / partiel",
          wage: "Pourboires généreux (moyenne 30 à 45 $/h)",
          desc: "Accueillir et conseiller nos invités, assurer un service rythmé et créer des souvenirs mémorables."
        },
        {
          role: "Barman / Barmaid",
          type: "Temps plein / Soirs & fins de semaine",
          wage: "Taux horaire + pourboires attractifs",
          desc: "Mixologie dynamique, rapidité derrière notre grand bar central et maîtrise des cocktails signature."
        },
        {
          role: "Gérant · e de salle",
          type: "Temps plein — Permanent",
          wage: "À partir de 26 $/h selon expérience",
          desc: "Superviser les opérations, mobiliser et motiver une brigade talentueuse, et garantir l'excellence."
        },
        {
          role: "Cuisinier · ère de ligne",
          type: "Temps plein / partiel",
          wage: "À partir de 24 $/h + partage de pourboires",
          desc: "Préparation soignée de nos viandes, poissons, pâtes fraîches et sauces maison sous la direction de notre Chef."
        },
        {
          role: "Pizzaman / Pizzaiolo",
          type: "Temps plein / partiel",
          wage: "À partir de 20 $/h + partage de pourboires",
          desc: "Maîtriser notre pâte légendaire, garnir et enfourner les pizzas qui font la renommée du Délice depuis 1970."
        },
        {
          role: "Réceptionniste / Hôte · sse",
          type: "Temps partiel / Soirs",
          wage: "17 $/h + pourboires",
          desc: "Premier sourire de la maison, gestion du vestiaire et assignation fluide des tables."
        }
      ]
    },
    takeout: {
      titleTakeout: "À emporter ou en livraison",
      descTakeout: "Retrouvez vos plats préférés et nos pizzas dorées directement chez vous en quelques clics.",
      btnTakeout: "Commander en ligne",
      titleGift: "Offrez l'expérience Délice",
      descGift: "La carte-cadeau idéale pour faire plaisir à vos proches ou récompenser vos équipes de travail.",
      btnGift: "Acheter une carte cadeau"
    },
    location: {
      badge: "Venir au Délice",
      title: "Qu’attendez-vous pour venir ?",
      subtitle: "Que vous nous appeliez Pizza Délice, Resto Délice ou Délice Resto Lounge, notre porte est toujours grande ouverte.",
      addressTitle: "Notre adresse",
      address: "146 Côte du Passage, Lévis, QC G6V 5S9",
      phoneTitle: "Téléphone",
      directions: "Obtenir l’itinéraire Google Maps",
      hoursTitle: "Horaires d’ouverture",
      hours: [
        { day: "Lundi", time: "11 h 00 – 22 h 00" },
        { day: "Mardi", time: "11 h 00 – 22 h 00", note: "Spécial Fish & Chips" },
        { day: "Mercredi", time: "11 h 00 – 23 h 00", note: "Mercredélice & Moules" },
        { day: "Jeudi", time: "11 h 00 – 01 h 00", note: "Vins 1/2 prix & DJ" },
        { day: "Vendredi", time: "11 h 00 – 03 h 00", note: "Live Band & DJ" },
        { day: "Samedi", time: "08 h 00 – 03 h 00", note: "Déjeuners & Party" },
        { day: "Dimanche", time: "08 h 00 – 22 h 00", note: "Déjeuners gourmands" }
      ]
    },
    footer: {
      tagline: "Pizza Délice — Resto Lounge à Lévis depuis 1970.",
      newsletterTitle: "Restez informés de notre programmation",
      newsletterDesc: "Recevez les annonces de spectacles live, menus éphémères et promotions exclusives par courriel.",
      subscribe: "S'inscrire",
      rights: "Tous droits réservés. Délice Resto Lounge © 1970 - 2026",
      privacy: "Politique de confidentialité",
      terms: "Conditions d'utilisation"
    }
  },

  en: {
    meta: {
      title: "Délice — Resto Lounge | Lévis since 1970",
      description: "Pizza Délice since 1970. Iconic resto lounge in Lévis featuring 1000 seats, panoramic rooftop terrace, live bands, and private rooms."
    },
    nav: {
      home: "Home",
      menus: "Menus",
      restaurant: "The Restaurant",
      programming: "Live Shows",
      salons: "Private Rooms",
      careers: "Careers",
      reserve: "Book a Table",
      orderOnline: "Order Online",
      giftCard: "Gift Card",
      phone: "418-833-2221",
      email: "resto@delice.ca",
      address: "146 Côte du Passage, Lévis, QC G6V 5S9",
      cart: "Cart",
      close: "Close",
      viewAll: "View All",
      learnMore: "Learn More"
    },
    hero: {
      subtitle: "A classic in Lévis since 1970",
      title: "Pizza Délice since 1970",
      description: "At the heart of Lévis, blending warmth, grandeur and friendliness in a vibrant, welcoming atmosphere. Three unique settings, world-inspired flavors, and electrifying live music.",
      ctaReserve: "Reserve a Table",
      ctaMenu: "Explore Our Menus",
      ctaOrder: "Order Online",
      statusOpen: "Currently Open — Closes at",
      statusClosed: "Currently Closed — Opens at",
      openUntil: "1:00 AM",
      checkHours: "View Opening Hours",
      badges: ["1000 Total Seats", "Rooftop Terrace", "Live Bands & DJs", "Free Parking"]
    },
    stats: [
      { number: "160", label: "Passionate Team Members", sub: "Dedicated to your best moments" },
      { number: "1970", label: "Year Founded", sub: "Over 50 years of heritage in Lévis" },
      { number: "700", label: "Indoor Dining Seats", sub: "Resto, cozy lounge and mezzanine" },
      { number: "300", label: "Rooftop Terrace Seats", sub: "Panoramic terrace with 2 outdoor bars" }
    ],
    menusSection: {
      badge: "Our Menus",
      title: "A Choice for Every Taste",
      description: "Global flavors, premium local ingredients, and dishes crafted to delight you any hour of the day.",
      viewFullMenu: "View Full Menu",
      categories: [
        { id: "all", name: "Chef's Favorites" },
        { id: "pizzas", name: "Gourmet & Classic Pizzas" },
        { id: "entrees", name: "Starters & Tartares" },
        { id: "plats", name: "Mains & Grills" },
        { id: "cocktails", name: "Signature Cocktails & Wine" },
        { id: "desserts", name: "House Desserts" }
      ]
    },
    dailyPleasures: {
      badge: "Daily Pleasures",
      title: "Weekly Culinary Highlights",
      description: "Every day brings its own festive tradition and irresistible special at Délice.",
      items: [
        {
          id: "happy-hour",
          title: "Happy Hour",
          tag: "Every day from 2 PM to 6 PM",
          desc: "Elevate your afternoons. Signature cocktails, Quebec craft beers, and delicious bites at delightful prices.",
          icon: "/assets/cocktails.svg",
          bgClass: "bg-delice-wine text-delice-cream"
        },
        {
          id: "midi",
          title: "Lunch Specials",
          tag: "Daily from 11 AM to 3 PM",
          desc: "A refined midday break at an affordable price. Starter, main course, and coffee included.",
          icon: "/assets/egg.svg",
          bgClass: "bg-delice-forest text-delice-cream"
        },
        {
          id: "fish-chips",
          title: "Fish & Chips Tuesdays",
          tag: "Every Tuesday from 11 AM to 10 PM",
          desc: "Crispy, golden, irresistible. Fresh haddock battered in local red ale, hand-cut fries and zesty tartar sauce.",
          icon: "/assets/fish.svg",
          bgClass: "bg-delice-red text-delice-cream"
        },
        {
          id: "mercredelice",
          title: "Pizza Wednesday",
          tag: "20% off Takeout & Delivery",
          desc: "Wednesday is pizza night! Enjoy our world-renowned oven-baked pizzas with a 20% discount.",
          icon: "/assets/pizza.svg",
          bgClass: "bg-delice-orange text-white"
        },
        {
          id: "moules-frites",
          title: "All-You-Can-Eat Mussels & Fries",
          tag: "Every Wednesday from 4 PM to 10 PM",
          desc: "An endless feast. Fresh mussels in white wine marinière or roasted garlic cream sauce, served with golden fries.",
          icon: "/assets/fish.svg",
          bgClass: "bg-delice-forest text-delice-cream"
        },
        {
          id: "vin-moitie",
          title: "Half-Price Wine Thursdays",
          tag: "Every Thursday from 11 AM",
          desc: "All wine bottles at half price! The ultimate occasion to discover our curated private imports from Italy and France.",
          icon: "/assets/wine.svg",
          bgClass: "bg-delice-wine text-delice-cream"
        }
      ]
    },
    liveProgramming: {
      badge: "Live Music & Events",
      title: "Vibrant Nights Where Music Comes Alive",
      description: "Enjoy resident DJs from 5 PM on Thursdays, Fridays, and Saturdays, and live bands on stage starting at 9:30 PM for unforgettable evenings.",
      ctaCalendar: "See Full Schedule",
      reserveShow: "Book a Table for a Show",
      events: [
        {
          id: 1,
          date: "Friday, Nov 7",
          time: "9:30 PM",
          artist: "The Groove",
          genre: "Funk, Soul & Motown Pop",
          image: "/assets/ambiance/the-groove.jpg",
          desc: "An energetic band revisiting greatest funk and dance hits."
        },
        {
          id: 2,
          date: "Thursday, Nov 13",
          time: "7:00 PM",
          artist: "Alexis Bouchard-Leblond",
          genre: "Acoustic Pop & Rock",
          image: "/assets/ambiance/alexandre.jpg",
          desc: "A rich voice and warm setlist kicking off the 5-to-7 vibes."
        },
        {
          id: 3,
          date: "Saturday, Nov 15",
          time: "10:00 PM",
          artist: "Time Machine",
          genre: "80's & 90's Retro Hits",
          image: "/assets/ambiance/time-machine.jpg",
          desc: "A musical time machine back to legendary dance decades."
        },
        {
          id: 4,
          date: "Friday, Nov 21",
          time: "9:30 PM",
          artist: "Flashback",
          genre: "Classic Rock & Pop Anthems",
          image: "/assets/ambiance/flashback.jpg",
          desc: "Iconic guitar riffs and crowd-pleasing rock anthems."
        },
        {
          id: 5,
          date: "Saturday, Nov 22",
          time: "10:00 PM",
          artist: "Les Snoro",
          genre: "Festive Brass & Party",
          image: "/assets/ambiance/les-snoro.jpg",
          desc: "High-octane horns, rhythmic beats and infectious joy."
        },
        {
          id: 6,
          date: "Saturday, Nov 29",
          time: "10:30 PM",
          artist: "Electric Groove",
          genre: "Deep House & Live Saxophone",
          image: "/assets/ambiance/electric-groove.jpg",
          desc: "An electrifying blend of sleek lounge beats and soulful live sax."
        }
      ]
    },
    salons: {
      badge: "Private Salons",
      title: "Celebrate in Style in Our Intimate Spaces",
      description: "Tailored for any gathering: corporate dinners, birthdays, weddings, festive cocktail receptions, or holiday parties.",
      ctaQuote: "Request a Proposal",
      rooms: [
        {
          id: "salon-1",
          name: "Salon 1",
          capacity: "16 to 40 guests",
          size: "324 sq ft",
          image: "/assets/ambiance/salon-1.jpg",
          desc: "Bright room on the ground floor. Elegant design, built-in 75'' screen, independent sound system, and dedicated banquet service.",
          amenities: ["75'' 4K Screen", "Video Conferencing", "Private Bar Available", "Custom Menus"]
        },
        {
          id: "salon-2",
          name: "Salon 2",
          capacity: "16 to 30 guests",
          size: "324 sq ft",
          image: "/assets/ambiance/resto.jpg",
          desc: "An intimate, quiet salon favored by executive committees, business breakfasts, and private family dinners.",
          amenities: ["Intimate Setting", "High-speed Wi-Fi", "Dedicated Staff", "Full À la carte Choice"]
        },
        {
          id: "mezzanine",
          name: "The Mezzanine",
          capacity: "90 to 150 guests",
          size: "1,275 sq ft",
          image: "/assets/ambiance/lounge.jpg",
          desc: "Elevated, open and bright space with an overlooking view of the main restaurant and central bar. Perfect for large parties.",
          amenities: ["Overlooking Views", "Direct Bar Access", "Flexible Seating", "Stage Visibility"]
        },
        {
          id: "grenier",
          name: "The VIP Grenier",
          capacity: "30 to 80 guests",
          size: "850 sq ft",
          image: "/assets/ambiance/grenier.jpg",
          desc: "Perched under timbered attic beams with dimmed lighting and a private speakeasy feel.",
          amenities: ["Private Bar", "Lounge Vibe", "Integrated DJ Audio", "Cocktail Space"]
        }
      ]
    },
    restaurant: {
      badge: "The Restaurant",
      title: "A Classic in Lévis Since 1970!",
      lead: "Founded on Côte du Passage, Délice Resto Lounge has evolved over five decades into a premier culinary destination on Quebec City's South Shore.",
      story: "Whether you're visiting for a quick business lunch, an intimate date, cocktails with friends, or live weekend entertainment, our 1000-seat destination sets the ideal stage.",
      spaces: [
        {
          name: "The Resto",
          desc: "Bright, welcoming from morning till night. Plush leather booths, attentive service, and an extensive chef menu.",
          image: "/assets/ambiance/resto.jpg"
        },
        {
          name: "The Lounge",
          desc: "A grand central bar, creative craft cocktails by our master mixologists, and a vibrant nightlife mood.",
          image: "/assets/ambiance/lounge.jpg"
        },
        {
          name: "The Rooftop Terrace",
          desc: "300 rooftop seats offering panoramic city views, two exterior cocktail bars, sunlit afternoons, and magical nighttime lights.",
          image: "/assets/ambiance/terrasse.jpg"
        }
      ],
      values: [
        { title: "Quality", desc: "Fresh local Quebec produce and recipes executed with passion." },
        { title: "Local Roots", desc: "Proud members of the Lévis community for more than 50 years." },
        { title: "Authenticity", desc: "Warm, unpretentious hospitality where everyone feels at home." },
        { title: "Customer Care", desc: "Every guest is special; we go above and beyond to make your visit remarkable." }
      ]
    },
    careers: {
      badge: "Careers with Us",
      title: "We're Hiring — Join the Délice Family",
      lead: "Have fun. Cultivate your passion. Build your future. Working at Délice means thriving in a fast-paced, friendly atmosphere with great perks.",
      applyNow: "Apply Today",
      jobs: [
        {
          role: "Server",
          type: "Full-time / Part-time",
          wage: "Generous tips (Average $30 - $45/hr)",
          desc: "Welcome and guide guests, ensure seamless service, and create lasting dining memories."
        },
        {
          role: "Bartender",
          type: "Full-time / Evenings & Weekends",
          wage: "Hourly base + great tips",
          desc: "High-volume mixology behind our centerpiece bar and mastery of signature cocktails."
        },
        {
          role: "Floor Manager",
          type: "Full-time — Permanent",
          wage: "Starting at $26/hr + depending on experience",
          desc: "Lead floor operations, mentor our brigade, and maintain impeccable guest satisfaction."
        },
        {
          role: "Line Cook",
          type: "Full-time / Part-time",
          wage: "Starting at $24/hr + tip pool",
          desc: "Prepare gourmet meats, seafood, fresh pasta, and sauces under the guidance of our Head Chef."
        },
        {
          role: "Pizzaiolo / Pizza Maker",
          type: "Full-time / Part-time",
          wage: "Starting at $20/hr + tip pool",
          desc: "Shape our legendary pizza dough and bake the pies that made Délice famous since 1970."
        },
        {
          role: "Host / Hostess",
          type: "Part-time / Evenings",
          wage: "$17/hr + tips",
          desc: "First friendly face of the house, managing reservations and seating flow."
        }
      ]
    },
    takeout: {
      titleTakeout: "Takeout or Delivery",
      descTakeout: "Enjoy your favorite dishes and crispy pizzas at home with effortless online ordering.",
      btnTakeout: "Order Online",
      titleGift: "Give the Délice Experience",
      descGift: "The perfect gift card to spoil loved ones or reward your team.",
      btnGift: "Purchase Gift Card"
    },
    location: {
      badge: "Visit Délice",
      title: "What Are You Waiting For?",
      subtitle: "Whether you know us as Pizza Délice, Resto Délice, or Délice Resto Lounge, our doors are always open.",
      addressTitle: "Address",
      address: "146 Côte du Passage, Lévis, QC G6V 5S9",
      phoneTitle: "Phone",
      directions: "Get Directions on Google Maps",
      hoursTitle: "Opening Hours",
      hours: [
        { day: "Monday", time: "11:00 AM – 10:00 PM" },
        { day: "Tuesday", time: "11:00 AM – 10:00 PM", note: "Fish & Chips Special" },
        { day: "Wednesday", time: "11:00 AM – 11:00 PM", note: "Pizza Special & Mussels" },
        { day: "Thursday", time: "11:00 AM – 1:00 AM", note: "Half-Price Wine & DJ" },
        { day: "Friday", time: "11:00 AM – 3:00 AM", note: "Live Band & DJ" },
        { day: "Saturday", time: "8:00 AM – 3:00 AM", note: "Breakfast & Nightlife" },
        { day: "Sunday", time: "8:00 AM – 10:00 PM", note: "Gourmet Breakfast" }
      ]
    },
    footer: {
      tagline: "Pizza Délice — Resto Lounge in Lévis since 1970.",
      newsletterTitle: "Stay in the Loop",
      newsletterDesc: "Get updates on live show line-ups, seasonal menus, and exclusive perks delivered to your inbox.",
      subscribe: "Subscribe",
      rights: "All rights reserved. Délice Resto Lounge © 1970 - 2026",
      privacy: "Privacy Policy",
      terms: "Terms of Service"
    }
  }
};

export const dishesData = [
  // Pizzas
  {
    id: "pizza-delice",
    category: "pizzas",
    nameFr: "Pizza Délice Signature",
    nameEn: "Délice Signature Pizza",
    descFr: "Notre recette vedette depuis 1970 : sauce tomate secrète, pepperoni de boucherie, champignons frais, piments verts et mozzarella québécoise dorée.",
    descEn: "Our legendary recipe since 1970: house tomato sauce, artisanal pepperoni, fresh mushrooms, green bell peppers, and melted Quebec mozzarella.",
    price: 24.95,
    image: "/assets/dishes/pizza-delice.jpg",
    tags: ["signature", "classic"],
    rating: 4.9
  },
  {
    id: "sushi-pizza",
    category: "pizzas",
    nameFr: "Sushi Pizza au Thon Rouge",
    nameEn: "Ahi Tuna Sushi Pizza",
    descFr: "Galette de riz sushi croustillante poêlée, tartare de thon mariné aux agrumes, dés d'avocat, graines de sésame grillées et filet de mayonnaise épicée.",
    descEn: "Crisp pan-seared sushi rice patty topped with citrus-marinated tuna tartare, fresh avocado, toasted sesame seeds, and spicy mayo drizzle.",
    price: 23.95,
    image: "/assets/dishes/sushi-pizza.jpg",
    tags: ["signature", "seafood"],
    rating: 4.8
  },
  {
    id: "pizza-carnivore",
    category: "pizzas",
    nameFr: "Pizza Carnivore Fumé",
    nameEn: "Smoked Meat Lovers Pizza",
    descFr: "Pepperoni croustillant, saucisse italienne maison au fenouil, bacon au sirop d'érable, sauce tomate riche et double mozzarella.",
    descEn: "Crispy pepperoni, house fennel Italian sausage, maple-smoked bacon, rich tomato sauce, and double mozzarella.",
    price: 26.95,
    image: "/assets/dishes/pizza-delice.jpg",
    tags: ["favorite"],
    rating: 4.7
  },

  // Entrées & Tartares
  {
    id: "tartare-saumon",
    category: "entrees",
    nameFr: "Tartare de Saumon & Grenade",
    nameEn: "Salmon Tartare & Pomegranate",
    descFr: "Saumon frais de l'Atlantique, perles de grenade croquantes, échalotes françaises, mayonnaise japonaise au yuzu, servi avec crostinis chauds.",
    descEn: "Fresh Atlantic salmon, crunchy pomegranate arils, French shallots, Japanese yuzu mayo, served with warm homemade crostinis.",
    price: 22.95,
    image: "/assets/dishes/tartare-saumon.jpg",
    tags: ["gluten-free", "signature"],
    rating: 4.9
  },
  {
    id: "tartare-boeuf",
    category: "entrees",
    nameFr: "Tartare de Bœuf Classique",
    nameEn: "Classic Beef Tartare",
    descFr: "Bœuf AAA haché au couteau, câpres italiennes, moutarde à l'ancienne, ciboulette fraîche, huile de truffe et chips de pain maison.",
    descEn: "Knife-cut AAA beef, Italian capers, whole-grain mustard, fresh chives, truffle oil drizzle, and house-made artisan chips.",
    price: 23.95,
    image: "/assets/dishes/tartare-boeuf.jpg",
    tags: ["classic"],
    rating: 4.8
  },
  {
    id: "tataki-thon",
    category: "entrees",
    nameFr: "Tataki de Thon Rouge en Croûte",
    nameEn: "Sesame-Crusted Ahi Tuna Tataki",
    descFr: "Thon saisi à haute température, croûte de sésame blanc et noir, salade wakame, réduction soja et gingembre mariné.",
    descEn: "Flash-seared tuna, black and white sesame crust, wakame seaweed salad, soy-ginger glaze, and pickled ginger.",
    price: 21.95,
    image: "/assets/dishes/tataki-thon.jpg",
    tags: ["seafood", "gluten-free"],
    rating: 4.9
  },
  {
    id: "brie-framboise",
    category: "entrees",
    nameFr: "Brie Rôti aux Framboises",
    nameEn: "Roasted Brie with Raspberries",
    descFr: "Roue de fromage brie québécois fondue au four, coulis de framboises sauvages au poivre rose, amandes grillées et baguette croustillante.",
    descEn: "Oven-baked local Quebec brie, wild raspberry and pink pepper coulis, toasted almonds, and crispy artisan baguette.",
    price: 17.95,
    image: "/assets/dishes/brie-framboise.jpg",
    tags: ["vegetarian"],
    rating: 4.8
  },

  // Plats Principaux & Grillades
  {
    id: "moules-frites",
    category: "plats",
    nameFr: "Moules & Frites à la Marinière",
    nameEn: "Mussels & Fries Marinière",
    descFr: "Moules fraîches des Îles, vin blanc sec, crème fraîche fermière, échalotes et ail doux, servies avec un grand cornet de frites dorées.",
    descEn: "Fresh maritime mussels, dry white wine, farm fresh cream, shallots, and garlic, served with a cone of golden hand-cut fries.",
    price: 26.95,
    image: "/assets/dishes/moules.jpg",
    tags: ["seafood", "specialty"],
    rating: 4.9
  },
  {
    id: "cotes-levees",
    category: "plats",
    nameFr: "Côtes Levées de Bison au Sirop d'Érable",
    nameEn: "Maple-Glazed Bison Ribs",
    descFr: "Braisées longuement jusqu'à tendreté absolue, laquées d'une sauce BBQ au bourbon et sirop d'érable de Lévis, frites et salade de chou maison.",
    descEn: "Slowly braised to fork-tender perfection, glazed with bourbon-maple BBQ sauce from Lévis, served with fries and slaw.",
    price: 34.95,
    image: "/assets/dishes/cotes-levees.jpg",
    tags: ["signature"],
    rating: 4.9
  },
  {
    id: "lasagne",
    category: "plats",
    nameFr: "Lasagne Traditionnelle Al Forno",
    nameEn: "Traditional Lasagna Al Forno",
    descFr: "Feuilles de pâtes fraîches maison, sauce à la viande mijotée avec soin, sauce béchamel onctueuse, parmesan et mozzarella dorée au four.",
    descEn: "Fresh house-made pasta layers, slow-simmered bolognese meat sauce, velvety béchamel, baked parmesan, and mozzarella.",
    price: 24.95,
    image: "/assets/dishes/lasagne.jpg",
    tags: ["classic"],
    rating: 4.7
  },
  {
    id: "burger-new-york",
    category: "plats",
    nameFr: "Burger Délice New York",
    nameEn: "Délice New York Burger",
    descFr: "Galette de bœuf Angus canadien grillé, vieux cheddar fort, bacon croustillant, oignons caramélisés, sauce relish maison sur pain brioché.",
    descEn: "Grilled Canadian Angus beef patty, sharp aged cheddar, crispy bacon, caramelized onions, house relish on toasted brioche bun.",
    price: 22.95,
    image: "/assets/dishes/burger.jpg",
    tags: ["popular"],
    rating: 4.8
  },

  // Cocktails & Vins
  {
    id: "cocktail-signature",
    category: "cocktails",
    nameFr: "Délice Spritz Passion",
    nameEn: "Délice Passion Spritz",
    descFr: "Aperol, liqueur de fruit de la passion, Prosecco DOC, eau pétillante, tranche d'orange séchée et branche de romarin flambé.",
    descEn: "Aperol, passion fruit liqueur, Prosecco DOC, sparkling soda, dehydrated orange slice, and torched rosemary sprig.",
    price: 15.50,
    image: "/assets/dishes/cocktail-special.jpg",
    tags: ["signature", "drinks"],
    rating: 4.9
  },
  {
    id: "bar-drinks",
    category: "cocktails",
    nameFr: "Old Fashioned à l'Érable de Lévis",
    nameEn: "Lévis Maple Old Fashioned",
    descFr: "Bourbon Woodford Reserve, réduction de pur sirop d'érable québécois, amers aromatiques Angostura et zeste d'orange bio.",
    descEn: "Woodford Reserve bourbon, reduced pure Quebec maple syrup, Angostura aromatic bitters, and organic orange peel.",
    price: 16.50,
    image: "/assets/ambiance/drinks-bar.jpg",
    tags: ["cocktail", "drinks"],
    rating: 4.9
  },

  // Desserts
  {
    id: "puff-delice",
    category: "desserts",
    nameFr: "Le Puff Délice Choco-Vanille",
    nameEn: "The Délice Choco-Vanilla Puff",
    descFr: "Pâte à choux aérienne et croustillante, généreuse boule de glace à la vanille bourbon, sauce chocolat noir fondue versée à table.",
    descEn: "Crispy airy choux pastry stuffed with bourbon vanilla ice cream, topped with rich hot dark chocolate sauce poured tableside.",
    price: 11.95,
    image: "/assets/dishes/puff-delice.png",
    tags: ["dessert", "signature"],
    rating: 4.9
  },
  {
    id: "creme-brulee",
    category: "desserts",
    nameFr: "Crème Brûlée Traditionnelle",
    nameEn: "Classic Vanilla Crème Brûlée",
    descFr: "Crème onctueuse infusée aux véritables gousses de vanille de Madagascar, fine couche de caramel croquant craquelé sous la cuillère.",
    descEn: "Silky custard infused with Madagascar vanilla beans, under a caramelized glass-like sugar crust.",
    price: 10.95,
    image: "/assets/dishes/creme-brulee.png",
    tags: ["dessert", "gluten-free"],
    rating: 4.8
  },
  {
    id: "choco-picasso",
    category: "desserts",
    nameFr: "Le Picasso Tout Chocolat",
    nameEn: "Picasso All-Chocolate Cake",
    descFr: "Mousse au chocolat noir 70%, génoise fondante, cœur coulant caramel à la fleur de sel et feuille d'or comestible.",
    descEn: "70% dark chocolate mousse, moist sponge cake, salted caramel core, finished with edible gold leaf.",
    price: 12.95,
    image: "/assets/dishes/choco-picasso.png",
    tags: ["dessert"],
    rating: 4.9
  }
];

