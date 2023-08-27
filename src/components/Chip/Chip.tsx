import React, { useEffect, useState } from "react";
import { StyledChipContainer, StyledChipGroupContainer } from "./Chip.styled";

export interface ChipProps {
  label: string;
  active: true | false;
  onClick: (label: string) => void;
  color: string;
}

const Chip = ({ label, active, onClick, color }: ChipProps) => {
  const handleClick = () => {
    if (active) {
      onClick("");
    } else {
      onClick(label);
    }
  };

  return (
    <StyledChipContainer active={active} onClick={handleClick} color={color}>
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
    setActiveTag(tag === activeTag ? null : tag);
    onClick(tag === activeTag ? "" : tag);
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
