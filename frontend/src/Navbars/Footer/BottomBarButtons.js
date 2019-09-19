import React from 'react'
import Button from '@material-ui/core/Button';
import { createMuiTheme, withStyles, makeStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';
import Link from "@material-ui/core/Link";
import History from "../../History/history";
import {Typography} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    button: {
        color:'white',
        height:'1px',
        textDecorationStyle:'none',
    },
    text:{
        textDecoration:'none',
        fontVariant:'small-caps',
    }
}));


function BottomBarButtons(props){
    const classes = useStyles();
    return (
        <div>
            <a
                className={classes.button}
                href={props.object.src}
                variant='text'
            >
                    {props.object.text}
            </a>
        </div>
    )
}


export default BottomBarButtons