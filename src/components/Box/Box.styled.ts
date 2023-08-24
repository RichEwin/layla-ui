import styled from "styled-components";

interface StyledBoxProps {
  display?: string;
  alignItems?: string;
  justifyContent?: string;
  gap?: string;
  backgroundColor?: string;
}

export const StyledBox = styled.div<StyledBoxProps>`
  display: ${(props) => (props.display ? props.display : "flex")};
  align-items: ${(props) => (props.alignItems ? props.alignItems : "center")};
  justify-content: ${(props) =>
    props.justifyContent ? props.justifyContent : "center"};
  gap: ${(props) => (props.gap ? props.gap : "0")};
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : "transparent"};
`;
