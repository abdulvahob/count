import React from 'react';
import SamePartBolck from './SamePartBolck';
import SamepartSwipper from './SamepartSwipper';
import './SamePart.css'
const SamePart = () => {
    return (
        <div className='SamePart'>
            <SamepartSwipper/>
            <SamePartBolck/>
        </div>
    );
};

export default SamePart;