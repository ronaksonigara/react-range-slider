import React from "react";

import RangeSlider from "./components/RangeSlider";

const App = () => {
  const handleChange = (value) => {
    console.log(value, "here");
  };
  return (
    <>
      <div>React App</div>
      <RangeSlider
        onChange={handleChange}
        min={20}
        max={150}
        label="range slider"
        value={25}
      />
    </>
  );
};

export default App;
