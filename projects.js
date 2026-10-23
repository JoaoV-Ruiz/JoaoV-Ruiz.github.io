// Conteúdo dos projetos, em ordem de destaque. Para adicionar ou editar, mexa só neste arquivo.
// Campos opcionais: role, features, shots, wideCover, liveUrl, liveNote, repoUrl, fileUrl, hireUrl.
const PROJECTS = [
  {
    title: "Volley Tech",
    tagline: "App de gestão para clube de vôlei",
    category: "React Native · Supabase",
    role: "Full-stack, projeto solo",
    description:
      "App mobile/web para um clube de vôlei de Pelotas. O treinador gerencia elenco, treinos, presenças, scout dos jogos e feedback individual; atletas e responsáveis veem as próprias estatísticas, avisos e mensalidades. Publicado como app instalável pelo navegador, sem precisar de loja.",
    features: [
      "Quatro perfis de acesso (administrador, treinador, atleta e responsável), com vínculo por código de convite",
      "Scout dos jogos ao vivo: saque, recepção, ataque, bloqueio e defesa, com placar automático por set",
      "Treinos com confirmação de presença e feedback individual (técnica, tática, físico e atitude)",
      "Desempenho do atleta juntando médias de feedback e números de scout",
      "Enquete de disponibilidade para campeonatos, avisos e elenco com numeração",
      "Mensalidades espelhadas da API do Asaas via webhook (integração pronta, hoje desligada por feature flag)",
    ],
    stack: ["React Native", "Expo Router", "Supabase", "Row Level Security", "Edge Functions", "TanStack Query", "TypeScript"],
    image: "img/volleytech/00_capa.jpg",
    imageAlt: "Três telas do app Volley Tech: início, jogo e desempenho do atleta",
    shots: [
      { src: "img/volleytech/07_jogo.jpg", caption: "Jogo com estatísticas de scout" },
      { src: "img/volleytech/08_scout.jpg", caption: "Scout ao vivo, lance a lance por atleta" },
      { src: "img/volleytech/06_feedback.jpg", caption: "Feedback individual por treino" },
      { src: "img/volleytech/04_treino.jpg", caption: "Confirmação de presença no treino" },
    ],
    liveUrl: "https://app.volleytechpelotas.com",
    liveNote: "exige login",
  },
  {
    title: "Amazon Veículos Locadora",
    tagline: "Landing pages + CRM de leads",
    category: "React · Supabase",
    role: "Cliente freelance · Manaus/AM",
    description:
      "Site e CRM para uma locadora que aluga carros para motoristas de aplicativo em Manaus. Páginas específicas para motoristas iniciantes e veteranos captam leads por formulário e WhatsApp; a equipe de vendas acompanha cada lead numa área de CRM e o administrador mantém o catálogo da frota atualizado.",
    features: [
      "Landing de motorista iniciante (formulário) e de veterano (WhatsApp + formulário)",
      "CRM interno com leads, dashboard administrativo, frota editável e conversão",
      "Site em português, inglês e espanhol, com tema claro e escuro",
    ],
    stack: ["React 19", "TanStack Start", "Vite", "Tailwind CSS", "shadcn/ui", "Framer Motion", "Zod", "Supabase", "Cloudflare Workers"],
    image: "img/amazon-locadora/00_capa_locadora.jpg",
    imageAlt: "Página inicial da Amazon Veículos Locadora em desktop e celular",
    shots: [
      { src: "img/amazon-locadora/loc_desktop_numeros.jpg", caption: "Seção de números, desktop", wide: true },
      { src: "img/amazon-locadora/loc_mobile_iniciante.jpg", caption: "Landing do motorista iniciante" },
    ],
    liveUrl: "https://amazonveiculoslocadora.com",
  },
  {
    title: "Amazon Veículos Estoque",
    tagline: "Plataforma de estoque e revenda",
    category: "React · Node.js",
    role: "Cliente freelance · Manaus/AM",
    description:
      "Plataforma de estoque para uma revenda de carros. Clientes navegam pelo estoque sem login; administradores gerenciam veículos, leads, parceiros e consignações; lojistas parceiros têm acesso estendido com placa e histórico de manutenção.",
    stack: ["React", "Vite", "TypeScript", "Tailwind CSS", "Node.js", "Fastify", "Supabase", "Cloudflare"],
    image: "img/amazon-estoque/00_capa_repasse.jpg",
    imageAlt: "Página inicial da Amazon Veículos em desktop e celular",
    shots: [
      { src: "img/amazon-estoque/rep_desktop_estoque.jpg", caption: "Listagem do estoque, desktop", wide: true },
      { src: "img/amazon-estoque/rep_mobile_hero.jpg", caption: "Página inicial no celular" },
    ],
    liveUrl: "https://amazonveiculos.com",
  },
  {
    title: "Lembrete de cobrança por WhatsApp",
    tagline: "Fluxo de automação no n8n",
    category: "n8n · Automação",
    role: "Fluxo demo · dados fictícios",
    description:
      "Fluxo que lê as faturas de uma planilha, decide quem deve ser lembrado no dia, envia a mensagem pelo WhatsApp e registra o resultado. Tem um modo de teste com faturas fictícias que roda sem nenhuma credencial e não envia nada, e cada etapa está documentada em notas no próprio canvas.",
    features: [
      "Regra de cobrança: lembra 3 dias antes, no dia do vencimento e 3 dias depois; fatura paga é ignorada",
      "Validação do telefone antes do envio, para o contato inválido sair do fluxo em vez de gerar erro",
      "Texto diferente para cada situação: lembrete, vencimento no dia e atraso",
      "Falha da API segue por uma saída de erro e fica registrada na planilha, sem parar os outros envios",
    ],
    stack: ["n8n", "Google Sheets", "WhatsApp Cloud API", "JavaScript"],
    image: "img/n8n/lembrete-cobranca.png",
    imageAlt: "Canvas do n8n com o fluxo de lembrete de cobrança, em seis etapas anotadas",
    wideCover: true,
    fileUrl: "n8n/lembrete-cobranca-whatsapp.json",
    hireUrl:
      "https://www.upwork.com/services/product/development-it-a-custom-n8n-workflow-that-automates-a-repetitive-task-in-your-business-2110171077117765805",
  },
  {
    title: "Web scraping e extração de dados",
    tagline: "Robôs em Python que viram site em planilha",
    category: "Python · Scraping",
    role: "Serviço no Upwork",
    description:
      "Robô em Python que percorre um site, estático ou dinâmico, coleta páginas, imagens e anúncios e entrega tudo numa planilha CSV ou Excel limpa, com uma linha por item. Num dos projetos foram mais de 5.000 páginas extraídas, cada uma conferida, sem nenhum erro no relatório de validação.",
    features: [
      "Sites dinâmicos e com login, navegados com Playwright",
      "Download de imagens e documentos, renomeados pelo código do produto e organizados em pastas",
      "Dados normalizados e sem duplicatas, prontos para importar",
      "Relatório de validação em CSV, página por página",
      "Execução agendada para manter a base atualizada",
    ],
    stack: ["Python", "Playwright", "CSV", "Excel"],
    image: "img/scraping/00_capa.png",
    imageAlt: "Fluxo de um site qualquer, passando por um robô em Python, até um CSV limpo",
    shots: [
      { src: "img/scraping/01_antes_depois.png", caption: "Antes e depois: HTML bagunçado vira tabela" },
      { src: "img/scraping/02_escala.png", caption: "Mais de 5.000 páginas validadas num projeto" },
    ],
  },
  {
    title: "Assistente Pessoal Carla",
    tagline: "Assistente educacional com IA",
    category: "Python · IA",
    role: "Projeto pessoal",
    description:
      "Desenvolvida para apoiar profissionais da educação, a Carla automatiza a criação de materiais de apoio, planos de aula e exercícios personalizados. Usa a API do Gemini para gerar o conteúdo, n8n para orquestrar o fluxo e Google Sheets como base de conhecimento e registro das atividades.",
    stack: ["Gemini AI", "Python", "n8n", "Streamlit", "Google Sheets"],
    liveUrl: "https://assistente-carla.streamlit.app/",
    repoUrl: "https://github.com/JoaoV-Ruiz/assistentePessoalCarla",
  },
];
