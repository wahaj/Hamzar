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
}));

export default function AboutUsPage() {
    const classes = useStyles();

    return (
        <div>

            <div className={classes.root}>
                <Paper className={classes.paper}>

                    <Grid container spacing={2}>
                        <Grid item>
                            <ButtonBase className={classes.image}>
                                <img className={classes.img} alt="complex" src={img1} />
                            </ButtonBase>
                        </Grid>
                        <Grid item xs={12} sm container>
                            <Grid item xs container direction="column" spacing={2}>
                                <Grid item xs>
                                    <Typography gutterBottom variant="h4">
                                        About HAMZAR.COM
                                    </Typography>
                                    <Typography variant="body1" gutterBottom>
                                        <br/>
                                        Launched in 2014, hamzar.com, we are trying to fulfill the need of our
                                        customers , hamzar has a thousands of products and hundreds of brand.
                                        Hamzar is focused on providing excellent service to our customers with
                                        ease of purchase, comprehensive customers care and a hassle free shopping
                                        and return experience.
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid container spacing={2}>
                        <Grid style={{float: 'left'}}>
                            <Grid item>
                                <Typography gutterBottom variant="h4">
                                    Our Mission
                                </Typography>
                                <Typography variant="body1" gutterBottom>
                                    <br/>
                                    Our main purpose is to fulfill the requirements
                                    and needs of our customers, and provide them every
                                    thing <br/> what they want within the shortest time possible.
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid item style={{float: "right", right: 0}}>
                            <ButtonBase className={classes.image}>
                                <img className={classes.img} alt="complex" src={img2} />
                            </ButtonBase>
                        </Grid>
                    </Grid>

                    <Grid container spacing={2}>
                        <Grid item>
                            <ButtonBase className={classes.image}>
                                <img className={classes.img} alt="complex" src={img3} />
                            </ButtonBase>
                        </Grid>
                        <Grid item xs={12} sm container>
                            <Grid item xs container direction="column" spacing={2}>
                                <Grid item xs>
                                    <Typography gutterBottom variant="h4">
                                        Anytime, Anywhere
                                    </Typography>
                                    <Typography variant="body1" gutterBottom>
                                        <br/>
                                        As a platform, we continue to develop services to help
                                        you more and discover new opportunities. Our customer service
                                        is available 24/7 and we are always ready to deliver your
                                        order even before time.
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>

                </Paper>
            </div>
        </div>
    );
}