// const styles = {
//   Navbar: {
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "flex-start",
//     height: "5vh",
//   },

//   logo: {
//     marginRight: "15px",
//     padding: "0 13px",
//     fontSize: " 22px",
//     backgroundColor: "#eceff1",
//     fontFamily: "Roboto, sans-serif",
//     height: "100%",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//     "& a": {
//       textDecoration: "none",
//       color: "black",
//     },
//   },

//   slider: {
//     width: "340px",
//     margin: " 0 1rem",
//     display: "inline-block",
//     "& .rc-slider-rail": {
//       height: "8px",
//     },
//     "& .rc-slider-track": {
//       backgroundColor: "transparent",
//     },
//     "& .rc-slider-handle, .rc-slider-handle:active, .rc-slider-handle:hover, .rc-slider-handle:focus":
//       {
//         backgroundColor: "green",
//         outline: "none",
//         border: "none",
//         boxShadow: "none",
//         width: "13px",
//         height: "13px",
//         marginLeft: " -7px",
//         marginTop: "-3px",
//       },
//   },

//   selectContainer: {
//     marginLeft: "auto",
//     marginRight: "1rem",
//   },
// };

// export default styles;

import sizes from "./sizes";

const styles = {
  Navbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    height: "6vh",
  },
  logo: {
    marginRight: "15px",
    padding: "0 13px",
    fontSize: "22px",
    backgroundColor: "#eceff1",
    fontFamily: "Roboto",
    height: "100%",
    display: "flex",
    alignItems: "center",
    "& a": {
      textDecoration: "none",
      color: "black",
    },
    [sizes.down("xs")]: {
      display: "none",
    },
  },
  slider: {
    width: "340px",
    margin: "0 1rem",
    display: "inline-block",
    "& .rc-slider-track": {
      backgroundColor: "transparent",
    },
    "& .rc-slider-rail": {
      height: "8px",
    },
    "& .rc-slider-handle, .rc-slider-handle:active, .rc-slider-handle:focus,.rc-slider-handle:hover":
      {
        backgroundColor: "green",
        outline: "none",
        border: "2px solid green",
        boxShadow: "none",
        width: "13px",
        height: "13px",
        marginLeft: "-7px",
        marginTop: "-3px",
      },
    [sizes.down("md")]: {
      width: "150px",
    },
  },
  selectContainer: {
    marginLeft: "auto",
    marginRight: "1rem",
  },
};

export default styles;
