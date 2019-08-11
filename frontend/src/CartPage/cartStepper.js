import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import AddressBar from "./addressBar";
import OrderChoice from "./OrderChoice"
import CheckOut from "./checkOut";
import {Container} from "@material-ui/core";
import Paper from "@material-ui/core/Paper"
import BI from "./img.jpg"
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import { Parallax, Background } from 'react-parallax';
import sampleCart from "./sampleCart"


const useStyles = makeStyles(theme => ({
    root:{
        padding:0,
    },
    paperContainer: {
        padding: 0,
        margin: 0,
        backgroundColor: "#B0BEC5",
        width: '100%',
        [theme.breakpoints.up('xs')]: {
            height: "55%"
        },
        [theme.breakpoints.up('md')]: {
            height:'100%',
        },
        [theme.breakpoints.up('lg')]: {
            height: "130%",
        },
    },
    backgroundContainer: {
        width: '100%',
        height: '100%',
        opacity: 0.7,
    },
    fixedPosition: {
        width: '100%',
        paddingBottom: "10%",

    },
    button: {
        marginRight: theme.spacing(1),
    },
    instructions: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
    },
    paper: {
        padding: 30,
        height: 'auto',
        minHeight: 500,
        width: '60%',
        marginLeft: '20%',
        marginTop: 50,
        marginBottom: 50,
    }
}));

function getSteps() {
    return ['Shopping Cart', 'Confirm You Address', 'Checkout'];
}

function getStepContent(step, cart) {
    switch (step) {
        case 0:
            return (<OrderChoice data={sampleCart}/>);
        case 1:
            return (<AddressBar/>);
        case 2:
            return (<CheckOut data={sampleCart}/>);
        default:
            return 'Unknown step';
    }
}

export default function CartStepper() {
    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);
    const [skipped, setSkipped] = React.useState(new Set());
    const [cart, setCart] = React.useState(new Set(sampleCart));
    const steps = getSteps();

    function isStepOptional(step) {
        return step === 1;
    }

    function isStepSkipped(step) {
        return skipped.has(step);
    }

    function handleNext() {
        let newSkipped = skipped;
        if (isStepSkipped(activeStep)) {
            newSkipped = new Set(newSkipped.values());
            newSkipped.delete(activeStep);
        }

        setActiveStep(prevActiveStep => prevActiveStep + 1);
        setSkipped(newSkipped);
    }

    function handleBack() {
        setActiveStep(prevActiveStep => prevActiveStep - 1);
    }

    function handleSkip() {
        if (!isStepOptional(activeStep)) {
            // You probably want to guard against something like this,
            // it should never occur unless someone's actively trying to break something.
            throw new Error("You can't skip a step that isn't optional.");
        }

        setActiveStep(prevActiveStep => prevActiveStep + 1);
        setSkipped(prevSkipped => {
            const newSkipped = new Set(prevSkipped.values());
            newSkipped.add(activeStep);
            return newSkipped;
        });
    }
    return (
        <Parallax
            blur={5}
            bgImageAlt="the cat"
            strength={300}
            bgImage={BI}
        >
            <Paper className={classes.paper}>
                <Stepper activeStep={activeStep}>
                    {steps.map((label, index) => {
                        const stepProps = {};
                        const labelProps = {};
                        return (
                            <Step key={label} {...stepProps}>
                                <StepLabel {...labelProps}>{label}</StepLabel>
                            </Step>
                        );
                    })}
                </Stepper>
                <div>
                    {activeStep === steps.length ? (
                        <div>
                            <Typography className={classes.instructions}>
                                Your order has been made
                            </Typography>
                            <Typography variant={"h4"}>
                                Your order number is {123}
                            </Typography>
                        </div>
                    ) : (
                        <div>
                            {getStepContent(activeStep, cart)}
                            <div style={{marginTop: 20}}>
                                <Button disabled={activeStep === 0} onClick={handleBack} className={classes.button}>
                                    Back
                                </Button>

                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={handleNext}
                                    className={classes.button}
                                >
                                    {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                                </Button>
                            </div>
                        </div>
                    )}
                </div>
            </Paper>
        </Parallax>
    );
}
