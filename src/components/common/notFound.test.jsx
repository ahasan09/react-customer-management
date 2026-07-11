import React from "react";
import { render, screen } from "@testing-library/react";
import NotFound from "./notFound";

describe("NotFound", () => {
  it("renders a Not Found heading", () => {
    render(<NotFound />);
    expect(
      screen.getByRole("heading", { name: "Not Found" })
    ).toBeInTheDocument();
  });
});
