import React from "react";
import TextField from "@material-ui/core/TextField";
import {makeStyles} from "@material-ui/core";
import Icon from "@material-ui/core/Icon";
import Fab from "@material-ui/core/Fab";
import Store from "../History/Store";
import {useEffect} from 'react';


const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: "30%"
    },
    fab: {
        margin: theme.spacing(3),
    },
}));

export default function AddressBar() {
    const classes = useStyles();
    const [values, setValues] = React.useState({});
    const [state, setState] = React.useState({
        address: true,
        phoneNumber : true,
        name:true,
    });
    useEffect(()=>{
      setValues({
        address : Store.getAddress(),
        phoneNumber : Store.getPhoneNum(),
        name : Store.getName(),
      })
    },[])
    const handleClick = (name, editState) => event => {
        setState({ ...state, [name]: !editState });
    };
    const handleChangeName = name => event => {
        setValues({ ...values, [name]: event.target.value });
        Store.setName(event.target.value);
    };

    const handleChangePN = name => event => {
        setValues({ ...values, [name]: event.target.value });
        Store.setPhoneNum(event.target.value);
    };

    const handleChangeAddress = name => event => {
        setValues({ ...values, [name]: event.target.value });
        Store.setAddress(event.target.value);
    };
    return(
        <div>
            <form className={classes.container} noValidate autoComplete="off">

                <TextField
                    id="outlined-multiline-flexible"
                    label="Name"
                    multiline
                    rowsMax="4"
                    value={values.name}
                    onChange={handleChangeName('name')}
                    className={classes.textField}
                    margin="normal"
                    helperText="confirm your name"
                    variant="outlined"
                    disabled={false}
                    required
                />

                <TextField
                    id="outlined-multiline-flexible"
                    label="Phone Number"
                    multiline
                    rowsMax="4"
                    value={values.phoneNumber}
                    onChange={handleChangePN('phoneNumber')}
                    className={classes.textField}
                    margin="normal"
                    helperText="confirm contact info."
                    variant="outlined"
                    disabled={false}
                    required
                />


                <TextField
                    id="outlined-multiline-flexible"
                    label="Address"
                    multiline
                    rowsMax="4"
                    value={values.address}
                    onChange={handleChangeAddress('address')}
                    className={classes.textField}
                    margin="normal"
                    helperText="confirm address"
                    variant="outlined"
                    disabled={false}
                    required
                />
            </form>
        </div>
    )
}
