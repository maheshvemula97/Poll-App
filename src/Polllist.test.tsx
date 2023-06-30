import { render, screen, fireEvent } from "@testing-library/react";
import axios from "axios";
import PollList from "./Polllist";
// Tests that data is fetched successfully from API
it("test_fetch_poll_list_success", async () => {
  const mockData = [
    {
      author: "test author",
      comment_text: "test comment",
      created_at: "2022-01-01",
      created_at_i: 1640991319,
      num_comments: 1,
      objectID: "1",
      parent_id: null,
      points: 1,
      story_id: null,
      story_text: null,
      story_title: null,
      story_url: null,
      title: "test title",
      url: "http://test.com",
    },
  ];
  const axiosGetSpy = jest
    .spyOn(axios, "get")
    .mockResolvedValue({ data: { hits: mockData } });
  render(<PollList />);
  await screen.findByTestId("search");
  expect(axiosGetSpy).toHaveBeenCalledTimes(1);
  expect(screen.getByText("test title")).toBeInTheDocument();
});

// Tests that data is displayed on the page
it("test_display_data", async () => {
  const mockData = [
    {
      author: "test author",
      comment_text: "test comment",
      created_at: "2022-01-01",
      created_at_i: 1640991319,
      num_comments: 1,
      objectID: "1",
      parent_id: null,
      points: 1,
      story_id: null,
      story_text: null,
      story_title: null,
      story_url: null,
      title: "test title",
      url: "http://test.com",
    },
  ];
  jest.spyOn(axios, "get").mockResolvedValue({ data: { hits: mockData } });
  render(<PollList />);
  await screen.findByTestId("search");
  expect(screen.getByText("test title")).toBeInTheDocument();
});

// Tests that search text is updated correctly
it("test_update_search_text", async () => {
  const mockData = [
    {
      author: "test author",
      comment_text: "test comment",
      created_at: "2022-01-01",
      created_at_i: 1640991319,
      num_comments: 1,
      objectID: "1",
      parent_id: null,
      points: 1,
      story_id: null,
      story_text: null,
      story_title: null,
      story_url: null,
      title: "test title",
      url: "http://test.com",
    },
  ];
  jest.spyOn(axios, "get").mockResolvedValue({ data: { hits: mockData } });
  render(<PollList />);
  const searchInput = await screen.findByTestId("search");
  fireEvent.change(searchInput, { target: { value: "test" } });
  console.log("search", searchInput);
  expect(searchInput.value).toBe("test");
});

// Tests that displayed rows are filtered correctly based on search text
it("test_filter_displayed_rows", async () => {
  const mockData = [
    {
      author: "test author",
      comment_text: "test comment",
      created_at: "2022-01-01",
      created_at_i: 1640991319,
      num_comments: 1,
      objectID: "1",
      parent_id: null,
      points: 1,
      story_id: null,
      story_text: null,
      story_title: null,
      story_url: null,
      title: "test title",
      url: "http://test.com",
    },
  ];
  jest.spyOn(axios, "get").mockResolvedValue({ data: { hits: mockData } });
  render(<PollList />);
  const searchInput = await screen.findByTestId("search");
  fireEvent.change(searchInput, { target: { value: "author" } });
  expect(screen.getByText("test title")).toBeInTheDocument();
  fireEvent.change(searchInput, { target: { value: "not found" } });
  expect(screen.queryByText("test title")).not.toBeInTheDocument();
});

// Tests that API call fails
it("test_fetch_poll_list_failure", async () => {
  const axiosGetSpy = jest
    .spyOn(axios, "get")
    .mockRejectedValue(new Error("API call failed"));
  render(<PollList />);
  expect(axiosGetSpy).toHaveBeenCalledTimes(1);
  expect(screen.queryByText("test title")).not.toBeInTheDocument();
});

// Tests that search text is not found in any rows
it("test_search_text_not_found", async () => {
  const mockData = [
    {
      author: "test author",
      comment_text: "test comment",
      created_at: "2022-01-01",
      created_at_i: 1640991319,
      num_comments: 1,
      objectID: "1",
      parent_id: null,
      points: 1,
      story_id: null,
      story_text: null,
      story_title: null,
      story_url: null,
      title: "test title",
      url: "http://test.com",
    },
  ];
  jest.spyOn(axios, "get").mockResolvedValue({ data: { hits: mockData } });
  render(<PollList />);
  const searchInput = await screen.findByTestId("search");
  fireEvent.change(searchInput, { target: { value: "not found" } });
  expect(screen.queryByText("test title")).not.toBeInTheDocument();
});
