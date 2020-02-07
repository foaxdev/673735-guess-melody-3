import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {WelcomeScreen} from "./welcome-screen";

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Should welcome button be clicked`, () => {
  const onWelcomeButtonClick = jest.fn();
  const TEST_POSSIBLE_MISTAKES_QUANTITY = 5;

  const welcomeScreen = shallow(
      <WelcomeScreen
        mistakes={TEST_POSSIBLE_MISTAKES_QUANTITY}
        onWelcomeButtonClick={onWelcomeButtonClick}
      />
  );

  const welcomeButton = welcomeScreen.find(`button.welcome__button`);

  welcomeButton.props().onClick();

  expect(onWelcomeButtonClick.mock.calls.length).toBe(1);
});
