import type { Meta, StoryObj } from "@storybook/react-vite";
import ArticleResumeCard, { type ArticleResumeCardProps } from "./index";

type Story = StoryObj<typeof ArticleResumeCard>;

const meta: Meta<typeof ArticleResumeCard> = {
  title: "Cards/ArticleResumeCard",
  component: ArticleResumeCard,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    controls: { expanded: true },
    docs: {
      description: {
        component:
          "Cartão resumido de artigo com **badge de categoria**, **título** e **thumb**. Responsivo e com suporte a dark mode.",
      },
    },
  },
  args: {
    category: "Saúde e bem-estar",
    title:
      "Café faz bem pra saúde? O que a ciência realmente diz sobre a bebida",
    imageUrl:
      "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?q=80&w=640&auto=format&fit=crop",
  },
  argTypes: {
    category: { control: "text" },
    title: { control: "text" },
    imageUrl: { control: "text" },
    badgeClassName: { control: "text" },
    titleClassName: { control: "text" },
    containerClassName: { control: "text" },
  },
};
export default meta;

/* ===================== Stories ===================== */

export const Default: Story = {};

export const LongTitle: Story = {
  args: {
    title:
      "Guia completo: como a cafeína afeta o corpo, quais os limites seguros por dia e quando evitar a bebida",
  },
};

export const CustomStyles: Story = {
  args: {
    badgeClassName: "bg-primary-600 text-white",
    titleClassName: "text-base sm:text-lg md:text-xl",
    containerClassName: "max-w-xl",
  },
};

export const ListShowcase: Story = {
  render: () => {
    const items: ArticleResumeCardProps[] = [
      {
        category: "Tecnologia",
        title:
          "7 dicas para gerenciar melhor o tempo e aumentar sua produtividade",
        imageUrl:
          "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=640&auto=format&fit=crop",
      },
      {
        category: "Saúde",
        title:
          "Sono: por que 8 horas nem sempre são o suficiente (e como melhorar a qualidade)",
        imageUrl:
          "https://images.unsplash.com/photo-1505577058444-a3dab90d4253?q=80&w=640&auto=format&fit=crop",
      },
      {
        category: "Educação",
        title:
          "Cursos online gratuitos para começar hoje e turbinar seu currículo",
        imageUrl:
          "https://images.unsplash.com/photo-1554344728-77cf90d9ed26?q=80&w=640&auto=format&fit=crop",
      },
    ];

    return (
      <div className="w-full max-w-4xl space-y-3 sm:space-y-4">
        {items.map((it, i) => (
          <ArticleResumeCard key={i} {...it} />
        ))}
      </div>
    );
  },
  parameters: { layout: "centered" },
};