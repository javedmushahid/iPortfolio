import React,{useState,useEffect} from 'react'
import Typewriter from "typewriter-effect";
const Home = ({text}) => {
   
    

  return (
    

   
    <>
   



  <div className="Applet">
  
      <Typewriter 
  
       onInit={(typewriter)=> {
  
       typewriter
        
       .typeString("Welcome to iPortfolio ")
         
       .pauseFor(1000)
       .deleteAll()
       
       .typeString("I'm a ")
       .pauseFor(1000)
       .deleteAll()
       .typeString("Front-end ")
       .pauseFor(1000)
       .deleteAll()
       .typeString("Back-end")
       .pauseFor(1000)
       .deleteAll()
       .typeString("Full Stack Developer")
       .pauseFor(1000)
       .deleteAll()
       .typeString("Using ReactJs")
       .pauseFor(1000)
       .deleteAll()
       .typeString("NodeJs")
       .pauseFor(1000)
       .deleteAll()
       .typeString("ExpressJs")
       .pauseFor(1000)
       .deleteAll()
       .typeString("MongoDB")
       .pauseFor(1000)
       .deleteAll()
       .typeString("Thank you,for visiting iPortolio.")   
       .start()
      
       }}
      
       />
      
    </div>

    
    </>
  )
}

export default Home