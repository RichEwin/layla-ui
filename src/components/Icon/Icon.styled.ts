import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

interface StyledIconProps {
  color?: string;
}

export const StyledIcon = styled(FontAwesomeIcon)<StyledIconProps>`
  color: ${(props) => (props.color ? props.color : "black")};
`;
