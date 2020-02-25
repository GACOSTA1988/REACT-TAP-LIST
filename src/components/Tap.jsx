import React from "react";
import GoogleFontLoader from "react-google-font-loader";
import PropTypes from "prop-types";
import * as keg from "../assets/images/keg.png";

function Tap(props) {
  const tapStyle = {
    backgroundColor: "white",
    color: "black",
    marginTop: "15px",
    marginBottom: "15px",
    marginRight: "15px",
    marginLeft: "15px",
    width: "20%",
    fontWeight: "bold",
    fontFamily: "BowlbyOneSC",
    fontSize: "10px",
    display: "inline-block",
    border: "15px solid black"
  };
  const kegIconStyle = {
    width: "45%",
    height: "45%",
    padding: "2.5px",
    alignItems: "right"
  };

  return (
    <div style={tapStyle}>
      <h5 style={{ color: "red", fontWeight: "bold" }}>{props.number}</h5>
      <h5>{props.name}</h5>
      <p>{props.brand}</p>
      <p>{props.price}</p>
      <p>{props.alcoholContent}</p>
      <p>{props.numberOfPints}</p>
      <button onClick={() => props.handleBeerSale(props.id)}>SALE!</button>
      <img style={kegIconStyle} src={keg} alt="Keg" />
    </div>
  );
}

Tap.propTypes = {
  number: PropTypes.string,
  name: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  alcoholContent: PropTypes.string.isRequired,
  numberOfPints: PropTypes.number.isRequired,
  handleBeerSale: PropTypes.func.isRequired,
  imgLink: PropTypes.string
};

export default Tap;
