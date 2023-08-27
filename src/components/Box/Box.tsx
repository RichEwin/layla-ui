import React from "react";
import { StyledBox } from "./Box.styled";

export interface BoxProps {
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
  withborder?: "true" | "false";
  withborderradius?: "true" | "false";
  padding?: string;
}

export const Box = ({
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
  withborder,
  withborderradius,
  padding,
}: BoxProps) => {
  return (
    <StyledBox
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
      withborder={withborder}
      withborderradius={withborderradius}
      padding={padding}
    >
      {children}
    </StyledBox>
  );
};

export default Box;
