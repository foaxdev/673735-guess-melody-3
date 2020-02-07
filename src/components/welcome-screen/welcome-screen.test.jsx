import React from "react";
import renderer from "react-test-renderer";
import {WelcomeScreen} from "./welcome-screen";

const TEST_POSSIBLE_MISTAKES_QUANTITY = 5;
const TEST_WELCOME_BUTTON_HANDLER = () => {};

it(`Render render Welcome Screen correctly`, () => {
  const tree = renderer
    .create(<WelcomeScreen
      mistakes={TEST_POSSIBLE_MISTAKES_QUANTITY}
      onWelcomeButtonClick={TEST_WELCOME_BUTTON_HANDLER}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
