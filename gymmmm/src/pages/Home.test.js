import Home from "./Home";
import {render, screen} from "@testing-library/react";
import "@testing-library/jest-dom";

it("should render Home", () => {
    render(<Home title="Search"/>)
    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toBeInTheDocument()
})