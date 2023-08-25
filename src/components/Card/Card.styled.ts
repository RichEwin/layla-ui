import styled from "styled-components";

interface StyledCardProps {
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
}

export const StyledCard = styled.div<StyledCardProps>`
  display: ${(props) => (props.display ? props.display : "flex")};
  flex-direction: ${(props) => props.direction && props.direction};
  align-items: ${(props) => props.align && props.align};
  justify-content: ${(props) => props.justify && props.justify};
  gap: ${(props) => (props.gap ? props.gap : "0")};
  background-color: ${(props) =>
    props.background ? props.background : "transparent"};
  height: ${(props) => props.height && props.height};
  width: ${(props) => props.width && props.width};
  margin-top: ${(props) => props.mt && props.mt};
  margin-bottom: ${(props) => props.mb && props.mb};
  border-radius: 10px;
  border: 1px solid #000000;
  padding: 30px;
`;
