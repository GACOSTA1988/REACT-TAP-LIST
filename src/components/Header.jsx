import React from 'react';
import GoogleFontLoader from 'react-google-font-loader';

function Header() {
  var headerStyle = {
    backgroundColor: 'white',
    marginTop: '15px',
    border:'15px solid black',
    width: '80%',
    color:'black',
    display: 'inline-block',
    fontWeight: 'bold',
    fontFamily: 'BowlbyOneSC',
   };
  return (
    <div style={headerStyle} >
    <header>
        <h1>🍻TAP DADDY🍻</h1>
      </header>
    </div>
  );
}




export default Header;