import { act, render, screen, waitFor } from "@testing-library/react";
import PollList from "../components/Polllist";
import { mockData } from "../utils/constants";
import { BrowserRouter } from "react-router-dom";

let fetchMock: any;
beforeEach(() => {
  fetchMock = jest
    .spyOn(global, "fetch")
    .mockImplementation(
      jest.fn(() =>
        Promise.resolve({ json: () => Promise.resolve(mockData) })
      ) as jest.Mock
    );
});

afterEach(() => {
  jest.restoreAllMocks();
});

describe("PollList Component", () => {
  test("Fetch called", async () => {
    await fetchMock();
    expect(fetchMock).toHaveBeenCalled();
  });
  test("PollList rendered", () => {
    render(
      <BrowserRouter>
        <PollList />
      </BrowserRouter>
    );
    const pollListDetailsTable = screen.getByTestId("pollListDetails");
    expect(pollListDetailsTable).toBeInTheDocument();
  });
  test("Searchbox rendered", () => {
    render(
      <BrowserRouter>
        <PollList />
      </BrowserRouter>
    );
    const searchBox = screen.getByTestId("search");
    expect(searchBox).toBeInTheDocument();
  });
});
