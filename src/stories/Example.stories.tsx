import React from "react";
import { ComponentMeta } from "@storybook/react";
import { Example, ExampleProps } from "../components/Example";

export default {
  title: "Example",
  component: Example,
  argTypes: {
    message: {
      control: "text",
    },
  },
} as ComponentMeta<typeof Example>;
const Template: React.FC<ExampleProps> = (args) => <Example {...args} />;

export const Default = Template.bind({});
Default.args = {
  message: "Hello Storybook",
};
