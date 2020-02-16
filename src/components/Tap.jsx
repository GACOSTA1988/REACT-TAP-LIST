import React from 'react';
import GoogleFontLoader from 'react-google-font-loader';
import PropTypes from "prop-types";


function Tap(props) {

const tapStyle = {
  backgroundColor: 'white',
  color: 'black',
  marginTop: '15px',
  marginBottom: '15px',
  width: '20%',
  fontWeight: 'bold',
  fontFamily: 'BowlbyOneSC',
  fontSize: '10px',
  display: 'inline-block',
  border:'15px solid black',
}
const kegIconStyle = {
  width: '35%',
  height: '35%',
  padding: '2.5px',
  alignItems: 'right',
}

  return (
    <div style={tapStyle}>
      <h5>{props.name}</h5>
      <p>{props.brand}</p>
      <p>{props.price}</p>
      <p>{props.alcoholContent}</p>
      <img style={kegIconStyle} src={props.imgLink} alt="Keg" />
      {/* <hr style={{backgroundColor: 'white'}}/> */}
    </div>
  )
}

Tap.propTypes = {
  name: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  alcoholContent: PropTypes.string.isRequired,
  imgLink: PropTypes.object.isRequired,
};

export default Tap;
