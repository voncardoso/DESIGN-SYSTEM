import { Meta, StoryObj } from "@storybook/react";
import { Text, TextProps } from "@ignite-ui/react";

export default {
  title: "Typography/text",
  component: Text,
  tags: ['autodocs'],
  args: {
    children: 'exemplo de texto',
  },
} as Meta<TextProps>;

export const Primary: StoryObj<TextProps> = {};

export const CustomTag: StoryObj<TextProps> = {
    args: {
        children: 'Strong text',
        as: 'strong'
    }
}