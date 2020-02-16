import React from 'react';
import GoogleFontLoader from 'react-google-font-loader';
import PropTypes from "prop-types";


function Tap(props) {

const tapStyle = {
  backgroundColor: 'white',
  color: 'black',
  marginTop: '15px',
  marginBottom: '15px',
  marginRight: '15px',
  marginLeft: '15px',
  width: '20%',
  fontWeight: 'bold',
  fontFamily: 'BowlbyOneSC',
  fontSize: '10px',
  display: 'inline-block',
  border:'15px solid black',
}
const kegIconStyle = {
  width: '45%',
  height: '45%',
  padding: '2.5px',
  alignItems: 'right',
}

  return (
    <div style={tapStyle}>
        <h5 style={{color: 'red', fontWeight: 'bold'}}>{props.number}</h5>
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
    number: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  alcoholContent: PropTypes.string.isRequired,
  imgLink: PropTypes.object.isRequired,
};

export default Tap;
