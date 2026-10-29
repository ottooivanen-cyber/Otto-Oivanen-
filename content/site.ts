import type { Content } from "./types";

// ---------------------------------------------------------------------------
// ALL PAGE TEXT LIVES HERE.
//
// Every fact comes from a public source, listed in the comment next to it.
// Quotes marked "translated" were written by you in Finnish; check that the
// English says what you meant.
// ---------------------------------------------------------------------------

export const site: Content = {
  site: {
    title: "Otto Oivanen",
    description:
      "Entrepreneur in Lund, Sweden. I build AI workers for businesses, run projects in public, and play professional volleyball.",
    url: "https://ottooivanen-cyber.github.io/Otto-Oivanen-/",
  },

  nav: {
    home: "Otto Oivanen",
    skip: "Skip to content",
    menu: "Menu",
    close: "Close",
    items: [
      { label: "Now", href: "#now" },
      { label: "Projects", href: "#projects" },
      { label: "Thinking", href: "#thinking" },
      { label: "Services", href: "#services" },
      { label: "Volleyball", href: "#volleyball" },
      { label: "Contact", href: "#contact" },
    ],
  },

  hero: {
    eyebrow: "Entrepreneur · Lund, Sweden",
    name: "Otto Oivanen",
    tagline:
      "I start things, build them in public and learn by doing. Right now that means AI workers for businesses, the next content project, and professional volleyball.",
    primaryCta: { label: "Work with me", href: "#contact" },
    secondaryCta: { label: "See projects", href: "#projects" },
    photo: { src: "/images/portrait.jpg", alt: "Otto Oivanen sitting in front of a colourful graffiti mural" },
  },

  now: {
    heading: "Now",
    intro: "Autumn 2026.",
    items: [
      {
        label: "Building",
        // Source: https://se.linkedin.com/in/otto-oivanen-71230329b (post looking for demo clients)
        text: "AI workers and automations for my first demo clients: businesses with daily tasks that repeat and eat time.",
      },
      {
        label: "Playing",
        // Source: https://www.lundsvk.se/player/otto-oivanen/
        text: "Setter for Lunds VK in the Swedish top division. I moved to Lund in 2026.",
      },
      {
        label: "Studying",
        // Source: LinkedIn (University of Vaasa, IEM); https://fi.wikipedia.org/wiki/Otto_Oivanen (started Aug 2025)
        text: "Industrial Engineering and Management at the University of Vaasa.",
      },
      {
        label: "Releasing",
        // Source: LinkedIn post after the trip ("julkaistaan joulukuussa YouTube-dokumenttina")
        text: "The full Finland to Morocco story as a YouTube documentary in December.",
      },
    ],
  },

  projects: {
    heading: "Projects",
    intro: "What I've built and run, with the numbers and how it actually went.",
    items: [
      {
        name: "Ikkunapojat: Finland to Morocco on zero budget",
        period: "Summer 2026",
        role: "Co-founder, with Paulus Kriikkula. Filmed by Niklas Heinola.",
        // Sources:
        //   https://www.linkedin.com/posts/vaasa-entrepreneurship-society_otto-oivanen-from-the-ves-board-just-traveled-activity-7483766146094125056-kuWd (your wrap-up post)
        //   https://www.ilkkapohjalainen.fi/miten-syodaan-ja-nukutaan-riippuu-taysin-siita-mit/13481957 (9.5.2026)
        //   https://www.vasabladet.fi/ekonomi/snart-borjar-ottos-aventyr-tvattar-fonster-till-marocko/ (18.5.2026)
        //   https://www.mtv.fi/lyhyet/3c1a70ca7a240ea18e8f/video-ikkunoita-pesten-marokkoon-ystavat-yhdistavat-kesatyon-ja-matkailun (8.6.2026)
        summary: "Overland from Finland to Morocco with no money, paid for by washing windows and doing odd jobs along the way.",
        story: [
          "We left Finland on 8 June with no budget, no flights and no audience. How we ate and where we slept depended on how many windows we washed that day. We filmed all of it, including the failures.",
          "On a beach in Málaga our window-washing gear disappeared. No money, no tools, no plan. We noticed the vendors selling drinks to sunbathers, asked if we could sell for them on commission, and spent the next days as their subcontractors.",
        ],
        stats: [
          { value: "€0", label: "starting budget" },
          { value: "~3.5M", label: "views" },
          { value: "100%", label: "of the trip paid for by our own sales" },
        ],
        // Translated from your LinkedIn post.
        takeaway:
          "Did it work? Not entirely. We set the goals very high and didn't hit all of them. As a first big content project it worked, and the parts we didn't finish are exactly what will make the next one better.",
        status: "Done · Documentary in December",
        tags: ["Entrepreneurship", "Content", "Sales"],
        links: [
          { label: "YouTube", href: "https://www.youtube.com/@Ikkunapojat" },
          { label: "On MTV Huomenta Suomi", href: "https://www.mtv.fi/lyhyet/3c1a70ca7a240ea18e8f/video-ikkunoita-pesten-marokkoon-ystavat-yhdistavat-kesatyon-ja-matkailun" },
        ],
      },
      {
        name: "Startup Window",
        period: "April 2026 · Vaasa",
        role: "Organiser, as board member (Partnerships) of Vaasa Entrepreneurship Society.",
        // Sources:
        //   https://www.linkedin.com/posts/otto-oivanen-71230329b_vaasa-entrepreneurship-society-locked-10-activity-7450080949666705409-alMS (your results post)
        //   https://www.startupwindow-ves.com/
        //   https://www.linkedin.com/posts/vaasa-entrepreneurship-society_board-of-vaasa-entrepreneurship-society-2026-activity-7402666649079758848-wjQf (VES board 2026)
        //   https://www.linkedin.com/posts/antonheinonenerik_vaasa-entrepreneurship-society-is-locking-activity-7441889133570023424-kPmF (Radio Vaasa)
        summary: "Ten students locked in a glass box in a shopping centre for 72 hours. One rule: leave with a paying client.",
        story: [
          "No pitch decks, no judges, no prizes. Four teams built in public at the Rewell centre in Vaasa while the city walked past. One team ran a live auction; another built and launched a therapist-matching platform and onboarded five therapists.",
          "Partners included LähiTapiola, Rewell and VASEK, with speakers such as MP Noora Fagerström and minister Joakim Strand.",
        ],
        stats: [
          { value: "2 / 4", label: "teams got a paying client" },
          { value: "212k", label: "people reached on Instagram in a month" },
          { value: "30k+", label: "passers-by engaged" },
        ],
        takeaway: "Covered by Yle and four other outlets in two languages, and we were invited on the radio twice. Vol. 2 is coming, bigger.",
        status: "Vol. 2 in planning",
        tags: ["Events", "Partnerships", "Startups"],
        links: [{ label: "startupwindow-ves.com", href: "https://www.startupwindow-ves.com/" }],
        photo: {
          src: "/images/startup-window.jpg",
          alt: "Otto Oivanen and a fellow VES board member in VES sweatshirts outside the Rewell centre in Vaasa",
        },
      },
      {
        name: "Window-washing tour of Finland",
        period: "Summer 2024",
        role: "With a business partner.",
        // Source: https://www.savonsanomat.fi/kaupalliset/7824412 (Savon Yrittäjät, 11.9.2024)
        summary: "We drove around Finland, walked into businesses unannounced and offered to wash their windows, filming it all for TikTok.",
        story: [
          "The reception was mostly positive. The best day was in Turku, where we had made €500 by two in the morning.",
        ],
        stats: [
          { value: "2,500 km", label: "driven" },
          { value: "€500", label: "best day, Turku" },
        ],
        takeaway: "The first version of the idea that became Ikkunapojat.",
        status: "Done",
        tags: ["Sales", "Content"],
        links: [],
      },
    ],
  },

  thinking: {
    heading: "How I think",
    intro: "A few things I keep coming back to, in my own words.",
    photo: { src: "/images/vaasa-interview.jpg", alt: "Otto Oivanen talking at a café table during an interview", position: "45% 40%" },
    items: [
      {
        // Translated. Source: your Ikkunapojat wrap-up post.
        quote: "When one plan falls apart, you come up with the next one on the spot.",
        context: "On losing our gear in Málaga",
      },
      {
        // Original English. Source: LinkedIn "Does AI make us stupid?"
        quote: "When I use AI as a shortcut, I learn less. When I use it to challenge my thinking, I learn more.",
        context: "On learning with AI",
      },
      {
        // Translated. Source: Ikkunapojat announcement post.
        quote: "Show the failures too, not just the wins.",
        context: "The rule we set before Ikkunapojat",
      },
      {
        // Translated. Source: https://www.savonsanomat.fi/kaupalliset/7824412
        quote: "A salaried job doesn't suit my personality. I'm an entrepreneur at heart.",
        context: "Savon Sanomat, 2024",
      },
      {
        // Translated. Source: Ikkunapojat wrap-up post ("se selviää tekemällä").
        quote: "I don't know exactly what it will look like yet. I'll find out by doing it.",
        context: "On what comes next",
      },
    ],
  },

  goals: {
    heading: "What I'm working toward",
    items: [
      // Your own words (chat, Oct 2026).
      "Make something cool with cool people.",
      "Be a better version of myself every day.",
      "Stay curious.",
      // Source: LinkedIn demo-client post.
      "Turn what I've learned about AI into real value for real businesses.",
    ],
  },

  experience: {
    heading: "Timeline",
    items: [
      // Source: lundsvk.se
      { period: "2026 –", role: "Professional volleyball player", org: "Lunds VK, Sweden" },
      // Source: LinkedIn (current experience); role from you.
      { period: "Now", role: "Sales and customer service representative", org: "IGO Promo Nordics" },
      // Source: VES board post
      { period: "2026", role: "Board member, Partnerships", org: "Vaasa Entrepreneurship Society" },
      // Source: LinkedIn; fi.wikipedia
      { period: "2025 –", role: "Industrial Engineering and Management", org: "University of Vaasa" },
      // Source: savovolley.fi
      { period: "2023 – 2025", role: "Volleyball, Finnish top division", org: "Savo Volley, Kuopio" },
      // Source: Savon Sanomat 11.9.2024 (own business: bike taxi, window washing, video projects)
      { period: "2024", role: "Sole trader: bike taxi, window washing, video projects", org: "Own business" },
      // Source: Savon Sanomat 11.9.2024; fi.wikipedia (Savon Sanomat youth newsroom)
      { period: "2023 – 2024", role: "Youth newsroom", org: "Savon Sanomat" },
    ],
  },

  services: {
    heading: "Work with me",
    // Source: your LinkedIn post looking for demo clients.
    intro:
      "I'm looking for a few businesses to work with. If you have daily tasks that repeat, take a lot of time, or could be handled by an AI worker, I'd like to see what I can build for you.",
    items: [
      {
        title: "AI worker",
        body: "Handles several repetitive tasks for you, such as customer messages, work orders or booking requests.",
      },
      {
        title: "Automations",
        body: "Built around the tools and processes you already use, not a new system you have to learn.",
      },
      {
        title: "How we start",
        body: "A short call. We go through your daily tasks and what takes your time, then look at what can realistically be automated.",
      },
    ],
    cta: { label: "Book a short call", href: "mailto:ottooivanen@gmail.com?subject=AI%20worker" },
  },

  volleyball: {
    heading: "Volleyball",
    // "around ten": your own words on savovolley.fi.
    text: "I started playing at around ten. Today it's my job: a season sets the rhythm of every week, and it taught me to show up prepared, take feedback and play for the people next to me.",
    facts: [
      // Source: https://www.lundsvk.se/player/otto-oivanen/ ; https://www.profixio.com/app/leagueid28652/teams/1592086
      { label: "Now", value: "Setter, #18, Lunds VK · Elitserien, Sweden" },
      // Source: https://www.savovolley.fi/joukkue/otto-oivanen-2/ ("Suomen Cup (K-H): 1-0")
      { label: "Before", value: "Savo Volley · Mestaruusliiga, Finland · Finnish Cup winner 2024" },
      // Source: https://www-old.cev.eu/PlayerDetails.aspx?TeamID=13424&SeasonID=0&SeasonType=C&G=M&PlayerID=86890
      { label: "Country", value: "Finland youth national team, CEV European Championships 2021–2024" },
    ],
    photo: { src: "/images/lunds-vk.jpg", alt: "Otto Oivanen in the red Lunds VK jersey, number 18" },
  },

  contact: {
    heading: "Contact",
    body: "Clients, employers, event organisers, people with a crazy idea: email is the fastest way to reach me.",
    email: "ottooivanen@gmail.com",
    profilesHeading: "Elsewhere",
    profiles: [
      { label: "LinkedIn", href: "https://se.linkedin.com/in/otto-oivanen-71230329b" },
      { label: "Instagram", href: "https://www.instagram.com/oivanenotto/" },
      { label: "TikTok", href: "https://www.tiktok.com/@ottooivanenn" },
      // Linked from your Linktree (linktr.ee/ottooivanen).
      { label: "YouTube", href: "https://www.youtube.com/@Ikkunapojat" },
    ],
  },

  footer: {
    credits: ["Set in Inter (SIL Open Font License).", "Graphics made for this site."],
    copyright: "© 2026 Otto Oivanen",
  },
};
