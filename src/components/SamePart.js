import React from 'react';
import SamePartBolck from './SamePartBolck';
import SamepartSwipper from './SamepartSwipper';
import './SamePart.css'
const SamePart = (props) => {
    return (
        <div className='SamePart'>
            <SamepartSwipper mall={props.mall} changed={props.options} data={props.data} />
            <SamePartBolck  data={props.data}  />
        </div>
    );
};

export default SamePart;