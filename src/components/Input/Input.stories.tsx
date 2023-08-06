import React from "react";
import { Meta } from "@storybook/react";
import Input from "./Input";

export default {
  title: "Input",
  component: Input,
} as Meta<typeof Input>;

export const Default = () => <Input />;

export const Disabled = () => <Input disabled />;

export const WithOnChange = () => <Input onChange={() => alert("Changed!")} />;

export const WithPlaceholder = () => <Input placeholder="Placeholder" />;
