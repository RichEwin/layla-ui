import React from "react";
import ChipGroup from "./Chip";
import { render } from "../../utils/test-utils";

describe("ChipGroup Component", () => {
  it("renders correctly", () => {
    const tags = ["Tag1", "Tag2", "Tag3"];
    const onClickMock = jest.fn();
    const { getByText } = render(
      <ChipGroup tags={tags} onClick={onClickMock} />
    );

    tags.forEach((tag) => {
      const chip = getByText(tag);
      expect(chip).toBeInTheDocument();
    });
  });
});
