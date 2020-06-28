import React, {useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import NavigationIcon from '@material-ui/icons/Navigation';
import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';
import {Collapse} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import CircularProgress from '@material-ui/core/CircularProgress'
import Alert from '@material-ui/lab/Alert';
import Store from '../History/Store'

const useStyles = makeStyles(theme => ({
    fab: {
        alignItems: 'flex-start',
        border:'0px solid Gray',
    },
    extendedIcon: {
        marginRight: theme.spacing(1),
    },
    new:{
        display:'flex',
        border:'0px solid Gray',
        maxHeight: 500,
        paddingBottom: '3%',
    },
    used:{
        display:'flex',
        paddingTop:'3%',
        border:'0px solid pink',
    },
    divider:{
        height:'3px',
        overflow:'auto',
        border:'0px solid violet',
    },
    objectPrice:{
        display:'inline',
        float:'right',
        border:'0px solid blue',
    },
    info:{
        display:'block',
        width: '100%',
        alignContent:'center',
        border:'0px solid purple',
    },
    listPrice:{
        display:'block',
        border:'0px solid red',
        width:'100%',
        overflow:'auto',
    },
    save :{
        display:'block',
        border:'0px solid Green',
        width:'100%',
        overflow:'auto',
    },
    innerInformation:{
        display:'block',
        border:'0px solid black',
        overflow:'hidden',
        height:'100%',
        width:'100%',
    },
    toRight:{
        float:'right',
        border:'0px solid blue',
    },
    cartButton:{
        float:'right',
    },
    cartOption:{
        paddingTop:'2%',
        display:'block',
        width:'100%',
        overflow:'auto',
    },
    buyNow:{
        paddingTop:'1%',
        display:'block',
        width:'100%',
        overflow:'auto',
        paddingBottom:'1%',
    },
    buyButton:{
        float:'right',
    }
}));

export default function ProductAssistence(props) {
    const classes = useStyles();
    const styles={visibility: 'collapse'}
    const [thisState,setThisState]=React.useState({New: null,Old:null, toCheck:null})
    const [controlSwitch, setControlSwitch] = React.useState(true);
    const [errMsg,setErrMsg] = React.useState(false);
    const [errMsgSec,setErrMsgSec] = React.useState(false);
    const [buyNow,setBuyNow] = React.useState(false);
    const [buyNowSec,setBuyNowSec] = React.useState(false);
    const logStat = Store.getLogStatus();
    const [logState, setLogState] = React.useState(logStat);
    const logStatus = logState;
    var OldAddress = null
    var NewAddress = null
    var OldPrice = null
    var NewPrice = null


    function handleChangeTable() {
        setControlSwitch (prevState => {
            return !prevState
        })
    }
    function checkDetails(){
        props.data.child.map(data=>{
            data.attributes.map(info=>{
                if (info.name === 'Type' && info.value === props.data.childObject ){
                    data.attributes.map(resul=>{
                        if(resul.name ==='Condition' && resul.value === 'New' ){
                            NewAddress = data.price
                        }
                        if(resul.name ==='Condition' && resul.value === 'Old' ){
                            OldAddress = data.price
                        }
                    })
                }
            })
        })
        dataFetchN()
    }
    function addToCartOne(){
      console.log("Add to Cart",thisState.New);
      console.log("Address of new product",NewAddress);
      if(logStatus){
        const productAdded = fetch("https://hamzar.com/api/v1/basket/add-product" , {
            method: 'POST',
            withCredentials: true,
            cache: 'default',
            body: JSON.stringify({
              "url" : "https://hamzar.com/api/v1/products/145",
              "quantity" : 1
            }),
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            },
        }).then(res=>res.json())
            .then(json=>{
                console.log("returned response",json);
            })
      }
      else {
        setErrMsg(true);
      }

    }
    function addToCartSec(){
      console.log("Add to Cart",thisState.New);
      console.log("Address of new product",NewAddress);
      if(logStatus){
        const productAdded = fetch("https://hamzar.com/api/v1/basket/add-product" , {
            method: 'POST',
            withCredentials: true,
            cache: 'default',
            body: JSON.stringify({
              "url" : "https://hamzar.com/api/v1/products/145",
              "quantity" : 1
            }),
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            },
        }).then(res=>res.json())
            .then(json=>{
                console.log("returned response",json);
            })
      }
      else {
        setErrMsgSec(true);
      }

    }
    function buyNowOne(){
      console.log("Add to Cart",thisState.New);
      console.log("Address of new product",NewAddress);
      if(logStatus){
        const productAdded = fetch("https://hamzar.com/api/v1/basket/add-product" , {
            method: 'POST',
            withCredentials: true,
            cache: 'default',
            body: JSON.stringify({
              "url" : "https://hamzar.com/api/v1/products/145",
              "quantity" : 1
            }),
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            },
        }).then(res=>res.json())
            .then(json=>{
                console.log("returned response",json);
            })
      }
      else {
        setBuyNow(true);
      }

    }
    function buyNow2(){
      console.log("Add to Cart",thisState.New);
      console.log("Address of new product",NewAddress);
      if(logStatus){
        const productAdded = fetch("https://hamzar.com/api/v1/basket/add-product" , {
            method: 'POST',
            withCredentials: true,
            cache: 'default',
            body: JSON.stringify({
              "url" : "https://hamzar.com/api/v1/products/145",
              "quantity" : 1
            }),
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            },
        }).then(res=>res.json())
            .then(json=>{
                console.log("returned response",json);
            })
      }
      else {
        setBuyNowSec(true);
      }

    }
    const dataFetchN = async () => {
        console.log(NewAddress);
        if(NewAddress){
            const product = await fetch(NewAddress , {
                method: 'Get',
                withCredentials: true,
                cache: 'default',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json'
                },
            }).then(res=>res.json())
                .then(json=>{
                    NewPrice = json
                })
        }
        if(OldAddress){
            const product2 = await fetch(OldAddress , {
                method: 'Get',
                withCredentials: true,
                cache: 'default',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json'
                },
            }).then(res=>res.json())
                .then(json=>OldPrice = json)
        }
        setThisState({New:NewPrice, Old: OldPrice})

    }

    useEffect(()=>{
        checkDetails()
    },[controlSwitch])

    return (
        <div>
            <Grid container className={classes.new} direction='column' justify='center' alignItems='stretch'>
                <Grid item className={classes.info} >
                    <Fab variant="extended" aria-label="Delete" onClick={handleChangeTable} className={classes.fab}>
                    <NavigationIcon className={classes.extendedIcon} />
                      New
                    </Fab>
                    <Typography variant='h5' className={classes.objectPrice}><b>{thisState.New ? thisState.New.excl_tax + "  pkr" : ''} </b></Typography>
                </Grid>
                <Grid item className={classes.info}>
                    <Collapse in={controlSwitch} className={classes.info}>

                        {
                            thisState.New ?
                            <div className={classes.innerInformation} >
                                <div className={classes.listPrice}><Typography className={classes.toRight}>List Price : <b>{thisState.New ? thisState.New.incl_tax : ''}</b></Typography></div>
                                <div className={classes.save}><Typography className={classes.toRight}>Save : <b>{thisState.New ? thisState.New.tax : ''}</b> (30%)</Typography> </div>
                                <div className={classes.cartOption}>
                                  {
                                    errMsg ?
                                        <Alert severity="info">You have to LogIn first, Or if you dont have an account <a href="/sign-up">Sign Up</a></Alert>
                                      :
                                        <Button variant='contained' color='primary' onClick={addToCartOne} className={classes.cartButton}>
                                            Add to Cart
                                        </Button>
                                  }

                                </div>
                                <div className={classes.buyNow}>
                                  {
                                    buyNow ?
                                      <Alert severity="info">You have to LogIn first, Or if you dont have an account <a href="/sign-up">Sign Up</a></Alert>
                                    :
                                      <Button variant='contained' color='secondary' onClick={buyNowOne} className={classes.buyButton}>
                                          Buy Now
                                      </Button>
                                  }
                                </div>
                            </div>
                                :
                                <div className={classes.innerInformation}>
                                  <p >
                                    <Alert severity="info">Sorry no details available under this section.</Alert>
                                  </p>
                                </div>
                        }
                    </Collapse>
                </Grid>
            </Grid>
            <Divider className={classes.divider}/>
            <Grid container className={classes.used} direction='column' justify='center' alignItems='stretch'>
                <Grid item className={classes.info} >
                    <Fab variant="extended" aria-label="Delete" onClick={handleChangeTable} className={classes.fab}>
                        <NavigationIcon className={classes.extendedIcon} />
                        Used
                    </Fab>
                    <Typography variant='h5' className={classes.objectPrice}><b>{thisState.Old ? thisState.Old.excl_tax + "  pkr" : ''} </b></Typography>
                </Grid>
                <Grid item className={classes.info}>
                    <Collapse in={!controlSwitch} className={classes.info}>
                        {
                            thisState.Old ?
                            <div className={classes.innerInformation} >
                                <div className={classes.listPrice}><Typography className={classes.toRight}>List Price : <b>{thisState.Old ? thisState.Old.incl_tax : ''}</b></Typography></div>
                                <div className={classes.save}><Typography className={classes.toRight}>Save : <b>{thisState.Old ? thisState.Old.tax : ''}</b> (30%)</Typography> </div>
                                <div className={classes.cartOption}>
                                  {
                                    errMsgSec ?
                                        <Alert severity="info">You have to LogIn first</Alert>
                                      :
                                        <Button variant='contained' color='primary' onClick={addToCartSec} className={classes.cartButton}>
                                            Add to Cart
                                        </Button>
                                  }
                                </div>
                                <div className={classes.buyNow}>
                                  {
                                    buyNowSec ?
                                      <Alert severity="info">You have to LogIn first, Or if you dont have an account <a href="/sign-up">Sign Up</a></Alert>
                                    :
                                      <Button variant='contained' color='secondary' onClick={buyNow2} className={classes.buyButton}>
                                          Buy Now
                                      </Button>
                                  }
                                </div>
                            </div>
                                :
                                <div className={classes.innerInformation}>
                                  <p >
                                    <Alert severity="info">Sorry no details available under this section.</Alert>
                                  </p>
                                </div>
                        }
                    </Collapse>
                </Grid>
            </Grid>
        </div>
    );
}
