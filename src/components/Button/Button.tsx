import React from "react";
import { StyledButton } from "./Button.styled";

export interface ButtonProps {
  label: string;
  disabled?: boolean;
  onClick?: () => void;
  size?: "sm" | "md" | "lg";
  className?: string;
}

export const Button = ({
  label,
  disabled,
  onClick,
  size,
  className,
}: ButtonProps) => {
  return (
    <StyledButton
      onClick={onClick}
      disabled={disabled}
      size={size}
      className={className}
    >
      {label}
    </StyledButton>
  );
};

export default Button;
