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

  const buttonStyle = {
    marginBottom: "10px"
  };

  return (
    <div style={tapStyle}>
      <h5 style={{ color: "red", fontWeight: "bold" }}>{props.sortid}</h5>
      <h5>Tap: {props.name}</h5>
      <p>Brewery: {props.brand}</p>
      <p>Price: ${props.price}</p>
      <p>ABV: {props.alcoholContent}%</p>
      <p>Available Pints: {props.numberOfPints}</p>
      <img style={kegIconStyle} src={keg} alt="Keg" />
      <br />
      <button
        style={buttonStyle}
        onClick={() => props.handleBeerSale(props.id)}
      >
        SALE!
      </button>
    </div>
  );
}

Tap.propTypes = {
  sortid: PropTypes.number,
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
