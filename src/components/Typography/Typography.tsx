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

export type FontWeightVariants = "normal" | "bold" | "lighter" | "bolder";

export interface TypographyProps {
  variant: TagVariants;
  children: React.ReactNode;
  className?: string;
  italic?: boolean;
  weight?: FontWeightVariants;
}

export const Typography = ({
  variant,
  children,
  className,
  italic,
  weight,
}: TypographyProps) => {
  return (
    <DynamicTypography
      variant={variant}
      className={className}
      italic={italic}
      weight={weight}
    >
      {children}
    </DynamicTypography>
  );
};

export default Typography;
