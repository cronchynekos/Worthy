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

//   window.scroll(function(){
//     if(this.scrollTop() > 100){
//         '.nav'.addClass('sticky')
//     } else{
//         '.nav'.removeClass('sticky')
//     }
// });

  return (
    <>
      <Nav>
        <NavLink to='/'>
          <img src='./images/logo02.jpg' alt='logo' className='navLogo'/>
        </NavLink>
        <Bars />
        <NavMenu>
        <NavLink to='/tops' activeStyle className="navtextbtn">
            Tops and Tees
          </NavLink>
          <NavLink to='/outerwear' activeStyle className="navtextbtn">
            Outerwear
          </NavLink>
          <NavLink to='/accessories' activeStyle className="navtextbtn">
            Accessories
          </NavLink>
          <NavLink to='/contact-us' activeStyle className="navtextbtn">
            Support
          </NavLink>
          <NavLink to='/about' activeStyle className="navtextbtn">
            About Us
          </NavLink>
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        {/* <NavLink to='/cart'>
           <FontAwesomeIcon icon="fa-regular fa-cart-shopping" />
        </NavLink> */}
        <NavBtn>
          <NavBtnLink to='/cart'>Cart</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;