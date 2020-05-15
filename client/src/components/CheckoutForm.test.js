import React from "react";
import { render, fireEvent } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", async () => {
  const { findByText } = await render(<CheckoutForm />);
  const element = await findByText("Checkout Form");
  expect(element).toBeInTheDocument();
});

test("form shows success message on submit with form details", async () => {
  const { findByTestId } = await render(<CheckoutForm />);

  // Added to CheckOutForm.jsx on the button
  const button = await findByTestId("submit");
  fireEvent.click(button);

  const element = await findByTestId("successMessage");
  expect(element).toBeInTheDocument();
});
