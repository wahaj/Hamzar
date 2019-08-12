import React from 'react'
import makeStyles from "@material-ui/core/styles/makeStyles";
import {Container} from "@material-ui/core";
import career1 from './career1.jpg';
import career2 from './career2.png';
import  Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles(theme=>({
    root:{
        backgroundColor : 'rgba(255,255,255,0)',
        margin:'',
        alignItems:'center',

    },
    main_root:{
        backgroundColor : 'rgba(255,255,255,0)',
        display:'flex'
    },
    email:{
        color:'rgb(0,11,255)',
        textDecoration:'underline'
    },
    images1:{
        width: '100%',
    },
    images2:{
        width: '30%',
        height: '50%',
        display:'flex',
        marginLeft:'30%'

    },
    headings:{
        color:'rgba(0,11,206,0.49)',
        textAlign:'center',
    },
    detail:{
        color:'rgba(0,0,0,0.37)',
        textIndent:'0px',
        textSpacing:"3px",
        lineHeight:'30px',
        marginLeft:'10%',
        marginRight:'10%',

    },
    elements:{
        color:'rgba(0,11,206,0.49)',
        textAlign:'center',
    },
}))

export default function Career(){
    const classes = useStyles();
    return(
        <div className={classes.main_root}>
            <div className={classes.root}>
                <div>
                    <img className={classes.images1} src={career1} />
                    <h1 className={classes.headings}>THERE’S AN OPPORTUNITY FOR EVERYONE</h1>
                    <h2 className={classes.detail}>We are a community of diverse teams and talented individuals. All playing different yet significant roles, all working fervently towards creating better customer experiences, all driven with a thirst for innovation. And in that dynamic, fast-paced community is a cornucopia of opportunities, for you. Pick a team, find your opportunity and get in touch with us.</h2>
                </div>
                <div className={classes.elements}>
                    <h2>Email your resume: <p className={classes.email}>hamzar.careers@gmail.com</p> </h2>
                </div>

                <div>
                    <img className={classes.images2} src={career2} />
                    <h1 className={classes.headings}>EMPLOYEES ARE OUR GREATEST ASSETSE</h1>
                    <h2  className={classes.detail}>We strive to foster an open and transparent atmosphere within our organization where every team member has opportunities to develop their potential and everyone's views are valued. We welcome individuals who share our spirit of entrepreneurship and innovation to join the hamzar family.</h2>
                </div>
            </div>
        </div>
    )
}