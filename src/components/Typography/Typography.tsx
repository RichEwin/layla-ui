import React from "react";
import { DynamicTypography } from "./Typography.styled";

export type TagVariants =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "p"
  | "span";

export interface TypographyProps {
  variant: TagVariants;
  children: React.ReactNode;
  className?: string;
}

export const Typography = ({
  variant,
  children,
  className,
}: TypographyProps) => {
  return (
    <DynamicTypography variant={variant} className={className}>
      {children}
    </DynamicTypography>
  );
};

export default Typography;
