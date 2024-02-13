import { Meta, StoryObj } from "@storybook/react";
import { Avatar, AvatarProps } from "@vonharrison-ignite-ui/react";

export default {
  title: "Data Display/Avatar",
  component: Avatar,
  tags: ['autodocs'],
  args: {
    src: 'https://github.com/voncardoso.png',
    alt: "Von Harrison"
  },
  argTypes: {
    src: {
      control: {
        type: 'text'
      }
    }
  }
} as Meta<AvatarProps>;

export const Primary: StoryObj<AvatarProps> = {};


export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined
  }
};