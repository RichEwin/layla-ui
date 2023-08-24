import { createElement } from "react";
import styled from "styled-components";
import { FontWeightVariants, TagVariants } from "./Typography";

export interface DynamicTypographyProps {
  variant: TagVariants;
  children: React.ReactNode;
  className?: string;
  italic?: boolean;
  weight?: FontWeightVariants;
  mt?: string;
  mb?: string;
}

export const DynamicTypography = styled(
  ({ variant, children, className, italic }: DynamicTypographyProps) =>
    createElement(variant, { className }, children, italic)
)`
  font-style: ${({ italic }) => (italic ? "italic" : "normal")};
  font-weight: ${({ weight }) => (weight ? weight : "normal")};
  margin-top: ${({ mt }) => (mt ? mt : "0px")};
  margin-bottom: ${({ mb }) => (mb ? mb : "0px")};
`;
