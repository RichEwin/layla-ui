import React from "react";
import { LabelWrapper, StyledInput } from "./Input.styled";

export interface InputProps {
  disabled?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  className?: string;
  type?: string;
  label?: string;
}

export const Input = ({
  disabled,
  onChange,
  placeholder,
  className,
  type,
  label,
}: InputProps) => {
  return (
    <>
      {label ? <LabelWrapper>{label}</LabelWrapper> : null}
      <StyledInput
        disabled={disabled}
        onChange={onChange}
        placeholder={placeholder}
        className={className}
        type={type}
      />
    </>
  );
};

export default Input;
