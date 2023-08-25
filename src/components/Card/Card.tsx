import React from "react";
import { StyledCard } from "./Card.styled";

export interface CardProps {
  display?: string;
  alignItems?: string;
  justifyContent?: string;
  gap?: string;
  children: React.ReactNode;
  backgroundColor?: string;
  flexDirection?: string;
  height?: string;
  width?: string;
  mb?: string;
  mt?: string;
}

export const Card = ({
  display,
  alignItems,
  justifyContent,
  gap,
  children,
  backgroundColor,
  flexDirection,
  height,
  width,
  mb,
  mt,
}: CardProps) => {
  return (
    <StyledCard
      display={display}
      alignItems={alignItems}
      justifyContent={justifyContent}
      gap={gap}
      backgroundColor={backgroundColor}
      flexDirection={flexDirection}
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
