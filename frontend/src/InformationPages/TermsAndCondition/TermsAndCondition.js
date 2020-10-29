import React from 'react'
import makeStyles from "@material-ui/core/styles/makeStyles";
import {Container} from "@material-ui/core";
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
    thirdPart:{
        marginTop:'5%',
    }
}))

export default function TermsAndCondition(){
    const classes = useStyles();
    return(
        <div className={classes.main_root}>
            <div className={classes.root}>
                <div>
                    <h1 className={classes.headings}><b>INTRODUCTION</b></h1>
                    <h2 className={classes.detail}>Welcome to hamzar.com. We are an online marketplace and these are the terms and conditions governing your access and use of hamzar along with its related sub-domains, sites, mobile app, services and tools (the "Site"). By using the Site, you hereby accept these terms and conditions (including the linked information herein) and represent that you agree to comply with these terms and conditions (the "User Agreement").
                        <br/>This User Agreement is deemed effective upon your use of the Site which signifies your acceptance of these terms. If you do not agree to be bound by this User Agreement please do not access, register with or use this Site.
                        <br/>The Site reserves the right to change, modify, add, or remove portions of these Terms and Conditions at any time without any prior notification. Changes will be effective when posted on the Site with no other notice provided. Please check these Terms and Conditions regularly for updates. Your continued use of the Site following the posting of changes to Terms and Conditions of use constitutes your acceptance of those changes.</h2>
                </div>

                <div>
                    <img className={classes.images2} src={privacy3} />
                    <h1 className={classes.headings}><b>YOUR ACCOUNT</b></h1>
                    <h2  className={classes.detail}>To access certain services offered by the platform, we may require that you create an account with us or provide personal information to complete the creation of an account. We may at any time in our sole and absolute discretion, invalidate the username and/or password without giving any reason or prior notice and shall not be liable or responsible for any losses suffered by, caused by, arising out of, in connection with or by reason of such request or invalidation.</h2>
                </div>

                <div className={classes.thirdPart}>
                    <h1 className={classes.headings}><b>PRIVACY</b></h1>
                    <h2  className={classes.detail}>Please review our Privacy Agreement, which also governs your visit to the Site. The personal information / data provided to us by you or your use of the Site will be treated as strictly confidential, in accordance with the Privacy Agreement and applicable laws and regulations. If you object to your information being transferred or used in the manner specified in the Privacy Agreement, please do not use the Site.</h2>
                </div>
            </div>
        </div>
    )
}