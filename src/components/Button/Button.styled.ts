import styled from "styled-components";
import { getButtonFontSize, getButtonSize } from "../../utils/getSize.utils";

export interface StyledButtonProps {
  size?: "sm" | "md" | "lg";
  color: string | undefined;
  transparent?: "true" | "false";
}

export const StyledButton = styled.button<StyledButtonProps>`
  height: ${(props) =>
    props.size ? getButtonSize(props.size) : getButtonSize("md")};
  border-radius: 4px;
  font-size: ${(props) => (props.size ? getButtonFontSize(props.size) : "md")};
  width: auto;
  background-color: ${(props) => (props.color ? props.color : null)};
  color: #000000;
  cursor: pointer;
  border: ${(props) => (props.transparent === "true" ? "none" : null)};
  background: ${(props) => (props.transparent === "true" ? "none" : null)};
`;
