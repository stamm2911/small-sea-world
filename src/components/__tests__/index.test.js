import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import Grid from "../Grid";
import GridContext from "../../utils/GridContext";
import Button from '../Button'
import ControlPanel from '../ControlPanel'

let container = null;

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("renders button", () => {
  act(() => {
    render(<Grid GridContext={GridContext}/>, container);
  });
  expect(container.textContent).toBe('');

  //   act(() => {
  //     render(<Welcome name="Xander" topic="React" />, container);
  //   });
  //   expect(container.textContent).toBe(
  //     'Welcome, Xander! We hope you learn a lot about React.'
  //   );

  //   act(() => {
  //     render(<Welcome name="Tammer" topic="Mocks" />, container);
  //   });
  //   expect(container.textContent).toBe(
  //     'Welcome, Tammer! We hope you learn a lot about Mocks.'
  //   );

  //   act(() => {
  //     render(<Welcome name="Grace" />, container);
  //   });
  //   expect(container.textContent).toBe(
  //     'Welcome, Grace! We hope you learn a lot about Web Development.'
  //   );
});
