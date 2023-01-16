import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { describe, it } from "vitest";
import Header from "../../../components/Header/Header";

describe("Header", () => {
  it("should render without error", () => {
    const { getByText } = render(<Header />, { wrapper: BrowserRouter });
    expect(getByText("Neara 2FA")).toBeInTheDocument();
  });
});
