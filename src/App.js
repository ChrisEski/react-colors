import React, { Component } from "react";
import { generatePalette } from "./colorHelpers";
import Palette from "./Components/Palette";
import seedColors from "./seedColors";

class App extends Component {
  state = {};
  render() {
    console.log(generatePalette(seedColors[4]));
    return (
      <div>
        {/* <Palette palette={seedColors[4]} /> */}
        <Palette {...seedColors[4]} />
      </div>
    );
  }
}

export default App;
