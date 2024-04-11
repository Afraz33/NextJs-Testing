import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import ComponentA from "../app/components/ComponentA";

describe("Page", () => {
  it("renders a heading", () => {
    render(<ComponentA />);

    const heading = screen.getByRole("heading", { level: 1 });

    expect(heading).toBeInTheDocument();
  });
});
