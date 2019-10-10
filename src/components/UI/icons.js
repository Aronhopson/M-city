import React from 'react';
import { Link } from 'react-router-dom';

import Barca from '../../Resources/images/logos/barca.png';

export const  BarcaLogo  =(props) =>{

    const template =<div
    className="img_cover"
    style={{
        width:props.width,
        height:props.height,
        background:`url(${Barca}) no-repeat`
    }}
    ></div>

    if(props.link){
        return(
            <Link to={props.linkTo} className="link_logo">
                {template}
            </Link>
        )
    }else {
        return template
    }
}