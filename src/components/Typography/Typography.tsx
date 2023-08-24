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
  mt?: string;
  mb?: string;
}

export const Typography = ({
  variant,
  children,
  className,
  italic,
  weight,
  mt,
  mb,
}: TypographyProps) => {
  return (
    <DynamicTypography
      mb={mb}
      mt={mt}
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
