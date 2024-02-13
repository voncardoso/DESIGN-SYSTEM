import { Meta, StoryObj } from "@storybook/react";
import { Box, BoxProps, Text} from "@ignite-ui/react";

export default {
  title: "Box",
  component: Box,
  tags: ['autodocs'],
  args: {
    children: (<><Text>Testando elemento Box</Text></>),
  },
  argTypes: {
    children: {
      control: {
        type: null
      }
    }
  }
} as Meta<BoxProps>;

export const Primary: StoryObj<BoxProps> = {
    
};
