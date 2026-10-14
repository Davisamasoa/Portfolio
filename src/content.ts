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
  photo: "/davi.webp",
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
    title: "Davi Machado — Desenvolvedor web",
    description:
      "Sites institucionais, landing pages e aplicações web sob medida, do planejamento ao lançamento. Davi Machado, desenvolvedor web em Ouro Preto, MG.",
  },
  nav: {
    work: "Trabalhos",
    services: "Serviços",
    about: "Sobre",
    contact: "Contato",
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
    role: "Desenvolvedor web",
    location: "Ouro Preto, MG — Brasil",
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
        slug: "sabbatai",
        name: "Sabbatai",
        image: "/work/sabbatai-redesign.jpg",
        links: [
          { label: "Redesign (prévia)", url: "https://sabbatai-git-redesign-davi-machado-projects.vercel.app" },
          { label: "Versão atual", url: "https://sabbatai.in" },
        ],
        stack: ["Next.js", "TypeScript", "Tailwind CSS", "Motion"],
        category: "Site institucional",
        role: "Design e desenvolvimento",
        status: "Redesign em andamento",
        challenge:
          "A Sabbatai é uma consultoria em commodities que atende uma clientela de alto padrão com um serviço exclusivo. O site precisava estar à altura desse posicionamento: moderno, sofisticado e sem nada de genérico.",
        solution:
          "Desenhei e desenvolvi o site do zero: uma página única contada em capítulos, com tipografia editorial, gravuras clássicas e animações discretas que reforçam a sensação de exclusividade.",
        result:
          "O cliente voltou para contratar um redesign, que aparece na imagem, e passou a me indicar para outros contatos do seu círculo.",
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
        slug: "ascend",
        name: "Ascend",
        image: "/work/ascend.png",
        links: [{ label: "Site do app", url: "https://ascend-gym-levelup.vercel.app" }],
        stack: ["React Native", "Expo", "TypeScript", "Supabase", "Astro"],
        category: "Produto próprio · App Android",
        role: "Produto e desenvolvimento",
        status: "Em lançamento",
        challenge:
          "Manter a constância na academia é difícil. A proposta do Ascend é transformar o treino num RPG, em que cada série vira XP, rank e recompensa.",
        solution:
          "Concebi e desenvolvi o produto inteiro: app Android em React Native com backend no Supabase, login com Google, backup na nuvem, ligas semanais, assinatura Premium e o site de divulgação.",
        result:
          "Em fase de lançamento na Google Play. É um produto completo, do conceito à loja, conduzido de ponta a ponta por mim.",
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
    toolsTitle: "Tecnologias",
    tools: ["Figma", "Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL", "Supabase", "React Native"],
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
    location: "Ouro Preto, MG — Brasil",
  },
};

export type Dictionary = typeof pt;

const en: Dictionary = {
  locale: "en",
  htmlLang: "en",
  meta: {
    title: "Davi Machado — Web developer",
    description:
      "Corporate websites, landing pages and custom web applications, from planning to launch. Davi Machado, web developer based in Brazil.",
  },
  nav: {
    work: "Work",
    services: "Services",
    about: "About",
    contact: "Contact",
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
        slug: "sabbatai",
        name: "Sabbatai",
        image: "/work/sabbatai-redesign.jpg",
        links: [
          { label: "Redesign (preview)", url: "https://sabbatai-git-redesign-davi-machado-projects.vercel.app" },
          { label: "Current site", url: "https://sabbatai.in" },
        ],
        stack: ["Next.js", "TypeScript", "Tailwind CSS", "Motion"],
        category: "Corporate website",
        role: "Design and development",
        status: "Redesign in progress",
        challenge:
          "Sabbatai is a commodity advisory firm serving high-end clients with an exclusive service. The website had to live up to that positioning: modern, sophisticated and nothing generic.",
        solution:
          "I designed and built the site from scratch: a single page told in chapters, with editorial typography, classic engravings and restrained motion that reinforce a sense of exclusivity.",
        result:
          "The client came back to hire me for a redesign, pictured here, and has been referring me to other contacts in their circle.",
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
        slug: "ascend",
        name: "Ascend",
        image: "/work/ascend.png",
        links: [{ label: "App website", url: "https://ascend-gym-levelup.vercel.app" }],
        stack: ["React Native", "Expo", "TypeScript", "Supabase", "Astro"],
        category: "Own product · Android app",
        role: "Product and development",
        status: "Launching",
        challenge:
          "Staying consistent at the gym is hard. Ascend turns training into an RPG, where every set becomes XP, rank and rewards.",
        solution:
          "I conceived and built the entire product: an Android app in React Native with a Supabase backend, Google sign-in, cloud backup, weekly leagues, a Premium subscription and the marketing website.",
        result:
          "Currently launching on Google Play. A complete product, from concept to store, that I led end to end.",
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
    toolsTitle: "Technologies",
    tools: pt.about.tools,
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
    location: "Ouro Preto, MG — Brazil",
  },
};

export const dictionaries: Record<Locale, Dictionary> = { pt, en };
