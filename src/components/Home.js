import React,{useState,useEffect} from 'react'
import Typewriter from "typewriter-effect";
const Home = ({text}) => {
   
    

  return (
    

   
    <>
   



  <div className="Applet">
  
      <Typewriter 
  
       onInit={(typewriter)=> {
  
       typewriter
        
       .typeString("Welcome to ")
         
       .pauseFor(1000)
       .deleteAll()
       .typeString("Mushahid Javed")
       .pauseFor(1000)
       .deleteAll()
       .typeString("I'm a ")
       .pauseFor(1000)
       .deleteAll()
       .typeString("Frontend ")
       .pauseFor(1000)
       .deleteAll()
       .typeString("Backend")
       .pauseFor(1000)
       .deleteAll()
       .typeString("Full Stack Developer")
       .pauseFor(1000)
       .deleteAll()
       .typeString("Thank you, For visiting to our page. ")
       .start();
       }}
       />
    </div>

    
    </>
  )
}

export default Home