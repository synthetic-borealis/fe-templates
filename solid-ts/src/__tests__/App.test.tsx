import { render, fireEvent, screen } from "solid-testing-library";
import App from "../App";

test("Renders main page correctly", async () => {
  // Setup
  render(() => <App />);
  const buttonCount = await screen.findByRole("button");
  let codeCount = await screen.queryByText(/The count is now:/);

  // Pre-expectations
  expect(buttonCount.innerHTML).toBe("count is: 0");
  expect(codeCount).not.toBeInTheDocument();

  // Init
  fireEvent.click(buttonCount);
  await Promise.resolve();
  fireEvent.click(buttonCount);
  await Promise.resolve();
  codeCount = await screen.queryByText(/The count is now:/);

  // Post-expectations
  expect(buttonCount.innerHTML).toBe("count is: 2");
  expect(codeCount).toBeInTheDocument();
});
