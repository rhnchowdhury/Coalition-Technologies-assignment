import React from 'react';
import img from '../assests/images/CLIMB.png';
import img1 from '../assests/images/photo1458442310124dd_0.png';
import img2 from '../assests/images/photo14439809957068d.png';
import img3 from '../assests/images/COPYRIGHT2016ALLRIGH.png';
import img4 from '../assests/images/Rectangle24.png';

const Others = () => {
    return (
        <div>
            <div className='card-actions justify-center mt-10'>
                <img src={img} alt="" />
            </div>
            <div className='lg:flex justify-center mt-10'>
                <div> <img className="mask mask-square" src={img1} alt='' /></div>
                <div>  <img className="mask mask-square" src={img2} alt='' /></div>
            </div>
            <div className='card-actions justify-center mt-16'>
                <img src={img3} alt="" />
            </div>
            <div className=' mt-6'>
                <img src={img4} alt="" />
            </div>
        </div>
    );
};

export default Others;