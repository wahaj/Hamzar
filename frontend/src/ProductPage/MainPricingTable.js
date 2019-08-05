import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import UpIcon from '@material-ui/icons/KeyboardArrowUp';
import { green } from '@material-ui/core/colors';
import ProductAssistence from './ProductAssistence'

function TabContainer(props) {
    const { children, dir } = props;

    return (
        <Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
            {children}
        </Typography>
    );
}

TabContainer.propTypes = {
    children: PropTypes.node.isRequired,
    dir: PropTypes.string.isRequired,
};

const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: theme.palette.background.paper,
        minWidth: 500,
        position: 'relative',
        minHeight: 200,
    },
    fab: {
        position: 'absolute',
        bottom: theme.spacing(2),
        right: theme.spacing(2),
    },
    fabGreen: {
        color: theme.palette.common.white,
        backgroundColor: green[500],
        '&:hover': {
            backgroundColor: green[600],
        },
    },
}));

export default function MainPricingTable(props) {
    const classes = useStyles();
    const theme = useTheme();
    const [value, setValue] = React.useState(0);
    const [controlSwitch, setControlSwitch] = React.useState(true);

    function handleChange(event, newValue) {
        setValue(newValue);
    }
    function handleChangeTable() {
        setControlSwitch (prevState => {
            return !prevState
        })
    }
    function handleChangeIndex(index) {
        setValue(index);
    }

    const transitionDuration = {
        enter: theme.transitions.duration.enteringScreen,
        exit: theme.transitions.duration.leavingScreen,
    };

    const fabs = [
        {
            color: 'primary',
            className: classes.fab,
            icon: <AddIcon />,
            label: 'Add',
        },
        {
            color: 'secondary',
            className: classes.fab,
            icon: <EditIcon />,
            label: 'Edit',
        },
        {
            color: 'inherit',
            className: clsx(classes.fab, classes.fabGreen),
            icon: <UpIcon />,
            label: 'Expand',
        },
    ];

    return (
        <div className={classes.root}>
            <AppBar position="static" color="default">
                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    variant="fullWidth"
                >
                    <Tab label="Paper Back"  />
                    <Tab label="Hard Cover" />
                    <Tab label="Loose Leaf" />
                </Tabs>
            </AppBar>
            <SwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={value}
                onChangeIndex={handleChangeIndex}
            >

                <TabContainer dir={theme.direction}>
                    <ProductAssistence object={controlSwitch} handleChange={handleChangeTable} />
                </TabContainer>

                <TabContainer dir={theme.direction}>
                    <ProductAssistence object={controlSwitch} handleChange={handleChangeTable} />
                </TabContainer>

                <TabContainer dir={theme.direction}>
                    <ProductAssistence object={controlSwitch} handleChange={handleChangeTable} />
                </TabContainer>

            </SwipeableViews>
        </div>
    );
}
