export const getButtonSize = (size: string) => {
  switch (size) {
    case "sm":
      return "28px";
    case "md":
      return "32px";
    case "lg":
      return "36px";
    default:
      return "32px";
  }
};

export const getButtonFontSize = (size: string) => {
  switch (size) {
    case "sm":
      return "10px";
    case "md":
      return "12px";
    case "lg":
      return "14px";
    default:
      return "12px";
  }
};
