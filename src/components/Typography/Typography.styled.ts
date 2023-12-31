import { createElement } from "react";
import styled from "styled-components";
import { FontWeightVariants, TagVariants } from "./Typography";

export interface DynamicTypographyProps {
  variant?: TagVariants;
  children: React.ReactNode;
  className?: string;
  italic?: boolean;
  weight?: FontWeightVariants;
  mt?: string;
  mb?: string;
  color?: string;
  isUnderlined?: boolean;
}

const defaultVariant: TagVariants = "p";

export const DynamicTypography = styled(
  ({
    variant = defaultVariant,
    children,
    className,
    italic,
    isUnderlined,
  }: DynamicTypographyProps) =>
    createElement(variant, { className }, children, italic, isUnderlined)
)`
  font-style: ${({ italic }) => (italic ? "italic" : "normal")};
  font-weight: ${({ weight }) => (weight ? weight : "normal")};
  margin-top: ${({ mt }) => (mt ? mt : "0px")};
  margin-bottom: ${({ mb }) => (mb ? mb : "0px")};
  color: ${({ color }) => (color ? color : "inherit")};
  text-decoration: ${({ isUnderlined }) =>
    isUnderlined ? "underline" : "none"};
`;
