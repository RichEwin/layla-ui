import React from "react";
import { Meta } from "@storybook/react";
import Chip, { ChipGroup } from "./Chip";

export default {
  title: "Chip",
  component: Chip,
} as Meta<typeof Chip>;

export const Default = () => (
  <ChipGroup
    onClick={(tag) => console.log(tag)}
    tags={[
      "London",
      "South East England",
      "East of England",
      "South West England",
    ]}
    color="#FBD0E1"
  />
);
