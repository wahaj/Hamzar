import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Icon from '@material-ui/core/Icon';


const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        flexGrow: '1',
        width: "100%"
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        maxWidth: "100%"
    },
    dense: {
        marginTop: theme.spacing(2),
    },
    rightIcon: {
        marginLeft: theme.spacing(1),
    },
}));

export default function QuestionQuery() {
    const classes = useStyles();
    const [values, setValues] = React.useState({
        name: 'Cat in the Hat',
        age: '',
        multiline: 'Controlled',
    });


    return (
        <form className={classes.container} noValidate autoComplete="off">
            <TextField
                id="outlined-full-width"
                label="Label"
                style={{ margin: 8 }}
                placeholder="Be Bold"
                fullWidth
                multiline
                rowsMax="4"
                margin="normal"
                variant="outlined"
                InputLabelProps={{
                    shrink: true,
                }}
            />
            <Icon className={classes.rightIcon} color="primary">send</Icon>
        </form>
    );
}