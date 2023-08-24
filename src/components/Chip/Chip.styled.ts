import styled from "styled-components";

interface StyledChipContainerProps {
  active?: boolean;
  color?: string;
}

export const StyledChipContainer = styled.div<StyledChipContainerProps>`
  display: inline-block;
  padding: 5px 10px;
  margin: 5px;
  cursor: pointer;
  border: 1px solid transparent;
  border-radius: 5px;

  ${(props) =>
    props.active &&
    `
    background-color: ${props.color ? props.color : null};
    color: #000000;
  `}
`;

export const StyledChipGroupContainer = styled.div`
  margin-top: 20px;
`;
