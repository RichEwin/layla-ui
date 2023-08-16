import React from "react";
import { Meta } from "@storybook/react";
import { Typography } from "./Typography";

export default {
  title: "Typography",
  component: Typography,
} as Meta<typeof Typography>;

const tagVariants = ["h1", "h2", "h3", "h4", "h5", "h6"] as const;
const weightVariants = [100, 200, 300, 400, 500, 600, 700, 800, 900] as const;

export const Default = () => {
  return tagVariants.map((variant) => (
    <Typography variant={variant}>{variant}</Typography>
  ));
};

export const WithItalic = () => {
  return (
    <Typography variant="h1" italic>
      Italic
    </Typography>
  );
};

export const WithWeight = () => {
  return weightVariants.map((weight) => (
    <Typography variant="h1" weight={weight}>
      Weight:
    </Typography>
  ));
};
