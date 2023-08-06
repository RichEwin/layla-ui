import React from "react";
import { Meta } from "@storybook/react";
import Button from "./Button";

export default {
  title: "Button",
  component: Button,
} as Meta<typeof Button>;

const buttonSizes = ["sm", "md", "lg"] as const;

export const Default = () => <Button label="Click me" />;

export const Disabled = () => <Button label="Click me" disabled />;

export const WithOnClick = () => (
  <Button label="Click me" onClick={() => alert("Clicked!")} />
);

export const WithSize = () => (
  <div>
    {buttonSizes.map((size) => (
      <Button key={size} label={size} />
    ))}
  </div>
);
