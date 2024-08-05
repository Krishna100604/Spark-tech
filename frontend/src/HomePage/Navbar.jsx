import React from 'react'
import "./Navbar.css"
// import { FaFacebookSquare, FaInstagramSquare, FaYoutubeSquare } from "react-icons/fa"
import {Link,useNavigate} from "react-router-dom";



const Navbar = () => {
    
 const Navigate=useNavigate();
 function handleClickAdmin(){
    Navigate("./Admin");
  }
  function handleClick(){

    Navigate("./Login");
  }
//   function handleClickCourse(){
//     Navigate("./Course")
//   }
 
  return (
    <>
     <nav className='main-nav'>
          {/* logo part */}
        <div className='logo'>
            
                <h2 className='logo-heading'>SparkTech</h2>
        </div>

              {/* Menu part */}

        <div className='menu-link'>
            <ul>
                {/* <li><a href="#">Home</a></li> */}
                <li><Link to="./Courses">Course</Link></li>
                <li><Link to="about">About</Link></li>
                <li><a href="#">Services</a></li>
                <li><Link to="./Contact">Contact</Link></li> {/* Modified to use Link component */}
            </ul>
        </div>

                {/* Search bar */}

        <div className='search-box'>
            <input type="text" placeholder=' Search'/>
            <img src="/src/images/search-b.png" alt="" />
        </div> 
        <div className='Admin'>
            <img onClick={handleClickAdmin} src="https://static.vecteezy.com/system/resources/thumbnails/005/005/791/small/user-icon-in-trendy-flat-style-isolated-on-grey-background-user-symbol-for-your-web-site-design-logo-app-ui-illustration-eps10-free-vector.jpg"/>
          </div>
            {/* login & Register Button */}
           
        <div className="BTN">
            <button onClick={handleClick} className='BTN1'>Login</button>
            <button  onClick={handleClick} className='BTN1'>Register</button>
            
        
        </div>
       
         


   </nav>
     
   

               {/* Social Media Links */}

        {/* <div className='social-media'>
            <ul className='social-media-desktop'>
                <li>
                    <a href="#" target='_blank'> <FaFacebookSquare className='fb'/> </a>
                </li>

                <li>
                    <a href="#" target='_blank'> <FaInstagramSquare className='ig'/> </a>
                </li>

                <li>
                    <a href="#" target='_blank'> <FaYoutubeSquare className='yt'/> </a>
                </li>
            </ul>
        </div> */}
             
             
             {/* Hero Section */}

        {/* <section className="hero-section">
            <p>Welcome to</p>
            <h1>Spark Tech</h1>
        </section> */}

     
    </>
  )
}

export default Navbar
