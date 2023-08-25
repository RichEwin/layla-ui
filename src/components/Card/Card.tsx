import React from "react";
import { StyledCard } from "./Card.styled";

export interface CardProps {
  display?: string;
  align?: string;
  justify?: string;
  gap?: string;
  children: React.ReactNode;
  background?: string;
  direction?: string;
  height?: string;
  width?: string;
  mb?: string;
  mt?: string;
}

export const Card = ({
  display,
  align,
  justify,
  gap,
  children,
  background,
  direction,
  height,
  width,
  mb,
  mt,
}: CardProps) => {
  return (
    <StyledCard
      display={display}
      align={align}
      justify={justify}
      gap={gap}
      background={background}
      direction={direction}
      height={height}
      width={width}
      mb={mb}
      mt={mt}
    >
      {children}
    </StyledCard>
  );
};

export default Card;
