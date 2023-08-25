import React from "react";
import { Meta } from "@storybook/react";
import Button from "./Button";
import "../../utils/storybookStyles.css";

export default {
  title: "Button",
  component: Button,
} as Meta<typeof Button>;

const buttonSizes = ["sm", "md", "lg"] as const;

export const Default = () => <Button color="#FBD0E1">Click Me!</Button>;

export const Disabled = () => <Button disabled>Click Me!</Button>;

export const WithOnClick = () => (
  <Button onClick={() => alert("Clicked!")}>Click Me!</Button>
);

export const WithSize = () => (
  <div>
    {buttonSizes.map((size) => (
      <Button key={size}>{size}</Button>
    ))}
  </div>
);

export const WithClassName = () => (
  <Button className="CustomStyling" size="lg">
    I'm Styled
  </Button>
);

export const WithTransparent = () => (
  <Button transparent="true">I'm Transparent</Button>
);
