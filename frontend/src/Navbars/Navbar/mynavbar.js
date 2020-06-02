import React, {useEffect} from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import ShoppingCart from '@material-ui/icons/AddShoppingCart';
import { Link } from 'react-router-dom'
import History from '../../History/history'
import Store from '../../History/Store'
import logo from "./logo.png"
import TextField from '@material-ui/core/TextField';
import { ButtonBase } from '@material-ui/core';

const useStyles = makeStyles(theme =>({

    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    search: {
        flexGrow: 1,
        borderRadius: theme.shape.borderRadius,
        backgroundColor: '#FFFFFF',
        '&:hover': {
            backgroundColor: '#FFFFFF',
        },
        marginRight: theme.spacing(30),
        marginLeft: 0,
        height: 'auto',
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: 'auto',
        },
    },
    searchIcon: {
        width: 'auto',
        height: '100%',
        display : 'none'
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 7),
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: 200,
        },
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
    },
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
    noShadow: {
    }
}));

export default function PrimarySearchAppBar(props) {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
    const logStat = Store.getLogStatus();
    const [logState, setLogState] = React.useState(logStat);
    const logStatus = logState;



    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    function handleProfileMenuOpen(event) {
        setAnchorEl(event.currentTarget);
    }

    function handleMobileMenuClose() {
        setMobileMoreAnchorEl(null);
    }

    function handleMenuClose() {
        setAnchorEl(null);
        handleMobileMenuClose();
    }

    function handleLogIn(event) {

        setAnchorEl(null);
        handleMobileMenuClose();
        History.push('/log-in');
    }

    function handleLogOut(event) {
        Store.setLogStatus(false)
        setLogState(false)
        setLogState(null)
        setAnchorEl(null);
        handleMobileMenuClose();
        History.push('/');
    }

    function openCart (){
        History.push('/cart');
    }

    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            id={menuId}
            keepMounted
            transformOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >

            { logStatus && <MenuItem onClick={handleMenuClose}><Link to={'/profile'}>Profile</Link></MenuItem>}

            {(logStatus == false) ?
                <MenuItem onClick={handleLogIn}>Login</MenuItem> :
                <MenuItem onClick={handleLogOut}>LogOut</MenuItem>
            }

        </Menu>
    );

    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            { logStatus && <MenuItem onClick={handleMenuClose}>Cart</MenuItem>}
            { logStatus && <MenuItem onClick={handleMenuClose}><Link to={'/profile'}>Profile</Link></MenuItem>}

            {(logStatus == false) ?
                <MenuItem onClick={handleLogIn}>LogIn</MenuItem> :
                <MenuItem onClick={handleLogOut}>LogOut</MenuItem>
            }

        </Menu>
    );
    useEffect(() => {
        setLogState(Store.getLogStatus)
    }, [Store.getLogStatus()]);

    return (
        <div className={classes.grow} style={{boxShadow: "none"}}>
            <AppBar style={{boxShadow: "none"}} position="static">
                <Toolbar style={{boxShadow: "none"}}>
                    <Typography className={classes.title} variant="h6" noWrap>
                        <Link style={{color: "White", textDecoration: "none"}} to={'/'}>
                            <div style={{height:70,display: "flex" , alignItems: "center"}}>
                                <img src={logo} style={{height: "80%", width: "auto"}}></img>
                            </div>
                        </Link>
                    </Typography>
                    <div className={classes.search}>
                        <div style={{display : "inline",width : '100%' ,height: '100%'}}>
                          <TextField id="outlined-basic" style={{width : '100%',height:'100%'}} label="Search" variant="outlined" />
                        </div>
                        <div className={classes.searchIcon}>
                            <ButtonBase href={'../../SearchResults/SearchResults.js/' + 'the' }>
                                <SearchIcon />
                            </ButtonBase>
                        </div>
                    </div>

                    <div style={{minWidth: (logStatus)?"6%":"3%"}}>
                        <IconButton
                            edge="end"
                            aria-label="Account of current user"
                            aria-controls={menuId}
                            aria-haspopup="true"
                            onClick={handleProfileMenuOpen}
                            color="inherit"
                        >
                            <AccountCircle />
                        </IconButton>

                        {(logStatus) &&
                            <IconButton aria-label="Show cart content" color="inherit" onClick={openCart}>
                                <Badge badgeContent={1} color="secondary">
                                    <ShoppingCart/>
                                </Badge>
                            </IconButton>
                        }
                    </div>

                </Toolbar>
            </AppBar>
            {renderMobileMenu}
            {renderMenu}
        </div>
    );
}
