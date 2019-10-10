import React from 'react';
import Featured from './featured'
import Matches from './Matches'
import MeetPlayer from './meetPlayer'
import Promtion from './Promotion'

const Home = (props) => {
    return (

        <div className="bck_blue">
            <Featured />
            <Matches />
            <MeetPlayer />
            <Promtion />
        </div>
    );
};

export default Home;