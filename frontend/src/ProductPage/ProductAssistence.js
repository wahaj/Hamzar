import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import NavigationIcon from '@material-ui/icons/Navigation';
import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';
import {Collapse} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

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
        paddingBottom: '3%',
    },
    used:{
        display:'flex',
        paddingTop:'3%',
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
        alignContent:'center',
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
        border:'0px solid blue',
    },
    cartButton:{
        float:'right',
    },
    cartOption:{
        paddingTop:'2%',
        display:'block',
        width:'100%',
        overflow:'auto',
    },
    buyNow:{
        paddingTop:'1%',
        display:'block',
        width:'100%',
        overflow:'auto',
        paddingBottom:'1%',
    },
    buyButton:{
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
                    <Typography variant='h5' className={classes.objectPrice}><b>2970 pkr</b></Typography>
                </Grid>
                <Grid item className={classes.info}>
                    <Collapse in={props.object} className={classes.info}>
                        <div className={classes.innerInformation} >
                            <div className={classes.listPrice}><Typography className={classes.toRight}>List Price : <b>1234</b></Typography></div>
                            <div className={classes.save}><Typography className={classes.toRight}>Save : <b>1234</b> (30%)</Typography> </div>
                            <div className={classes.cartOption}>
                                <Button variant='contained' color='primary' className={classes.cartButton}>
                                    Add to Cart
                                </Button>
                            </div>
                            <div className={classes.buyNow}>
                                <Button variant='contained' color='secondary' className={classes.buyButton}>
                                    Buy Now
                                </Button>
                            </div>
                        </div>
                    </Collapse>
                </Grid>
            </Grid>
            <Divider className={classes.divider}/>
            <Grid container className={classes.used} direction='column' justify='center' alignItems='stretch'>
                <Grid item className={classes.info} >
                    <Fab variant="extended" aria-label="Delete" onClick={props.handleChange} className={classes.fab}>
                        <NavigationIcon className={classes.extendedIcon} />
                        Used
                    </Fab>
                    <Typography variant='h5' className={classes.objectPrice}><b>2970 pkr</b></Typography>
                </Grid>
                <Grid item className={classes.info}>
                    <Collapse in={!props.object} className={classes.info}>
                        <div className={classes.innerInformation} >
                            <div className={classes.listPrice}><Typography className={classes.toRight}>List Price : <b>1234</b></Typography></div>
                            <div className={classes.save}><Typography className={classes.toRight}>Save : <b>1234</b> (30%)</Typography> </div>
                            <div className={classes.cartOption}>
                                <Button variant='contained' color='primary' className={classes.cartButton}>
                                    Add to Cart
                                </Button>
                            </div>
                            <div className={classes.buyNow}>
                                <Button variant='contained' color='secondary' className={classes.buyButton}>
                                    Buy Now
                                </Button>
                            </div>
                        </div>
                    </Collapse>
                </Grid>
            </Grid>
        </div>
    );
}