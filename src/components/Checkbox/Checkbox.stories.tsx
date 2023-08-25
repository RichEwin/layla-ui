import React from "react";
import { Meta } from "@storybook/react";
import Checkbox from "./Checkbox";

export default {
  title: "Checkbox",
  component: Checkbox,
} as Meta<typeof Checkbox>;

export const Default = () => {
  const someValue = true;
  return (
    <Checkbox
      label="Checkbox"
      onChange={(value) => console.log(value)}
      checked={someValue}
    />
  );
};
