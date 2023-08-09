import React from "react";
import { Meta } from "@storybook/react";
import { Typography } from "./Typography";

export default {
  title: "Typography",
  component: Typography,
} as Meta<typeof Typography>;

const tagVariants = ["h1", "h2", "h3", "h4", "h5", "h6"] as const;

export const Default = () => {
  return tagVariants.map((variant) => (
    <Typography variant={variant}>{variant}</Typography>
  ));
};
