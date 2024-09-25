const Home_SoftDev = () => {
    return(
        <>
        <div className = "HomeBanner">
        <img src="src/assets/github.png" height= "50px" width="50px"/>
        <a href ="https://github.com/Lawrencesdayoff" target = "_blank" > My Github </a>
            <p> Here are some technologies I use on a regular basis in my programming:</p>
        </div>
        <img src="\src\assets\strike-export-1726307384396.png" height = "100px" width = "100px"></img>
        <img src="\src\assets\strike-export-1726307451147.png" height= "100px" width = "100px"></img>
        <img src="\src\assets\strike-export-1726307459830.png" height= "100px" width = "100px"></img>
        <img src="\src\assets\strike-export-1726307473129.png" height= "100px" width = "100px"></img>
        <img src="\src\assets\strike-export-1726307480400.png" height= "100px" width = "100px"></img>
        <img src="\src\assets\strike-export-1726307493643.png" height= "100px" width = "100px"></img>
        <img src="\src\assets\strike-export-1726307504941.png" height= "100px" width = "100px"></img>
    
        <div className= "Project_List">
            <div className="card">
                <a href="https://github.com/Lawrencesdayoff/TavernTextQuest-IdleRpg" className="project_link"> TavernQuest - Idle Role Playing Game</a>
                <p> A browser based idle role playing game. Imagine Oregon Trail with a little bit of NeoPets.</p>   
            </div>
            <div className="card">
                <a href="https://github.com/Lawrencesdayoff/CodingDojo-Group-4-FinalGroupProject" className="project_link"> Booktok</a>
                <p> A final project I did for my projects and algorithms portion of Coding Dojo's software development bootcamp. </p>   
            </div>
            <div className="creativecoding">
            <iframe src="https://editor.p5js.org/lawrencesdayoff/full/LVLdWVbHb" height="1000px" width="1000px"></iframe>
            </div>
        </div>

        </>
    )
}

export default Home_SoftDev;