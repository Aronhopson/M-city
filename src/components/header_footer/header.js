import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";

import { Link } from "react-router-dom"
import {BarcaLogo} from '../UI/icons'

class Header extends Component {

    render() {
        return (
            <AppBar position="fixed"
                style={{
                    backgroundColor: "#004C99",
                    boxShadow: "none",
                    padding: "10px 0",
                    borderBottom: "2px solid #A70042"
                }}
            >
                <Toolbar style={{ display: "flex" }}>
                    <div style={{ flexGrow: 1 }}>
                        <div className="header_logo">
                            <BarcaLogo 
                            link={true}
                            linkTo="/"
                            width="70px"
                            height="70px"
                            >

                            </BarcaLogo>
                         </div>
                    </div>

                    <Link to="/the_team">
                        <Button color="inherit"> The Team</Button>
                    </Link>
                    <Link to="/the_matches">
                        <Button color="inherit"> The Matches</Button>
                    </Link>

                </Toolbar>

            </AppBar>
        );
    }
}

export default Header;