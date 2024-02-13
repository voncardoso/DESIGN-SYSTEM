import { Meta, StoryObj } from "@storybook/react";
import { Heading, HeadingProps } from "@ignite-ui/react";

export default {
  title: "Typography/Heading",
  component: Heading,
  tags: ['autodocs'],
  args: {
    children: 'Custom title',
  },
} as Meta<HeadingProps>;

export const Primary: StoryObj<HeadingProps> = {};

export const CustomTag: StoryObj<HeadingProps> = {
    args: {
        children: 'h1 heading',
        as: 'h1'
    },
    parameters: {
      docs: {
        description: {
          story: 'Por padrão o heading sempre vai ser um `h2`, mas podemos alterar isso com a propriedade `as`.'
        }
      }
    }
}