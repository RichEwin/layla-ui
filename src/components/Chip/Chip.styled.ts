import styled from "styled-components";

interface StyledChipContainerProps {
  active?: boolean;
}

export const StyledChipContainer = styled.div<StyledChipContainerProps>`
  display: inline-block;
  padding: 5px 10px;
  margin: 5px;
  cursor: pointer;
  border: 1px solid #ccc;
  border-radius: 5px;

  ${(props) =>
    props.active &&
    `
    background-color: #007bff;
    color: #fff;
  `}
`;

export const StyledChipGroupContainer = styled.div`
  margin-top: 20px;
`;
