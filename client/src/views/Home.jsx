import React from "react";
import {useState, useEffect} from "react"
import Home_About from "./Home_About";
import Home_SoftDev from "./Home_SoftDev";

import { Dating_Sim } from "./Dating_Sim";

const Home = () => {
    const [navitem, setNavigation] = useState(0)
    const navText= [<Home_About />, <Home_SoftDev />, <Dating_Sim/>]
    const navFunction = (target) => {
        if(target.deltaY < 0){
        setNavigation((navitem + 1) % navText.length )
        }
        else if(target.deltaY > 0){
            const newNavText = (Math.abs((navitem - 1 + navText.length)% navText.length))
            setNavigation( newNavText) 
        }
    }
    return(
        <>
        <div>
            <h1>Lawrence Carroll</h1>

        </div>

        <div class ="navbar" onWheel = {(e) => navFunction(e)}>
            <p class = "navitem"> About </p>
            <p class = "navitem"> Software Development </p>
            <p class = "navitem"> Game Development </p>
        </div>
        <div>
            {navText[navitem]}
   
        </div>
        </>
    )
}

export default Home;