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
  height?: string;
  width?: string;
}

export const Box = ({
  display,
  alignItems,
  justifyContent,
  gap,
  children,
  backgroundColor,
  flexDirection,
  height,
  width,
}: BoxProps) => {
  return (
    <StyledBox
      display={display}
      alignItems={alignItems}
      justifyContent={justifyContent}
      gap={gap}
      backgroundColor={backgroundColor}
      flexDirection={flexDirection}
      height={height}
      width={width}
    >
      {children}
    </StyledBox>
  );
};

export default Box;
