import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Fab from '@material-ui/core/Fab';
import Icon from '@material-ui/core/Icon';
import Button from '@material-ui/core/Button';
import {Paper} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width:"69%",
    },
    dense: {
        marginTop: theme.spacing(2),
    },
    fab: {
        margin: theme.spacing(3),
    },
    root: {
        flexGrow: 1,
    },
    paper: {
        marginLeft: "5%",
        marginTop: "2%",
        marginRight: "10%",
        padding: theme.spacing(2),
        textAlign: 'left',
        color: theme.palette.text.secondary,
    },
    field: {
        marginLeft: 50,
        marginTop: 50,
    },
    submitBtn: {
        width: "69%",
        marginLeft: 7,
        marginTop: 10,
    },
}));

export default function Settings() {
    const classes = useStyles();
    const [values, setValues] = React.useState({
        userName: 'Cat in the Hat',
        password: 'asdasd',
        email: 'this@that.com',
        number: '03XXXXX'
    });

    const [state, setState] = React.useState({
        userName: true,
        password: true,
        email: true,
        number: true
    });

    const handleClick = (name, editState) => event => {
        setState({ ...state, [name]: !editState });
    };

    return (
        <Paper className={classes.paper} >
            <form className={classes.container} noValidate autoComplete="off">
                <div className={classes.root}>
                    <h1 style={{textAlign: "center"}}>Settings</h1>
                        <Grid
                            container
                            direction="column"
                            justify="center"
                            alignItems="stretch"
                            className={classes.field}
                        >
                            <Grid>
                                <TextField
                                    id="outlined-name"
                                    label="Name"
                                    className={classes.textField}
                                    value={values.userName}
                                    margin="normal"
                                    variant="outlined"
                                    disabled={state.userName}
                                />
                                <Fab size="small" color="primary" aria-label="Edit" className={classes.fab} onClick={handleClick("userName", state.userName)}>
                                    <Icon>edit_icon</Icon>
                                </Fab>
                            </Grid>

                            <Grid>
                                <TextField
                                    id="outlined-password-input"
                                    label="Password"
                                    className={classes.textField}
                                    type="password"
                                    autoComplete="current-password"
                                    margin="normal"
                                    variant="outlined"
                                    disabled={state.password}
                                    value={values.password}
                                />
                                <Fab size="small" color="primary" aria-label="Edit" className={classes.fab} onClick={handleClick("password", state.password)}>
                                    <Icon>edit_icon</Icon>
                                </Fab>
                            </Grid>

                            <Grid>
                                <TextField
                                    id="outlined-email-input"
                                    label="Email"
                                    className={classes.textField}
                                    type="email"
                                    name="email"
                                    autoComplete="email"
                                    margin="normal"
                                    variant="outlined"
                                    disabled={state.email}
                                    value={values.email}
                                />
                                <Fab size="small" color="secondary" aria-label="Edit" className={classes.fab} onClick={handleClick("email", state.email)}>
                                    <Icon>edit_icon</Icon>
                                </Fab>
                            </Grid>

                            <Grid>
                                <TextField
                                    id="outlined-number"
                                    label="Number"
                                    type="text"
                                    className={classes.textField}
                                    margin="normal"
                                    variant="outlined"
                                    disabled={state.number}
                                    value={values.number}
                                />
                                <Fab size="small" color="primary" aria-label="Edit" className={classes.fab} onClick={handleClick("number", state.number)}>
                                    <Icon>edit_icon</Icon>
                                </Fab>
                            </Grid>

                            <Grid>
                                <Button
                                    fullWidth
                                    color="primary"
                                    aria-label="Full width outlined button group"
                                    className={classes.submitBtn}
                                >
                                    Submit
                                </Button>
                            </Grid>
                        </Grid>
                </div>
            </form>
        </Paper>
    );
}
