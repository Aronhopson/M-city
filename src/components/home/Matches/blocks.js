import React, { Component } from 'react';
import { Matchesdata } from '../../../firebase'
import { firebaseLooper } from '../../UI/misc'
import { reverseArray } from "../../UI/misc"
import MatchesBlock from '../../UI/matcheBlock'

import Slide from 'react-reveal/Slide'

class Blocks extends Component {

    state = {
        matches: []
    }

    componentDidMount() {
        Matchesdata.limitToLast(6).once("value").then((snapshot) => {
            const matches = firebaseLooper(snapshot)

            this.setState({
                matches: reverseArray(matches)
            })
        })
    }

    showMatches = (matches) => (
        matches ?
            matches.map((match) => (
                <Slide bottom key={match.id}>
                    <div className="item">
                        <div className="wrapper">
                            <MatchesBlock match={match} />

                        </div>

                    </div>
                </Slide>

            ))
            : null
    )

    render() {
        return (
            <div className="home_matches">
                {this.showMatches(this.state.matches)}

            </div>
        );
    }
}

export default Blocks;