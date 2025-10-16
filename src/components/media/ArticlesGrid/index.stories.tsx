// components/collections/ArticlesGrid/index.stories.tsx
import type { Meta, StoryObj } from "@storybook/react-vite";
import ArticlesGrid, { type ArticleItem } from "./index";

// ---------- helpers ----------
const makeArticle = (
  id: string,
  title: string,
  imgUrl: string,
  extras: Partial<ArticleItem> = {}
): ArticleItem => ({
  id,
  title,
  imgUrl,
  category: "Tecnologia",
  href: "#",
  publishedAt: "2025-02-10T10:00:00Z",
  readingTime: "6 min",
  ...extras,
});

// Unsplash (royalty-free) samples
const SAMPLE_IMAGES = [
  "https://images.unsplash.com/photo-1534951009808-766178b47a4f?q=80&w=1400&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1553729459-efe14ef6055d?q=80&w=1400&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1400&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1400&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?q=80&w=1400&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1400&auto=format&fit=crop",
];

// ---------- default data ----------
const baseArticles: ArticleItem[] = [
  makeArticle(
    "a1",
    "52 dicas para ganhar dinheiro online em 2026",
    SAMPLE_IMAGES[0],
    { category: "Tecnologia" }
  ),
  makeArticle(
    "a2",
    "7 dicas de como gerenciar renda extra",
    SAMPLE_IMAGES[1],
    { category: "Desenvolvimento" }
  ),
  makeArticle(
    "a3",
    "4 restaurantes mais sustentáveis em São Paulo",
    SAMPLE_IMAGES[2]
  ),
  makeArticle(
    "a4",
    "67 sites com cursos grátis para fazer em casa",
    SAMPLE_IMAGES[3]
  ),
  makeArticle("a5", "Como marcar consulta pelo app do SUS", SAMPLE_IMAGES[4], {
    category: "Saúde e bem-estar",
  }),
];

// ---------- meta ----------
const meta: Meta<typeof ArticlesGrid> = {
  title: "Media/ArticlesGrid",
  component: ArticlesGrid,
  parameters: {
    layout: "fullscreen",
    controls: { expanded: true },
    docs: {
      description: {
        component:
          "Grade de artigos com item principal em destaque. Responsiva, usa **MainArticleImage** para o destaque e um array de **ArticleImage** para os demais.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    mainArticleId: { control: "text" },
    className: { control: "text" },
  },
};
export default meta;

type Story = StoryObj<typeof ArticlesGrid>;

// ---------- stories ----------
export const Default: Story = {
  args: {
    mainArticleId: "a1",
    articles: baseArticles,
  },
};

export const WithMoreItems: Story = {
  args: {
    mainArticleId: "a2",
    articles: [
      ...baseArticles,
      makeArticle("a6", "Produtividade com IA no dia a dia", SAMPLE_IMAGES[5]),
      makeArticle(
        "a7",
        "Como começar em finanças pessoais: guia rápido",
        SAMPLE_IMAGES[1]
      ),
    ],
  },
};

export const SwitchMainOnTheFly: Story = {
  render: (args) => {
    // Simple interactive demo using story controls
    return (
      <div className="p-4">
        <ArticlesGrid {...args} />
      </div>
    );
  },
  args: {
    mainArticleId: "a3",
    articles: baseArticles,
  },
};