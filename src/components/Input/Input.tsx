import React from "react";
import { StyledInput } from "./Input.styled";

export interface InputProps {
  disabled?: boolean;
  onChange?: () => void;
  placeholder?: string;
  className?: string;
}

export const Input = ({
  disabled,
  onChange,
  placeholder,
  className,
}: InputProps) => {
  return (
    <StyledInput
      disabled={disabled}
      onChange={onChange}
      placeholder={placeholder}
      className={className}
    />
  );
};

export default Input;
