import { waitFor, fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "../App";

import Rawjson from "../components/Rawjson";
import PollList from "../components/Polllist";
jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({}),
  })
);

describe("App component", () => {
  // Tests that App component renders without crashing
  it("test_render_app_component", () => {
    render(<App />);
    const appElement = screen.getByTestId("App");
    expect(appElement).toBeInTheDocument();
  });
  //   // Tests that Polllist component renders when path is '/'
  it("test_render_polllist_component", () => {
    render(<App />);
    const polllistElement = screen.getByTestId("pollListDetails");
    expect(polllistElement).toBeInTheDocument();
  });
  it("test_render_search_component", () => {
    render(<App />);
    const searchElement = screen.getByTestId("search");
    expect(searchElement).toBeInTheDocument();
  });
  //   // Tests that Rawjson component renders when path is '/poll/:id'
  it("test_render_rawjson_component", () => {
    const state = { obj: { id: 1 } };
    render(
      <MemoryRouter>
        <Rawjson location={{ state }} />
      </MemoryRouter>
    );
    const rawjsonElement = screen.getByTestId("Rawjson");
    expect(rawjsonElement).toBeInTheDocument();
  });

  //   // Tests that 404 component renders when path is not found
  //   it("test_render_404_component", () => {
  //     render(
  //       <MemoryRouter initialEntries={["/random"]}>
  //         <App />
  //       </MemoryRouter>
  //     );
  //     const notFoundElement = screen.getByRole("heading", { level: 1 });
  //     expect(notFoundElement).toBeInTheDocument();
  //   });
  //   it("renders the ID query parameter from the URL", () => {
  //     render(
  //       <MemoryRouter initialEntries={["/123"]}>
  //         <Rawjson />
  //       </MemoryRouter>
  //     );
  //     expect(screen.getByText("123")).toBeInTheDocument();
  //   });
});
