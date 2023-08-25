import React, { useEffect, useState } from "react";
import { StyledChipContainer, StyledChipGroupContainer } from "./Chip.styled";

export interface ChipProps {
  label: string;
  active: boolean;
  onClick: () => void;
  color: string;
}

const Chip = ({ label, active, onClick, color }: ChipProps) => {
  return (
    <StyledChipContainer active={active} onClick={onClick} color={color}>
      {label}
    </StyledChipContainer>
  );
};

export interface ChipGroupInterface {
  tags: string[];
  onClick: (tag: string) => void;
  reset?: boolean;
  color?: string;
}

export const ChipGroup = ({ tags, onClick, reset }: ChipGroupInterface) => {
  const [activeTag, setActiveTag] = useState<string | null>(null);

  useEffect(() => {
    if (reset) {
      setActiveTag(null);
    }
  }, [reset]);

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
          color="#FBD0E1"
        />
      ))}
    </StyledChipGroupContainer>
  );
};

export default ChipGroup;
