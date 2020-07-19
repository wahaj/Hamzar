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
    const insert = function insert(main_string, ins_string, pos) {
       if(typeof(pos) == "undefined") {
        pos = 0;
        }
       if(typeof(ins_string) == "undefined") {
        ins_string = '';
        }
      return main_string.slice(0, pos) + ins_string + main_string.slice(pos);
    }
    useEffect(()=>{

        const dataFetch = async () => {
            setLoading(true);
            //set summary variable to something
            const basketLines = await fetch('https://hamzar.com/api/v1/baskets/'+'10'+'/lines/',  {
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
                const childProduct =  await fetch(insert(lines.product,'s',4), {
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
                const parentProduct =  await fetch('https://hamzar.com/api/v1/products/' + prodURL + '/', {
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
            console.log(parentDataArray);
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
                                Congratulations
                            </Typography>
                            <Typography variant={"h4"}>
                                Your order has been confirmed and will be delivered soon
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
