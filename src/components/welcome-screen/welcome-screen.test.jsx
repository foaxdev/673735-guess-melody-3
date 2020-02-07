import React from "react";
import renderer from "react-test-renderer";
import {WelcomeScreen} from "./welcome-screen";

const TEST_POSSIBLE_MISTAKES_QUANTITY = 5;

it(`Render render Welcome Screen correctly`, () => {
  const tree = renderer
    .create(<WelcomeScreen
      mistakes={TEST_POSSIBLE_MISTAKES_QUANTITY}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
