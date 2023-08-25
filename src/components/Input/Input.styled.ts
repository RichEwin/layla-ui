import styled from "styled-components";

interface StyledInputProps {
  height?: string;
}

export const StyledInput = styled.input<StyledInputProps>`
  height: ${({ height }) => height && height};
  border: 0.5px solid #000000;
  border-radius: 4px;
`;
export const LabelWrapper = styled.label`
  display: block;
  margin-bottom: 8px;
  font-weight: bold;
`;
