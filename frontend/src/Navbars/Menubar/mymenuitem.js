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
                <MenuItem onClick={handleClose}>Arts & Photography</MenuItem>
                <MenuItem onClick={handleClose}>Biographies & Memories</MenuItem>
                <MenuItem onClick={handleClose}>Business & Money</MenuItem>
                <MenuItem onClick={handleClose}>Calenders</MenuItem>
                <MenuItem onClick={handleClose}>Children's Books</MenuItem>
                <MenuItem onClick={handleClose}>Christian Books and Bible</MenuItem>
                <MenuItem onClick={handleClose}>Comics & Graphics Novels</MenuItem>
                <MenuItem onClick={handleClose}>Computers & Technology</MenuItem>
                <MenuItem onClick={handleClose}>Cookbooks, Food & Wine</MenuItem>
                <MenuItem onClick={handleClose}>Crafts, Hobbies & Home</MenuItem>
                <MenuItem onClick={handleClose}>Educational & Teaching</MenuItem>
                <MenuItem onClick={handleClose}>Engineering & Transportation</MenuItem>
                <MenuItem onClick={handleClose}>Health, Fitness & Dieting</MenuItem>
                <MenuItem onClick={handleClose}>Magazines</MenuItem>
                <MenuItem onClick={handleClose}>History</MenuItem>
                <MenuItem onClick={handleClose}>Humor & Environment</MenuItem>
                <MenuItem onClick={handleClose}>Law</MenuItem>
                <MenuItem onClick={handleClose}>Newspapers</MenuItem>
                <MenuItem onClick={handleClose}>Literature & Fashion</MenuItem>
                <MenuItem onClick={handleClose}>Medical Books</MenuItem>
                <MenuItem onClick={handleClose}> Mystery, Thriller & Suspense</MenuItem>
                <MenuItem onClick={handleClose}> Parenting & Relationships</MenuItem>
                <MenuItem onClick={handleClose}>Political and Social Science</MenuItem>
                <MenuItem onClick={handleClose}>Religion & Spirituality</MenuItem>
                <MenuItem onClick={handleClose}>Science & math</MenuItem>
                <MenuItem onClick={handleClose}>Teen and Young adult</MenuItem>
                <MenuItem onClick={handleClose}>Travel</MenuItem>

            </Menu>
        </div>


    )
}
