import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

describe("Calculator", () => {
  it("calculates the sum correctly", () => {
    render(<App />);

    const number1Input = screen.getByPlaceholderText("number 1");
    const number2Input = screen.getByPlaceholderText("number 2");
    const calculateButton = screen.getByText("Calculate");

    // Enter test values
    fireEvent.change(number1Input, { target: { value: "2" } });
    fireEvent.change(number2Input, { target: { value: "3" } });

    // Click Calculate button
    fireEvent.click(calculateButton);

    // Check if the result is displayed correctly
    const resultLabel = screen.getByText("5");
    expect(resultLabel).toBeInTheDocument();
  });
});
