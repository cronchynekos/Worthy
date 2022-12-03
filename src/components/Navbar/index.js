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

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to='/'>
          <img src='./images/logo.svg' alt='logo' />
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
        <NavBtn>
          <NavBtnLink to='/cart'>Cart</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;