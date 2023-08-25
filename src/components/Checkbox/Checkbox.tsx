import React from "react";
import { useState } from "react";
import { StyledCheckBoxInput } from "./Checkbox.styled";

export interface CheckboxProps {
  label: string;
  checked: boolean;
  onChange?: (event: any) => void;
  className?: string;
}

export const Checkbox = ({ label, checked, onChange }: CheckboxProps) => {
  const [isCheckedState, setIsChecked] = useState(checked || false);

  const handleCheckboxChange = () => {
    const updatedValue = !isCheckedState;
    setIsChecked(updatedValue);

    if (onChange) {
      onChange(updatedValue);
    }
  };

  return (
    <label>
      <StyledCheckBoxInput
        type="checkbox"
        checked={isCheckedState}
        onChange={handleCheckboxChange}
      />
      {label}
    </label>
  );
};

export default Checkbox;
