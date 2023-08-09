import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Input from "./Input";

describe("Input Component", () => {
  it("renders correctly", () => {
    const { getByPlaceholderText } = render(<Input placeholder="Type here" />);
    const inputElement = getByPlaceholderText("Type here");
    expect(inputElement).toBeInTheDocument();
  });
});
