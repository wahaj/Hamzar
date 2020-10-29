import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import img1 from './aboutUs1.png'
import img2 from './aboutUs2.png'
import img3 from './aboutUs3.png'
import MyNavbar from "./../../Navbars/Navbar/mynavbar";
import Footer from "./../../Navbars/Footer/BottomBar"

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
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
        width:'100%',
        overflow: 'hidden',
        color:'rgba(0,11,206,0.49)',
        textAlign:'center',
    },
    expand:{
        width:'100%',
        heigth:'100%',
    },
    aboutHamzar:{
        marginTop:'4%',
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
    },
    aboutInsideImage:{
        width:'100%',
        border:'0px solid pink',
    },
    aboutHamzarMain:{
        marginTop:'3%',
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
}));

export default function AboutUsPage() {
    const classes = useStyles();

    return (
        <div>

            <div className={classes.root}>
                <Paper className={classes.paper}>

                    <Grid container spacing={2} className={classes.aboutHamzarMain}>
                        <Grid item xs={12} sm container className={classes.aboutHamzar}>
                            <Grid item xs container direction="column" spacing={2}>
                                <Grid item xs>
                                    <Typography gutterBottom variant="h2" className={classes.headings}>
                                        About hamzar
                                    </Typography>
                                    <Typography variant="h5" gutterBottom className={classes.detail}>
                                        <b>
                                            Launched in 2014, hamzar.com, we are trying to fulfill the need of our
                                        customers , hamzar has a thousands of products and hundreds of brand.
                                        Hamzar is focused on providing excellent service to our customers with
                                        ease of purchase, comprehensive customers care and a hassle free shopping
                                            and return experience.
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
                                    Our Mission
                                </Typography>
                                <Typography variant="h5" gutterBottom className={classes.detail}>
                                    <b>
                                    Our main purpose is to fulfill the requirements
                                    and needs of our customers, and provide them every
                                    thing <br/> what they want within the shortest time possible.
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
                                        Anytime, Anywhere
                                    </Typography>
                                    <Typography variant="h5" gutterBottom className={classes.detail}>
                                        <b>
                                        As a platform, we continue to develop services to help
                                        you more and discover new opportunities. Our customer service
                                        is available 24/7 and we are always ready to deliver your
                                        order even before time.
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