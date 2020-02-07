import React from "react";
import renderer from "react-test-renderer";
import {App} from "./app";

const TEST_POSSIBLE_MISTAKES_QUANTITY = 5;
const TEST_WELCOME_BUTTON_HANDLER = () => {};

it(`Render App`, () => {
  const tree = renderer
    .create(<App
      mistakes={TEST_POSSIBLE_MISTAKES_QUANTITY}
      onWelcomeButtonClick={TEST_WELCOME_BUTTON_HANDLER}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
