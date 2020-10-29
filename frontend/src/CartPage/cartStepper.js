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
import Store from "../History/Store";
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import CircularProgress from '@material-ui/core/CircularProgress'
import DialogTitle from '@material-ui/core/DialogTitle';


const useStyles = makeStyles(theme => ({
    main:{
      backgroundImage : `url(${BI})`,
      margin:'0 0 0 0',
      padding : '3% 3% 3% 3%',
    },
    mainBlock:{
        display:'flex',
        marginLeft:'15%',
        marginRight: '15%',
        backgroundColor: theme.palette.background.paper,
        boxShadow: '0 3px 5px 8px rgba(128, 128, 128, .3)',
    },
    paperContainer: {
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
    spinner : {
      marginTop : '2%',
      marginBottom : '2%',
      marginLeft : '45%',
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
        height: 'auto',
        minHeight: 500,
        width : '100%',
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
    const [loading, setLoading] = React.useState(0)
    const [fetching, setFetching] = React.useState(true);
    const steps = getSteps();

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

            //set summary variable to something
            const basketLines = await fetch(`${process.env.REACT_APP_API_URL}/baskets/`+Store.getCartNo()+'/lines/',  {
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                },
                method: 'GET',
                credentials: "include"
            });
            const basketLinesJson = await basketLines.json();
            basketDataArray=(basketLinesJson)
            console.log('basket lines  ', basketLinesJson)
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
                const parentProduct =  await fetch(`${process.env.REACT_APP_API_URL}/products/` + prodURL + '/', {
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
            return 1
        }
        if(fetching === true){
          dataFetch().then(()=>{
          setFetching(false);
          })
        }


    },[fetching,activeStep]);

    function handleNext() {

        setActiveStep(prevActiveStep => prevActiveStep + 1);
    }
    function handleFinish(){
      const data = {
          "basket": `${process.env.REACT_APP_API_URL}/baskets/${Store.getCartNo()}/`, //url should end in '/'
          "guest_email": "foo@gmail.com",
          "shipping_address": {
              "first_name": Store.getName(),
              "last_name":" ",
              "line1" : Store.getAddress(),
              "line2" : "",
              "line3" : "",
              "line4" : "",
              "phone_number": Store.getPhoneNum(),
              "country": `${process.env.REACT_APP_API_URL}/countries/PK/`,
              "postcode": "54000",
              "state": "Punjab",
              "title":"Mr",
          }
      }

      const checkout = fetch(`${process.env.REACT_APP_API_URL}/checkout/`, {
          headers: {
              'Content-Type': 'application/json',
              Accept: 'application/json',
          },
          method: 'POST',
          body: JSON.stringify(data),
          credentials: "include"
      }).then(()=>{
        setActiveStep(prevActiveStep => prevActiveStep + 1);
      })
    }
    function handleBack() {
        setActiveStep(prevActiveStep => prevActiveStep - 1);
    }
if(fetching === false){
  return (
    <div className={classes.main}>
      <div className={classes.mainBlock}>
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
                          <div style={{margin:'3% 3% 3% 3%'}}>
                              <Button disabled={activeStep === 0} onClick={handleBack} className={classes.button}>
                                  Back
                              </Button>
                              {
                                activeStep === (steps.length - 1) ?
                                  <Button
                                      variant="contained"
                                      color="primary"
                                      onClick={handleFinish}
                                      className={classes.button}
                                  >
                                    Finish
                                  </Button>
                                  :
                                  <Button
                                      variant="contained"
                                      color="primary"
                                      onClick={handleNext}
                                      className={classes.button}
                                  >
                                      Next
                                  </Button>

                              }

                          </div>
                      </div>
                  )}
              </div>
          </Paper>
      </div>
    </div>
  );
}
else {
  return (
    <div className={classes.main}>
    <div className={classes.mainBlock}>
      <div className={classes.spinner}>
        <CircularProgress color='white'/>
      </div>
    </div>
    </div>
  );
}

}
