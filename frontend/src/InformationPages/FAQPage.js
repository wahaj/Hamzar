import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MyNavbar from "./../Navbars/Navbar/mynavbar";
import Footer from "./../Navbars/Footer/BottomBar"

import {Container} from "@material-ui/core";


const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
    },
    heading: {
        flexBasis: '33.33%',
        flexShrink: 0,
        textAlign:'center',
        fontSize:'20px',
    },
    secondaryHeading: {
        color: 'rgba(47,42,0,0.73)',
        align:'center',
        fontSize:'20px',
    },
    main_heading:{
        textAlign:'center',
        color:'rgb(52,52,56)',
    },
    answers:{
        color:'rgba(0,0,0,0.4)',
        fontSize:'20px',
        marginLeft:'15%',
        marginRight:'10%',
    },
    contactUs:{
        paddingTop:'3%',
        paddingBottom:'3%',
        paddingLeft:'4%',
    },
    contactHeading:{
        fontSize:'20px'

    },
    contactDetail:{

    }
}));

export default function ControlledExpansionPanels() {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = panel => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <div>
            <div className={classes.root}>
                <Container fixed>
                    <h1 className={classes.main_heading}>FAQ</h1>
                    <h2 className={classes.main_heading}>Frequently Asked Questions</h2>
                </Container>
                <ExpansionPanel expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                    <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1bh-content"
                        id="panel1bh-header"
                    >
                        <Typography className={classes.heading}></Typography>
                        <Typography className={classes.secondaryHeading}>How can I track my order?</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <Typography className={classes.answers}>We will send you regular updates about the status of
                            your order via emails and SMS. After your
                            order has left our warehouse and is on its way to you, you
                            can also track its status by signing in to your
                            account, under "My Order" on your desired order or you can
                            track your order on relevant
                            courier portal    “click here to track your order”
                        </Typography>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
                <ExpansionPanel expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                    <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2bh-content"
                        id="panel2bh-header"
                    >
                        <Typography className={classes.heading}></Typography>
                        <Typography className={classes.secondaryHeading}>
                            How to return a product?
                        </Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <Typography className={classes.answers}>
                            It's simple! Just follow the below mentioned steps:<br/>
                            <b>1.</b> Just click on help center and mail or contact us.<br/>
                            <b>2.</b> Make sure that the Item is packed as it was delivered. And make sure you have order slip with it.<br/>
                            <b>3.</b> Once you have packed the item, contact with us<br/>
                            <b>4.</b> We will make sure our delivery boy reach you as soon as possible and collect the parcel.<br/>
                        </Typography>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
                <ExpansionPanel expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                    <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel3bh-content"
                        id="panel3bh-header"
                    >
                        <Typography className={classes.heading}></Typography>
                        <Typography className={classes.secondaryHeading}>
                            How delivery Charges are calculated?
                        </Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <Typography className={classes.answers}>
                            Delivery charges are calculated
                            based on the weight of the product, the origin (from where it is picked)
                            and the destination (where it is to be delivered).

                            Delivery charges are clearly indicated for
                            each product individually at the main product page and
                            the sum of delivery charges will also be displayed at the checkout page
                        </Typography>
                    </ExpansionPanelDetails>
                </ExpansionPanel>

                <ExpansionPanel expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                    <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel4bh-content"
                        id="panel4bh-header"
                    >
                        <Typography className={classes.heading}></Typography>
                        <Typography className={classes.secondaryHeading}>
                            What are the Delivery Timelines?
                        </Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <Typography className={classes.answers}>
                            We generally procure and ship the items within a day.
                            These timelines are based
                            on business days and include public holidays and Sundays.
                        </Typography>
                    </ExpansionPanelDetails>
                </ExpansionPanel>

                <ExpansionPanel expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
                    <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel5bh-content"
                        id="panel5bh-header"
                    >
                        <Typography className={classes.heading}></Typography>
                        <Typography className={classes.secondaryHeading}>
                            What factors is the estimated delivery time based on?
                        </Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <Typography className={classes.answers}>
                            <b>1-</b> The destination to which you want order shipped to and the seller’s location.
                            <br/>
                            <b>2-</b> Availability of the product
                        </Typography>
                    </ExpansionPanelDetails>
                </ExpansionPanel>

                <div className={classes.contactUs}>
                    <Typography className={classes.contactHeading}>
                        <b>If you have  further Queries Related to your help, share with us</b>
                    </Typography>
                    <Typography className={classes.contactDetail}>
                        Contact # :  +92 302 4554944
                    </Typography>
                    Email :         hamzar.books@gmail.com
                </div>
            </div>
        </div>
    );
}
