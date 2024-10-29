import React from "react";
import {useState, useEffect} from "react"
import Home_About from "./Home_About";
import Home_SoftDev from "./Home_SoftDev";
import Home_Game_Dev from "./Home_Game_Dev"
import ContactForm from "./Home_ContactForm";
import { Dating_Sim } from "./Dating_Sim";
// import { useEffect } from "react";

const Home = () => {
    
    const [nightmode, setNightMode] = useState(false)
    const [spanishmode, setSpanishMode] = useState(false)
    const [navitem, setNavigation] = useState(0)
    const navText= [<Home_About />, <Home_SoftDev />, <ContactForm />]
    
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

    const toggleNightMode = (value) => {
        
        console.log("nightmode toggled")
        if (value == true){
            setNightMode(false)
            document.body.style.backgroundImage = "url('/assets/51196069.jpeg')"
            console.log("Night mode on")
        }
        else if (value == false){
            setNightMode(true)
            document.body.style.backgroundImage = "url('/assets/NightmodeWallpaper.png')"
            console.log("Night mode off")
        }
    }

    return(
        <>
        <div className = "banner">
        {nightmode == false?  
            <img src = "/assets/DaymodeBanner.png" width = "100%" ></img>:  
            <img src = "/assets/NightmodeBanner.png" width = "100%" ></img>
        }
           

        </div>
            
        <div className="page">
        <div className ="navbar" onWheel = {(e) => navScroll(e)}>
            <a className = "navitem" href="#about" onClick = {(e) => navClick(0)} > About </a>
            <a className = "navitem" href="#softwaredev" onClick = {(e) => navClick(1)}> Software Development </a>
            <a className = "navitem" href="#contactme" onClick = {(e) => navClick(2)}> Contact</a>
            <div className ="navitem"> 
            
                <div className ="nightModeButton"> 
                    <label className="switch">
                        <input type="checkbox" onClick={() => toggleNightMode(nightmode)}/>
                        <span className="slider"></span>
                    </label>
                </div>
         
            </div>
        <div className = "navitem">
            <div className ="spanishModeButton"> 
                    <label className="switch">
                        <input type="checkbox" onClick={() => toggleSpanishMode(spanishmode)}/>
                        <span className="slider"></span>
                    </label>
                </div>
            </div>
        </div>
        <div className="content">
            {navText[navitem]}
   
        </div>
        </div>
        </>
    )
}

export default Home;