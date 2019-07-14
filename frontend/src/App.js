import React, { useState, useEffect } from 'react';
import Home from "./HomePage/home";
import ProfilePage from "./ProfilePage/profilePage";
import {BrowserRouter, Route} from "react-router-dom";
import './App.css';
import MyNavbar from "./Navbars/Navbar/mynavbar";
import MenuBar from "./Navbars/Menubar/menubar";
import Footer from "./Navbars/Footer/BottomBar"
import LoginPage from "./LoginPage/LoginPage";
import SignupPage from "./SignupPage/SignupPage";


class App extends React.Component {
    constructor(){
        super()
        this.state={loggedIn:false, username: null }
    }
    componentDidMount(){
        if (this.state.loggedIn) {
        fetch('http://192.168.18.10:8000/api/auth/verify_token', {
            headers: {
                'Content-Type' : 'application/json'
            },
            method: 'POST',
            body: JSON.stringify({token : localStorage.getItem('token')})
        })
            .then(res => res.json())
            .then(json => {
                this.setState({ username: json.user.email });
            });
    }
    };
    render() {
        return (
            <BrowserRouter>
                <MyNavbar cartSize="1"/>
                <MenuBar/>
                <Route exact path='/' component={Home}/>
                <Route path='/profile' component={ProfilePage}/>
                <Route path='/logIn' component={LoginPage}/>
                <Route path='/signUp' component={SignupPage}/>
                <Footer/>
            </BrowserRouter>
        );
    }
}

export default App;
