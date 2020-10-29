import React, {useEffect} from 'react';
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
import Alert from '@material-ui/lab/Alert';
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
        minWidth: 300,
        position: 'relative',
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
var newHardBack = null;
var oldHardBack = null;
var newPaperBack = null;
var oldPaperBack = null;
var oldPaperPrice = null;
var newPaperPrice = null;
var oldHardPrice = null;
var newHardPrice = null;
export default function MainPricingTable(props) {
    const classes = useStyles();
    const theme = useTheme();
    const [value, setValue] = React.useState(0);
    const [loading,setLoading] = React.useState(true);
    const [state,setState] = React.useState({loading: false})
    const [controlSwitch, setControlSwitch] = React.useState(true);
    const [values, setValues] = React.useState({oldPaper: 0 , newPaper:0 , oldHard:0,newHard:0})


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
    function setPriceValues(){
        setLoading(true);
        newHardBack = null
        newPaperBack = null
        oldHardBack = null
        oldPaperBack = null
        oldPaperPrice = null
        newPaperPrice = null
        oldHardPrice = null
        newHardPrice = null
        props.object.children.map(data=>{
            data.attributes.map(info=>{
                if (info.name === 'Type' && info.value === 'Hardback' ){
                    data.attributes.map(resul=>{
                        if(resul.name ==='Condition' && resul.value === 'New' ){
                            newHardBack = data.price
                        }
                        if(resul.name ==='Condition' && resul.value === 'Old' ){
                            oldHardBack = data.price
                        }
                    })
                }
                if (info.name === 'Type' && info.value === 'Paperback' ){
                    data.attributes.map(resul=>{
                        if(resul.name ==='Condition' && resul.value === 'New' ){
                            newPaperBack = data.price
                        }
                        if(resul.name ==='Condition' && resul.value === 'Old' ){
                            oldPaperBack = data.price
                        }
                    })
                }
            })
        })
        dataFetchN()
        console.log("datafetched");
        setState({loading : false});
        setValue({oldPaper: oldPaperPrice , newPaper:newPaperPrice , oldHard:oldHardPrice , newHard:newHardPrice});
        setLoading(false);
    }
    const dataFetchN = async () => {
        if(oldPaperBack) {
            const product = await fetch(oldPaperBack, {
                method: 'Get',
                withCredentials: true,
                cache: 'default',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json'
                },
            }).then(res => res.json())
                .then(json => oldPaperPrice = json)
        }
        if(newPaperBack) {
            const product2 = await fetch(newPaperBack, {
                method: 'Get',
                withCredentials: true,
                cache: 'default',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json'
                },
            }).then(res => res.json())
                .then(json => newPaperPrice = json)
        }
        if(oldHardBack) {
            const product3 = await fetch(oldHardBack, {
                method: 'Get',
                withCredentials: true,
                cache: 'default',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json'
                },
            }).then(res => res.json())
                .then(json => oldHardPrice = json)
        }
        if(newHardBack) {
            const product4 = await fetch(newHardBack, {
                method: 'Get',
                withCredentials: true,
                cache: 'default',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json'
                },
            }).then(res => res.json())
                .then(json => newHardPrice = json)
        }

    }

    const transitionDuration = {
        enter: theme.transitions.duration.enteringScreen,
        exit: theme.transitions.duration.leavingScreen,
    };
    useEffect(()=>{
    },[])
    if(state.loading == false){
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
                      <Tab key='0' label="Hard Cover" />
                      <Tab key='1' label="Paper Back" />


                  </Tabs>
              </AppBar>
              <SwipeableViews
                  axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                  index={value}
                  onChangeIndex={handleChangeIndex}
              >
                  <TabContainer value={value} key='0' index={0} dir={theme.direction}>
                      <ProductAssistence object={controlSwitch}  data={{childObject: 'Hardback' , child : props.object.children , display: loading }} handleChange={handleChangeTable} />
                  </TabContainer>
                  <TabContainer value={value} key='1' index={1} dir={theme.direction}>
                      <ProductAssistence object={controlSwitch}  data={{childObject: 'Paperback' , child : props.object.children , display: loading }} handleChange={handleChangeTable} />
                  </TabContainer>
              </SwipeableViews>
          </div>
      );
    }
    else {
      return (
        <div className={classes.root}>
          <p style={{margin:'120px 120px 120px 120px', padding:'120px 120px 120px 120px'}}>
            <Alert severity="info">Fetching Price information. Please Wait</Alert>
          </p>
        </div>
      )
    }

}
