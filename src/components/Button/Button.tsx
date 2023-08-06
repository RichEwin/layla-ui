import React from "react";
import { StyledButton } from "./Button.styled";

export interface ButtonProps {
  label: string;
  disabled?: boolean;
  onClick?: () => void;
  size?: "sm" | "md" | "lg";
}

export const Button = ({ label, disabled, onClick, size }: ButtonProps) => {
  return (
    <StyledButton onClick={onClick} disabled={disabled} size={size}>
      {label}
    </StyledButton>
  );
};

export default Button;
