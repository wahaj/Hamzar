import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import NavigationIcon from '@material-ui/icons/Navigation';
import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';
import {Collapse} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(theme => ({
    fab: {
        alignItems: 'flex-start',
        border:'0px solid Gray',
    },
    extendedIcon: {
        marginRight: theme.spacing(1),
    },
    new:{
        display:'flex',
        border:'0px solid Gray',
        maxHeight: 500,
    },
    used:{
        display:'flex',
        paddingTop:'1%',
        border:'0px solid pink',
    },
    divider:{
        height:'3px',
        overflow:'auto',
        border:'0px solid violet',
    },
    objectPrice:{
        display:'inline',
        float:'right',
        border:'0px solid blue',
    },
    info:{
        display:'block',
        width: '100%',
        border:'0px solid purple',
    },
    listPrice:{
        display:'block',
        border:'0px solid red',
        width:'100%',
        overflow:'auto',
    },
    save :{
        display:'block',
        border:'0px solid Green',
        width:'100%',
        overflow:'auto',
    },
    innerInformation:{
        display:'block',
        border:'0px solid black',
        overflow:'hidden',
        height:'100%',
        width:'100%',
    },
    toRight:{
        float:'right',
    }
}));

export default function ProductAssistence(props) {
    const classes = useStyles();
    const styles={visibility: 'collapse'}

    return (
        <div>
            <Grid container className={classes.new} direction='column' justify='center' alignItems='stretch'>
                <Grid item className={classes.info} >
                    <Fab variant="extended" aria-label="Delete" onClick={props.handleChange} className={classes.fab}>
                    <NavigationIcon className={classes.extendedIcon} />
                      New
                    </Fab>
                    <h2 className={classes.objectPrice}>2970 pkr</h2>
                </Grid>
                <Grid item className={classes.info}>
                    <Collapse in={props.object} className={classes.info}>
                        <div className={classes.innerInformation} >
                            <div className={classes.listPrice}><p className={classes.toRight}>List Price : <b>1234</b></p></div>
                            <div className={classes.save}><p className={classes.toRight}>Save : <b>1234</b> (30%)</p> </div>
                            <div></div>
                            <div></div>
                        </div>
                    </Collapse>
                </Grid>
            </Grid>
            <Divider className={classes.divider}/>
            <Grid container className={classes.new} direction='column' justify='center' alignItems='stretch'>
                <Grid item className={classes.info} >
                    <Fab variant="extended" aria-label="Delete" onClick={props.handleChange} className={classes.fab}>
                        <NavigationIcon className={classes.extendedIcon} />
                        Used
                    </Fab>
                    <h2 className={classes.objectPrice}>2970 pkr</h2>
                </Grid>
                <Grid item className={classes.info}>
                    <Collapse in={!props.object} className={classes.info}>
                        <div className={classes.innerInformation} >
                            <div className={classes.listPrice}><p className={classes.toRight}>List Price : <b>1234</b></p></div>
                            <div className={classes.save}><p className={classes.toRight}>Save : <b>1234</b> (30%)</p> </div>
                            <div></div>
                            <div></div>
                        </div>
                    </Collapse>
                </Grid>
            </Grid>
        </div>
    );
}