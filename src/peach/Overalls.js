import React from 'react';
import InfoBlock from '../components/InfoBlock';
import SamePart from '../components/SamePart';
import SamepartSwipper from '../components/SamepartSwipper';
import './Overalls.css';
const Overalls = () => {
    return (
        <div className='overalls'>
            <div className="container">
                    <SamePart/>
                    <InfoBlock/>
            </div>
        </div>
    );
};

export default Overalls;