import React from "react";
import { StyledIcon } from "./Icon.styled";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { iconLibrary } from "./iconLibrary";

export interface IconProps {
  iconName: string;
  size?: "1x" | "2x" | "3x" | "4x" | "5x";
  color?: string;
  onClick?: () => void;
  className?: string;
}

export const Icon = ({
  iconName,
  size,
  color,
  onClick,
  className,
}: IconProps) => {
  const icon: IconDefinition = (iconLibrary as any)[iconName];

  if (!icon) {
    console.warn(`Icon '${iconName}' not found in iconLibrary.`);
    return null;
  }

  return (
    <StyledIcon
      icon={icon}
      onClick={onClick}
      size={size}
      color={color}
      className={className}
    />
  );
};

export default Icon;
