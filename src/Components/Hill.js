import React from 'react';
import img1 from '../assests/images/photo1414449381078c7.png';
import img2 from '../assests/images/Layer627.png';

const Hill = () => {
    return (
        <div>
            <div className="card lg:card-side mt-10">
                <figure><img src={img1} alt="Album" className='w-full h-96' /></figure>
                <div className="card-body">
                    <img src={img2} alt="Album" className='w-full h-96' />
                </div>
            </div>
        </div>
    );
};

export default Hill;