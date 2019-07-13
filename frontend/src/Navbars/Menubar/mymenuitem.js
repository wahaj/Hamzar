import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import Fade from "@material-ui/core/Fade";
import MenuItem from "@material-ui/core/MenuItem";
import Category from '@material-ui/icons/Category';


import React from "react";
import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles((theme)  => ({
    square: {
        border: "10px",
    },
    iconHover: {
        margin: theme.spacing(2),
        '&:hover': {
            color: "#fbc02d",
        },
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
}));

export default function MyMenuItem(props){

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    function handleClick(event) {
        setAnchorEl(event.currentTarget);
    }

    function handleClose() {
        setAnchorEl(null);
    }
    const classes = useStyles();
    return (
        <div >
            <Category className={classes.iconHover} style={(props.show === false)? {display:"flex"}:{display:"none"}} aria-controls="fade-menu" aria-haspopup="true" onClick={handleClick} />
            <Button style={{color:"white"}} aria-controls="fade-menu" aria-haspopup="true" onClick={handleClick} style={(props.show === false)? {display:"none"}:{display:"flex"}}>
                <p style={{color:"white"}}>Category</p>
            </Button>
            <Menu
                className={classes.expanded}

                id="fade-menu"
                anchorEl={anchorEl}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}

                getContentAnchorEl={null}
                keepMounted
                open={open}
                onClose={handleClose}
                TransitionComponent={Fade}
            >
                <MenuItem onClick={handleClose}>Electronic Accessories</MenuItem>
                <MenuItem onClick={handleClose}>Men's Fashion</MenuItem>
                <MenuItem onClick={handleClose}>Women's Fashion</MenuItem>
                <MenuItem onClick={handleClose}>Books</MenuItem>
            </Menu>
        </div>


    )
}
