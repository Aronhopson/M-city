import React from 'react';
import { Tag } from '../../UI/misc'
import Blocks from './blocks'


const Matches = () => {
    return (

        <div className="home_matches_wrapper">
            <div className="container">
                <Tag
                    bck="#004C99"
                    size="50px"
                    color="white"
                >
                    Matches
                </Tag>

                <Blocks/> 

                <Tag 
                 bck="#ffffff"
                 size="25px"
                 color="#0e1731"
                 link={true}
                 linkto="/the_match"
                >
                    See More Matches

                </Tag>
            </div>
        </div>
    );
};

export default Matches;