// components/forms/CommentaryForm/index.stories.tsx
import type { Meta, StoryObj } from "@storybook/react-vite";
import CommentaryForm, { type CommentaryFormProps } from "./index";

type Story = StoryObj<typeof CommentaryForm>;

const meta: Meta<typeof CommentaryForm> = {
  title: "Forms/CommentaryForm",
  component: CommentaryForm,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    controls: { expanded: true },
    docs: {
      description: {
        component:
          "Formulário responsivo de comentários com suporte a dark mode. Inclui campo de nome e área de texto com contador (via `maxCommentLength`).",
      },
    },
  },
  args: {
    label: "Escreva seu comentário",
    maxCommentLength: 500,
  },
  argTypes: {
    label: { control: "text" },
    containerClassName: { control: "text" },
    inputClassName: { control: "text" },
    textAreaClassName: { control: "text" },
    buttonClassName: { control: "text" },
    maxCommentLength: { control: { type: "number", min: 50, step: 50 } },
    onSubmit: { action: "submitted" },
  },
};
export default meta;

/* ===================== Stories ===================== */

export const Default: Story = {};

export const Prefilled: Story = {
  render: (args: CommentaryFormProps) => (
    <div className="w-full max-w-2xl">
      <CommentaryForm {...args} />
    </div>
  ),
};

export const WithCustomStyles: Story = {
  args: {
    inputClassName: "border-primary-500/50",
    textAreaClassName: "border-primary-500/50",
    buttonClassName: "bg-tertiary-600 hover:bg-tertiary-700",
    containerClassName: "max-w-2xl",
  },
};
