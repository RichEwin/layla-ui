import React from "react";
import Input from "./Input";
import { render } from "../../utils/test-utils";

describe("Input Component", () => {
  it("renders correctly", () => {
    const { getByPlaceholderText } = render(<Input placeholder="Type here" />);
    const inputElement = getByPlaceholderText("Type here");
    expect(inputElement).toBeInTheDocument();
  });
});
