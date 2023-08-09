import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Button from "./Button";

describe("Button Component", () => {
  it("renders correctly", () => {
    const { getByText } = render(<Button label="Click Me" />);
    const buttonElement = getByText("Click Me");
    expect(buttonElement).toBeInTheDocument();
  });
});
