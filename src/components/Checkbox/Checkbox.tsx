import React, { useEffect } from "react";
import { useState } from "react";
import { StyledCheckBoxInput } from "./Checkbox.styled";

export interface CheckboxProps {
  label: any;
  checked: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

export const Checkbox = ({ label, checked, onChange }: CheckboxProps) => {
  const [isChecked, setIsChecked] = useState(checked);

  useEffect(() => {
    setIsChecked(checked);
  }, [checked]);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked);
    if (onChange) {
      onChange(event);
    }
  };

  return (
    <label>
      <StyledCheckBoxInput
        type="checkbox"
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
      {label}
    </label>
  );
};

export default Checkbox;
