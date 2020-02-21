import React from "react";
import Tap from "./Tap.jsx";
import Keg from "../assets/images/keg.png";
import GoogleFontLoader from "react-google-font-loader";
import PropTypes from "prop-types";

function TapList(props) {
  const tapListStyle = {
    width: "80%",
    display: "inline-block"
  };

  return (
    <div style={tapListStyle}>
      <hr />
      {props.tapList.map((tap, index) => {
        return <Tap {...tap} key={index} />;
      })}
    </div>
  );
}

TapList.propTypes = {
  tapList: PropTypes.array
};

export default TapList;
