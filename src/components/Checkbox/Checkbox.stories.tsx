import React from "react";
import { Meta } from "@storybook/react";
import Checkbox from "./Checkbox";
import { Typography } from "../Typography";

export default {
  title: "Checkbox",
  component: Checkbox,
} as Meta<typeof Checkbox>;

export const Default = () => {
  const someValue = true;
  return (
    <Checkbox
      label={
        <Typography variant="span" weight="bold">
          Woop
        </Typography>
      }
      onChange={(value) => console.log(value)}
      checked={someValue}
    />
  );
};
