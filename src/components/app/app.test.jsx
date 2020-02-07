import React from "react";
import renderer from "react-test-renderer";
import {App} from "./app";

const TEST_POSSIBLE_MISTAKES_QUANTITY = 5;

it(`Render App`, () => {
  const tree = renderer
    .create(<App
      mistakes={TEST_POSSIBLE_MISTAKES_QUANTITY}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
