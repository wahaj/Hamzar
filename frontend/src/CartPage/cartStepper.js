import React, {useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import AddressBar from "./addressBar";
import OrderChoice from "./OrderChoice"
import CheckOut from "./checkOut";
import Paper from "@material-ui/core/Paper"
import BI from "./img.jpg"
import { Parallax} from 'react-parallax';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


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

const childDataArray = [

];

const parentDataArray = [

];

let basketDataArray = [

];

let summary =[];

function getSteps() {
    return ['Shopping Cart', 'Confirm You Address', 'Checkout'];
}




export default function CartStepper(props) {
    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);
    const [loading, setLoading] = React.useState(false)

    const [open, setOpen] = React.useState(false);

    function handleClickOpen() {
        setOpen(true);
    }

    function handleClose() {
        setOpen(false);
    }
    function getStepContent(step) {
        switch (step) {
            case 0:
                return (<OrderChoice parentData={parentDataArray} childData={childDataArray} basketData={basketDataArray} pop={handleClickOpen}/>);
            case 1:
                return (<AddressBar/>);
            case 2:
                return (<CheckOut parentData={parentDataArray} childData={childDataArray} basketData={basketDataArray} summaryData={summary}/>);

        }
    }

    useEffect(()=>{

        const dataFetch = async () => {
            setLoading(true);
            const basket = await fetch('http://hamzar.com/api/basket/',  {
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                },
                method: 'GET',
                withCredentials: true,
                credentials: 'include'
            });

            const basketJson = await basket.json();
            summary=basketJson;
            const basketLines = await fetch(basketJson.lines,  {
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                },
                method: 'GET',
                credentials: "include"
            });
            const basketLinesJson = await basketLines.json();
            basketDataArray=(basketLinesJson)
            for (let lines of basketLinesJson) {
                const childProduct =  await fetch(lines.product, {
                    headers: {
                        'Content-Type': 'application/json',
                        Accept: 'application/json',
                    },
                    method: 'GET',
                    credentials: "include"
                })
                const childProductJSON = await childProduct.json()
                childDataArray.push(childProductJSON)
            }
            for (let child of childDataArray) {
                const prodURL = child.parent
                const parentProduct =  await fetch('http://hamzar.com/api/products/' + prodURL + '/', {
                    headers: {
                        'Content-Type': 'application/json',
                        Accept: 'application/json',
                    },
                    method: 'GET',
                    credentials: "include"
                })
                const parentProductJSON = await parentProduct.json()
                parentDataArray.push(parentProductJSON)
            }
            console.log(childDataArray);
            setLoading(false);
        }
        dataFetch();
    }, []);



    const steps = getSteps();

    function handleNext() {

        setActiveStep(prevActiveStep => prevActiveStep + 1);
    }

    function handleBack() {
        setActiveStep(prevActiveStep => prevActiveStep - 1);
    }

    return (
        <Parallax
            blur={5}
            bgImageAlt="the cat"
            strength={300}
            bgImage={BI}
        >
            <div>
                <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">{"Desired quantity not available"}</DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            The requested quantity cannot exceed the quantity available.
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose} color="primary">
                            Ok
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
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
                            {getStepContent(activeStep)}
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
