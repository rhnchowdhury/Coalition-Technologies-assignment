import React from 'react';
import Pages from '../Components/Pages';
import img from '../assests/images/Rectangle19.png';
import img1 from '../assests/images/LOSANGELESMOUNTAINSc.png';
import Hill from '../Components/Hill';
import Side from '../Components/Side';
import Others from '../Components/Others';

const Main = () => {
    return (
        <div>
            <img src={img} alt="" className='mb-10' />
            <Pages></Pages>
            <img src={img1} alt="" className='mt-16 lg:ml-80' />
            <Hill></Hill>
            <Side></Side>
            <Others></Others>
        </div>
    );
};

export default Main;