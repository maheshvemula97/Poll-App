import { render, screen } from "@testing-library/react";
import App from "./App";
import Rawjson from "./Rawjson";

// Tests that the component renders without crashing
it("test_render_component", () => {
  render(<App />);
  const appElement = screen.getByTestId("App");
  expect(appElement).toBeInTheDocument();
});

// // Tests that the Router component is rendered
// it("test_render_router", () => {
//   render(<App />);
//   const routerElement = screen.getByRole("router");
//   expect(routerElement).toBeInTheDocument();
// });

// // Tests that the Polllist component is rendered when the path is '/'
// it("test_render_polllist", () => {
//   render(<App />);
//   const polllistElement = screen.getByRole("polllist");
//   expect(polllistElement).toBeInTheDocument();
// });

// // Tests that the Rawjson component is rendered when the path is '/poll/:id'
// it("test_render_rawjson", () => {
//   const state = { obj: {} };
//   render(<Rawjson location={{ state }} />);
//   const rawjsonElement = screen.getByRole("rawjson");
//   expect(rawjsonElement).toBeInTheDocument();
// });

// // Tests that the 404 component is rendered when the path is not found
// it("test_render_404", () => {
//   render(<App />);
//   const notFoundElement = screen.getByText("404 Not found");
//   expect(notFoundElement).toBeInTheDocument();
// });

// // // Tests that the component handles invalid routes
// // it("test_handle_invalid_routes", () => {
// //   render(<App />);
// //   const invalidRoute = "/invalid-route";
// //   history.push(invalidRoute);
// //   const notFoundElement = screen.getByText("404 Not found");
// //   expect(notFoundElement).toBeInTheDocument();
// // });
