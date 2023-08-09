import React from "react";
import Typography from "./Typography";
import { render } from "../../utils/test-utils";

describe("Typography Component", () => {
  it("renders children correctly", () => {
    const { getByText } = render(
      <Typography variant="h1">Hello, world</Typography>
    );
    const typographyElement = getByText("Hello, world");
    expect(typographyElement).toBeInTheDocument();
  });
});
