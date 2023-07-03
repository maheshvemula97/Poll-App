import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import PollListGrid from "../components/PolllistGrid";
import Rawjson from "../components/Rawjson";
import { mockData } from "../utils/constants";
import { BrowserRouter } from "react-router-dom";
import PollList from "../components/Polllist";
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

describe("PollList Grid Component", () => {
  test("PollList Grid with mock data Title rendered", async () => {
    await fetchMock();
    render(
      <BrowserRouter>
        <PollListGrid data={mockData} />
      </BrowserRouter>
    );
    const titleValue = screen.getByTestId("data-title");
    expect(titleValue).toHaveTextContent("test title");
  });
  test("DataGrid Mock Data URL Rendered", () => {
    render(
      <BrowserRouter>
        <PollListGrid data={mockData} />
      </BrowserRouter>
    );
    const URLref: HTMLAnchorElement = screen.getByTestId("data-url");
    expect(URLref.href).toBe("http://test.com/");
  });
  test("Raw JSON Rendered", () => {
    render(
      <BrowserRouter>
        <Rawjson />
      </BrowserRouter>
    );
    const noDataElement = screen.getByTestId("Rawjson");

    // Assert that the "No data" text is present in the rendered component
    expect(noDataElement).toHaveTextContent("No data");
  });

  // test("calls navigate with the correct parameters 1", () => {
  //   const navigate = jest.fn();
  //   const data = [
  //     {
  //       objectID: "1",
  //       title: "Title 1",
  //       author: "Author 1",
  //       url: "http://example.com/1",
  //       created_at: "2023-01-01",
  //       num_comments: 10,
  //     },
  //     {
  //       objectID: "2",
  //       title: "Title 2",
  //       author: "Author 2",
  //       url: "http://example.com/2",
  //       created_at: "2023-01-02",
  //       num_comments: 20,
  //     },
  //     // Add more mock data as needed
  //   ];

  //   // Render the component with the mocked dependencies
  //   // eslint-disable-next-line react/jsx-no-undef
  //   render(
  //     <BrowserRouter>
  //       <PolllistGrid data={data} navigate={navigate} />
  //     </BrowserRouter>
  //   );

  //   // Find the row element and trigger the click event
  //   const rowElement = screen.getByTestId("data-title");
  //   fireEvent.click(rowElement);

  //   // Assert that navigate was called with the expected parameters
  //   expect(navigate).toHaveBeenCalledWith("/poll/1", {
  //     state: { obj: data[0] },
  //   });
  // });
});
