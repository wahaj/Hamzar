import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MyMenuItem from "./mymenuitem";
import Button from "@material-ui/core/Button";
import {Icon} from "@material-ui/core";
import HomeIcon from '@material-ui/icons/HomeOutlined';

import CustomerSupportIcon from '@material-ui/icons/Group';
import TrackOderIcon from '@material-ui/icons/Search';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import del from "./deliveryIcon.png"
import Container from '@material-ui/core/Container'
import SvgIcon from '@material-ui/core/SvgIcon';
import { blue, red } from '@material-ui/core/colors';
const useStyles = makeStyles((theme)  => ({
    grow: {
        flexGrow: 1,
    },
    myIcon: {
        width: 80,
    },
    desktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
    },
    mobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
    wrapper: {
        margin: 0,
        padding: 0,
        border: 0,
    },
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-end',
    },
    icon: {
        margin: theme.spacing(2),
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

export default function PrimarySearchAppBar() {
    const classes = useStyles();
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('md'));



    return (
        <div className={classes.grow} >
            <AppBar  position="static" style={{boxShadow: " 0 5px 5px 2px rgba(128,128,128, 0.4)"}} >
                <Toolbar>
                    {/*Delivery Icon*/}

                    <img className={classes.myIcon} src={del}></img>

                    <div className={classes.grow} />
                    {/*Home Button*/}
                    <HomeIcon className={classes.iconHover}/>
                    <Button  className={classes.desktop} aria-controls="fade-menu" aria-haspopup="true" onClick={null}>
                        <p style={{color:"white"}}>Home</p>
                    </Button>
                    <div className={classes.grow} />
                    {/*Department Menu*/}
                    <MyMenuItem show={matches}/>
                    <div className={classes.grow} />
                    {/*CustomerCare Button*/}
                    <CustomerSupportIcon className={classes.iconHover}/>
                    <Button className={classes.desktop} aria-controls="fade-menu" aria-haspopup="true" onClick={null}>
                        <p style={{color:"white"}}>Customer Care</p>
                    </Button>
                    <div className={classes.grow} />
                    {/*Track Order button*/}
                    <TrackOderIcon className={classes.iconHover}/>
                    <Button  className={classes.desktop} aria-controls="fade-menu" aria-haspopup="true" onClick={null}>
                        <p style={{color:"white"}}>Track Order</p>
                    </Button>
                    <div className={classes.grow} />


                </Toolbar>
            </AppBar>
        </div>
    );
}
