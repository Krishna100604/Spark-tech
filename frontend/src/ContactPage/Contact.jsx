import React from "react";
import "./Contact.css";

function Contact() {
    return (
        <>
        <div className="container2">
            <div className="row">
                <div className="contact-left">
                    <h1 className="sub-title">Contact <span>Us</span> </h1>
                    <p><i className="fa-regular fa-envelope"></i> er.internpixel@gmail.com</p>
                    <p><i className="fa-solid fa-phone"></i> +91-1234567890</p>
                    <p><i className="fa-solid fa-location-dot"></i> Addresss <br /> Street, City, State/Area/Province</p>
                    <div className="social-icons1">
                        <a href=""><i className="fa-brands fa-linkedin"></i></a>
                        <a href=""><i className="fa-brands fa-facebook"></i></a>
                        <a href=""><i className="fa-brands fa-instagram"></i></a>
                        <a href=""><i className="fa-brands fa-twitter"></i></a>
                    </div>
                </div>
                <div className="contact-right">
                    <h1>Direct <span>Message</span></h1>
                    <form name="submit-to-google-sheet">
                        <input type="text" name="Name" placeholder="Your Name" required />
                        <input type="email" name="Email" placeholder="Your Email" required />
                        <textarea name="Message" rows="5" placeholder="Your Message"></textarea>
                        <button type="submit" className="Btn Btn2">Submit</button>
                    </form>
                </div>
            </div>
        </div>
        <div className="copyright">
            <p>Copyright Team Internpixel <i className="fa-solid fa-copyright"></i></p>
        </div>
        </>
    );
}

export default Contact;
