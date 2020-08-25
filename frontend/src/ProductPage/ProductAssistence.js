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
import Store from '../History/Store';
import History from '../History/history';
import axios from "axios";

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
    spinner : {
      marginTop : '2%',
      marginBottom : '2%',
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
    const [newPrice,setNewPrice] = React.useState(null)
    const [loadingNew,setLoadingNew] = React.useState(true);
    const [loadingOld,setLoadingOld] = React.useState(true);
    const [oldPrice,setOldPrice] = React.useState(null)
    const [controlSwitch, setControlSwitch] = React.useState(true);
    const [errMsg,setErrMsg] = React.useState(false);
    const [errMsgSec,setErrMsgSec] = React.useState(false);
    const [buyNow,setBuyNow] = React.useState(false);
    const [buyNowSec,setBuyNowSec] = React.useState(false);
    const logStat = Store.getLogStatus();
    const [loadingBN,setLoadingBN] = React.useState(false);
    const [loadingAC,setloadingAC] = React.useState(false);
    const [reRender,setReRender] = React.useState(0);
    const [logState, setLogState] = React.useState(logStat);
    const logStatus = logState;
    const [oldAddress,setOldAddress] =React.useState("")
    const [newAddress,setNewAddress] =React.useState("")
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
                        if(resul.name =='Condition' && resul.value == 'New' ){
                            setNewAddress(data.price)
                        }
                        if(resul.name =='Condition' && resul.value == 'Old' ){
                            setOldAddress(data.price)
                        }
                    })
                }
            })
        })
        const any = dataFetchN();

    }
    function addToCartOne(){
      setloadingAC(true);

      if(true){
        //axios.post('https://hamzar.com/api/v1/products/145',"1");
        const productAdded = fetch("https://hamzar.com/api/v1/basket/add-product/" , {
            method: 'POST',
            withCredentials: true,
            cache: 'default',
            body: JSON.stringify({
              "url" : insert(newAddress,'s',4).substring(0, newAddress.length - 5),
              "quantity" : '1',
            }),
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            },
        }).then(res=>res.json())
            .then(json=>{
                console.log("returned response",json);
                setloadingAC(false);
                Store.setCartNo(json.id);
            })
      }
      else {
        setBuyNow(true);
      }
      window.location.reload();
    }
    function addToCartSec(){
      setloadingAC(true);

      if(true){
        const productAdded = fetch("https://hamzar.com/api/v1/basket/add-product/" , {
            method: 'POST',
            withCredentials: true,
            cache: 'default',
            body: JSON.stringify({
              "url" : insert(oldAddress,'s',4).substring(0, oldAddress.length - 5),
              "quantity" : '1',
            }),
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            },
        }).then(res=>res.json())
            .then(json=>{
                console.log("returned response",json);
                setloadingAC(false);
                Store.setCartNo(json.id);
            })
      }
      else {
        setBuyNowSec(true);
      }
      window.location.reload();
    }
    function buyNowOne(){
      console.log("Address of new product",newAddress);
      setLoadingBN(true)
      if(newAddress){
        //axios.post('https://hamzar.com/api/v1/products/145',"1");
        const productAdded = fetch("https://hamzar.com/api/v1/basket/add-product/" , {
            method: 'POST',
            withCredentials: true,
            cache: 'default',
            body: JSON.stringify({
              "url" : insert(newAddress,'s',4).substring(0, newAddress.length - 5),
              "quantity" : '1',
            }),
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            },
        }).then(res=>res.json())
            .then(json=>{
                console.log("returned response",json);
                setLoadingBN(false);
                Store.setCartNo(json.id);
                History.push('/cart');
            })
      }
      else {
        setBuyNow(true);
      }

    }
    function buyNow2(){
      setLoadingBN(true)
      if(true){
        const productAdded = fetch("https://hamzar.com/api/v1/basket/add-product/" , {
            method: 'POST',
            withCredentials: true,
            cache: 'default',
            body: JSON.stringify({
              "url" : insert(oldAddress,'s',4).substring(0, oldAddress.length - 5),
              "quantity" : '1',
            }),
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            },
        }).then(res=>res.json())
            .then(json=>{
                console.log("returned response",json);
                setLoadingBN(false);
                Store.setCartNo(json.id);
                History.push('/cart');
            })
      }
      else {
        setBuyNowSec(true);
      }

    }
    const dataFetchN = async () => {
      console.log("dataFetchCalled",newAddress,newPrice,oldAddress,oldPrice);
        if(newAddress && newPrice==null){
            const product = await fetch(insert(newAddress,'s',4) , {
                method: 'Get',
                withCredentials: true,
                cache: 'default',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json'
                },
            }).then(res=>res.json())
            .catch(res=>setLoadingNew(false))
                .then(json=>{
                    NewPrice = json
                    setThisState({New : json})
                    setNewPrice(json)
                    setLoadingNew(false);
                })
                .catch(res=>setLoadingNew(false))
        }
        else{
          setLoadingNew(false);
        }
        if(oldAddress && oldPrice==null){
            const product2 = await fetch(insert(oldAddress,'s',4), {
                method: 'Get',
                withCredentials: true,
                cache: 'default',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json'
                },
            }).then(res=>res.json())
            .catch(res=>setLoadingOld(false))
                .then(json=>{
                  OldPrice = json
                  setThisState({Old : json})
                  setOldPrice(json)
                  setLoadingOld(false);
                })
                .catch(res=>setLoadingOld(false))
        }
        else {
          setLoadingOld(false);
        }

        //const value=!reRender
        //setReRender(value)
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
        checkDetails()


    },[controlSwitch,loadingOld,loadingNew,newAddress,oldAddress])

    return (
        <div>
            <Grid container className={classes.new} direction='column' justify='center' alignItems='stretch'>
                <Grid item className={classes.info} >
                    <Fab variant="extended" aria-label="Delete" onClick={handleChangeTable} className={classes.fab}>
                    <NavigationIcon className={classes.extendedIcon} />
                      New
                    </Fab>
                    <Typography variant='h5' className={classes.objectPrice}><b>{newPrice ? newPrice.excl_tax + "  pkr" : ''} </b></Typography>
                </Grid>
                <Grid item className={classes.info}>
                    <Collapse in={controlSwitch} className={classes.info}>

                        {
                            loadingNew ?
                              <div className={classes.spinner}>
                                <CircularProgress color='white'/>
                              </div>
                            :
                              (newPrice ?
                              <div className={classes.innerInformation} >
                                  <div className={classes.listPrice}><Typography className={classes.toRight}>List Price : <b>{newPrice ? newPrice.incl_tax : ''}</b></Typography></div>
                                  <div className={classes.save}><Typography className={classes.toRight}>Save : <b>{newPrice ? newPrice.tax : ''}</b> (0%)</Typography> </div>
                                  <div className={classes.cartOption}>
                                  <Button variant='contained' color='primary' onClick={addToCartOne} className={classes.cartButton}>
                                      {
                                        loadingAC ?
                                          <div className={classes.spinner}>
                                            <CircularProgress color='white'/>
                                          </div>
                                        :
                                          'Add to Cart'
                                      }
                                  </Button>
                                  </div>
                                  <div className={classes.buyNow}>
                                    <Button variant='contained' color='secondary' onClick={buyNowOne} className={classes.buyButton}>
                                      {
                                        loadingBN ?
                                        <div className={classes.spinner}>
                                          <CircularProgress color='white'/>
                                        </div>
                                        :
                                        'Buy Now'
                                      }
                                    </Button>
                                  </div>
                              </div>
                              :
                              <div className={classes.innerInformation}>
                                <p >
                                  <Alert severity="info">Sorry no details available under this section.</Alert>
                                </p>
                              </div>)
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
                    <Typography variant='h5' className={classes.objectPrice}><b>{oldPrice ? oldPrice.excl_tax + "  pkr" : ''} </b></Typography>
                </Grid>
                <Grid item className={classes.info}>
                    <Collapse in={!controlSwitch} className={classes.info}>
                        {
                            oldPrice ?
                            <div className={classes.innerInformation} >
                                <div className={classes.listPrice}><Typography className={classes.toRight}>List Price : <b>{oldPrice ? oldPrice.incl_tax : ''}</b></Typography></div>
                                <div className={classes.save}><Typography className={classes.toRight}>Save : <b>{oldPrice ? oldPrice.tax : ''}</b> (0%)</Typography> </div>
                                <div className={classes.cartOption}>
                                  <Button variant='contained' color='primary' onClick={addToCartSec} className={classes.cartButton}>
                                    {
                                      loadingAC ?
                                        <div className={classes.spinner}>
                                          <CircularProgress color='white'/>
                                        </div>
                                      :
                                        'Add to Cart'
                                    }
                                  </Button>
                                </div>
                                <div className={classes.buyNow}>
                                  <Button variant='contained' color='secondary' onClick={buyNow2} className={classes.buyButton}>
                                      {
                                        loadingBN ?
                                        <div className={classes.spinner}>
                                          <CircularProgress color='white'/>
                                        </div>
                                        :
                                        'Buy Now'
                                      }
                                  </Button>
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
