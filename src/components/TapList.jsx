import React from 'react';
import Tap from './Tap.jsx'
import Keg from '../assets/images/keg.png';
import GoogleFontLoader from 'react-google-font-loader';

function TapList() {

const tapList = [
  {
    number: '1',
    name: 'Amaze and Blaze',
    brand: 'Monkish',
    price: '$6.50',
    alcoholContent: '12%',
    imgLink: Keg,
  },
  {
    number: '2',
    name: 'Amaze and Blaze',
    brand: 'Monkish',
    price: '$6.50',
    alcoholContent: '12%',
    imgLink: Keg,
  },
  {
    number: '3',
    name: 'Amaze and Blaze',
    brand: 'Monkish',
    price: '$6.50',
    alcoholContent: '12%',
    imgLink: Keg,
  },
  {
    number: '4',
    name: 'Amaze and Blaze',
    brand: 'Monkish',
    price: '$6.50',
    alcoholContent: '12%',
    imgLink: Keg,
  },
  {
    number: '5',
    name: 'Amaze and Blaze',
    brand: 'Monkish',
    price: '$6.50',
    alcoholContent: '12%',
    imgLink: Keg,
  },
  {
    number: '6',
    name: 'Amaze and Blaze',
    brand: 'Monkish',
    price: '$6.50',
    alcoholContent: '12%',
    imgLink: Keg,
  },
  {
    number: '7',
    name: 'Amaze and Blaze',
    brand: 'Monkish',
    price: '$6.50',
    alcoholContent: '12%',
    imgLink: Keg,
  },
  {
    number: '8',
    name: 'Amaze and Blaze',
    brand: 'Monkish',
    price: '$6.50',
    alcoholContent: '12%',
    imgLink: Keg,
  },
]

const tapListStyle = {
    width: '80%',
    display: 'inline-block',
}

  return (
    <div style={tapListStyle}>
      <hr />
      {tapList.map((tap, index) =>
        <Tap
        number={tap.number}
        name={tap.name}
        brand={tap.brand}
        price={tap.price} 
        alcoholContent={tap.alcoholContent}
        imgLink={tap.imgLink} />
      )}

    </div>
  )
}
export default TapList;
