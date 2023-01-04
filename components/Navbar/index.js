import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './NavbarElements';
import "./Navbar.scss"
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import {fa-cart-shopping} from "fa-icon"


const Navbar = () => {

// var element = document.getElementById("NavigationBar");

// window.addEventListener("scroll", function(event){
//   var scroll = this.scrollY;
//   if(scroll > 0) {
//     element.classList.remove("animatedNavBarpre");
//     element.classList.add("animatedNavBarpost");
//     // element.classList.toggle("animatedNavBarpost");
//   }else{
//     element.classList.remove("animatedNavBarpost");
//     element.classList.add("animatedNavBarpre");
//     // element.classList.toggle("animatedNavBarpre");
//   }
// })

  return (
    <>
      <Nav id="NavigationBar" className='animatedNavBarpre'>
        <NavLink to='/'>
          <img src='./images/logo02.jpg' alt='logo' className='navLogo'/>
        </NavLink>
        <Bars />
        <NavMenu>
        <NavLink to='/tops' activeStyle className="navtextbtn">
            Home
          </NavLink>
          <NavLink to='/outerwear' activeStyle className="navtextbtn">
            Shop
          </NavLink>
          <NavLink to='/accessories' activeStyle className="navtextbtn">
            Lookbook
          </NavLink>
          <NavLink to='/contact' activeStyle className="navtextbtn">
            FAQ
          </NavLink>
          <NavLink to='/about' activeStyle className="navtextbtn">
            About Us
          </NavLink>
          <NavLink to='/about' activeStyle className="navtextbtn">
            Contact
          </NavLink>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/cart'>Cart</NavBtnLink>
        </NavBtn>
      </Nav>

    </>
  );
};

export default Navbar;