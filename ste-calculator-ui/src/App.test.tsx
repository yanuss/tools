import { render, screen } from "@testing-library/react";
import App from "./App";

// async function mockFetch(url)

describe("<App />", () => {
  beforeAll(() => jest.spyOn(window, "fetch"));

  it("renders correctly", () => {
    const { getByTestId } = render(<App />);
    expect(getByTestId("appPage")).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText(/Input your wallet address/)
    ).toBeInTheDocument();
    expect(screen.getByText(/Run/)).toBeInTheDocument();
  });
  // it("fetches data correctly", async () => {
  //   render(<App />);
  //   window.fetch.mockResolvedValueOnce({
  //     ok: true,
  //     json: async () => ({success: true}),
  //   })
  // });
});
