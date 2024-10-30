import Dancing_Law from "./Dancing_Law";

const Home_About = () => {
    return(
        <>
        
        <div className = "home_about">
            <div className = "home_about_text">
                <div className= "home_about_text_para1" >
                <img src = "./assets/LawrencePicture.png" className= "profile_image"/>
                    <div>
                        <p>My name is Lawrence Carroll, I am a fullstack software developer, an artist, and an organizer. I am currently looking for employment or internship oppurtunities that would enable me to earn money as a programmer, so that I can sharpen my skills as I earn a living.</p>            
                        <p>I was born and raised in the Inland Empire in Southern California where I currently to this day still reside.</p>
                    </div>
                </div>
                <div>
                    <p> I studied Philosophy and Interdisciplinary Computing Arts at the University of California San Diego, graduating in 2021.</p>
                    <p> I spent 2 years working in the logistics industry as a warehouse worker, operating heavy equipment like standing reach forklifts, pretty cool stuff</p>
                    <p> I finished training as a fullstack software developer in 2024, certified by Colorado Technical University.</p>
                </div>
                <div>
                    <p> I spend a lot of time engaging with my local commmunity. Check out this <a href="https://www.instagram.com/lorenzotorrezclub/" target = "_blank" > trash clean-up </a> I help run.</p>
                    <p> Some hobbies of mine include, strength training, grappling, community service and painting. </p>
                    <p> </p>
                </div>
            <p> Currently looking for work as a software developer.</p>
            </div>
        </div>
    
        </>
    )
}

export default Home_About;