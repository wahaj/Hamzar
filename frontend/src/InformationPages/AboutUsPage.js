import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import img1 from './aboutus1.jpeg'
import img2 from './aboutus2.jpeg'
import MyNavbar from "./../Navbars/Navbar/mynavbar";
import Footer from "./../Navbars/Footer/BottomBar"

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        margin: 'auto',
        maxWidth: (Window.width),
        maxHeight: 2000,
    },
    image: {
        maxWidth: 300,
        height: 350,
    },
    img: {
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
    },
}));

export default function AboutUsPage() {
    const classes = useStyles();

    return (
        <div>
            <MyNavbar/>

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
                                        About Us
                                    </Typography>
                                    <Typography variant="body1" gutterBottom>
                                        Detailed about us stuff. This is the whole paragrapth of bs
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>

                    <Paper className={classes.paper}>
                        <Grid container spacing={2}>
                            <Grid item style={{position:"absolute", right:"0"}}>
                                <ButtonBase className={classes.image}>
                                    <img className={classes.img} alt="complex" src={img2} />
                                </ButtonBase>
                            </Grid>
                            <Grid item xs={12} sm container>
                                <Grid item container direction="column" spacing={2}>
                                    <Grid item>
                                        <Typography gutterBottom variant="subtitle1">
                                            Blah blah blah
                                        </Typography>
                                        <Typography variant="body2" gutterBottom>
                                            <li>
                                                <ul> More stuff on about us. </ul>
                                                <ul> More stuff on about us. </ul>
                                                <ul> More stuff on about us. </ul>
                                                <ul> More stuff on about us. </ul>
                                                <ul> More stuff on about us. </ul>
                                                <ul> More stuff on about us. </ul>
                                                <ul> More stuff on about us. </ul>
                                                <ul> More stuff on about us. </ul>
                                            </li>

                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Paper>
                </Paper>
            </div>

            <Footer/>
        </div>
    );
}