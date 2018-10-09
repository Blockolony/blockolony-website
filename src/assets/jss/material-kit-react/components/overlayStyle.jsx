import { container } from "assets/jss/material-kit-react.jsx";

const overlayStyle = {
  container: {
    ...container
  },
  overlay: {
    display: "block",
    width: "100vw",
    height: "100vh",
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    position: "fixed",
    top: "0",
    zIndex: "2000",
    overflow: "hidden",
    textAlign: "center"
  },
  hidden: {
    display: "none"
  },
  youtube: {
    maxWidth: "100%",
    marginTop: "calc(50vh - 160px)"
  }
};

export default overlayStyle;
