import React from 'react';
import image24 from '../assets/images/n1.png';
import image1 from '../assets/images/n6.png';
import image2 from '../assets/images/n7.png'; 
import image3 from '../assets/images/n4.png'; 
import image4 from '../assets/images/n5.png'; 
import image5 from '../assets/images/n8.png'; 
import image6 from '../assets/images/n11.png'; 
import image7 from '../assets/images/n12.png'; 
import image8 from '../assets/images/n13.png'; 
import image9 from '../assets/images/n16.png';
import image10 from '../assets/images/n17.png';
import image11 from '../assets/images/n18.png';
import image12 from '../assets/images/n19.png';
import image13 from '../assets/images/n22.png';
import image14 from '../assets/images/n23.png';
import image15 from '../assets/images/n28.png';
import image16 from '../assets/images/n15.png';
import image17 from '../assets/images/n27.png';
import image18 from '../assets/images/n25.png';
import image19 from '../assets/images/n26.png';
import image20 from '../assets/images/n19.png';
import image21 from '../assets/images/n2.png';
import image22 from '../assets/images/n9.png';
import image23 from '../assets/images/n21.png';



const allProducts = [
  {
    id: 0,
    img: image24,
    name: 'Tamimi',
    desc: 'Top pick shoe for men',
    price: 80000,
    oldPrice: '#90000',
    quantity: 1,
  },
  {
    id: 1,
    img: image1,
    name: 'Loafers',
    desc: 'Topnotch Loafers shoe for men',
    price: 70000,
    oldPrice: '#90000',
    quantity: 1,
  },
  {
    id: 2,
    img: image2,
    name: 'Shikini',
    desc: 'Life of the Party',
    price: 85000,
    oldPrice: '#95000',
    quantity: 1,
  },
  {
    id: 3,
    img: image3,
    name: 'Biggie',
    desc: 'Simple in Style',
    price: 75000,
    oldPrice: '#80000',
    quantity: 1,
  },
  {
    id: 4,
    img: image4,
    name: "Mamason",
    desc: 'Show Rockers ',
    price: 67000,
    oldPrice: '#78000',
    quantity: 1,
  },
  {
    id: 5,
    img: image5,
    name: 'Shentel',
    desc: 'Feel the Step',
    price: 80000,
    oldPrice: '#95000',
    quantity: 1,
  },
  {
    id: 6,
    img: image6,
    name: 'Ballo',
    desc: 'Casual Men Design',
    price: 69000,
    oldPrice: '#80,000',
    quantity: 1,
  },
  {
    id: 7,
    img: image7,
    name: 'YNWL',
    desc: 'You Never walk Alone',
    price: 50000,
    oldPrice: '#70,000',
    quantity: 1,
  },
  {
    id: 8,
    img: image8,
    name: 'Akpola',
    desc: 'Step out in style',
    price: 77000,
    oldPrice: '#90,000',
    quantity: 1,
  },
  {
    id: 9,
    img: image9,
    name: 'Pinkili',
    desc: 'This means More',
    price: 60000,
    oldPrice: '#80,000',
    quantity: 1,
  },
  {
    id: 10,
    img: image10,
    name: 'Pendel',
    desc: 'Dinner made easy',
    price: 55000,
    oldPrice: '#75,000',
    quantity: 1,
  },
  {
    id: 11,
    img: image11,
    name: 'Bogani',
    desc: 'Taking you far',
    price: 110000,
    oldPrice: '#130,000',
    quantity: 1,
  },
  {
    id: 12,
    img: image12,
    name: 'Brownies',
    desc: 'Cooperate Men Choice',
    price: 100000,
    oldPrice: '#130,000',
    quantity: 1,
  },
  {
    id: 13,
    img: image13,
    name: 'Smoothy',
    desc: 'Men with Value',
    price: 90000,
    oldPrice: '#130,000',
    quantity: 1,
  },
  {
    id: 14,
    img: image14,
    name: 'Shakor',
    desc: 'Elegant Steps',
    price:  80000,
    oldPrice: '#90,000',
    quantity: 1,
  },
  {
    id: 15,
    img: image15,
    name: 'Avana',
    desc: 'Step Light',
    price: 60000,
    oldPrice: '#80,000',
    quantity: 1,
  },
  {
    id: 16,
    img: image16,
    name: 'Quotini',
    desc: 'Men with style',
    price: 80000,
    oldPrice: '#90,000',
    quantity: 1,
  },
  {
    id: 17,
    img: image17,
    name: 'Kindel',
    desc: 'Step outta Space',
    price: 100000,
    oldPrice: '#130,000',
    quantity: 1,
  },
  {
    id: 18,
    img: image18,
    name: 'Palamani',
    desc: 'In Style',
    price: 80000,
    oldPrice: '#90,000',
    quantity: 1,
  },
  {
    id: 19,
    img: image12,
    name: 'Bandanimi',
    desc: 'Amiable Men Choice',
    price: 90000,
    oldPrice: '#130,000',
    quantity: 1,
  },
  {
    id: 20,
    img: image19,
    name: "Pluto",
    desc: 'For Plutomanias',
    price: 90000,
    oldPrice: '#110,000',
    quantity: 1,
  },
  {
    id: 21,
    img: image20,
    name: 'Wizkid',
    desc: 'Big Birds',
    price: 70000,
    oldPrice: '#90,000',
    quantity: 1,
  },
  {
    id: 22,
    img: image21,
    name: 'BoyHood',
    desc: 'For the Boys',
    price: 50000,
    oldPrice: '#70,000',
    quantity: 1,
  },
  {
    id: 23,
    img: image22,
    name: 'Maninus',
    desc: 'Men In Black',
    price: 100000,
    oldPrice: '#130,000',
    quantity: 1,
  },
  {
    id: 24,
    img: image23,
    name: '30BG',
    desc: 'Geng with the sauce',
    price: 70000,
    oldPrice: '#90,000',
    quantity: 1,
  },
  {
    id: 25,
    img: image5,
    name: 'Jetevo',
    desc: 'Keep on Walking',
    price: 90000,
    oldPrice: '#95000',
    quantity: 1,
  },
  {
    id: 26,
    img: image18,
    name: 'Pamelani',
    desc: 'Footie with Style',
    price: 80000,
    oldPrice: '#90,000',
    quantity: 1,
  },
  {
    id: 27,
    img: image13,
    name: 'Fabiano',
    desc: 'Smooth Walker',
    price: 90000,
    oldPrice: '#130,000',
    quantity: 1,
  },
];


export default allProducts;