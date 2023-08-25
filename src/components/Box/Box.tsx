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
  mb?: string;
  mt?: string;
  withBorder?: boolean;
  withBorderRadius?: boolean;
  padding?: string;
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
  mb,
  mt,
  withBorder,
  withBorderRadius,
  padding,
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
      mb={mb}
      mt={mt}
      withBorder={withBorder}
      withBorderRadius={withBorderRadius}
      padding={padding}
    >
      {children}
    </StyledBox>
  );
};

export default Box;
