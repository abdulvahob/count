import React from 'react';
import './SamepartSwipper.css'
import img1 from '../img/kutubhona/1.jpg'
import img2 from '../img/kutubhona/2.jpg'
import img3 from '../img/kutubhona/3.jpg'
const SamepartSwipper = (props) => {
  return (
    <ul className='SamepartSwipper'>
      {props.data.options.map((el)=>(
        <li><img src={el.src} alt="salom" /></li>  
      ))}
    </ul>
  );
};

export default SamepartSwipper;