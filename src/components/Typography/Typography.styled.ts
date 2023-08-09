import { createElement } from "react";
import styled from "styled-components";
import { TagVariants } from "./Typography";

export interface DynamicTypographyProps {
  variant: TagVariants;
  children: React.ReactNode;
  className?: string;
}

export const DynamicTypography = styled(
  ({ variant, children, className }: DynamicTypographyProps) =>
    createElement(variant, { className }, children)
)``;
