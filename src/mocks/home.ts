import type { ArticleResumeCardProps } from "@/components/cards/ArticleResumeCard";
import type { ArticleItem } from "@/components/media/ArticlesGrid";
import type { SocialRibbonProps } from "@/components/elements/Footer/components/SocialRibbon";

export interface NavigationLink {
  label: string;
  href: string;
}

export const navigationLinks: NavigationLink[] = [
  { label: "Saúde", href: "#bem-estar" },
  { label: "Tecnologia", href: "#tecnologia" },
  { label: "Novidades", href: "#novidades-midias" },
  { label: "Contato", href: "#contato" },
];

export const heroArticles: { mainArticleId: string; articles: ArticleItem[] } = {
  mainArticleId: "hero-01",
  articles: [
    {
      id: "hero-01",
      title:
        "Relógio ideal para presentear: como escolher o modelo perfeito para quem é fã de tecnologia",
      category: "Tecnologia",
      imgUrl:
        "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1400&q=80",
      publishedAt: "2024-05-11",
      readingTime: "8 min de leitura",
      href: "#",
    },
    {
      id: "hero-02",
      title: "Backup inteligente: como proteger fotos e memórias da família",
      category: "Guia prático",
      imgUrl:
        "https://images.unsplash.com/photo-1523475472560-d2df97ec485c?auto=format&fit=crop&w=900&q=80",
      publishedAt: "2024-05-02",
      readingTime: "6 min de leitura",
      href: "#",
    },
    {
      id: "hero-03",
      title: "Gadgets que transformam a rotina de estudos em 2024",
      category: "Educação",
      imgUrl:
        "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?auto=format&fit=crop&w=900&q=80",
      publishedAt: "2024-04-28",
      readingTime: "5 min de leitura",
      href: "#",
    },
    {
      id: "hero-04",
      title: "Cinco truques para renderizar vídeos mais rápido no notebook",
      category: "Produtividade",
      imgUrl:
        "https://images.unsplash.com/photo-1525182008055-f88b95ff7980?auto=format&fit=crop&w=900&q=80",
      publishedAt: "2024-04-21",
      readingTime: "7 min de leitura",
      href: "#",
    },
  ],
};

export const technologyArticles: { mainArticleId: string; articles: ArticleItem[] } = {
  mainArticleId: "tech-01",
  articles: [
    {
      id: "tech-01",
      title: "Assistentes de IA para organizar projetos de código aberto",
      category: "Tecnologia",
      imgUrl:
        "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=1400&q=80",
      publishedAt: "2024-05-15",
      readingTime: "9 min de leitura",
      href: "#",
    },
    {
      id: "tech-02",
      title: "Frameworks front-end que cresceram com a comunidade brasileira",
      category: "Desenvolvimento",
      imgUrl:
        "https://images.unsplash.com/photo-1582719478181-2cf4e7d3d013?auto=format&fit=crop&w=900&q=80",
      publishedAt: "2024-04-30",
      readingTime: "6 min de leitura",
      href: "#",
    },
    {
      id: "tech-03",
      title: "Ferramentas para monitorar a saúde do seu código em produção",
      category: "Observabilidade",
      imgUrl:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80",
      publishedAt: "2024-04-24",
      readingTime: "8 min de leitura",
      href: "#",
    },
    {
      id: "tech-04",
      title: "Design systems que inspiram o ecossistema brasileiro",
      category: "Design",
      imgUrl:
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=900&q=80",
      publishedAt: "2024-04-10",
      readingTime: "5 min de leitura",
      href: "#",
    },
    {
      id: "tech-05",
      title: "Como preparar sua equipe para o GitHub Copilot em larga escala",
      category: "Gestão",
      imgUrl:
        "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=900&q=80",
      publishedAt: "2024-03-28",
      readingTime: "10 min de leitura",
      href: "#",
    },
  ],
};

export const entertainmentArticles: { mainArticleId: string; articles: ArticleItem[] } = {
  mainArticleId: "media-01",
  articles: [
    {
      id: "media-01",
      title: "Séries de ficção científica que acertam na tecnologia",
      category: "Streaming",
      imgUrl:
        "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1400&q=80",
      publishedAt: "2024-05-08",
      readingTime: "6 min de leitura",
      href: "#",
    },
    {
      id: "media-02",
      title: "Documentários sobre cultura maker para maratonar",
      category: "Cultura",
      imgUrl:
        "https://images.unsplash.com/photo-1461151304267-38535e780c79?auto=format&fit=crop&w=900&q=80",
      publishedAt: "2024-04-18",
      readingTime: "4 min de leitura",
      href: "#",
    },
    {
      id: "media-03",
      title: "Livros que explicam ciência de dados de forma leve",
      category: "Leitura",
      imgUrl:
        "https://images.unsplash.com/photo-1455885666463-1c1b16e7e865?auto=format&fit=crop&w=900&q=80",
      publishedAt: "2024-04-09",
      readingTime: "7 min de leitura",
      href: "#",
    },
    {
      id: "media-04",
      title: "Animes que despertam a vontade de programar",
      category: "Entretenimento",
      imgUrl:
        "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=900&q=80",
      publishedAt: "2024-03-29",
      readingTime: "5 min de leitura",
      href: "#",
    },
  ],
};

export const wellbeingArticles: { mainArticleId: string; articles: ArticleItem[] } = {
  mainArticleId: "life-01",
  articles: [
    {
      id: "life-01",
      title: "Hábitos saudáveis para quem passa muitas horas programando",
      category: "Bem-estar",
      imgUrl:
        "https://images.unsplash.com/photo-1549068106-b024baf5062d?auto=format&fit=crop&w=1400&q=80",
      publishedAt: "2024-05-05",
      readingTime: "6 min de leitura",
      href: "#",
    },
    {
      id: "life-02",
      title: "Rotina de alongamentos para aliviar dores após o trabalho",
      category: "Saúde",
      imgUrl:
        "https://images.unsplash.com/photo-1583454110551-21f2fa2a6237?auto=format&fit=crop&w=900&q=80",
      publishedAt: "2024-04-26",
      readingTime: "5 min de leitura",
      href: "#",
    },
    {
      id: "life-03",
      title: "Receitas rápidas para quem ama café e tecnologia",
      category: "Gastronomia",
      imgUrl:
        "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=900&q=80",
      publishedAt: "2024-04-14",
      readingTime: "4 min de leitura",
      href: "#",
    },
    {
      id: "life-04",
      title: "Meditação guiada para manter o foco em maratonas de código",
      category: "Mindfulness",
      imgUrl:
        "https://images.unsplash.com/photo-1526404079168-902c4efee3a5?auto=format&fit=crop&w=900&q=80",
      publishedAt: "2024-03-31",
      readingTime: "8 min de leitura",
      href: "#",
    },
  ],
};

export const trendingArticles: ArticleResumeCardProps[] = [
  {
    category: "Em alta",
    title: "Como montar um setup ideal para lives de programação",
    imageUrl:
      "https://images.unsplash.com/photo-1580894908361-967195033215?auto=format&fit=crop&w=400&q=80",
  },
  {
    category: "Comunidade",
    title: "Os meetups mais aguardados pela galera dev em 2024",
    imageUrl:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=400&q=80",
  },
  {
    category: "Ferramentas",
    title: "Widgets indispensáveis para organizar estudos de tecnologia",
    imageUrl:
      "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?auto=format&fit=crop&w=400&q=80",
  },
];

export const footerColumns = [
  {
    title: "Conteúdos",
    items: [
      { label: "Tecnologia", href: "#tecnologia" },
      { label: "Filmes & Séries", href: "#novidades-midias" },
      { label: "Bem-estar", href: "#bem-estar" },
    ],
  },
  {
    title: "Comunidade",
    items: [
      { label: "Slack", href: "#" },
      { label: "Discord", href: "#" },
      { label: "Eventos", href: "#" },
    ],
  },
  {
    title: "Sobre",
    items: [
      { label: "Equipe", href: "#contato" },
      { label: "Parcerias", href: "#" },
      { label: "Política de privacidade", href: "#" },
    ],
  },
  {
    title: "Contato",
    items: [
      { label: "contato@clubedosoftware.com", href: "mailto:contato@clubedosoftware.com" },
      { label: "+55 11 90000-0000", href: "tel:+5511900000000" },
      { label: "São Paulo - SP", href: "#contato" },
    ],
  },
];

export const footerSocialItems: SocialRibbonProps["items"] = [
  { iconName: "instagram", href: "https://www.instagram.com" },
  { iconName: "x", href: "https://twitter.com" },
  { iconName: "youtube", href: "https://www.youtube.com" },
  { iconName: "tiktok", href: "https://www.tiktok.com" },
];
