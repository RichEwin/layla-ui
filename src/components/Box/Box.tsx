import React from "react";
import { StyledBox } from "./Box.styled";

export interface BoxProps {
  display?: string;
  alignItems?: string;
  justifyContent?: string;
  gap?: string;
  children: React.ReactNode;
  backgroundColor?: string;
  flexDirection?: string;
}

export const Box = ({
  display,
  alignItems,
  justifyContent,
  gap,
  children,
  backgroundColor,
  flexDirection,
}: BoxProps) => {
  return (
    <StyledBox
      display={display}
      alignItems={alignItems}
      justifyContent={justifyContent}
      gap={gap}
      backgroundColor={backgroundColor}
      flexDirection={flexDirection}
    >
      {children}
    </StyledBox>
  );
};

export default Box;
