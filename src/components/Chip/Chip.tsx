import React, { useState } from "react";
import { StyledChipContainer, StyledChipGroupContainer } from "./Chip.styled";

export interface ChipProps {
  label: string;
  active: boolean;
  onClick: () => void;
}

const Chip = ({ label, active, onClick }: ChipProps) => {
  return (
    <StyledChipContainer active={active} onClick={onClick}>
      {label}
    </StyledChipContainer>
  );
};

export interface ChipGroupInterface {
  tags: string[];
  onClick: (tag: string) => void;
}

export const ChipGroup = ({ tags, onClick }: ChipGroupInterface) => {
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const toggleTag = (tag: string) => {
    if (activeTag === tag) {
      setActiveTag(null);
    } else {
      setActiveTag(tag);
    }
    onClick(tag);
  };

  return (
    <StyledChipGroupContainer>
      {tags.map((tag) => (
        <Chip
          key={tag}
          label={tag}
          active={activeTag === tag}
          onClick={() => toggleTag(tag)}
        />
      ))}
    </StyledChipGroupContainer>
  );
};

export default ChipGroup;