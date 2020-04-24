import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import img1 from './pic 1.jpg'
import img2 from './pic 2.png'
import img3 from './e-commerce-1606962.png'
import MyNavbar from "./../../Navbars/Navbar/mynavbar";
import Footer from "./../../Navbars/Footer/BottomBar"

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: '0',
        maxWidth: (Window.width),
    },
    image: {
        maxWidth: 300,
        height: 250,
    },
    img: {
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
    },
    headings:{
        color:'rgba(0,11,206,0.49)',
        textAlign:'center',
    },
    expand:{
        width:'100%',
        heigth:'100%',
    },
    aboutHamzar:{
        marginTop:'7%',
        width:'50%',
        border:'0px solid black',
    },
    aboutMission:{
        border:'0px solid black',
        display:'block',
        width:'100%',
        [theme.breakpoints.up('md')]: {
            width:'50%',
            display:'flex',
        },
    },
    aboutImage:{
        border:'0px solid black',
        display:'block',
        width:'100%',
        [theme.breakpoints.up('md')]: {
            width:'50%',
            display:'flex',
        },
    },
    aboutImage2:{
        border:'0px solid black',
        display:'none',
        width:'100%',
        [theme.breakpoints.up('md')]: {
            width:'50%',
            display:'flex',
        },
        [theme.breakpoints.up('sm')]: {
            display:'block',
        },
    },
    aboutInsideImage:{
        width:'100%',
        border:'0px solid pink',
    },
    aboutHamzarMain:{
        marginTop:'0%',
        border:'0px solid black',
    },
    aboutMissionMain:{
        border:'0px solid black',
    },
    detail:{
        color:'rgba(0,0,0,0.37)',
        textIndent:'0px',
        textSpacing:"3px",
        lineHeight:'30px',
        marginLeft:'10%',
        marginRight:'10%',
    },
    mission:{
        alignContent:'center',
        alignItems:'center',
        paddingTop:'20%',
    },
    topHeading:{
        color:'rgba(0,11,206,0.49)',
        textAlign:'center',
        paddingTop:'20%',
    },
}));

export default function Payment() {
    const classes = useStyles();

    return (
        <div>

            <div className={classes.root}>
                <Paper className={classes.paper}>

                    <Grid container spacing={2} className={classes.aboutHamzarMain}>
                        <Grid item xs={12} sm container className={classes.aboutHamzar}>
                            <Grid item xs container direction="column" spacing={2}>
                                <Grid item xs>
                                    <Typography gutterBottom variant="h2" className={classes.topHeading}>
                                        <b>Hamzar offers you cash on delivery payment method.</b>
                                    </Typography>
                                    <Typography variant="h5" gutterBottom className={classes.detail}>
                                        <b>

                                        </b>
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item className={classes.aboutImage}>
                            <ButtonBase className={classes.expand}>
                                <img className={classes.aboutInsideImage} alt="complex" src={img1} />
                            </ButtonBase>
                        </Grid>
                    </Grid>

                    <Grid container spacing={2} className={classes.aboutMissionMain}>
                        <Grid item style={{float: "right", right: 0}} className={classes.aboutImage2}>
                            <ButtonBase className={classes.expand}>
                                <img className={classes.aboutInsideImage} alt="complex" src={img2} />
                            </ButtonBase>
                        </Grid>
                        <Grid style={{float: 'left'}} className={classes.aboutMission}>
                            <Grid item className={classes.mission}>
                                <Typography gutterBottom variant="h2" className={classes.headings}>
                                    Are there any hidden charges (Sales Tax) when I make a purchase on hamzar?
                                </Typography>
                                <Typography variant="h5" gutterBottom className={classes.detail}>
                                    <b>
                                        There are NO hidden charges when you make a purchase on hamzar. The prices listed for all the items are final and all-inclusive. The price you see on the product page is exactly what you have to pay.
                                        Delivery charges may be extra depending on the order from out of city
                                    </b>
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid container spacing={2} className={classes.aboutMissionMain}>
                        <Grid item xs={12} sm container className={classes.abouMission}>
                            <Grid item xs container direction="column" spacing={2} className={classes.mission}>
                                <Grid item xs>
                                    <Typography gutterBottom variant="h2" className={classes.headings}>
                                        What is Cash on Delivery?
                                    </Typography>
                                    <Typography variant="h5" gutterBottom className={classes.detail}>
                                        <b>
                                            If you are not comfortable making an online payment on hamzar.com,
                                            you can opt for the Cash on Delivery (C-o-D) payment method instead.
                                            With C-o-D you can ￼pay in cash at the time of actual delivery of the
                                            product at your doorstep, without requiring you to make any advance payment online.
                                            The maximum order value for Cash on Delivery (C-o-D) payment is 50,000.
                                            It is strictly a cash-only payment method. Gift Cards or store credit cannot
                                            be used for C-o-D orders. Foreign currency cannot be used to make a C-o-D payment.
                                            Only Pakistani Rupees (Rs.) accepted.
                                        </b>
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item className={classes.aboutImage}>
                            <ButtonBase className={classes.expand}>
                                <img className={classes.aboutInsideImage} alt="complex" src={img3} />
                            </ButtonBase>
                        </Grid>
                    </Grid>

                </Paper>
            </div>
        </div>
    );
}
