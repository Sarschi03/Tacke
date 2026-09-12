export type Language = 'slo' | 'eng' | 'ger';

export interface Translations {
  nav: {
    home: string;
    about: string;
    about_sub: string;
    membership: string;
    donations: string;
    pricing: string;
    cats: string;
    contact: string;
    reservation: string;
  };
  hero: {
    label: string;
    title: string;
    p1: string;
    p2: string;
    btn: string;
  };
  about: {
    b1_title: string;
    b1_p1: string;
    b1_bold: string;
    b2_title: string;
    b2_p1: string;
    b2_p2: string;
    b3_title: string;
    b3_p1: string;
    b3_btn: string;
  };
  events: {
    top_title: string;
    top_text: string;
    label: string;
    left_title: string;
    card1_title: string;
    card1_text: string;
    card2_title: string;
    card2_text: string;
    card3_title: string;
    card3_text: string;
  };
  menu: {
    intro_title: string;
    intro_text: string;
    cat1_title: string;
    cat1_sub: string;
    cat1_extras: string;
    cat2_title: string;
    cat2_sublabel: string;
    cat2_mojito_desc: string;
    cat2_colada_desc: string;
    cat3_title: string;
    cat4_title: string;
    cat4_note: string;
    cat4_w_desc: string;
    cat4_d_desc: string;
    cat4_s_desc: string;
    cat4_o_desc: string;
    cat4_f_desc: string;
    cat5_title: string;
    items: {
      espresso: string;
      long_coffee: string;
      coffee_milk: string;
      white_coffee: string;
      decaf_coffee: string;
      cappuccino: string;
      hot_chocolate: string;
      cocoa: string;
      syrup_cinnamon: string;
      syrup_biscuit: string;
      syrup_caramel: string;
      syrup_hazelnut: string;
      syrup_vanilla: string;
      raspberry: string;
      passionfruit: string;
      pineapple: string;
      green_apple: string;
      mango: string;
      strawberry: string;
      cats_mojito: string;
      cats_colada: string;
      elderberry: string;
      lavender: string;
      mint: string;
      nettle: string;
      rose: string;
      lungwort: string;
      tea_women: string;
      tea_breathe: string;
      tea_snow: string;
      tea_oasis: string;
      tea_family: string;
      fruit_teas: string;
      herbal_teas: string;
      green_tea: string;
      black_tea: string;
    };
  };
  footer: {
    about: string;
    cats: string;
    hours: string;
    location: string;
    contact: string;
    everyDay: string;
    hoursVal: string;
  };
  map: {
    title_location: string;
    title_contact: string;
    title_hours: string;
    every_day: string;
  };
  pages: {
    about: {
      subhero_title: string;
      subhero_text: string;
      top_title: string;
      top_right: string;
      left_label: string;
      left_title: string;
      right_label: string;
      right_p1: string;
      right_p2: string;
    };
    cats: {
      subhero_title: string;
      subhero_text: string;
    };
    membership: {
      subhero_title: string;
      subhero_text: string;
      top_title: string;
      top_right: string;
      left_label: string;
      left_title: string;
      right_label: string;
      right_p1: string;
      right_p2: string;
      form_name_req: string;
      form_first_name: string;
      form_last_name: string;
      form_type: string;
      form_basic: string;
      form_premium: string;
      form_email: string;
      form_msg: string;
      form_send: string;
    };
    donations: {
      subhero_title: string;
      subhero_text: string;
      top_title: string;
      top_right: string;
      left_label: string;
      left_title: string;
      right_label: string;
      right_p1: string;
      right_p2: string;
      scroll_1: string;
      scroll_2: string;
    };
    pricing: {
      subhero_title: string;
      title: string;
      adults: string;
      children: string;
      note1: string;
      note2: string;
    };
    contact: {
      subhero_title: string;
      subhero_text: string;
    };
    reservation: {
      subhero_title: string;
      subhero_text: string;
      pick_date_time: string;
      avail_for: string;
      loading: string;
      unavailable: string;
      pick_date_first: string;
      service_info: string;
      table_reservation: string;
      more_details: string;
      pick_table: string;
      full: string;
      weekdays: string[];
      months: string[];
    };
  };
}

export const translations: Record<Language, Translations> = {
  slo: {
    nav: {
      home: 'Domov',
      about: 'O nas',
      about_sub: 'O nas',
      membership: 'Članstvo',
      donations: 'Donacije',
      pricing: 'Cenik',
      cats: 'Naše muce',
      contact: 'Kontakt',
      reservation: 'Rezervacija',
    },
    hero: {
      label: 'Društvo ljubiteljev mačjih tačk',
      title: 'Za ljudi. Za muce. <br/> Za druženje.',
      p1: 'Smo društvo ljubiteljev mačk, ki povezuje ljudi, ki imajo radi mačke, skrbi za njihovo dobro počutje ter ozavešča o odgovorni skrbi in življenju z mačkami.',
      p2: 'Spoznajte naše mačje prijatelje in nas obiščite.',
      btn: 'Rezervirajte obisk',
    },
    about: {
      b1_title: 'Kjer mačke srečajo ljudi, ki jih imajo radi.',
      b1_p1: 'Dobrodošli v svetu mačjih tačk – prostoru druženja, sprostitve in ljubezni do mačk. Spoznajte naše kosmate prijatelje, izvedite kaj novega o njihovem svetu in preživite prijeten čas v njihovi družbi.',
      b1_bold: 'Pridite. Ustavite se. Pobožajte.',
      b2_title: 'Več kot le mačja kavarna. Dom za ljubitelje mačk.',
      b2_p1: 'V Društvu ljubiteljev mačjih tačk ustvarjamo prijazen in varen prostor, kjer se srečujejo ljudje in mačke. Skrbimo za dobro počutje naših mačjih prijateljev, širimo znanje o njihovih potrebah ter povezujemo vse, ki jih združuje ljubezen do mačk.',
      b2_p2: 'Pridite na obisk, spoznajte našo mačjo družino in si privoščite nekaj čudovitih trenutkov v njihovi družbi.',
      b3_title: 'Rezervirajte svoj termin.',
      b3_p1: 'Naše muce so zelo zasedene, zato prosimo, da si termin obiska rezervirate vnaprej.',
      b3_btn: 'Rezervirajte obisk',
    },
    events: {
      top_title: 'Dogodki & novosti.',
      top_text: 'Pridružite se nam na posebnih prireditvah, delavnicah in srečanjih — za ljubitelje mačk in tiste, ki to šele postajajo.',
      label: 'Prihajajoči dogodki',
      left_title: 'Vedno se dogaja kaj novega.',
      card1_title: 'Delavnica fotografiranja mačk',
      card1_text: 'Naučite se zajeti nepozabne trenutke naših muckov pod vodstvom profesionalnega fotografa.',
      card2_title: 'Večer za nove posvojitelje',
      card2_text: 'Spoznajte naše mačke in izveste vse, kar morate vedeti pred posvojitvijo. Rezervirajte mesto!',
      card3_title: 'Jutranja joga z mučkami',
      card3_text: 'Začnite dan umirjeno — jutranja vadba v sproščenem vzdušju ob prisotnosti naših kosmatih prijateljev.',
    },
    menu: {
      intro_title: 'Naša ponudba.',
      intro_text: 'Razvajajte se z našo ponudbo toplih napitkov, osvežilnih sokov in domačih sladic — ob prijetnem prestižu naših mačjih prijateljev.',
      cat1_title: 'KAVNI NAPITKI',
      cat1_sub: 'Julius Meinl',
      cat1_extras: 'Dodatki:',
      cat2_title: 'BREZALKOHOLNE PIJAČE',
      cat2_sublabel: 'Okusi:',
      cat2_mojito_desc: '(limonin sok, metin sirup, sladkor, led, liker po želji)',
      cat2_colada_desc: '(ananasov sok, kokosovo mleko, led, liker po želji)',
      cat3_title: 'DOMAČI SOKOVI',
      cat4_title: 'ČAJI Herbessa',
      cat4_note: 'Cena za prodajo čajev Herbessa: 8,50€/50g',
      cat4_w_desc: '(vrtnica, kamilica, rman, bazilika, plahtnica)',
      cat4_d_desc: '(materina dušica, pljučnik, smrekovi vršički, origano, trpotec, lipa)',
      cat4_s_desc: '(suh jabolko, plodovi šipka, koriander in gver, oranžna meta, idr.)',
      cat4_o_desc: '(melisa, sivka, rožmarin, lipa, rman, glog)',
      cat4_f_desc: '(melisa, lipa, rograt, šipek, list jagode)',
      cat5_title: 'ČAJI Julius Meinl',
      items: {
        espresso: 'Espresso',
        long_coffee: 'Dolga kava',
        coffee_milk: 'Kava z mlekom',
        white_coffee: 'Bela kava',
        decaf_coffee: 'Brezkofeinska kava',
        cappuccino: 'Cappuccino',
        hot_chocolate: 'Lahka mačja vroča čokolada',
        cocoa: 'Kakav',
        syrup_cinnamon: 'Sirup MONIN Cimet',
        syrup_biscuit: 'Sirup MONIN Čokoladni piškot',
        syrup_caramel: 'Sirup MONIN Karamela',
        syrup_hazelnut: 'Sirup MONIN Lešnik',
        syrup_vanilla: 'Sirup MONIN Vanilija',
        raspberry: 'Malina',
        passionfruit: 'Pasijonka',
        pineapple: 'Ananas',
        green_apple: 'Zeleno jabolko',
        mango: 'Mango',
        strawberry: 'Jagoda',
        cats_mojito: 'Cats Mojito',
        cats_colada: 'Cats Colada',
        elderberry: 'Bezeg',
        lavender: 'Sivka',
        mint: 'Meta',
        nettle: 'Kopriva',
        rose: 'Vrtnica',
        lungwort: 'Pljučnik',
        tea_women: 'Čaj za ženske',
        tea_breathe: 'Dihalko',
        tea_snow: 'Ples snežink',
        tea_oasis: 'Oaza miru',
        tea_family: 'Družinska sreča',
        fruit_teas: 'Razni sadni čaji',
        herbal_teas: 'Razni zeliščni čaji',
        green_tea: 'Zeleni čaj',
        black_tea: 'Črni čaj',
      },
    },
    footer: {
      about: 'O NAS',
      cats: 'NAŠE MUCE',
      hours: 'DELOVNI ČAS',
      location: 'LOKACIJA',
      contact: 'KONTAKT',
      everyDay: 'Vsak dan',
      hoursVal: '16.15 – 19.45',
    },
    map: {
      title_location: 'Naša lokacija',
      title_contact: 'Kontakt',
      title_hours: 'Delovni čas',
      every_day: 'Vsak dan:',
    },
    pages: {
      about: {
        subhero_title: 'O nas',
        subhero_text: 'Spoznajte našo zgodbo in kako se je vse začelo.',
        top_title: 'Dobrodošli v Tacke Cat Café.',
        top_right: 'Prostor, kjer se združita ljubezen do mačk in odlična kava.',
        left_label: 'Kdo smo?',
        left_title: 'Ustvarjamo sproščujoče okolje za vse.',
        right_label: 'Naše poslanstvo',
        right_p1: 'Naša zgodba se je začela s preprosto idejo: ustvariti varen in prijeten kotiček za mačke, ki potrebujejo dom, ter hkrati ponuditi prostor za sprostitev vsem ljubiteljem živali.',
        right_p2: 'Vsak obisk pri nas pomaga pri oskrbi in iskanju novih domov za naše kosmate prijatelje. Verjamemo v dobrobit živali in grajenje skupnosti.',
      },
      cats: {
        subhero_title: 'Naše muce',
        subhero_text: 'Spoznajte naše čudovite mačke, ki živijo z nami.',
      },
      membership: {
        subhero_title: 'Članstvo',
        subhero_text: 'Postanite član naše skupnosti in uživajte v posebnih ugodnostih.',
        top_title: 'Ekskluzivne ugodnosti.',
        top_right: 'S članstvom v naši kavarni pridobite dostop do številnih popustov in dogodkov.',
        left_label: 'Zakaj postati član?',
        left_title: 'Veliko več kot le dobra kava.',
        right_label: 'Vaše ugodnosti',
        right_p1: 'Kot član dobite prednost pri rezervacijah, kar pomeni, da boste vedno našli prostor za sprostitev ob naših muckah. Ponujamo tudi fiksne popuste na vse tople napitke.',
        right_p2: 'Prav tako naši člani prejmejo ekskluzivna vabila na posebne dogodke, predavanja o oskrbi mačk ter druge z zaprtimi vrati vodene delavnice.',
        form_name_req: 'Ime (obvezno)',
        form_first_name: 'Ime',
        form_last_name: 'Priimek',
        form_type: 'Vrsta članstva',
        form_basic: 'Osnovno članstvo',
        form_premium: 'Premium članstvo',
        form_email: 'Email (obvezno)',
        form_msg: 'Vaše sporočilo',
        form_send: 'Pošlji',
      },
      donations: {
        subhero_title: 'Donacije',
        subhero_text: 'S svojo donacijo pomagate skrbeti za mačke in podpirate naše poslanstvo.',
        top_title: 'Vsak prispevek šteje.',
        top_right: 'Vaše donacije neposredno pomagajo zagotoviti hrano, cepiva in veterinarsko pomoč.',
        left_label: 'Kako donirati?',
        left_title: 'Skupaj lahko naredimo razliko.',
        right_label: 'Kje konča vaš denar',
        right_p1: '100% zbranih sredstev se nameni neposredno za oskrbo in nego naših rešenih mačk. Pomagate nam plačati najnujnejše stroške, tiste vidne in nevidne.',
        right_p2: 'Omogočite jim toplo zavetje in igralni prostor. Vsak obrok in vsaka nega zanje pomenita korak do polnega zdravja in varnega življenja.',
        scroll_1: 'Hvala za vašo podporo ',
        scroll_2: 'Hvala za vaše donacije ',
      },
      pricing: {
        subhero_title: 'Cenik',
        title: 'Vstopnina',
        adults: 'Odrasli',
        children: 'Otroci (4–9 let)',
        note1: 'Vstop je dovoljen otrokom starosti 4 leta do 9 let v spremstvu odrasle osebe.',
        note2: 'V ceno so všete voda, domači sokovi, kava, kakav, domači čaj in sezonsko sadje.',
      },
      contact: {
        subhero_title: 'Kontakt',
        subhero_text: 'Stopite v stik z nami ali nas obiščite v Mariboru.',
      },
      reservation: {
        subhero_title: 'Načrtujte vašo storitev',
        subhero_text: 'Preverite našo razpoložljivost in rezervirajte datum in uro, ki vam ustrezata',
        pick_date_time: 'Izberite datum in uro',
        avail_for: 'Razpoložljivost za',
        loading: 'Nalaganje...',
        unavailable: 'Ni razpoložljivosti (Na ta dan ne delamo).',
        pick_date_first: 'Izberite datum za prikaz ur.',
        service_info: 'Podatki o storitvi',
        table_reservation: 'Rezervacija mize',
        more_details: 'Več podrobnosti ⬇',
        pick_table: 'Izberi mizo',
        full: '(Zasedeno)',
        weekdays: ['pon.', 'tor.', 'sre.', 'čet.', 'pet.', 'sob.', 'ned.'],
        months: [
          'januar', 'februar', 'marec', 'april', 'maj', 'junij',
          'julij', 'avgust', 'september', 'oktober', 'november', 'december'
        ],
      },
    },
  },
  eng: {
    nav: {
      home: 'Home',
      about: 'About us',
      about_sub: 'About us',
      membership: 'Membership',
      donations: 'Donations',
      pricing: 'Pricing',
      cats: 'Our cats',
      contact: 'Contact',
      reservation: 'Reservation',
    },
    hero: {
      label: 'Society of Cat Paw Lovers',
      title: 'For people. For cats. <br/> For gathering.',
      p1: 'We are a society of cat lovers connecting people who adore cats, caring for their well-being, and raising awareness about responsible care and life with cats.',
      p2: 'Meet our feline friends and visit us.',
      btn: 'Book a visit',
    },
    about: {
      b1_title: 'Where cats meet people who love them.',
      b1_p1: 'Welcome to the world of cat paws – a place of gathering, relaxation, and love for cats. Meet our furry friends, discover something new about their world, and spend pleasant moments in their company.',
      b1_bold: 'Come in. Pause. Pet.',
      b2_title: 'More than just a cat café. A home for cat lovers.',
      b2_p1: 'At the Society of Cat Paw Lovers, we create a welcoming and safe environment where people and cats come together. We ensure the well-being of our feline friends, share knowledge about their needs, and unite all who share a love for cats.',
      b2_p2: 'Come visit us, meet our cat family, and treat yourself to some wonderful moments in their company.',
      b3_title: 'Book your appointment.',
      b3_p1: 'Our cats have quite a busy schedule, so please book your visit in advance.',
      b3_btn: 'Book a visit',
    },
    events: {
      top_title: 'Events & News.',
      top_text: 'Join us for special events, workshops, and gatherings — for cat lovers and those who are just about to become one.',
      label: 'Upcoming events',
      left_title: 'There is always something new happening.',
      card1_title: 'Cat Photography Workshop',
      card1_text: 'Learn how to capture unforgettable moments of our kittens guided by a professional photographer.',
      card2_title: 'Evening for New Adopters',
      card2_text: 'Meet our cats and learn everything you need to know before adopting. Reserve your spot!',
      card3_title: 'Morning Yoga with Kitties',
      card3_text: 'Start your day peacefully — morning practice in a relaxed atmosphere alongside our furry friends.',
    },
    menu: {
      intro_title: 'Our selection.',
      intro_text: 'Treat yourself to our selection of warm drinks, refreshing juices, and homemade treats — accompanied by the delightful presence of our feline friends.',
      cat1_title: 'COFFEE DRINKS',
      cat1_sub: 'Julius Meinl',
      cat1_extras: 'Add-ons:',
      cat2_title: 'NON-ALCOHOLIC BEVERAGES',
      cat2_sublabel: 'Flavors:',
      cat2_mojito_desc: '(lemon juice, mint syrup, sugar, ice, liqueur optional)',
      cat2_colada_desc: '(pineapple juice, coconut milk, ice, liqueur optional)',
      cat3_title: 'HOMEMADE JUICES',
      cat4_title: 'HERBESSA TEAS',
      cat4_note: 'Herbessa tea retail price: €8.50/50g',
      cat4_w_desc: '(rose, chamomile, yarrow, basil, lady\'s mantle)',
      cat4_d_desc: '(thyme, lungwort, spruce tips, oregano, plantain, linden)',
      cat4_s_desc: '(dried apple, rosehips, coriander, ginger, orange mint, etc.)',
      cat4_o_desc: '(lemon balm, lavender, rosemary, linden, yarrow, hawthorn)',
      cat4_f_desc: '(lemon balm, linden, dandelion, rosehip, strawberry leaf)',
      cat5_title: 'JULIUS MEINL TEAS',
      items: {
        espresso: 'Espresso',
        long_coffee: 'Americano / Lungo',
        coffee_milk: 'Coffee with milk',
        white_coffee: 'Caffè Latte',
        decaf_coffee: 'Decaf coffee',
        cappuccino: 'Cappuccino',
        hot_chocolate: 'Light Cat Hot Chocolate',
        cocoa: 'Cocoa',
        syrup_cinnamon: 'MONIN Cinnamon Syrup',
        syrup_biscuit: 'MONIN Chocolate Cookie Syrup',
        syrup_caramel: 'MONIN Caramel Syrup',
        syrup_hazelnut: 'MONIN Hazelnut Syrup',
        syrup_vanilla: 'MONIN Vanilla Syrup',
        raspberry: 'Raspberry',
        passionfruit: 'Passion fruit',
        pineapple: 'Pineapple',
        green_apple: 'Green apple',
        mango: 'Mango',
        strawberry: 'Strawberry',
        cats_mojito: 'Cats Mojito',
        cats_colada: 'Cats Colada',
        elderberry: 'Elderberry',
        lavender: 'Lavender',
        mint: 'Mint',
        nettle: 'Nettle',
        rose: 'Rose',
        lungwort: 'Lungwort',
        tea_women: 'Women\'s Tea',
        tea_breathe: 'Breathe Easy',
        tea_snow: 'Snowflakes Dance',
        tea_oasis: 'Oasis of Peace',
        tea_family: 'Family Joy',
        fruit_teas: 'Assorted fruit teas',
        herbal_teas: 'Assorted herbal teas',
        green_tea: 'Green tea',
        black_tea: 'Black tea',
      },
    },
    footer: {
      about: 'ABOUT US',
      cats: 'OUR CATS',
      hours: 'OPENING HOURS',
      location: 'LOCATION',
      contact: 'CONTACT',
      everyDay: 'Every day',
      hoursVal: '16.15 – 19.45',
    },
    map: {
      title_location: 'Our location',
      title_contact: 'Contact',
      title_hours: 'Opening hours',
      every_day: 'Every day:',
    },
    pages: {
      about: {
        subhero_title: 'About us',
        subhero_text: 'Discover our story and how it all began.',
        top_title: 'Welcome to Tacke Cat Café.',
        top_right: 'A place where genuine love for cats meets wonderful coffee.',
        left_label: 'Who are we?',
        left_title: 'Creating a relaxing haven for everyone.',
        right_label: 'Our mission',
        right_p1: 'Our journey began with a simple idea: creating a safe and warm sanctuary for cats that need a home, while offering a peaceful retreat for all animal enthusiasts.',
        right_p2: 'Every visit supports the care and adoption journeys of our rescued furry companions. We deeply believe in animal welfare and building an engaged community.',
      },
      cats: {
        subhero_title: 'Our cats',
        subhero_text: 'Meet the lovely cats that reside with us.',
      },
      membership: {
        subhero_title: 'Membership',
        subhero_text: 'Become part of our community and enjoy exclusive perks.',
        top_title: 'Exclusive benefits.',
        top_right: 'Joining our community grants you access to special perks, discounts, and intimate events.',
        left_label: 'Why become a member?',
        left_title: 'Far more than just great coffee.',
        right_label: 'Your advantages',
        right_p1: 'Members receive priority table bookings, ensuring you always have a cozy spot reserved next to our kitties. Enjoy fixed discounts across all hot beverages.',
        right_p2: 'You also get private invitations to our exclusive evenings, guest lectures on cat care, and member-only workshops.',
        form_name_req: 'Name (required)',
        form_first_name: 'First name',
        form_last_name: 'Last name',
        form_type: 'Membership type',
        form_basic: 'Basic membership',
        form_premium: 'Premium membership',
        form_email: 'Email (required)',
        form_msg: 'Your message',
        form_send: 'Submit',
      },
      donations: {
        subhero_title: 'Donations',
        subhero_text: 'Your contribution directly supports cat care and furthers our mission.',
        top_title: 'Every contribution counts.',
        top_right: 'Your donations directly fund daily nutrition, vaccinations, and essential vet visits.',
        left_label: 'How to donate?',
        left_title: 'Together we make a real difference.',
        right_label: 'Where your contribution goes',
        right_p1: '100% of collected funds are directly channeled toward medical care, nourishment, and shelter for our cats, covering vital ongoing expenses.',
        right_p2: 'You provide them with cozy warmth and loving playtime. Every meal and every check-up brings them closer to a healthy, joyful life.',
        scroll_1: 'Thank you for your support ',
        scroll_2: 'Thank you for your donations ',
      },
      pricing: {
        subhero_title: 'Pricing',
        title: 'Admission',
        adults: 'Adults',
        children: 'Children (4–9 yrs)',
        note1: 'Children aged 4 to 9 must be accompanied by an adult.',
        note2: 'Admission covers unlimited water, homemade juices, coffee, cocoa, herbal tea, and seasonal fruits.',
      },
      contact: {
        subhero_title: 'Contact',
        subhero_text: 'Reach out to us or pay us a visit in Maribor.',
      },
      reservation: {
        subhero_title: 'Plan your visit',
        subhero_text: 'Check our availability and choose the date and time that suits you best',
        pick_date_time: 'Select date & time',
        avail_for: 'Availability for',
        loading: 'Loading...',
        unavailable: 'Unavailable (We are closed on this day).',
        pick_date_first: 'Select a date to view available time slots.',
        service_info: 'Service details',
        table_reservation: 'Table reservation',
        more_details: 'More details ⬇',
        pick_table: 'Choose table',
        full: '(Fully booked)',
        weekdays: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        months: [
          'January', 'February', 'March', 'April', 'May', 'June',
          'July', 'August', 'September', 'October', 'November', 'December'
        ],
      },
    },
  },
  ger: {
    nav: {
      home: 'Startseite',
      about: 'Über uns',
      about_sub: 'Über uns',
      membership: 'Mitgliedschaft',
      donations: 'Spenden',
      pricing: 'Preise',
      cats: 'Unsere Katzen',
      contact: 'Kontakt',
      reservation: 'Reservierung',
    },
    hero: {
      label: 'Verein der Katzenpfoten-Liebhaber',
      title: 'Für Menschen. Für Katzen. <br/> Für das Miteinander.',
      p1: 'Wir sind ein Verein von Katzenliebhabern, der Menschen verbindet, die Katzen lieben, für ihr Wohlbefinden sorgt und das Bewusstsein für verantwortungsvolle Pflege und das Leben mit Katzen schärft.',
      p2: 'Lernen Sie unsere Katzenfreunde kennen und besuchen Sie uns.',
      btn: 'Besuch buchen',
    },
    about: {
      b1_title: 'Wo Katzen Menschen treffen, die sie lieben.',
      b1_p1: 'Willkommen in der Welt der Katzenpfoten – einem Ort der Begegnung, Entspannung und Liebe zu Katzen. Lernen Sie unsere pelzigen Freunde kennen, erfahren Sie Neues über ihre Welt und verbringen Sie eine angenehme Zeit in ihrer Gesellschaft.',
      b1_bold: 'Vorbeikommen. Innehalten. Streicheln.',
      b2_title: 'Mehr als nur ein Katzencafé. Ein Zuhause für Katzenliebhaber.',
      b2_p1: 'Im Verein der Katzenpfoten-Liebhaber schaffen wir einen freundlichen und sicheren Ort, an dem sich Mensch und Katze begegnen. Wir kümmern uns um das Wohlbefinden unserer Katzenfreunde, vermitteln Wissen über ihre Bedürfnisse und verbinden alle, die die Liebe zu Katzen eint.',
      b2_p2: 'Kommen Sie zu Besuch, lernen Sie unsere Katzenfamilie kennen und gönnen Sie sich wunderbare Momente in ihrer Gesellschaft.',
      b3_title: 'Buchen Sie Ihren Termin.',
      b3_p1: 'Unsere Kätzchen sind sehr beschäftigt, daher bitten wir Sie, Ihren Besuch im Voraus zu reservieren.',
      b3_btn: 'Besuch buchen',
    },
    events: {
      top_title: 'Events & Neuigkeiten.',
      top_text: 'Nehmen Sie an unseren besonderen Veranstaltungen, Workshops und Treffen teil — für Katzenliebhaber und solche, die es noch werden wollen.',
      label: 'Kommende Veranstaltungen',
      left_title: 'Es gibt immer etwas Neues.',
      card1_title: 'Katzenfotografie-Workshop',
      card1_text: 'Lernen Sie unter Anleitung eines professionellen Fotografen, unvergessliche Momente unserer Kätzchen festzuhalten.',
      card2_title: 'Abend für neue Adoptanten',
      card2_text: 'Lernen Sie unsere Katzen kennen und erfahren Sie alles Wissenswerte vor einer Adoption. Reservieren Sie Ihren Platz!',
      card3_title: 'Morgen-Yoga mit Kätzchen',
      card3_text: 'Starten Sie ruhig in den Tag — morgendliche Bewegung in entspannter Atmosphäre in Anwesenheit unserer pelzigen Freunde.',
    },
    menu: {
      intro_title: 'Unser Angebot.',
      intro_text: 'Verwöhnen Sie sich mit unserer Auswahl an warmen Getränken, erfrischenden Säften und hausgemachten Desserts — in angenehmer Gesellschaft unserer Katzenfreunde.',
      cat1_title: 'KAFFEEGETRÄNKE',
      cat1_sub: 'Julius Meinl',
      cat1_extras: 'Zusätze:',
      cat2_title: 'ALKOHOLFREIE GETRÄNKE',
      cat2_sublabel: 'Geschmacksrichtungen:',
      cat2_mojito_desc: '(Zitronensaft, Minzsirup, Zucker, Eis, Likör nach Wunsch)',
      cat2_colada_desc: '(Ananassaft, Kokosmilch, Eis, Likör nach Wunsch)',
      cat3_title: 'HAUSGEMACHTE SÄFTE',
      cat4_title: 'HERBESSA TEES',
      cat4_note: 'Verkaufspreis für Herbessa-Tees: 8,50 € / 50g',
      cat4_w_desc: '(Rose, Kamille, Schafgarbe, Basilikum, Frauenmantel)',
      cat4_d_desc: '(Thymian, Lungenkraut, Fichtenspitzen, Oregano, Spitzwegerich, Linde)',
      cat4_s_desc: '(getrockneter Apfel, Hagebutten, Koriander, Ingwer, Orangenminze u. a.)',
      cat4_o_desc: '(Zitronenmelisse, Lavendel, Rosmarin, Linde, Schafgarbe, Weißdorn)',
      cat4_f_desc: '(Zitronenmelisse, Linde, Löwenzahn, Hagebutte, Erdbeerblatt)',
      cat5_title: 'JULIUS MEINL TEES',
      items: {
        espresso: 'Espresso',
        long_coffee: 'Verlängerter Kaffee',
        coffee_milk: 'Kaffee mit Milch',
        white_coffee: 'Melange / Latte',
        decaf_coffee: 'Entkoffeinierter Kaffee',
        cappuccino: 'Cappuccino',
        hot_chocolate: 'Leichte Katzen-Heiße-Schokolade',
        cocoa: 'Kakao',
        syrup_cinnamon: 'MONIN Zimtsirup',
        syrup_biscuit: 'MONIN Schoko-Keks-Sirup',
        syrup_caramel: 'MONIN Karamellsirup',
        syrup_hazelnut: 'MONIN Haselnusssirup',
        syrup_vanilla: 'MONIN Vanillesirup',
        raspberry: 'Himbeere',
        passionfruit: 'Passionsfrucht',
        pineapple: 'Ananas',
        green_apple: 'Grüner Apfel',
        mango: 'Mango',
        strawberry: 'Erdbeere',
        cats_mojito: 'Cats Mojito',
        cats_colada: 'Cats Colada',
        elderberry: 'Holunder',
        lavender: 'Lavendel',
        mint: 'Minze',
        nettle: 'Brennnessel',
        rose: 'Rose',
        lungwort: 'Lungenkraut',
        tea_women: 'Frauentee',
        tea_breathe: 'Durchatmen',
        tea_snow: 'Schneeflockentanz',
        tea_oasis: 'Oase der Ruhe',
        tea_family: 'Familienglück',
        fruit_teas: 'Verschiedene Früchtetees',
        herbal_teas: 'Verschiedene Kräutertees',
        green_tea: 'Grüner Tee',
        black_tea: 'Schwarztee',
      },
    },
    footer: {
      about: 'ÜBER UNS',
      cats: 'UNSERE KATZEN',
      hours: 'ÖFFNUNGSZEITEN',
      location: 'STANDORT',
      contact: 'KONTAKT',
      everyDay: 'Täglich',
      hoursVal: '16.15 – 19.45',
    },
    map: {
      title_location: 'Unser Standort',
      title_contact: 'Kontakt',
      title_hours: 'Öffnungszeiten',
      every_day: 'Täglich:',
    },
    pages: {
      about: {
        subhero_title: 'Über uns',
        subhero_text: 'Erfahren Sie mehr über unsere Geschichte und wie alles begann.',
        top_title: 'Willkommen im Tacke Cat Café.',
        top_right: 'Ein Ort, an dem Katzenliebe und hervorragender Kaffee zusammentreffen.',
        left_label: 'Wer sind wir?',
        left_title: 'Wir schaffen eine entspannende Umgebung für jedermann.',
        right_label: 'Unsere Mission',
        right_p1: 'Unsere Reise begann mit einer einfachen Idee: einen sicheren und herzlichen Zufluchtsort für Katzen zu schaffen, die ein Zuhause suchen, und gleichzeitig Tierfreunden einen Ort der Erholung zu bieten.',
        right_p2: 'Jeder Besuch unterstützt die Pflege und Vermittlung unserer geretteten pelzigen Freunde. Wir setzen uns mit Leidenschaft für den Tierschutz ein.',
      },
      cats: {
        subhero_title: 'Unsere Katzen',
        subhero_text: 'Lernen Sie unsere wunderbaren Katzen kennen, die bei uns leben.',
      },
      membership: {
        subhero_title: 'Mitgliedschaft',
        subhero_text: 'Werden Sie Teil unserer Gemeinschaft und genießen Sie besondere Vorteile.',
        top_title: 'Exklusive Vorzüge.',
        top_right: 'Mit einer Mitgliedschaft erhalten Sie Zugang zu Vergünstigungen und exklusiven Events.',
        left_label: 'Warum Mitglied werden?',
        left_title: 'Viel mehr als nur guter Kaffee.',
        right_label: 'Ihre Vorteile',
        right_p1: 'Als Mitglied haben Sie Vorrang bei Tischreservierungen – so sichern Sie sich stets Ihren Platz bei den Katzen. Zudem erhalten Sie Preisnachlässe auf Heißgetränke.',
        right_p2: 'Mitglieder erhalten außerdem exklusive Einladungen zu besonderen Abenden, Vorträgen über Katzenpflege und Workshops.',
        form_name_req: 'Name (erforderlich)',
        form_first_name: 'Vorname',
        form_last_name: 'Nachname',
        form_type: 'Mitgliedschaftsart',
        form_basic: 'Basismitgliedschaft',
        form_premium: 'Premium-Mitgliedschaft',
        form_email: 'E-Mail (erforderlich)',
        form_msg: 'Ihre Nachricht',
        form_send: 'Absenden',
      },
      donations: {
        subhero_title: 'Spenden',
        subhero_text: 'Mit Ihrer Spende unterstützen Sie die Pflege der Katzen und unsere Mission.',
        top_title: 'Jeder Beitrag zählt.',
        top_right: 'Ihre Spenden fließen direkt in Futter, Impfungen und tierärztliche Betreuung.',
        left_label: 'Wie spenden?',
        left_title: 'Gemeinsam können wir viel bewegen.',
        right_label: 'Wohin Ihre Hilfe fließt',
        right_p1: '100% der Mittel werden direkt für die Versorgung unserer geretteten Katzen aufgewendet und decken lebenswichtige laufende Kosten.',
        right_p2: 'Sie schenken ihnen Wärme, Geborgenheit und einen sicheren Lebensraum. Jede Unterstützung bedeutet einen Schritt zu Gesundheit und Glück.',
        scroll_1: 'Vielen Dank für Ihre Unterstützung ',
        scroll_2: 'Herzlichen Dank für Ihre Spenden ',
      },
      pricing: {
        subhero_title: 'Preise',
        title: 'Eintritt',
        adults: 'Erwachsene',
        children: 'Kinder (4–9 Jahre)',
        note1: 'Kinder von 4 bis 9 Jahren dürfen das Café nur in Begleitung Erwachsener betreten.',
        note2: 'Im Eintrittspreis sind Wasser, hausgemachte Säfte, Kaffee, Kakao, Kräutertee und Obst der Saison enthalten.',
      },
      contact: {
        subhero_title: 'Kontakt',
        subhero_text: 'Treten Sie mit uns in Kontakt oder besuchen Sie uns in Maribor.',
      },
      reservation: {
        subhero_title: 'Planen Sie Ihren Besuch',
        subhero_text: 'Prüfen Sie unsere Verfügbarkeit und wählen Sie einen passenden Termin aus',
        pick_date_time: 'Datum und Uhrzeit wählen',
        avail_for: 'Verfügbarkeit für',
        loading: 'Wird geladen...',
        unavailable: 'Keine Verfügbarkeit (An diesem Tag geschlossen).',
        pick_date_first: 'Wählen Sie ein Datum, um freie Zeiten zu sehen.',
        service_info: 'Buchungsdetails',
        table_reservation: 'Tischreservierung',
        more_details: 'Weitere Details ⬇',
        pick_table: 'Tisch auswählen',
        full: '(Ausgebucht)',
        weekdays: ['Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa', 'So'],
        months: [
          'Januar', 'Februar', 'März', 'April', 'Mai', 'Juni',
          'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'
        ],
      },
    },
  },
};
