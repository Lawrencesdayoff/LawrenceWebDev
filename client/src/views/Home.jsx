import React from "react";
import {useState, useEffect} from "react"
import Home_About from "./Home_About";
import Home_SoftDev from "./Home_SoftDev";
import Home_Game_Dev from "./Home_Game_Dev"
import ContactForm from "./Home_ContactForm";
import { Dating_Sim } from "./Dating_Sim";

const Home = () => {
    const [navitem, setNavigation] = useState(0)
    const navText= [<Home_About />, <Home_SoftDev />, <Home_Game_Dev/>, <ContactForm />]
    const navScroll = (target) => {
        if(target.deltaX < 0){
        setNavigation((navitem + 1) % navText.length )
        }
        else if(target.deltaX > 0){
            const newNavText = (Math.abs((navitem - 1 + navText.length)% navText.length))
            setNavigation( newNavText) 
        }
    }

    const navClick = (e) => {
        console.log(e)
        setNavigation(e)
        console.log(navitem)
    }
    return(
        <>
        <div className = "banner">
            <img src = "/assets/WebBanner.png" width = "100%" ></img>
        </div>
        <div className="page">
        <div class ="navbar" onWheel = {(e) => navScroll(e)}>
            <a class = "navitem" href="#about" onClick = {(e) => navClick(0)} > About </a>
            <a class = "navitem" href="#softwaredev" onClick = {(e) => navClick(1)}> Software Development </a>
            <a class = "navitem" href="#gamedev" onClick = {(e) => navClick(2)}> Game Development </a>
            <a class = "navitem" href="#contactme" onClick = {(e) => navClick(3)}> Contact</a>
        </div>
        <div className="content">
            {navText[navitem]}
   
        </div>
        </div>
        </>
    )
}

export default Home;