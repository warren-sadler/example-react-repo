import React from "react";
import { render } from "@testing-library/react";
import { Example } from "./index";

describe("Example Component", () => {
  it("should render correctly", () => {
    const { getAllByText } = render(<Example message="Something Cool" />);
    const message = getAllByText("Something Cool");
    expect(message).toBeDefined();
  });
});
