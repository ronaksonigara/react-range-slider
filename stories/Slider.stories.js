import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, boolean, number, text } from "@storybook/addon-knobs";

import RangeSlider from "../src/components/RangeSlider";

const stories = storiesOf("Slider", module);
stories.addDecorator(withKnobs);

stories.add("Slider", () => (
  <>
    <h3>Number Slider</h3>
    <RangeSlider
      disabled={boolean("disabled", false)}
      isError={boolean("isError", false)}
      showInput={boolean("showInput", false)}
      showTooltip={boolean("showTooltip", true)}
      label={text("label", "")}
      helperText={text("helperText", "")}
      min={number("min", 0)}
      max={number("max", 150)}
      value={number("value", 20)}
      step={number("step", 1)}
    />
  </>
));
