import styled from "styled-components";

interface StyledBoxProps {
  display?: string;
  alignItems?: string;
  justifyContent?: string;
  gap?: string;
  backgroundColor?: string;
  flexDirection?: string;
  height?: string;
  width?: string;
  mt?: string;
  mb?: string;
}

export const StyledBox = styled.div<StyledBoxProps>`
  display: ${(props) => (props.display ? props.display : "flex")};
  flex-direction: ${(props) => props.flexDirection && props.flexDirection};
  align-items: ${(props) => props.alignItems && props.alignItems};
  justify-content: ${(props) => props.justifyContent && props.justifyContent};
  gap: ${(props) => (props.gap ? props.gap : "0")};
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : "transparent"};
  height: ${(props) => props.height && props.height};
  width: ${(props) => props.width && props.width};
  margin-top: ${(props) => props.mt && props.mt};
  margin-bottom: ${(props) => props.mb && props.mb};
`;
