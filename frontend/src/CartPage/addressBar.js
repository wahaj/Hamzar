import React from "react";
import TextField from "@material-ui/core/TextField";
import {makeStyles} from "@material-ui/core";
import Icon from "@material-ui/core/Icon";
import Fab from "@material-ui/core/Fab";

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
    const handleClick = (name, editState) => event => {
        setState({ ...state, [name]: !editState });
    };
    const handleChange = name => event => {
        setValues({ ...values, [name]: event.target.value });
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
                    onChange={handleChange('name')}
                    className={classes.textField}
                    margin="normal"
                    helperText="confirm your name"
                    variant="outlined"
                    disabled={state.name}
                />
                <Fab
                    size="small"
                    color="primary"
                    aria-label="Edit"
                    className={classes.fab}
                    onClick={handleClick("name", state.name)}
                >
                    <Icon>edit_icon</Icon>
                </Fab>

                <TextField
                    id="outlined-multiline-flexible"
                    label="Phone Number"
                    multiline
                    rowsMax="4"
                    value={values.phoneNumber}
                    onChange={handleChange('phoneNumber')}
                    className={classes.textField}
                    margin="normal"
                    helperText="confirm contact info."
                    variant="outlined"
                    disabled={state.phoneNumber}
                />
                <Fab
                    size="small"
                    color="primary"
                    aria-label="Edit"
                    className={classes.fab}
                    onClick={handleClick("phoneNumber", state.phoneNumber)}
                >
                    <Icon>edit_icon</Icon>
                </Fab>

                <TextField
                    id="outlined-multiline-flexible"
                    label="Address"
                    multiline
                    rowsMax="4"
                    value={values.multiline}
                    onChange={handleChange('multiline')}
                    className={classes.textField}
                    margin="normal"
                    helperText="confirm address"
                    variant="outlined"
                    disabled={state.address}
                />
                <Fab
                    size="small"
                    color="primary"
                    aria-label="Edit"
                    className={classes.fab}
                    onClick={handleClick("address", state.address)}
                >
                    <Icon>edit_icon</Icon>
                </Fab>
            </form>
        </div>
    )
}
