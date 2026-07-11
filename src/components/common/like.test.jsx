import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { vi } from "vitest";
import Like from "./like";

describe("Like", () => {
  it("renders an empty heart when not liked", () => {
    const { container } = render(<Like liked={false} onClick={() => {}} />);
    expect(container.querySelector("i")).toHaveClass("fa-heart-o");
  });

  it("renders a full heart when liked", () => {
    const { container } = render(<Like liked={true} onClick={() => {}} />);
    const icon = container.querySelector("i");
    expect(icon).toHaveClass("fa-heart");
    expect(icon).not.toHaveClass("fa-heart-o");
  });

  it("calls onClick when clicked", () => {
    const onClick = vi.fn();
    const { container } = render(<Like liked={false} onClick={onClick} />);
    fireEvent.click(container.querySelector("i"));
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
