import React from "react";
import { Meta } from "@storybook/react";
import Card from "./Card";

export default {
  title: "Card",
  component: Card,
} as Meta<typeof Card>;

export const Default = () => (
  <Card>
    <div>Card</div>
  </Card>
);
