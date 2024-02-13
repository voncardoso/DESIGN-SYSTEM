import { Meta, StoryObj } from "@storybook/react";
import { Box, Text, TextInput, TextInputProps } from "@ignite-ui/react";

export default {
  title: "Typography/Text Input",
  component: TextInput,
  tags: ['autodocs'],
  args: {},
  decorators: [
    (Story) => {
      return (
        <Box as="label" css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}>
          <Text size="sm">Email address</Text>
          {Story()}
        </Box>
      )
    }
  ]
} as Meta<TextInputProps>;

export const Primary: StoryObj<TextInputProps> = {};

export const Disebled: StoryObj<TextInputProps> = {
  args: {
    disabled: true,
  },
};

export const WhithPrefix: StoryObj<TextInputProps> = {
  args: {
    prefix: "cal.com/",
  },
};