import React from 'react';
import Tap from './Tap.jsx'
import Keg from '../assets/images/keg.png';
import GoogleFontLoader from 'react-google-font-loader';

function TapList() {

const tapList = [
  {
    name: 'Amaze and Blaze',
    brand: 'Monkish',
    price: '$6.50',
    alcoholContent: '12%',
    imgLink: Keg,
  },
  {
    name: 'Amaze and Blaze',
    brand: 'Monkish',
    price: '$6.50',
    alcoholContent: '12%',
    imgLink: Keg,
  },
  {
    name: 'Amaze and Blaze',
    brand: 'Monkish',
    price: '$6.50',
    alcoholContent: '12%',
    imgLink: Keg,
  },
  {
    name: 'Amaze and Blaze',
    brand: 'Monkish',
    price: '$6.50',
    alcoholContent: '12%',
    imgLink: Keg,
  },
  {
    name: 'Amaze and Blaze',
    brand: 'Monkish',
    price: '$6.50',
    alcoholContent: '12%',
    imgLink: Keg,
  },
  {
    name: 'Amaze and Blaze',
    brand: 'Monkish',
    price: '$6.50',
    alcoholContent: '12%',
    imgLink: Keg,
  },
  {
    name: 'Amaze and Blaze',
    brand: 'Monkish',
    price: '$6.50',
    alcoholContent: '12%',
    imgLink: Keg,
  },
  {
    name: 'Amaze and Blaze',
    brand: 'Monkish',
    price: '$6.50',
    alcoholContent: '12%',
    imgLink: Keg,
  },
]

// const tapListStyle = {
//   fontFamily: 'BowlbyOneSC',
//   backgroundColor: 'black',
//   color: 'white',
//   alignItems:'center',
//   maxWidth: '97%'
// }

  return (
    <div>
      <hr />
      {tapList.map((tap, index) =>
        <Tap
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
