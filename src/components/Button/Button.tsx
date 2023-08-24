import React from "react";
import { StyledButton } from "./Button.styled";

export interface ButtonProps {
  disabled?: boolean;
  onClick?: () => void;
  size?: "sm" | "md" | "lg";
  className?: string;
  children: React.ReactNode;
  color?: string;
  isTransparent?: boolean;
}

export const Button = ({
  disabled,
  onClick,
  size,
  className,
  children,
  color,
  isTransparent,
}: ButtonProps) => {
  return (
    <StyledButton
      onClick={onClick}
      disabled={disabled}
      size={size}
      className={className}
      color={color}
      isTransparent={isTransparent}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
