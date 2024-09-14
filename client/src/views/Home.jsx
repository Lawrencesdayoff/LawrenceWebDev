import React from "react";
import {useState, useEffect} from "react"
import Home_About from "./Home_About";
import Home_SoftDev from "./Home_SoftDev";
import ContactForm from "./Home_ContactForm";
import { Dating_Sim } from "./Dating_Sim";

const Home = () => {
    const [navitem, setNavigation] = useState(0)
    const navText= [<Home_About />, <Home_SoftDev />, <Dating_Sim/>, <ContactForm />]
    const navScroll = (target) => {
        if(target.deltaY < 0){
        setNavigation((navitem + 1) % navText.length )
        }
        else if(target.deltaY > 0){
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
        <div>
            <h1>Lawrence Carroll</h1>
            <img src="src/assets/github.png" height= "50px" width="50px"/>
            <a href ="https://github.com/Lawrencesdayoff" target = "_blank" > My Github </a>

        </div>

        <div class ="navbar" onWheel = {(e) => navScroll(e)}>
            <a class = "navitem" href="#about" onClick = {(e) => navClick(0)} > About </a>
            <a class = "navitem" href="#softwaredev" onClick = {(e) => navClick(1)}> Software Development </a>
            <a class = "navitem" href="#gamedev" onClick = {(e) => navClick(2)}> Game Development </a>
            <a class = "navitem" href="#contactme" onClick = {(e) => navClick(3)}> Contact</a>
        </div>
        <div>
            {navText[navitem]}
   
        </div>
        </>
    )
}

export default Home;