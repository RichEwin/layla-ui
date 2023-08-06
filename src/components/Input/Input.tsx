import React from "react";
import { StyledInput } from "./Input.styled";

export interface InputProps {
  disabled?: boolean;
  onChange?: () => void;
  placeholder?: string;
}

export const Input = ({ disabled, onChange, placeholder }: InputProps) => {
  return (
    <StyledInput
      disabled={disabled}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
};

export default Input;
