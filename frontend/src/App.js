import React from 'react';
import Home from "./HomePage/home";
import ProfilePage from "./ProfilePage/profilePage";
import {BrowserRouter, Route} from "react-router-dom";
import './App.css';
import MyNavbar from "./Navbars/Navbar/mynavbar";
import MenuBar from "./Navbars/Menubar/menubar";
import Footer from "./Navbars/Footer/BottomBar"


function App() {
  return (
      <BrowserRouter>
          <MyNavbar cartSize="1"/>
          <MenuBar/>
          <Route exact path='/' component={Home} />
          <Route path='/profile' component={ProfilePage} />
          <Footer/>
      </BrowserRouter>
  );
}

export default App;
