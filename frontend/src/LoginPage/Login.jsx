import React ,{useState} from "react";

import "./Login.css";
import Image1 from "../images/FacebookLogo.png";
import Image2 from "../images/googleLogo.webp";
import Image3 from "../images/xLogos.png";
import Image4 from "../images/linkedinlogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";


const eye = <FontAwesomeIcon icon={faEye} />;

function Login(){
 
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };
      
      const [isSignUpMode, setIsSignUpMode] = useState(false);

      const toggleFormMode = () => {
        setIsSignUpMode(!isSignUpMode);
      };
      
    
      return (
        
        <div className={`container ${isSignUpMode ? 'sign-up-mode' : ''}`}>
         {console.log("Hello World")}
          <div className="forms-container">
            <div className="signin-signup">
              <form action="#" className="sign-in-form">
                <h2 className="title">Sign in</h2>
                <div className="input-field">
                  {/* <i className="fas fa-user"></i> */}
                  <input type="text" placeholder="Username" />
                </div>

                <div className="input-field">
                  {/* <i className="fas fa-lock"></i> */}
                  <input  placeholder="Password"
                  type={passwordShown ? "text" : "password"}
                   />
                   <i className ="EYE" onClick={togglePasswordVisiblity}>{eye}</i>{" "}
                </div>
                <div className="fpass">
                       <a href="/forgot-password">Forgot Password?</a>
                </div>
                <input type="submit" value="Login" className="btn solid" />
                <p className="social-text">Or Sign in with social platforms</p>
                <div className="social-media">
                  <a href="#" className="social-icon">
                    {/* <i className="fab fa-facebook-f"></i> */}
                    <img src={Image2} alt="Facebook" />
                  </a>
                  <a href="#" className="social-icon">
                    {/* <i className="fab fa-twitter"></i> */}
                    <img src={Image1} alt="Twitter" />
                  </a>
                  <a href="#" className="social-icon">
                    {/* <i className="fab fa-google"></i> */}
                    <img src={Image3} alt="Google" />
                  </a>
                  <a href="linkedin.com" className="social-icon">
                    {/* <i className="fab fa-linkedin-in"></i> */}
                    <img src={Image4} alt="LinkedIn" />
                  </a>
                </div>
              </form>
              <form action="#" className="sign-up-form">
                <h2 className="title">Sign up</h2>
                <div className="input-field">
                  {/* <i className="fas fa-user"></i> */}
                  <input type="text" placeholder="Username" />
                </div>
                <div className="input-field">
                  {/* <i className="fas fa-envelope"></i> */}
                  <input type="email" placeholder="Email" />
                </div>
                <div className="input-field">
                  {/* <i className="fas fa-lock"></i> */}
                  <input  placeholder="Password"
                  type={passwordShown ? "text" : "password"}
                   />
                   <i className ="EYE" onClick={togglePasswordVisiblity}>{eye}</i>{" "}
                </div>

                <input type="submit" className="btn" value="Sign up" />
                <p className="social-text">Or Sign up with social platforms</p>
                <div className="social-media">
                  <a href="#" className="social-icon">
                    {/* <i className="fab fa-facebook-f"></i> */}
                    <img src={Image2} alt="Facebook" />
                  </a>
                  <a href="#" className="social-icon">
                  <img src={Image1} alt="Twitter" />
                    {/* <i className="fab fa-twitter"></i> */}
                  </a>
                  <a href="#" className="social-icon">
                  
                    {/* <i className="fab fa-google"></i> */}
                    <img src={Image3} alt="Google" />
                  </a>
                  <a href="#" className="social-icon">
                    {/* <i className="fab fa-linkedin-in"></i> */}
                    <img src={Image4} alt="LinkedIn" />
                  </a>
                </div>
              </form>
            </div>
          </div>
    
          <div className="panels-container">
            <div className="panel left-panel">
              <div className="content">
                <h3>New here ?</h3>
                <p>Start your journey with us at TechStack</p>
                <button className="btn transparent" id="sign-up-btn" onClick={toggleFormMode}>
                  Sign up
                </button>
              </div>
              <img src="images/log.svg" className="image" alt="" />
            </div>
            <div className="panel right-panel">
              <div className="content">
                <h3>One of us ?</h3>
                <p>Welcome To the TechStack</p>
                <button className="btn transparent" id="sign-in-btn" onClick={toggleFormMode}>
                  Sign in
                </button>
              </div>
              
              <img src="images/register.svg" className="image" alt="" />
            </div>
          </div>
        </div>
    );
}

export default Login;




