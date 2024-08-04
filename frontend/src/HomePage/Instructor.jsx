import React from "react";
import image from "../images/Instructor.webp";
import "./Instructor.css";


function Instructor(){
   return(
   <>
    <div className="IMG">
      <img src={image}/>
      <div className="Tag">
        <h1> Become An Instructor</h1>
        <p> Take your Teaching Skills to new level </p>

  </div>
   <div className="TBtn">
     <button> Start teaching today</button>
   </div>
    </div>
    
    </>
   )
   ;
}
export default Instructor;