import React from "react";
import { Meta } from "@storybook/react";
import { Icon } from "./Icon";

export default {
  title: "Icon",
  component: Icon,
} as Meta<typeof Icon>;

export const Default = () => <Icon iconName="faCheckCircle" />;

export const WithOnClick = () => <Icon iconName="faCheckCircle" />;

export const WithSize = () => (
  <div>
    <Icon iconName="faCheckCircle" size="1x" />
    <Icon iconName="faCheckCircle" size="2x" />
    <Icon iconName="faCheckCircle" size="3x" />
    <Icon iconName="faCheckCircle" size="4x" />
    <Icon iconName="faCheckCircle" size="5x" />
  </div>
);

export const WithColor = () => (
  <div>
    <Icon iconName="faCheckCircle" color="red" />
    <Icon iconName="faCheckCircle" color="green" />
    <Icon iconName="faCheckCircle" color="blue" />
    <Icon iconName="faCheckCircle" color="orange" />
    <Icon iconName="faCheckCircle" color="purple" />
  </div>
);
