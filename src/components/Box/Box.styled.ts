import styled from "styled-components";

interface StyledBoxProps {
  display?: string;
  align?: string;
  justify?: string;
  gap?: string;
  background?: string;
  direction?: string;
  height?: string;
  width?: string;
  mt?: string;
  mb?: string;
  withborder?: "true" | "false";
  withborderradius?: "true" | "false";
  padding?: string;
}

export const StyledBox = styled.div.attrs<StyledBoxProps>((props) => ({
  display: props.display || "flex",
  align: props.align || "center",
  justify: props.justify || "center",
  gap: props.gap || "0",
  background: props.background || "transparent",
  direction: props.direction || "row",
  height: props.height || "auto",
  width: props.width || "auto",
  mt: props.mt || "0",
  mb: props.mb || "0",
  withborder: props.withborder || "false",
  withborderradius: props.withborderradius || "false",
  padding: props.padding || "0",
}))<StyledBoxProps>`
  display: ${(props) => props.display};
  align-items: ${(props) => props.align};
  justify-content: ${(props) => props.justify};
  gap: ${(props) => props.gap};
  background: ${(props) => props.background};
  flex-direction: ${(props) => props.direction};
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  margin-top: ${(props) => props.mt};
  margin-bottom: ${(props) => props.mb};
  border: ${(props) =>
    props.withborder === "true" ? "1px solid #ccc" : "none"};
  border-radius: ${(props) =>
    props.withborderradius === "true" ? "10px" : "0"};
  padding: ${(props) => props.padding};
`;
