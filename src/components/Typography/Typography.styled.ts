import { createElement } from "react";
import styled from "styled-components";
import { FontWeightVariants, TagVariants } from "./Typography";

export interface DynamicTypographyProps {
  variant: TagVariants;
  children: React.ReactNode;
  className?: string;
  italic?: boolean;
  weight?: FontWeightVariants;
}

export const DynamicTypography = styled(
  ({ variant, children, className, italic, weight }: DynamicTypographyProps) =>
    createElement(variant, { className }, children, italic, weight)
)`
  font-style: ${({ italic }) => (italic ? "italic" : "normal")};
  font-weight: ${({ weight }) => weight && weight};
`;
