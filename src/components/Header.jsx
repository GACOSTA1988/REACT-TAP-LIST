import React from 'react';

function Header() {
  var headerStyle = {
    backgroundColor: 'black',
    margin: '5px',
    border:'15px solid black',
    width: '80%',
    color:'white'
   };
  return (
    <div style={headerStyle} >
    <header>
        <h1>TAP DADDY</h1>
      </header>
    </div>
  );
}




export default Header;