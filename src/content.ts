/**
 * Everything the site says, in both languages. Components only lay it out —
 * edit text, links and projects here.
 */

export type Locale = "pt" | "en";

export const profile = {
  name: "Davi Machado",
  email: "davisamasoa@gmail.com",
  github: "https://github.com/Davisamasoa",
  linkedin: "https://www.linkedin.com/in/davisamasoa/",
  photo: "/portrait.webp",
};

export type Project = {
  slug: string;
  name: string;
  image: string;
  /** The first link is also where the screenshot points. */
  links: { label: string; url: string }[];
  stack: string[];
  category: string;
  role: string;
  status?: string;
  challenge: string;
  solution: string;
  result: string;
};

const pt = {
  locale: "pt" as Locale,
  htmlLang: "pt-BR",
  meta: {
    title: "Davi Machado · Desenvolvedor web",
    description:
      "Sites institucionais, landing pages e aplicações web sob medida, do planejamento ao lançamento. Davi Machado, desenvolvedor web em Ouro Preto, MG.",
  },
  nav: {
    work: "Trabalhos",
    services: "Serviços",
    about: "Sobre",
    contact: "Contato",
    cv: "Currículo",
    switchLabel: "EN",
    switchHref: "/en",
    switchAria: "Read in English",
  },
  hero: {
    eyebrow: "Desenvolvimento web",
    status: "Disponível para novos projetos",
    title: "Sites e aplicações web para marcas que exigem sofisticação.",
    lede:
      "Sou Davi Machado, desenvolvedor web em Ouro Preto, MG. Transformo layouts e ideias em sites e aplicações rápidos, bem construídos e fiéis à identidade da sua marca, do planejamento ao lançamento.",
    primary: "Iniciar um projeto",
    secondary: "Ver trabalhos",
    cv: "Baixar currículo",
    role: "Desenvolvedor web",
    location: "Ouro Preto, MG, Brasil",
  },
  work: {
    title: "Trabalhos selecionados",
    labels: {
      role: "Papel",
      category: "Tipo",
      stack: "Tecnologias",
      challenge: "Desafio",
      solution: "Solução",
      result: "Resultado",
    },
    projects: [
      {
        slug: "federal-folia",
        name: "Federal Folia",
        image: "/work/federalfolia.jpg",
        links: [{ label: "federalfolia.com", url: "https://www.federalfolia.com" }],
        stack: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
        category: "Landing page de evento",
        role: "Design e desenvolvimento",
        challenge:
          "O Federal Folia vende pacotes completos para o Carnaval de Ouro Preto, com hospedagem, open bar, festas e os principais blocos. O site precisava ter a energia da festa, explicar com clareza o que cada pacote inclui e levar o visitante até a compra.",
        solution:
          "Desenvolvi uma landing page fiel à identidade visual da marca, com vídeo no topo, line up dos blocos, galeria e aftermovies, e uma tela inicial que se ajusta a qualquer aparelho. Os preços, lotes e pacotes esgotados são lidos automaticamente da plataforma de ingressos, e o SEO técnico inclui dados estruturados de evento para o Google.",
        result:
          "Site no ar em federalfolia.com, com os preços sempre atualizados sem edição manual e a página reconhecida pelo Google como evento, apta a aparecer com data e preço nos resultados de busca.",
      },
      {
        slug: "sabbatai",
        name: "Sabbatai",
        image: "/work/sabbatai-hero.jpg",
        links: [{ label: "sabbatai.in", url: "https://sabbatai.in" }],
        stack: ["Next.js", "TypeScript", "Tailwind CSS", "Three.js", "Motion"],
        category: "Site institucional",
        role: "Design e desenvolvimento",
        challenge:
          "A Sabbatai é uma consultoria em commodities que atende uma clientela de alto padrão com um serviço exclusivo. O site precisava estar à altura desse posicionamento: moderno, sofisticado e sem nada de genérico.",
        solution:
          "Desenhei e desenvolvi o site do zero e, no redesign, levei a marca para o preto e branco: uma página única em capítulos em que uma nuvem de partículas em WebGL se transforma, conforme o scroll, em cada commodity com que a empresa trabalha (minério, ouro, petróleo, café, soja…), ao lado de uma tabela periódica dos setores.",
        result:
          "O cliente voltou a me contratar para o redesign do site e passou a me indicar para outros contatos do seu círculo.",
      },
      {
        slug: "niveling",
        name: "Niveling",
        image: "/work/niveling.jpg",
        links: [{ label: "Site do app", url: "https://niveling.vercel.app" }],
        stack: ["React Native", "Expo", "TypeScript", "Supabase", "Astro"],
        category: "Produto próprio · App Android",
        role: "Produto e desenvolvimento",
        status: "Em lançamento",
        challenge:
          "Manter a constância na academia é difícil. A proposta do Niveling é transformar o treino num RPG: cada treino é um portal, cada exercício é um monstro e cada série vira XP, rank e recompensa.",
        solution:
          "Concebi e desenvolvi o produto inteiro: app Android em React Native com backend no Supabase, login com Google, backup na nuvem, ligas semanais e mensais com amigos, duelos, 180 avatares, planos de treino gerados por IA, assinatura Premium, versões em português, inglês e espanhol, e o site de divulgação.",
        result:
          "Em fase de lançamento na Google Play. É um produto completo, do conceito à loja, conduzido de ponta a ponta por mim.",
      },
      {
        slug: "passus",
        name: "Agência Passus",
        image: "/work/passus.png",
        links: [{ label: "passus.in", url: "https://passus.in" }],
        stack: ["Next.js", "TypeScript", "Tailwind CSS"],
        category: "Site institucional",
        role: "Desenvolvimento",
        challenge:
          "A Passus precisava apresentar seus serviços e os clientes que já atendeu, de uma forma tão elegante quanto as campanhas que assina.",
        solution:
          "Desenvolvi um site em que o trabalho da agência é o protagonista: grade editorial de cases com imagens em destaque, tipografia refinada e navegação direta entre serviços e clientes.",
        result:
          "Feedback extremamente positivo, vindo do mesmo cliente que já havia confiado a mim o projeto da Sabbatai.",
      },
      {
        slug: "papo-cheio",
        name: "Papo Cheio",
        image: "/work/papo-cheio.jpg",
        links: [{ label: "Site do app", url: "https://papo-cheio.vercel.app" }],
        stack: ["React Native", "Expo", "TypeScript", "Supabase", "Astro"],
        category: "Produto próprio · App de orçamento",
        role: "Produto e desenvolvimento",
        status: "Uso pessoal",
        challenge:
          "Planilha dá trabalho e o extrato do banco só mostra o passado: diz quanto você gastou, não quanto ainda pode gastar até o fim do mês. Cartões, parcelas e contas fixas embaralham a conta.",
        solution:
          "Criei um app de orçamento do mês em React Native com Supabase: o saldo atualiza a cada gasto, as categorias comparam o previsto com o real, e cartões, parcelas e contas fixas entram na conta. Funciona sem internet e sincroniza entre celulares. Na tela do mês fica o Joca, um joão-pinto com 4 humores que reagem ao ritmo dos gastos. A landing foi feita em Astro, com tema claro e escuro.",
        result:
          "Em uso no meu dia a dia para organizar o orçamento do mês. Um produto completo, do app à landing, conduzido de ponta a ponta por mim.",
      },
    ] satisfies Project[],
  },
  services: {
    title: "Serviços",
    items: [
      {
        title: "Sites institucionais e landing pages",
        text: "Uma presença digital que transmite o valor da sua marca, com carregamento rápido, boa experiência em qualquer tela e SEO técnico desde o primeiro dia.",
        deliverables: ["Implementação fiel ao design", "Responsivo em qualquer tela", "SEO técnico e performance", "Domínio e publicação"],
      },
      {
        title: "Aplicações web sob medida",
        text: "Sistemas, painéis e produtos digitais desenhados em torno do seu processo, com área logada, banco de dados e integrações com os serviços que você já usa.",
        deliverables: ["Autenticação e área logada", "Banco de dados e APIs", "Painéis administrativos", "Integrações externas"],
      },
    ],
    processTitle: "Como trabalho",
    process: [
      { title: "Conversa", text: "Entendo o seu negócio, o público, os objetivos e o prazo." },
      { title: "Planejamento", text: "Definimos escopo, estrutura, referências e prazos antes de qualquer código." },
      { title: "Desenvolvimento", text: "Construo com tecnologia moderna, com revisões ao longo do caminho." },
      { title: "Lançamento", text: "Publico, configuro o domínio e acompanho o site depois da entrega." },
    ],
    note: "Você fala diretamente comigo do início ao fim, sem intermediários.",
  },
  about: {
    title: "Sobre",
    photoAlt: "Retrato de Davi Machado",
    paragraphs: [
      "Sou desenvolvedor web e estudo Ciência da Computação na Universidade Federal de Ouro Preto. Programo desde 2021 e cuido de todo o ciclo técnico de um projeto, da estrutura à publicação.",
      "Meu foco é a qualidade da implementação: código organizado, interfaces fiéis ao design em qualquer tela e sites que carregam rápido. Cada interação e cada milissegundo influenciam a forma como a sua marca é percebida.",
    ],
    facts: [
      { label: "Formação", value: "Ciência da Computação, UFOP" },
      { label: "Experiência", value: "Desde 2021" },
      { label: "Base", value: "Ouro Preto, MG" },
      { label: "Atendimento", value: "Remoto, em português e inglês" },
    ],
    stack: [
      { label: "Front-end", items: ["React", "Next.js", "TypeScript", "Tailwind CSS"] },
      { label: "Back-end", items: ["Node.js", "Express", "PostgreSQL", "MongoDB", "Supabase"] },
      { label: "Mobile", items: ["React Native", "Expo"] },
      { label: "Ferramentas", items: ["Figma", "Git"] },
    ],
    cv: "Currículo (PDF)",
    cvHref: "/cv-pt.pdf",
  },
  contact: {
    title: "Vamos conversar sobre o seu projeto.",
    text: "Conte um pouco sobre o seu negócio, o que você precisa e o prazo que tem em mente. Eu respondo pessoalmente.",
    copy: "Copiar e-mail",
    copied: "Copiado",
  },
  footer: {
    location: "Ouro Preto, MG, Brasil",
  },
};

export type Dictionary = typeof pt;

const en: Dictionary = {
  locale: "en",
  htmlLang: "en",
  meta: {
    title: "Davi Machado · Web developer",
    description:
      "Corporate websites, landing pages and custom web applications, from planning to launch. Davi Machado, web developer based in Brazil.",
  },
  nav: {
    work: "Work",
    services: "Services",
    about: "About",
    contact: "Contact",
    cv: "Résumé",
    switchLabel: "PT",
    switchHref: "/",
    switchAria: "Ler em português",
  },
  hero: {
    eyebrow: "Web development",
    status: "Available for new projects",
    title: "Websites and web applications for brands that demand sophistication.",
    lede:
      "I'm Davi Machado, a web developer based in Ouro Preto, Brazil. I turn layouts and ideas into fast, well-built websites and applications that stay true to your brand, from planning to launch.",
    primary: "Start a project",
    secondary: "See the work",
    cv: "Download résumé",
    role: "Web developer",
    location: "Ouro Preto, Brazil",
  },
  work: {
    title: "Selected work",
    labels: {
      role: "Role",
      category: "Type",
      stack: "Stack",
      challenge: "Challenge",
      solution: "Solution",
      result: "Outcome",
    },
    projects: [
      {
        slug: "federal-folia",
        name: "Federal Folia",
        image: "/work/federalfolia.jpg",
        links: [{ label: "federalfolia.com", url: "https://www.federalfolia.com" }],
        stack: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
        category: "Event landing page",
        role: "Design and development",
        challenge:
          "Federal Folia sells all-inclusive packages for Carnival in Ouro Preto, with lodging, open bar, parties and the main street blocos. The site had to carry the energy of the festival, explain clearly what each package includes and lead visitors to checkout.",
        solution:
          "I built a landing page true to the brand's visual identity, with a video hero, the blocos line-up, a photo gallery and aftermovies, and an opening screen that fits any device. Prices, ticket batches and sold-out packages are read automatically from the ticketing platform, and the technical SEO includes event structured data for Google.",
        result:
          "Live at federalfolia.com, with prices that stay up to date without manual edits and a page Google recognises as an event, eligible to show dates and prices in search results.",
      },
      {
        slug: "sabbatai",
        name: "Sabbatai",
        image: "/work/sabbatai-hero.jpg",
        links: [{ label: "sabbatai.in", url: "https://sabbatai.in" }],
        stack: ["Next.js", "TypeScript", "Tailwind CSS", "Three.js", "Motion"],
        category: "Corporate website",
        role: "Design and development",
        challenge:
          "Sabbatai is a commodity advisory firm serving high-end clients with an exclusive service. The website had to live up to that positioning: modern, sophisticated and nothing generic.",
        solution:
          "I designed and built the site from scratch and, for the redesign, took the brand to black and white: a single page told in chapters, where a WebGL particle cloud turns into each commodity the firm trades (ore, gold, crude, coffee, soy…) as you scroll, beside a periodic table of its sectors.",
        result:
          "The client hired me again for the site's redesign and has been referring me to other contacts in their circle.",
      },
      {
        slug: "niveling",
        name: "Niveling",
        image: "/work/niveling.jpg",
        links: [{ label: "App website", url: "https://niveling.vercel.app" }],
        stack: ["React Native", "Expo", "TypeScript", "Supabase", "Astro"],
        category: "Own product · Android app",
        role: "Product and development",
        status: "Launching",
        challenge:
          "Staying consistent at the gym is hard. Niveling turns training into an RPG: every workout is a portal, every exercise is a monster and every set becomes XP, rank and rewards.",
        solution:
          "I conceived and built the entire product: an Android app in React Native with a Supabase backend, Google sign-in, cloud backup, weekly and monthly leagues with friends, duels, 180 avatars, AI-generated workout plans, a Premium subscription, Portuguese, English and Spanish versions, and the marketing website.",
        result:
          "Currently launching on Google Play. A complete product, from concept to store, that I led end to end.",
      },
      {
        slug: "passus",
        name: "Passus Agency",
        image: "/work/passus.png",
        links: [{ label: "passus.in", url: "https://passus.in" }],
        stack: ["Next.js", "TypeScript", "Tailwind CSS"],
        category: "Corporate website",
        role: "Development",
        challenge:
          "Passus needed to present its services and the clients it has worked with, in a way as elegant as the campaigns it creates.",
        solution:
          "I built a site where the agency's work takes centre stage: an editorial grid of case studies with large imagery, refined typography and direct navigation between services and clients.",
        result:
          "Extremely positive feedback, from the same client who had already trusted me with the Sabbatai project.",
      },
      {
        slug: "papo-cheio",
        name: "Papo Cheio",
        image: "/work/papo-cheio.jpg",
        links: [{ label: "App website", url: "https://papo-cheio.vercel.app" }],
        stack: ["React Native", "Expo", "TypeScript", "Supabase", "Astro"],
        category: "Own product · Budgeting app",
        role: "Product and development",
        status: "Personal use",
        challenge:
          "Spreadsheets are a chore and bank statements only show the past: they tell you what you spent, not how much you can still spend before the month ends. Cards, instalments and recurring bills muddle the numbers.",
        solution:
          "I built a monthly budgeting app in React Native with Supabase: the balance updates with every expense, categories compare the plan with what was actually spent, and cards, instalments and recurring bills are all accounted for. It works offline and syncs across phones. The month screen is home to Joca, a Brazilian songbird with 4 moods that react to your spending pace. The landing page is built in Astro, with light and dark themes.",
        result:
          "I use it every day to manage my monthly budget. A complete product, from the app to the landing page, that I led end to end.",
      },
    ],
  },
  services: {
    title: "Services",
    items: [
      {
        title: "Corporate websites and landing pages",
        text: "A digital presence that conveys the value of your brand, with fast loading, a great experience on every screen and technical SEO from day one.",
        deliverables: ["Faithful design implementation", "Responsive on every screen", "Technical SEO and performance", "Domain and deployment"],
      },
      {
        title: "Custom web applications",
        text: "Systems, dashboards and digital products shaped around your process, with authentication, a database and integrations with the tools you already use.",
        deliverables: ["Authentication and user areas", "Databases and APIs", "Admin dashboards", "Third-party integrations"],
      },
    ],
    processTitle: "How I work",
    process: [
      { title: "Conversation", text: "I learn about your business, audience, goals and timeline." },
      { title: "Planning", text: "We define scope, structure, references and timeline before any code." },
      { title: "Development", text: "I build it with modern technology, with reviews along the way." },
      { title: "Launch", text: "I publish, set up the domain and support the site after delivery." },
    ],
    note: "You work directly with me from start to finish, with no middlemen.",
  },
  about: {
    title: "About",
    photoAlt: "Portrait of Davi Machado",
    paragraphs: [
      "I'm a web developer studying Computer Science at the Federal University of Ouro Preto. I've been programming since 2021 and handle the full technical life of a project, from structure to launch.",
      "My focus is the quality of the build: organised code, interfaces that match the design on every screen, and sites that load fast. Every interaction and every millisecond shapes how your brand is perceived.",
    ],
    facts: [
      { label: "Education", value: "Computer Science, UFOP" },
      { label: "Experience", value: "Since 2021" },
      { label: "Based in", value: "Ouro Preto, Brazil" },
      { label: "Working", value: "Remotely, in English and Portuguese" },
    ],
    stack: [
      { label: "Front-end", items: ["React", "Next.js", "TypeScript", "Tailwind CSS"] },
      { label: "Back-end", items: ["Node.js", "Express", "PostgreSQL", "MongoDB", "Supabase"] },
      { label: "Mobile", items: ["React Native", "Expo"] },
      { label: "Tools", items: ["Figma", "Git"] },
    ],
    cv: "Résumé (PDF)",
    cvHref: "/cv-en.pdf",
  },
  contact: {
    title: "Let's talk about your project.",
    text: "Tell me a little about your business, what you need and the timeline you have in mind. I reply personally.",
    copy: "Copy email",
    copied: "Copied",
  },
  footer: {
    location: "Ouro Preto, MG, Brazil",
  },
};

export const dictionaries: Record<Locale, Dictionary> = { pt, en };
