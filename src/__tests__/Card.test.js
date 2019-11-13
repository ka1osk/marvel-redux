import React from "react";
import { Provider } from "react-redux";
import { render, fireEvent, waitForElement } from "@testing-library/react";
import { store } from "store";
import Home from "pages/Home";

function renderWithRedux(ui, { store }) {
  return {
    ...render(<Provider store={store}>{ui}</Provider>),
    store
  };
}

describe("Characters", () => {
  it("Should show characters", async () => {
    const { getByTestId, debug } = renderWithRedux(<Home />, { store });
    debug();
  });
});
