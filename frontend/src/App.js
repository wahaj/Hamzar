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
import FAQPage from "./InformationPages/FAQPage";


class App extends React.Component {
    constructor(){
        super()
        this.state={loggedIn:false,
            firstName: null,
            lastName: null,
            id:null,
            email: null,
            phoneNumber:null
        }
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
                localStorage.setItem('token', json.token);
            });
    }
    };
    handleSetState(data){
        this.setState({
            id: data.user.id,
            laggedIn:true,
            firstName: data.user.firstName,
            lastName: data.user.lastName,
            email: data.user.email,
            phoneNumber:data.user.phone_number
        })
    }
    render() {
        return (
            <BrowserRouter>
                <MyNavbar cartSize="1"/>
                <MenuBar/>
                <Route exact path='/' component={Home}/>
                <Route path='/profile' component={ProfilePage}/>
                <Route path='/logIn' component={LoginPage}/>
                <Route path='/signUp' component={SignupPage}/>
                <Route path='/faqs' component={FAQPage}/>
                <Footer/>
            </BrowserRouter>
        );
    }
}

export default App;
