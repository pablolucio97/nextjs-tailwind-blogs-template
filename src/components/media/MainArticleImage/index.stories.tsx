import type { Meta, StoryObj } from "@storybook/react-vite";
import MainArticleImage, { type MainArticleImageProps } from "./index";

type Story = StoryObj<typeof MainArticleImage>;

const meta: Meta<typeof MainArticleImage> = {
  title: "Media/MainArticleImage",
  component: MainArticleImage,
  tags: ["autodocs"],
  parameters: {
    controls: { expanded: true },
    layout: "centered",
    docs: {
      description: {
        component:
          "Hero de artigo baseado em **imagem com overlay**. Responsivo, com pílula de **categoria** e título grande — ideal para destacar o conteúdo principal.",
      },
    },
  },
  args: {
    imgUrl:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1600&auto=format&fit=crop",
    title:
      "O presente perfeito para ele: como escolher o relógio ideal para o seu namorado",
    category: "Datas especiais",
    className: "",
  },
  argTypes: {
    imgUrl: { control: "text" },
    title: { control: "text" },
    category: { control: "text" },
    className: { control: "text" },
  },
};
export default meta;

/* ===================== Stories ===================== */

export const Default: Story = {
  parameters: { layout: "fullscreen" },
  render: (args) => (
    <div className="w-full max-w-5xl px-4">
      <MainArticleImage {...(args as MainArticleImageProps)} />
    </div>
  ),
};

export const LongTitle: Story = {
  parameters: { layout: "fullscreen" },
  args: {
    title:
      "Guia definitivo: como escolher um relógio que combina com seu estilo, orçamento e rotina — do casual ao esportivo",
    category: "Guia completo",
  },
  render: (args) => (
    <div className="w-full max-w-6xl px-4">
      <MainArticleImage {...(args as MainArticleImageProps)} />
    </div>
  ),
};

export const FullWidthShowcase: Story = {
  parameters: { layout: "fullscreen" },
  render: (args) => (
    <div className="w-full px-4 py-6">
      <MainArticleImage
        {...(args as MainArticleImageProps)}
        className="mx-auto max-w-7xl"
        titleClassName="text-red-400"
      />
    </div>
  ),
};