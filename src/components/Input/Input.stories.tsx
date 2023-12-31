import React from "react";
import { Meta } from "@storybook/react";
import Input from "./Input";

export default {
  title: "Input",
  component: Input,
} as Meta<typeof Input>;

export const Default = () => <Input />;

export const Disabled = () => <Input disabled />;

export const WithOnChange = () => (
  <Input onChange={(event) => alert(event.target.value)} />
);

export const WithPlaceholder = () => <Input placeholder="Placeholder" />;

export const WithType = () => <Input type="number" />;

export const WithLabel = () => <Input label="Label" />;

export const WithHeight = () => <Input height="50px" />;
