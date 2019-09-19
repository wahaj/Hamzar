import React from "react"
import Grid from "@material-ui/core/Grid";
import BottomAncor from "./BottomAncor";
import BottomBarButtons from "./BottomBarButtons";
import {blueGrey} from "@material-ui/core/colors";
import Button from "@material-ui/core/Button";
import { createMuiTheme, withStyles, makeStyles } from "@material-ui/core/styles";
import twwiter from "./twwiter2.svg"
import hamzarIcon from './A6.png'
import ButtonBase from '@material-ui/core/ButtonBase';


const ColorButton = withStyles(theme => ({
    root: {
        color: theme.palette.getContrastText(blueGrey[500]),
        backgroundColor: blueGrey[500],
        '&:hover': {
            backgroundColor: blueGrey[700],
        },
    },
}))(Button);

const useStyles = makeStyles(theme => ({
    margin: {
        margin: theme.spacing(1),

    },
    app:{
        height:'60%'
    },
    footer:{
        backgroundColor:'rgba(5,5,54,0.55)',
        diplay: "flex",
        height:'100%'
    },
    beforeFooter:{
        backgroundColor:'rgba(21,21,82,0.55)',
    },
    headings:{
        color: 'white',
    },
    logoTable:{
        display:'flex',
        alignItems:'flex-center',
        paddingTop:'15%'
    },
    logoDiv:{

        width: '40%',
        display:'flex',
        alignItems:'flex-center',
        justifyItems:'flex-center',
        [theme.breakpoints.down('md')]: {
            display: 'none',
        },
    },
    links:{
        marginTop:'5%',
    }
}));


function BottomBar(){
    const classes= useStyles()
        return (
            <div className={classes.app}>
                <div className={classes.beforeFooter}>
                    <Grid
                        container
                        className="BottomBar"
                        direction="column"
                        justify="flex-end"
                        alignItems="center"
                        className={classes.beforeFooter}
                    >
                        <h2 className={classes.headings}>Exclusive Deals and Offers</h2>
                        <ColorButton variant="contained" color="primary" className={classes.margin}>
                            Sign Up
                        </ColorButton>
                        <h2 className={classes.headings}>Subscribe to get Exclusive Offers</h2>
                    </Grid>
                </div>
                <div className={classes.footer}>
                    <Grid
                        className="BottomBar"
                        container
                        direction="row"
                        justify="space-evenly"
                        alignItems="center"
                        className={classes.footer}
                    >
                        <ButtonBase className={classes.logoDiv} href='/'>
                            <img className={classes.logoTable}  src={hamzarIcon}/>
                        </ButtonBase>
                        <div className={classes.links}>
                            <h2 className={classes.headings}>Customer Care</h2><br/>
                            <div>
                                <BottomAncor object={{text: "Help Center",path:'/faqs'}}/>
                                <BottomAncor object={{text: "Return and Refund",path:'/ret-and-ref'}}/>
                                <BottomAncor object={{text: "Track my Order"}}/>
                                <BottomAncor object={{text: "Delivery System",path:'/DeliverySystem'}}/>
                                <BottomAncor object={{text: "Contact Us",path:'/ContactUs'}}/>
                            </div>
                        </div>
                        <div className={classes.links}>
                            <h2 className={classes.headings}>hamzar</h2><br/>
                            <div>
                                <BottomAncor object={{text: "About Us", path:'/about-us'}}/>
                                <BottomAncor object={{text: "Payment Methods", path:'./Payment'}}/>
                                <BottomAncor object={{text: "Career", path:'/career'}}/>
                                <BottomAncor object={{text: "Terms and Condition",path:'/TermsAndCondition'}}/>
                                <BottomAncor object={{text: "Privacy" ,path:'/Privacy'}}/>
                            </div>
                        </div>
                        <div className={classes.links}>
                            <h2 className={classes.headings}>Let us Help you</h2><br/>
                            <BottomAncor object={{text: "Your Account"}}/>
                            <BottomAncor object={{text: "Your Orders"}}/>
                            <BottomAncor object={{text: "Help" , path:'/faqs'}}/>
                            <BottomAncor object={{text: "FAQ's", path:'/faqs'}}/>
                        </div>
                        <div className={classes.links}>
                            <h2 className={classes.headings}>Social</h2><br/>
                                <div>
                                    <BottomBarButtons object={{text: "Facebook", src:"https://www.facebook.com/hamzarcom-286646028676538/?modal=admin_todo_tour"}}/>
                                    <BottomBarButtons object={{text: "Instagram", src:"https://www.instagram.com/hamzaronline/"}}/>
                                    <BottomBarButtons object={{text: "Youtube", src:"https://www.youtube.com/channel/UCMgZ9N0XgEY-DC3JRB9JNHQ?view_as=subscriber"}}/>
                                    <BottomBarButtons object={{text: "Twitter", src:"https://twitter.com/BooksHamzar"}}/>
                                    <BottomBarButtons object={{text: "Linkedin", src:"https://www.linkedin.com/in/hamzar-books-0966a818b"}}/>
                                </div>
                        </div>
                    </Grid>
                </div>
            </div>
        );

}

export default BottomBar;
