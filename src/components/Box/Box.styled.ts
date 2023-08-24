import styled from "styled-components";

interface StyledBoxProps {
  display?: string;
  alignItems?: string;
  justifyContent?: string;
  gap?: string;
  backgroundColor?: string;
  flexDirection?: string;
}

export const StyledBox = styled.div<StyledBoxProps>`
  display: ${(props) => (props.display ? props.display : "flex")};
  flex-direction: ${(props) => props.flexDirection && props.flexDirection};
  align-items: ${(props) => props.alignItems && props.alignItems};
  justify-content: ${(props) => props.justifyContent && props.justifyContent};
  gap: ${(props) => (props.gap ? props.gap : "0")};
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : "transparent"};
`;
