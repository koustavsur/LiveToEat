import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import NavBarCollapse from "./NavBarCollapse";
import { Link } from "react-router-dom"

const styles = {
    root: {
    flexGrow: 1
    },
    grow: {
    flexGrow: 1
    },
    menuButton: {
    marginLeft: -12,
    marginRight: 20
    },
    navigation: {
        padding: '10px',
        background: '#36454f'
    }
};

function ButtonAppBar(props) {
    const { classes } = props;
    
    return (
    <AppBar position="fixed" className={classes.navigation}>
        <Toolbar>
            <Link className='link' to="/">
                <h1 className="title">LiveToEat</h1>
            </Link>
            <NavBarCollapse />
        </Toolbar>
    </AppBar>
    );
}

ButtonAppBar.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ButtonAppBar);