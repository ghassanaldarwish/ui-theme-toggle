import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { ThemeToggle } from "./index";

const meta: Meta<typeof ThemeToggle> = {
  component: ThemeToggle,
  title: "Marbella/ThemeToggle",
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof ThemeToggle>;

export const Primary: Story = (args: any) => <ThemeToggle {...args} />;
Primary.args = {
  primary: true,
  disabled: false,
  text: "Primary",
};
