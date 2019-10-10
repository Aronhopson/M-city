import React from 'react';
import { BarcaLogo } from '../UI/icons'

const Footer = (props) => {
    return (

        <footer className="bck_blue">
            <div className="footer_logo">
                <BarcaLogo
                    link={true}
                    linkTo="/"
                    width="70px"
                    height="70px"
                >
                </BarcaLogo>
            </div>
            <div className="footer_discl">
                Barcelona 2019
            </div>

        </footer>
    );
};

export default Footer;