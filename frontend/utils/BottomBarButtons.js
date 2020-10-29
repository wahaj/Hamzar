import React from 'react'
import Button from '@material-ui/core/Button';
import { createMuiTheme, withStyles, makeStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';

const useStyles = makeStyles(theme => ({
    margin: {
        backgroundColor:'rgba(20,34,198,0.2)',
        borderRadius: 300,
        width:'0px'
    },
    buttonSide:{
        backgroundColor:'rgba(20,34,198,0.2)',
    }
}));


function BottomBarButtons(props){
    const classes = useStyles();
    return (
        <div className={classes.margin}>
            <Button
                variant="contained"
                className={classes.margin}
            >
                <img  src={props.object.src}/>
            </Button>
        </div>
    )
}


export default BottomBarButtons