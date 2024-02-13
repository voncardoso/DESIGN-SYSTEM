import { Meta, StoryObj } from "@storybook/react";
import { Text, TextProps } from "@vonharrison-ignite-ui/react";

export default {
  title: "Typography/text",
  component: Text,
  tags: ['autodocs'],
  args: {
    size: 'md',
    children: 'exemplo de texto',
  },
  argTypes: {
    size: {
      options: ['xxs', 'xs', 'sm', 'md', 'lg', 'xl', '2xl', '4xl', '5xl', '6xl', '7xl', '8xl', '9xl'],
      control: {
        type: 'inline-radio'
      }
    },
  }
} as Meta<TextProps>;

export const Primary: StoryObj<TextProps> = {};

export const CustomTag: StoryObj<TextProps> = {
    args: {
        children: 'Strong text',
        as: 'strong'
    }
}