import { Meta, StoryObj } from "@storybook/react";
import { Box, Text, TextArea, TextAreaProps } from "@ignite-ui/react";

export default {
  title: "Typography/Text Area",
  component: TextArea,
  tags: ['autodocs'],
  args: {},
  decorators: [
    (Story) => {
      return (
        <Box as="label" css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}>
          <Text size="sm">Observations</Text>
          {Story()}
        </Box>
      )
    }
  ]
} as Meta<TextAreaProps>;

export const Primary: StoryObj<TextAreaProps> = {};

export const Disebled: StoryObj<TextAreaProps> = {
  args: {
    disabled: true,
  },
};

export const WhithPrefix: StoryObj<TextAreaProps> = {
  args: {
    prefix: "cal.com/",
  },
};