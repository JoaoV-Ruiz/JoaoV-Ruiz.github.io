// Versão em inglês de ../projects.js. Mesma ordem e mesmos campos; caminhos com "../" porque a página fica em /en/.
// Ao editar um projeto lá, lembre de atualizar aqui também.
const PROJECTS = [
  {
    title: "Volley Tech",
    tagline: "Management app for a volleyball club",
    category: "React Native · Supabase",
    role: "Full-stack, solo project",
    description:
      "Mobile/web app for a volleyball club in Pelotas, Brazil. The coach manages the roster, practices, attendance, match scouting and individual feedback; athletes and parents see their own stats, announcements and monthly fees. Shipped as a progressive web app that installs straight from the browser, no app store needed.",
    features: [
      "Four access roles (admin, coach, athlete and parent), linked through invite codes",
      "Live match scouting: serve, reception, attack, block and dig, with automatic set scoring",
      "Practices with attendance confirmation and individual feedback (technique, tactics, fitness and attitude)",
      "Athlete performance view combining feedback averages and scouting numbers",
      "Availability polls for tournaments, announcements and a numbered roster",
      "Monthly fees mirrored from the Asaas payments API via webhook (integration ready, currently behind a feature flag)",
    ],
    stack: ["React Native", "Expo Router", "Supabase", "Row Level Security", "Edge Functions", "TanStack Query", "TypeScript"],
    image: "../img/volleytech/00_capa.jpg",
    imageAlt: "Three screens of the Volley Tech app: home, match and athlete performance",
    shots: [
      { src: "../img/volleytech/07_jogo.jpg", caption: "Match with scouting stats" },
      { src: "../img/volleytech/08_scout.jpg", caption: "Live scouting, play by play per athlete" },
      { src: "../img/volleytech/06_feedback.jpg", caption: "Individual feedback per practice" },
      { src: "../img/volleytech/04_treino.jpg", caption: "Practice attendance confirmation" },
    ],
    liveUrl: "https://app.volleytechpelotas.com",
    liveNote: "login required · in Portuguese",
  },
  {
    title: "Amazon Veículos Locadora",
    tagline: "Landing pages + lead CRM",
    category: "React · Supabase",
    role: "Freelance client · Manaus, Brazil",
    description:
      "Website and CRM for a company that rents cars to rideshare drivers in Manaus, Brazil. Dedicated pages for new and experienced drivers capture leads through forms and WhatsApp; the sales team follows up on each lead in a CRM area, and the admin keeps the fleet catalog up to date.",
    features: [
      "Landing page for new drivers (form) and for experienced drivers (WhatsApp + form)",
      "Internal CRM with leads, admin dashboard, editable fleet and conversion tracking",
      "Site in Portuguese, English and Spanish, with light and dark themes",
    ],
    stack: ["React 19", "TanStack Start", "Vite", "Tailwind CSS", "shadcn/ui", "Framer Motion", "Zod", "Supabase", "Cloudflare Workers"],
    image: "../img/amazon-locadora/00_capa_locadora.jpg",
    imageAlt: "Amazon Veículos Locadora home page on desktop and mobile",
    shots: [
      { src: "../img/amazon-locadora/loc_desktop_numeros.jpg", caption: "Numbers section, desktop", wide: true },
      { src: "../img/amazon-locadora/loc_mobile_iniciante.jpg", caption: "New driver landing page" },
    ],
    liveUrl: "https://amazonveiculoslocadora.com",
  },
  {
    title: "Amazon Veículos Estoque",
    tagline: "Inventory and resale platform",
    category: "React · Node.js",
    role: "Freelance client · Manaus, Brazil",
    description:
      "Inventory platform for a used car dealership. Customers browse the stock without logging in; admins manage vehicles, leads, partners and consignments; partner dealers get extended access including license plates and maintenance history.",
    stack: ["React", "Vite", "TypeScript", "Tailwind CSS", "Node.js", "Fastify", "Supabase", "Cloudflare"],
    image: "../img/amazon-estoque/00_capa_repasse.jpg",
    imageAlt: "Amazon Veículos home page on desktop and mobile",
    shots: [
      { src: "../img/amazon-estoque/rep_desktop_estoque.jpg", caption: "Inventory listing, desktop", wide: true },
      { src: "../img/amazon-estoque/rep_mobile_hero.jpg", caption: "Home page on mobile" },
    ],
    liveUrl: "https://amazonveiculos.com",
  },
  {
    title: "WhatsApp payment reminders",
    tagline: "Automation workflow in n8n",
    category: "n8n · Automation",
    role: "Demo workflow · mock data",
    description:
      "A workflow that reads invoices from a spreadsheet, decides who needs a reminder that day, sends the message over WhatsApp and logs the result. It has a test mode with mock invoices that runs without any credentials and sends nothing, and every step is documented in notes right on the canvas.",
    features: [
      "Reminder rule: 3 days before, on the due date and 3 days after; paid invoices are skipped",
      "Phone number validation before sending, so an invalid contact leaves the flow instead of throwing an error",
      "Different message for each case: upcoming, due today and overdue",
      "API failures go through an error branch and get logged to the spreadsheet without stopping the other sends",
    ],
    stack: ["n8n", "Google Sheets", "WhatsApp Cloud API", "JavaScript"],
    image: "../img/n8n/lembrete-cobranca.png",
    imageAlt: "n8n canvas with the payment reminder workflow, in six annotated steps",
    wideCover: true,
    fileUrl: "../n8n/lembrete-cobranca-whatsapp.json",
    hireUrl:
      "https://www.upwork.com/services/product/development-it-a-custom-n8n-workflow-that-automates-a-repetitive-task-in-your-business-2110171077117765805",
  },
  {
    title: "Web scraping & data extraction",
    tagline: "Python bots that turn websites into spreadsheets",
    category: "Python · Scraping",
    role: "Upwork service",
    description:
      "A Python bot that crawls a website, static or dynamic, collects pages, images and listings, and delivers everything as a clean CSV or Excel file with one row per item. One project covered more than 5,000 pages, each one checked, with zero errors in the validation report.",
    features: [
      "Dynamic sites and logins, driven with Playwright",
      "Images and documents downloaded, renamed by product code and sorted into folders",
      "Normalized, de-duplicated data, ready to import",
      "Page-by-page validation report in CSV",
      "Scheduled runs to keep the dataset up to date",
    ],
    stack: ["Python", "Playwright", "CSV", "Excel"],
    image: "../img/scraping/00_capa.png",
    imageAlt: "Flow from any website, through a Python bot, to a clean CSV",
    shots: [
      { src: "../img/scraping/01_antes_depois.png", caption: "Before and after: messy HTML becomes a table" },
      { src: "../img/scraping/02_escala.png", caption: "5,000+ pages validated in one project" },
    ],
  },
  {
    title: "Carla, Personal Assistant",
    tagline: "AI assistant for educators",
    category: "Python · AI",
    role: "Personal project",
    description:
      "Built to support education professionals, Carla automates the creation of teaching materials, lesson plans and personalized exercises. It uses the Gemini API to generate content, n8n to orchestrate the flow and Google Sheets as its knowledge base and activity log.",
    stack: ["Gemini AI", "Python", "n8n", "Streamlit", "Google Sheets"],
    liveUrl: "https://assistente-carla.streamlit.app/",
    liveNote: "in Portuguese",
    repoUrl: "https://github.com/JoaoV-Ruiz/assistentePessoalCarla",
  },
];
