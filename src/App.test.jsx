import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "./App";

describe("App", () => {
  it("renders the home page without crashing", () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByRole("heading", { name: "Home" })).toBeInTheDocument();
  });

  it("renders the navbar links", () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByRole("link", { name: "Customers" })).toHaveAttribute(
      "href",
      "/customers"
    );
    expect(screen.getByRole("link", { name: "Dashboard" })).toBeInTheDocument();
  });
});
