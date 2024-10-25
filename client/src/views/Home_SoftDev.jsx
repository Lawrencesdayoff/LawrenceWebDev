const Home_SoftDev = () => {
    return(
        <>
   
        <div className="softwaredevelopment">
        <img src="/assets/github.png" height= "50px" width="50px"/>
        <a href ="https://github.com/Lawrencesdayoff" target = "_blank" > My Github </a>
            <p>I began my journey with programming and computer science late into my college career. I didn't think I had the gusto to hack it.</p>
            <div>
                <img src="\assets\strike-export-1726307473129.png" height= "100px" width = "100px"></img>
                <img src="\assets\strike-export-1726307493643.png" height= "100px" width = "100px"></img>
                <img src="\assets\strike-export-1727289136917.png" height= "100px" width = "100px"></img>
            </div>
        <img src="\assets\strike-export-1726307384396.png" height = "100px" width = "100px"></img>
        <img src="\assets\strike-export-1726307451147.png" height= "100px" width = "100px"></img>
        <img src="\assets\strike-export-1726307459830.png" height= "100px" width = "100px"></img>
        <img src="\assets\strike-export-1726307480400.png" height= "100px" width = "100px"></img>
        <img src="\assets\strike-export-1726307504941.png" height= "100px" width = "100px"></img>
        </div>

    
        <div className= "Project_List">
            <div className="card">
                <a href="https://github.com/Lawrencesdayoff/TavernTextQuest-IdleRpg" className="project_link"> TavernQuest - Idle Role Playing Game</a>
                <p> Still working on this one: A browser based idle role playing game. Imagine Oregon Trail with a little bit of NeoPets. I am working to finish a decent version of it so I can port it to React Native and make it an application.</p>   
            </div>
            <div className="card">
                <a href="https://github.com/Lawrencesdayoff/CodingDojo-Group-4-FinalGroupProject" className="project_link"> Booktok</a>
                <p> A final project I did for my projects and algorithms portion of Coding Dojo's software development bootcamp. </p>   
            </div>

            <div className="card">
            <h2> Creative Coding </h2>
            <a href="https://editor.p5js.org/lawrencesdayoff/full/LVLdWVbHb" className="project_link"> P5.js projects</a>
            </div>
        </div>

        </>
    )
}

export default Home_SoftDev;