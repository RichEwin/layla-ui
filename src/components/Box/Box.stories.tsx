import React from "react";
import { Meta } from "@storybook/react";
import Box from "./Box";

export default {
  title: "Box",
  component: Box,
} as Meta<typeof Box>;

export const Default = () => (
  <Box>
    <div>Box</div>
  </Box>
);

export const WithGap = () => (
  <Box gap="20px">
    <div>Box</div>
    <div>Box</div>
  </Box>
);

export const WithCustomStyles = () => (
  <Box display="flex" align="center" justify="center" background="red">
    <div>Box</div>
  </Box>
);
