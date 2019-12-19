import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MyNavbar from "./../../Navbars/Navbar/mynavbar";
import Footer from "./../../Navbars/Footer/BottomBar";

import {Container} from "@material-ui/core";


const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
    },
    heading: {
        flexShrink: 0,
        [theme.breakpoints.up('lg')]: {
        align:'center',
        flexBasis: '33.33%',
        },
        fontSize:'20px',
    },
    secondaryHeading: {
        color: 'rgba(47,42,0,0.73)',
        [theme.breakpoints.up('lg')]: {
        align:'center',
        },
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

    },
    mainImage:{
        width:'100%',
        height:'700px',
        display:'block',
    }
}));

export default function DeliverySystem() {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = panel => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <div>
            <div className={classes.root}>
                <Container fixed>
                    <h1 className={classes.main_heading}>Delivery System</h1>
                    <h2 className={classes.main_heading}>Frequently Asked Questions</h2>
                </Container>
                <ExpansionPanel expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                    <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1bh-content"
                        id="panel1bh-header"
                    >
                        <Typography className={classes.heading}></Typography>
                        <Typography className={classes.secondaryHeading}>Does hamzar deliver all over Pakistan?</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <Typography className={classes.answers}>Initially hamzar delivery service is for Lahore and nearby areas by our own delivery service. But we also deliver parcels through our logistic partners which includes TCS and Leopard Courier Service.
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
                            What are the delivery charges?
                        </Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <Typography className={classes.answers}>Delivery charge varies same for each product.
                            Please check your order summary to understand the delivery charges for individual products.
                            For Products on hamzar .Rs.30 charge for delivery per item is applied within lahore.
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
                            I need to return an item, how do I arrange for a pick-up?
                        </Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <Typography className={classes.answers}>
                            Returns are easy. Contact Us to initiate a return. You will receive a call explaining the process, once you have initiated a return.
                            Whenever possible, hamzar Logistics will facilitate the pick-up of the item. Just contact us.
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
                            I found the package open and the product seal broken on delivery. What should I do?
                        </Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <Typography className={classes.answers}>
                            You should refuse to accept an open package. However, if you do receive any such package which is open, severely damaged or tampered, please get in touch with us immediately.
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
                            Can I pick up my item instead of having it delivered?
                        </Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <Typography className={classes.answers}>
                            Unfortunately Self Collection of items is not available. Rest is assured that your order will be delivered to your address, safe & sound!
                        </Typography>
                    </ExpansionPanelDetails>
                </ExpansionPanel>

                <ExpansionPanel expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
                    <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel6bh-content"
                        id="panel6bh-header"
                    >
                        <Typography className={classes.heading}></Typography>
                        <Typography className={classes.secondaryHeading}>
                            I ordered multiple items but I have received only one item so far. What’s going on?
                        </Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <Typography className={classes.answers}>
                            Items sourced from different sellers are often shipped separately to make sure that there is no delay in fulfillment of your order. Rest assured that you will get all your items within the delivery period mentioned.
                            Delivery charges confirmed at the time of order placement are spread throughout your order.
                        </Typography>
                    </ExpansionPanelDetails>
                </ExpansionPanel>

                <ExpansionPanel expanded={expanded === 'panel7'} onChange={handleChange('panel7')}>
                    <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel7bh-content"
                        id="panel7bh-header"
                    >
                        <Typography className={classes.heading}></Typography>
                        <Typography className={classes.secondaryHeading}>
                            How long does it take to receive my product?
                        </Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <Typography className={classes.answers}>
                            We do our best to get your orders delivered by the date listed on the product page.
                            Delivery timelines vary depending on your location and your selected product.
                        </Typography>
                    </ExpansionPanelDetails>
                </ExpansionPanel>


                <ExpansionPanel expanded={expanded === 'panel8'} onChange={handleChange('panel8')}>
                    <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel8bh-content"
                        id="panel8bh-header"
                    >
                        <Typography className={classes.heading}></Typography>
                        <Typography className={classes.secondaryHeading}>
                            Will somebody contact me before delivering the package to my location?
                        </Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <Typography className={classes.answers}>
                            Our delivery person may contact you to confirm your exact location or you might get the SMS notification once the order is go for delivery.
                        </Typography>
                    </ExpansionPanelDetails>
                </ExpansionPanel>

                <ExpansionPanel expanded={expanded === 'panel9'} onChange={handleChange('panel9')}>
                    <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel9bh-content"
                        id="panel9bh-header"
                    >
                        <Typography className={classes.heading}></Typography>
                        <Typography className={classes.secondaryHeading}>
                            My parcel has been reported missing. What now?
                        </Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <Typography className={classes.answers}>
                            No need to worry. If you have any such concerns, you may contact us for a possible resolution. We've got you covered!
                        </Typography>
                    </ExpansionPanelDetails>
                </ExpansionPanel>

                <ExpansionPanel expanded={expanded === 'panel10'} onChange={handleChange('panel10')}>
                    <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel10bh-content"
                        id="panel10bh-header"
                    >
                        <Typography className={classes.heading}></Typography>
                        <Typography className={classes.secondaryHeading}>
                            How are the Shipping Charges calculated?
                        </Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <Typography className={classes.answers}>
                            Delivery charges are calculated based on the weight of the product, the origin <b>(from where it is picked)</b> and the destination <b>(where it is to be delivered)</b>.
                            Delivery charges are clearly indicated for each product individually at the main product page and the sum of delivery charges will also be displayed at the checkout page
                        </Typography>
                    </ExpansionPanelDetails>
                </ExpansionPanel>

                <ExpansionPanel expanded={expanded === 'panel11'} onChange={handleChange('panel11')}>
                    <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel11bh-content"
                        id="panel11bh-header"
                    >
                        <Typography className={classes.heading}></Typography>
                        <Typography className={classes.secondaryHeading}>
                            I missed my package delivery. What happens now?
                        </Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <Typography className={classes.answers}>
                            <b>  Don't worry!</b> We’ll attempt to deliver your order again, the next working day. We will attempt 3 times for the delivery of your order before cancelling it.
                        </Typography>
                    </ExpansionPanelDetails>
                </ExpansionPanel>


                <ExpansionPanel expanded={expanded === 'panel12'} onChange={handleChange('panel12')}>
                    <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel12bh-content"
                        id="panel12bh-header"
                    >
                        <Typography className={classes.heading}></Typography>
                        <Typography className={classes.secondaryHeading}>
                            Can I change my delivery address after I have placed my order?
                        </Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <Typography className={classes.answers}>
                            Unfortunately, your shipping details cannot be changed after your order has been placed.
                            However, you may cancel the order and re-order with the right address.
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
