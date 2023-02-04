import React from 'react';
import pic from '../assests/images/SCHEDULE.png';
import pic1 from '../assests/images/25Nov2016Vestibulumv.png';

const Side = () => {
    return (
        <div>
            <div className='card-actions justify-center mt-10'>
                <img src={pic} alt="" />
            </div>
            <div className='card-actions justify-center mt-5'>
                <img src={pic1} alt="" />
            </div>
        </div>
    );
};

export default Side;