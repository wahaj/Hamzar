import React from 'react'
import makeStyles from "@material-ui/core/styles/makeStyles";
import {Container} from "@material-ui/core";
import privacy1 from './purse.png';
import privacy2 from './timer.png';
import privacy3 from './valid reason.png';
import  Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles(theme=>({
    root:{
        backgroundColor : 'rgba(255,255,255,0)',
        marginTop:'3%',
        marginBottom:'3%',
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
        marginLeft:'35%'
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

export default function Privacy(){
    const classes = useStyles();
    return(
        <div className={classes.main_root}>
            <div className={classes.root}>
                <div>
                    <h1 className={classes.headings}>Privacy and Confidentiality</h1>
                    <h2 className={classes.detail}>Welcome to the hamzar.com website .We respect your privacy and want to protect your personal information. To learn more, please read this Privacy
                        Policy. This Privacy Policy explains how we collect, use and (under certain conditions) disclose your personal information. This Privacy Policy also explains the steps we have taken to secure your personal information. Finally, this Privacy Policy explains your options regarding the collection, use and disclosure of your personal information. By visiting the Site directly or through another site, you accept the practices described in this Policy.</h2>
                </div>
                <div>
                    <img className={classes.images2} src={privacy2} />
                    <h1 className={classes.headings}><b>1) Data that we collect</b></h1>
                    <h2  className={classes.detail}>We may collect various pieces of information if you seek to place an order for a product with us on the Site.
                        We collect, store and process your data for processing your purchase on the Site and any possible later claims, and to provide you with our services. We may collect personal information including, but not limited to, your title, name, gender, date of birth, email address, postal address, delivery address (if different), telephone number, mobile number, fax number, payment details, payment method.</h2>
                </div>
                <div>
                    <img className={classes.images2} src={privacy3} />
                    <h1 className={classes.headings}><b>2) Security</b></h1>
                    <h2  className={classes.detail}>We have in place appropriate technical and security measures to prevent unauthorized or unlawful access to or accidental loss of or destruction or damage to your information. When we collect data through the Site, we collect your personal details on a secure server. We use firewalls on our servers. Our security procedures mean that we may occasionally request proof of identity before we disclose personal information to you. You are responsible for protecting against unauthorized access to your password and to your computer.</h2>
                </div>
                <div>
                    <img className={classes.images2} src={privacy1} />
                    <h1 className={classes.headings}><b>3) Your rights</b></h1>
                    <h2  className={classes.detail}>If you are concerned about your data you have the right to request access to the personal data which we may hold or process about you. You have the right to require us to correct any inaccuracies in your data free of charge. At any stage you also have the right to ask us to stop using your personal data for direct marketing purposes.</h2>
                </div>
            </div>
        </div>
    )
}