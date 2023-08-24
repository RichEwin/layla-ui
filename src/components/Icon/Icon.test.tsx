import React from "react";
import Icon from "./Icon";
import { render } from "../../utils/test-utils";

describe("Icon Component", () => {
  it("renders correctly", () => {
    const { container } = render(<Icon iconName="faCheckCircle" />);
    expect(container).toBeInTheDocument();
  });
});
