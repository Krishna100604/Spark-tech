import React from 'react'
import Navbar from './HomePage/Navbar'
import Footer from './HomePage/Footer'
import Cards from './HomePage/Cards'
import LikeComponent from './HomePage/xyz'
import {  BrowserRouter,Route,Routes } from "react-router-dom";
import Login from './LoginPage/Login';
import Slide from './HomePage/Slide';
import Instructor from './HomePage/Instructor'
import Admin from './AdminPage/Admin'
import Contact from './ContactPage/Contact'
import Courses from './CoursePage/Courses'
import AboutPage from './About/AboutPage'
// import Profile from './ProfilePage/Profile'
function App(){
  return (
    <>
    <BrowserRouter>
         
        
        <Routes>
          
          <Route path="/" element={ <><Navbar />
      <LikeComponent/>
      <Slide/>
      <Cards/>
      <Instructor/>
      <Footer/>
      
      </>} /> 
          <Route path='/Contact' element={<Contact/>}/>
          <Route path="/login" element={<Login />} />
          <Route path='/admin' element={<Admin/>} />   
          <Route path='/courses' element={<Courses/>}/>
          {/* <Route path='/profile' element={<Profile/>}/> */}
          <Route path='/about' element={<AboutPage/>}/>
        </Routes>
        
       
      </BrowserRouter>
   
    </>
  );
}

export default App
