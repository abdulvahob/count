import React from 'react';
import './SamepartSwipper.css'
import img1 from '../img/kutubhona/1.jpg'
import img2 from '../img/kutubhona/2.jpg'
import img3 from '../img/kutubhona/3.jpg'
const SamepartSwipper = () => {
  return (
    <ul className='SamepartSwipper'>
        <li><img src={img1} alt="salom" /></li>  
        <li><img src={img2} alt="salom" /></li>  
        <li><img src={img3} alt="salom" /></li>  
    </ul>
  );
};

export default SamepartSwipper;