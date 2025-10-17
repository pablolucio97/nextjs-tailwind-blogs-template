import type { CommentaryCardProps } from "@/components/cards/CommentaryCard";
import type { ArticleResumeCardProps } from "@/components/cards/ArticleResumeCard";
import type { ArticleItem } from "@/components/media/ArticlesGrid";

export const articleHero = {
  category: "Tendências",
  title: "100 cortes de cabelo masculino para você se inspirar",
  imgUrl:
    "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1920&q=80",
  publishedAt: "2024-04-11",
  readingTime: "12 min",
};

export const articleMetadata = {
  author: "Luiz Fernando",
  role: "Editor de estilo",
  publishLabel: "Atualizado em 11 de abril de 2024",
};

export const introHighlights: { label: string; value: string }[] = [
  { label: "Categoria", value: "Barbearia & estilo" },
  { label: "Atualização", value: "Abril/2024" },
  { label: "Leitura", value: articleHero.readingTime },
];

export const articleSections: { id: string; title: string; html: string }[] = [
  {
    id: "overview",
    title: "Por que apostar em cortes modernos",
    html: `
      <p>
        Uma boa mudança de visual começa entendendo o formato do rosto e o estilo de vida. Nesta seleção curada pelo Clube do Software, reunimos referências para diferentes texturas de cabelo e ocasiões — do home office às reuniões presenciais. Cada corte foi escolhido pensando em praticidade, manutenção inteligente e personalidade.
      </p>
      <p>
        A ideia é combinar técnicas clássicas com finalizações atuais: fades suaves, linhas marcadas na navalha e texturas criadas com pomadas de efeito matte. Separe seus favoritos, compartilhe com seu barbeiro e adapte para o seu dia a dia.
      </p>
    `,
  },
  {
    id: "straight-texture",
    title: "Cabelo liso com textura + risco de navalha",
    html: `
      <p>
        Para os fios lisos, o segredo é criar movimento com desconexões leves. O topo ganha camadas curtas e bem trabalhadas, enquanto as laterais recebem um fade baixo para equilibrar volumes. O risco desenhado com navalha adiciona um toque urbano sem exageros.
      </p>
      <ul>
        <li>Peça um degradê suave que respeite o crescimento natural.</li>
        <li>Finalize com pomada modeladora de baixa fixação para manter a textura.</li>
        <li>Agende manutenções a cada 20 dias para preservar o desenho do risco.</li>
      </ul>
    `,
  },
  {
    id: "medium-cuts",
    title: "Cabelos médios: equilíbrio entre volume e leveza",
    html: `
      <p>
        O comprimento médio abre espaço para penteados versáteis. Trabalhe com uma base levemente repicada e dê atenção extra à franja, que pode ser usada para frente com efeito messy ou penteada para trás com acabamento polido.
      </p>
      <p>
        Um spray de sal marinho ajuda a criar corpo sem pesar, enquanto o secador direcionado para cima garante sustentação nas raízes.
      </p>
    `,
  },
];

export const galleryImages = [
  {
    id: "side-detail",
    title: "Detalhe do fade com linha marcada",
    imgUrl:
      "https://images.unsplash.com/photo-1503951458645-643d53bfd90f?auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: "texture-top",
    title: "Textura desconectada para fios lisos",
    imgUrl:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1600&q=80",
  },
];

export const commentaryList: CommentaryCardProps[] = [
  {
    author: "Gabriel Santos",
    publishDate: "2024-04-15",
    content:
      "Adorei as referências com texturas desconectadas. Mostrei para o meu barbeiro e já garanti um corte novo para a próxima sprint!",
  },
  {
    author: "Bianca Rodrigues",
    publishDate: "2024-04-14",
    content:
      "As dicas de manutenção foram perfeitas. Sempre buscava algo moderno mas fácil de cuidar entre uma reunião e outra.",
  },
  {
    author: "Henrique Azevedo",
    publishDate: "2024-04-12",
    content:
      "O risco na navalha deu outra cara ao meu fade. Curti que vocês indicaram produtos para finalizar sem pesar nos fios.",
  },
];

export const recentArticles: ArticleResumeCardProps[] = [
  {
    category: "Tecnologia",
    title: "Visual Studio Code: extensões que aumentam sua produtividade",
    imageUrl:
      "https://images.unsplash.com/photo-1526498460520-4c246339dccb?auto=format&fit=crop&w=800&q=80",
  },
  {
    category: "Design",
    title: "Como criar mockups realistas para apresentar suas ideias",
    imageUrl:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80",
  },
  {
    category: "Carreira",
    title: "Rituais matinais para devs que trabalham em home office",
    imageUrl:
      "https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?auto=format&fit=crop&w=800&q=80",
  },
];

export const relatedArticlesGrid: { mainArticleId: string; articles: ArticleItem[] } = {
  mainArticleId: "style-01",
  articles: [
    {
      id: "style-01",
      title: "Guia de cuidados diários para manter o fade impecável",
      imgUrl:
        "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1200&q=80",
      category: "Cuidados pessoais",
      publishedAt: "2024-03-28",
      readingTime: "8 min",
    },
    {
      id: "style-02",
      title: "Produtos essenciais para finalizar o cabelo masculino",
      imgUrl:
        "https://images.unsplash.com/photo-1499728603263-13726abce5fd?auto=format&fit=crop&w=1200&q=80",
      category: "Produtos",
      publishedAt: "2024-04-05",
      readingTime: "6 min",
    },
    {
      id: "style-03",
      title: "Cortes cacheados que valorizam o volume natural",
      imgUrl:
        "https://images.unsplash.com/photo-1521196119518-6fc44d6e69b1?auto=format&fit=crop&w=1200&q=80",
      category: "Cabelos cacheados",
      publishedAt: "2024-03-21",
      readingTime: "9 min",
    },
    {
      id: "style-04",
      title: "Como escolher o corte ideal para reuniões formais",
      imgUrl:
        "https://images.unsplash.com/photo-1516571137133-1be29e47fddc?auto=format&fit=crop&w=1200&q=80",
      category: "Carreira",
      publishedAt: "2024-02-27",
      readingTime: "7 min",
    },
  ],
};
