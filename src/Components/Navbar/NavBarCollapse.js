import React from "react";
import { MenuItem } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import ButtonNavBarCollapse from "./ButtonNavBarCollapse";
import { Link } from "react-router-dom"
import '../Styles/gStyle.css'
const styles = theme => ({
    root: {
    position: "absolute",
    right: 0
    },
    buttonBar: {
    [theme.breakpoints.down("sm")]: {
        display: "none"
    },
    margin: "20px",
    paddingLeft: "16px",
    paddingRight: "10px",
    right: 0,
    position: "relative",
    width: "100%",
    background: "transparent"
    }
});

const AppBarCollapse = props => (
    <div className={props.classes.root}>
        <ButtonNavBarCollapse>
            <Link className='link-dropdown' to="/">
                <MenuItem>Home</MenuItem>
            </Link>
            <Link className='link-dropdown' to="/appetizers">
                <MenuItem>Appetizers</MenuItem>
            </Link>
            <Link className='link-dropdown' to="/breakfast">
                <MenuItem>Breakfast</MenuItem>
            </Link>
            <Link className='link-dropdown' to="/lunch">
                <MenuItem>Lunch</MenuItem>
            </Link>
            <Link className='link-dropdown' to="/dinner">
                <MenuItem>Dinner</MenuItem>
            </Link>
            <Link className='link-dropdown' to="/desserts">
                <MenuItem>Desserts</MenuItem>
            </Link>
        </ButtonNavBarCollapse>
        <div className={props.classes.buttonBar} id="appbar-collapse">
            <ul className='UnOrderedList'>
                <li>
                    <Link className='link' to="/">Home</Link>
                </li>
                <li>
                    <Link className='link' to="/appetizers">Appetizers</Link>
                </li>
                <li>
                    <Link className='link' to="/breakfast">Breakfast</Link>
                </li>
                <li>
                    <Link className='link' to="/lunch">Lunch</Link>
                </li>
                <li>
                    <Link className='link' to="/dinner">Dinner</Link>
                </li>
                <li>
                    <Link className='link' to="/desserts">Desserts</Link>
                </li>
            </ul>
            
        </div>
    </div>
);

export default withStyles(styles)(AppBarCollapse);