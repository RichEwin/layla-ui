import styled from "styled-components";
import { getButtonFontSize, getButtonSize } from "../../utils/getSize.utils";

export interface StyledButtonProps {
  size?: "sm" | "md" | "lg";
}

export const StyledButton = styled.button<StyledButtonProps>`
  height: ${(props) =>
    props.size ? getButtonSize(props.size) : getButtonSize("md")};
  border-radius: 4px;
  font-size: ${(props) => (props.size ? getButtonFontSize(props.size) : "md")};
  width: auto;
`;
