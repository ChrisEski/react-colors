import React, { Component } from "react";
import { generatePalette } from "./colorHelpers";
import Palette from "./Components/Palette";
import seedColors from "./seedColors";

class App extends Component {
  state = {};
  render() {
    return (
      <div>
        {/* <Palette palette={seedColors[4]} /> */}
        <Palette palette={generatePalette(seedColors[4])} />
      </div>
    );
  }
}

export default App;
