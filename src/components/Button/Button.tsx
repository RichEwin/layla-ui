import React from "react";
import { StyledButton } from "./Button.styled";

export interface ButtonProps {
  disabled?: boolean;
  onClick?: () => void;
  size?: "sm" | "md" | "lg";
  className?: string;
  children: React.ReactNode;
  color?: string;
  transparent?: "true" | "false";
}

export const Button = ({
  disabled,
  onClick,
  size,
  className,
  children,
  color,
  transparent,
}: ButtonProps) => {
  return (
    <StyledButton
      onClick={onClick}
      disabled={disabled}
      size={size}
      className={className}
      color={color}
      transparent={transparent}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
