import React from "react";

import RangeSlider from "./components/RangeSlider";

const App = () => {
  const handleChange = (value) => {
    console.log(value, "here");
  };
  return (
    <>
      <RangeSlider onChange={handleChange} />
    </>
  );
};

export default App;
