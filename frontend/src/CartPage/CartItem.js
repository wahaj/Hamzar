import React, {useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import GridList from '@material-ui/core/GridList';
import Container from "@material-ui/core/Container";


import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";

import Fab from "@material-ui/core/Fab";
import AddIcon from '@material-ui/icons/Add';
import MinIcon from '@material-ui/icons/Minimize';
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Store from "../History/Store";
import History from "../History/history";



const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        width: '100%',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
        background: "#73AD21",
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        padding: 0,
        margin: 0 ,
    },
    table: {
        background: theme.palette.common.white,
        borderColor: "#90a4ae",
        border: '3px solid'
    },
    bucketItemDetailHead: {
        width: '50%',
    },
    bucketItemPriceHead:{
        width: '20%',
    },
    bucketItemQuantityHead:{
        width: '30%',
    },
    bucketItemDetail: {
        width: '50%',
        height: 120,
        padding: 0,
    },
    bucketItemPrice:{
        width: '20%',
        height: 120,
        verticalAlign: 'top',
        margin: 0,
        padding: 0,

    },
    bucketItemQuantity:{
        width: '30%',
        height: 120,
        verticalAlign: 'top',
        margin: 0,
        padding: 0,
        paddingTop: 10,
    },
    imageBlock: {
        alignContent: 'center',
        overflow: 'hidden',
        height: '100%',
        width: '100%',
        padding: 5,
    },
    imageContainer:{
        width: '80%',
        height: '86%',
        margin: 0,
        padding: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
    },
    productImage: {
        width:'100%',
        height: '100%',
        borderRadius: 10,
    },


    productDetail: {
        display: 'flex',
        flexGrow: 1,
    },
    productDetailContainer: {
        display: 'flex',
        flexGrow: 1,
        padding: 0,
        margin: 0,
        alignContent: 'flex-start',
        alignItems: 'flex-start',
    },
    detailContainer: {
        display: 'flex',
        flexGrow:1,
        alignItems: 'flex-end',
        height: 40,
        margin: 0,
        verticalAlign: 'bottom'
    },
    subDetailContainer: {
        display: 'flex',
        flexGrow:1,
        alignItems: 'flex-end',
        height: 20,
    },
    title: {
    },
    subDetail: {
        color: 'gray'
    },
    margin: {
        marginTop: 6,
        marginRight: 4,
    },
    textField: {
    },
    test: {
        border: '1px solid red',
        alignItems: 'center',
    },
}));

export default function CartItem(props) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [loading, setLoading] = React.useState(false)
    const {cdata,pdata,bdata,popOpen} = props;
    const [products, setValues] = React.useState({
        bookName: "",
        author: "",
        currency: "",
        price: "",
        type: "",
        condition: "",
        quantity: "",
        image: "",
    });
    const insert = function insert(main_string, ins_string, pos) {
       if(typeof(pos) == "undefined") {
        pos = 0;
        }
       if(typeof(ins_string) == "undefined") {
        ins_string = '';
        }
      return main_string.slice(0, pos) + ins_string + main_string.slice(pos);
    }

    useEffect(()=> {
        const fm = async () => {
            const price = await fetch(insert(cdata.price,'s',4), {
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                },
                method: 'GET',
                credentials: "include"
            })
            const priceJSON = await price.json()
            var author;
            if(pdata.attributes){
              if(pdata.attributes[0]){
                if(pdata.attributes[0].value){
                  author = pdata.attributes[0].value;
                }
              }else{
                author = "unknown"
              }
            }else{
              author = "unknown"
            }
            setValues({
                bookName: pdata.title,
                author: author,
                price: priceJSON.incl_tax,
                type: cdata.attributes[1].value,
                condition: cdata.attributes[0].value,
                quantity: bdata.quantity,
                currency: priceJSON.currency,
                image: pdata.images[0].original
            })
        }
        fm();
    }
    ,[loading,products.price])




    function increaseQuantity() {

        fetch(insert(cdata.availability,'s',4), {
            headers: {
                'Content-Type': 'application/json',
                Accept:'application/json',
            },
            method: 'GET',
            withCredentials: true,
            credentials: "include",

        })
            .then(res => res.json())
            .then(
                (json)=>{
                    if(json.is_available_to_buy){

                      fetch(insert(bdata.url,'s',4), {
                            method: 'PATCH',
                            body: JSON.stringify({"quantity" : products.quantity + 1}),
                            headers: {
                                'Content-Type': 'application/json',
                                Accept:'application/json',
                            }
                        }).then(()=>{
                          setValues((prev)=>
                              setValues({
                                  ...products,
                                  quantity: prev.quantity+1
                              })
                          )
                        })

                    }
                    else{
                        popOpen();
                    }
                }
            )
            .catch((err)=>console.log(err));
    }
    function decreaseQuantity() {
      if(products.quantity > 0){
        fetch(insert(bdata.url,'s',4), {
              method: 'PATCH',
              body: JSON.stringify({"quantity" : products.quantity - 1}),
              headers: {
                  'Content-Type': 'application/json',
                  Accept:'application/json',
              }
          }).then(()=>{
            setValues((prev)=>
                setValues({
                    ...products,
                    quantity: prev.quantity-1
                })
            )
          })

      }

        //SEND FETCH CAL TO UPDATE ACCOUNT.
    }

    const headRows = [
        { id: 'name', numeric: false, label: 'Basket Item' },
        { id: 'price', numeric: true, label: 'Price' },
        { id: 'Quantity', numeric: true, label: 'Quantity' },
    ];

    return (
        <TableRow style={{padding:0}}>
            <TableCell className={classes.bucketItemDetail} align={'left'} >
                <GridList cellHeight={200} cols={3} spacing={0} >
                    <Grid justify='center' alignItems='center' className={classes.imageBlock} spacing={0} item cols={1} rows={1} container>
                        <Container fixed className={classes.imageContainer}>
                            <img
                                className={classes.productImage}
                                src={products.image}
                            />
                        </Container>
                    </Grid>
                    <Grid className={classes.productDetail} item spacing={0} cols={2} rows={1} style={{paddingTop: 10}}>
                        <Grid container alignItems={'flex-start'} className={classes.productDetailContainer} spacing={0} >
                            <Grid item xs={12} className={classes.detailContainer} >
                                <Typography  className={classes.title} variant="h4" displayInline>
                                    {products.bookName}
                                </Typography>
                            </Grid>
                            <Grid item xs={12} className={classes.detailContainer} >
                                <Typography  className={classes.subDetail} variant="h6" displayInline gutterBottom>
                                    &nbsp;by {products.author}
                                </Typography>
                            </Grid>
                            <Grid xs={8} item className={classes.subDetailContainer}>
                                <Grid item xs={6}>
                                    <Typography className={classes.subDetail} variant="caption" >
                                        Type:
                                    </Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography className={classes.subDetail} variant="caption" display="block" >
                                        &nbsp; &nbsp;{products.type}
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Grid xs={8} item className={classes.subDetailContainer}>
                                <Grid item xs={6}>
                                    <Typography className={classes.subDetail} variant="caption" >
                                        Condition:
                                    </Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography className={classes.subDetail} variant="caption" display="block" >
                                        &nbsp; &nbsp;{products.condition}
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </GridList>
            </TableCell>
            <TableCell className={classes.bucketItemPrice} align={'right'}>
                <Grid item xs={12} style={{marginTop: 10}}>
                    <Typography variant="h6" >
                        {products.currency + " " + products.price}
                    </Typography>
                </Grid>
            </TableCell>
            <TableCell style={{padding:0, paddingTop: 10}} className={classes.bucketItemQuantity}  align={'center'} >
                <Grid container alignItems={'center'} direction={'row-reverse'}  >
                    <Grid item xs={3} style={{paddingBottom: 5}}>
                        <Fab size="small" color="primary" aria-label="add" className={classes.margin} onClick={decreaseQuantity} >
                            <MinIcon style={{paddingBottom: 13}} />
                        </Fab>
                    </Grid>
                    <Grid item xs={3}>
                        <TextField
                            id="outlined-bare"
                            value={products.quantity}
                            margin="none"
                            variant="outlined"
                        />
                    </Grid>
                    <Grid  item xs={3} style={{paddingBottom: 5}}>
                        <Fab size="small" color="primary" aria-label="add" className={classes.margin} style={{paddingBottom: 4}}>
                            <AddIcon style={{paddingTop: 3}} onClick={increaseQuantity} />
                        </Fab>
                    </Grid>
                </Grid>
            </TableCell>
        </TableRow>
    );
}
