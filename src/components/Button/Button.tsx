import React from "react";
import { StyledButton } from "./Button.styled";

export interface ButtonProps {
  disabled?: boolean;
  onClick?: () => void;
  size?: "sm" | "md" | "lg";
  className?: string;
  children: React.ReactNode;
}

export const Button = ({
  disabled,
  onClick,
  size,
  className,
  children,
}: ButtonProps) => {
  return (
    <StyledButton
      onClick={onClick}
      disabled={disabled}
      size={size}
      className={className}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
