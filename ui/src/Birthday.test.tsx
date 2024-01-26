import { render, screen } from "@testing-library/react";
import { Provider } from "urql";
import { Birthday } from "./Birthday";
import { fromValue } from "wonka";

describe("on load", () => {
  const responseState = {
    executeQuery: () =>
      fromValue({
        data: {
          Character: {
            name: { full: "Character A" },
            media: { nodes: [{ title: { romaji: "Anime A" } }] },
          },
        },
      }),
  };

  test("renders birthday character's name", () => {
    render(
      <Provider value={responseState}>
        <Birthday />
      </Provider>
    );
    const linkElement = screen.getByText(/Character A's birthday/i);
    expect(linkElement).toBeInTheDocument();
  });

  test("renders character's source media", () => {
    render(
      <Provider value={responseState}>
        <Birthday />
      </Provider>
    );
    const linkElement = screen.getByText(/\(from "Anime A"\)/i);
    expect(linkElement).toBeInTheDocument();
  });
});
