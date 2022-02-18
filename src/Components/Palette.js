import React, { Component } from "react";
import Navbar from "./Navbar";
import ColorBox from "./ColorBox";
import "../Styles/Palette.css";
import PaletteFooter from "./PaletteFooter";
import { withStyles } from "@material-ui/styles";

const styles = {
  Palette: {
    height: "100vh",
    width: "100%",
    overflow: "hidden",
  },

  colors: {
    height: "90%;",
    width: "100%;",
  },
};

class Palette extends Component {
  constructor(props) {
    super(props);
    this.state = { level: 500, format: "hex" };
    this.changeLevel = this.changeLevel.bind(this);
    this.changeFormat = this.changeFormat.bind(this);
  }
  changeLevel(level) {
    this.setState({ level });
  }
  changeFormat(val) {
    this.setState({ format: val });
  }

  render() {
    const { colors, id, paletteName, emoji } = this.props.palette;
    const { classes } = this.props;
    const { level, format } = this.state;

    const colorBoxes = colors[level].map(color => (
      <ColorBox
        background={color[format]}
        name={color.name}
        key={color.id}
        moreUrl={`/palette/${id}/${color.id}`}
        showingFullPalette={true}
      />
    ));

    return (
      <div className={classes.Palette}>
        <Navbar
          level={level}
          changeLevel={this.changeLevel}
          handleChange={this.changeFormat}
          showingAllColors={true}
        />
        <div className={classes.colors}>{colorBoxes}</div>
        <PaletteFooter paletteName={paletteName} emoji={emoji} />
      </div>
    );
  }
}

export default withStyles(styles)(Palette);
