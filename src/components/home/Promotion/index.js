import React from 'react';
import PromotionAnimation from './Animation';
import Enroll from './Enroll';

const Promotion = () => {
    return (
        <div className="promotion_wrapper" style={{background:'#d4dadb'}}>
            <div className="container">
                <PromotionAnimation/>
                <Enroll/>
            </div>
        </div>
    );
};

export default Promotion;