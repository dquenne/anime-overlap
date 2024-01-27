import { afterEach, vi, MockInstance } from "vitest";
import { cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";

let mockedFetch: MockInstance<any>;

beforeEach(() => {
  mockedFetch = vi.spyOn(window, "fetch").mockImplementation((...args) => {
    console.warn(
      "`window.fetch` is not mocked for this test. Instead, test should render the component in a custom urql provider.",
      ...args,
    );
    return Promise.reject(new Error("`window.fetch` is not mocked"));
  });
});

afterEach(() => {
  // Required to enforce that fetch was not called, as React Query can gracefully handle fetch errors
  expect(mockedFetch).not.toHaveBeenCalled();
});

afterEach(() => {
  mockedFetch.mockReset();
  cleanup();
});
