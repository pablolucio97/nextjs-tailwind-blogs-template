// index.stories.tsx
import type { Meta, StoryObj } from "@storybook/react-vite";
import HTMLRender from "./index";

type Story = StoryObj<typeof HTMLRender>;

const meta: Meta<typeof HTMLRender> = {
  title: "Elements/HTMLRender",
  component: HTMLRender,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    controls: { expanded: true },
    docs: {
      description: {
        component:
          "Renderiza HTML sanitizado com **dompurify**. Útil para exibir conteúdo vindo do CMS/servidor (posts curtos, trechos de blog, resenhas, etc.).",
      },
    },
  },
  args: {
    containerClassName:
      "prose prose-sm sm:prose-base max-w-none text-foreground",
  },
  argTypes: {
    html: { control: "text" },
    containerClassName: { control: "text" },
  },
};
export default meta;

/* ===================== Snippets ===================== */

const PLAIN_POST = `
  <h2>Guia rápido: como começar a investir</h2>
  <p>Aqui vai um resumo de 3 passos para tirar as ideias do papel.</p>
  <ol>
    <li>Defina objetivos simples (3–6–12 meses).</li>
    <li>Monte uma reserva de emergência.</li>
    <li>Diversifique com produtos de baixo custo.</li>
  </ol>
  <p><em>Dica:</em> invista o que sobrar todo mês, automatizando as aportações.</p>
`;

const WITH_IMAGE = `
  <h2>Café e produtividade</h2>
  <p>Uma xícara de café pode melhorar o foco e o humor em tarefas curtas.</p>
  <figure>
    <img src="https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?q=80&w=1200&auto=format&fit=crop" alt="Uma xícara de café sobre a mesa" />
    <figcaption>Foto: Unsplash</figcaption>
  </figure>
  <p>Evite exageros no fim do dia para não atrapalhar o sono.</p>
`;

const LIST_QUOTE_LINK = `
  <h2>Boletim semanal</h2>
  <ul>
    <li>Novidades do produto</li>
    <li>Conteúdos recomendados</li>
    <li>Agenda da comunidade</li>
  </ul>
  <blockquote>
    “Trabalhe de forma consistente. O resultado chega.” — <strong>Ana Silva</strong>
  </blockquote>
  <p>Leia mais no nosso <a href="https://example.com/blog" target="_blank" rel="noopener noreferrer">blog</a>.</p>
`;

/* ===================== Stories ===================== */

export const BasicParagraphs: Story = {
  name: "Basic paragraphs & list",
  args: {
    html: PLAIN_POST,
  },
};

export const WithImageFigure: Story = {
  name: "With image & figure",
  args: {
    html: WITH_IMAGE,
  },
};

export const ListQuoteAndLink: Story = {
  name: "List, quote & link",
  args: {
    html: LIST_QUOTE_LINK,
  },
};