import React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import OrderHistoryIcon from '@material-ui/icons/History';
import PersonPinIcon from '@material-ui/icons/Settings';
import Settings from "./settings";
import OrderHistory from "./orderHistory";

function TabContainer(props) {
    return (
        <Typography component="div" style={{ padding: 8 * 3 }}>
            {props.children}
        </Typography>
    );
}

TabContainer.propTypes = {
    children: PropTypes.node.isRequired,
};

function LinkTab(props) {
    return (
        <Tab
            component="a"
            onClick={event => {
                event.preventDefault();
            }}
            {...props}
        />
    );
}

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
        maxWidth: "80%",
    },
});

export default function IconLabelTabs() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    function handleChange(event, newValue) {
        setValue(newValue);
    }

    return (
        <div className={classes.root}>
            <Tabs
                value={value}
                onChange={handleChange}
                variant="fullWidth"
                indicatorColor="primary"
                textColor="primary"
            >
                <Tab icon={<PersonPinIcon />} label="Profile Settings" />
                <Tab icon={ <OrderHistoryIcon/>}  label="Order History" />
            </Tabs>

            {value === 0 && <TabContainer><Settings/></TabContainer>}
            {value === 1 && <TabContainer><OrderHistory/></TabContainer>}
        </div>
    );
}