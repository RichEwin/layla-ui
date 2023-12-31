import React from "react";
import Button from "./Button";
import { render } from "../../utils/test-utils";

describe("Button Component", () => {
  it("renders correctly", () => {
    const { getByText } = render(<Button>Click Me</Button>);
    const buttonElement = getByText("Click Me");
    expect(buttonElement).toBeInTheDocument();
  });
});
