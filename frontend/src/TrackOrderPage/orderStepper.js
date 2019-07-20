import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import ShoppingBasket from '@material-ui/icons/ShoppingBasketRounded';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
    root: {
        minWidth: '90%',
        width: '90%',
        backgroundColor: '#fe2632'
    },
    backButton: {
        marginRight: theme.spacing(1),
    },
    instructions: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
        display: "inline"
    },
    instructionsContainer: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
        paddingLeft: 40,
    },
}));

function getSteps() {
    return ['Order Placed', 'In Transit', ' Delivery Attempt', ' Delivered'];
}

function getStepContent(step) {
    switch (step) {
        case 0:
            return `Your order has been placed`;
        case 1:
            return 'Your order is being processed';
        case 2:
            return `Our delivery staff member is on its way to deliver your book/s.`;
        case 3:
            return 'Your order has been delivered kindly. Kindly confirm to mark the order complete'
        case 4:
            return 'Thankyou for your order'
        default:
            return 'Unknown step';
    }
}

export default function OrderStepper() {
    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);
    const steps = getSteps();

    function handleNext() {
        setActiveStep(prevActiveStep => prevActiveStep + 1);
    }

    return (
        <div className={classes.root}>
            <Stepper activeStep={activeStep} alternativeLabel>
                <Step key={steps[0]}>
                    <StepLabel>Initiated</StepLabel>
                </Step>

                <Step key={steps[1]}>
                    <StepLabel>Processing</StepLabel>
                </Step>

                <Step key={steps[2]}>
                    <StepLabel>En route</StepLabel>
                </Step>

                <Step key={steps[3]}>
                    <StepLabel>Delivered</StepLabel>
                </Step>
            </Stepper>
            <div className={classes.instructionsContainer}>
                <div>
                    <Typography className={classes.instructions} variant={"h6"}>{getStepContent(activeStep)}</Typography>
                    {(activeStep===steps.length -1) ? <Button style={{display:"inline-block"}} variant="contained" color="primary" onClick={handleNext}>Delivered</Button>: null }
                </div>
            </div>
        </div>
    );
}
