import React from 'react';
import Link from 'next/link';
import { AiOutlineShopping } from 'react-icons/ai'

import { Cart } from './';
import { useStateContext} from '../context/StateContext';

import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './Navbar/NavbarElements';
import Navfunction from './Navbar/Navfunction';

// const AnimationNav = () => {

  // var element = document.getElementById("NavigationBar");
    
  //   window.addEventListener("scroll", function(event){
  //     var scroll = this.scrollY;
  //     if(scroll > 0) {
  //       element.classList.remove("animatedNavBarpre");
  //       element.classList.add("animatedNavBarpost");
  //       // element.classList.toggle("animatedNavBarpost");
  //     }else{
  //       element.classList.remove("animatedNavBarpost");
  //       element.classList.add("animatedNavBarpre");
  //       // element.classList.toggle("animatedNavBarpre");
  //     }
  //   })

// }

const Navbar = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();

  

    

  return (
      <>
      <Nav id="NavigationBar"  className='animatedNavBarpre'>
        <Link href="/">
          <img src='./images/logo02.jpg' alt='logo' className='navLogo'/>
        </Link>
        {/* <Bars /> */}
        <Link href="/">
          <p className='navtextbtn'>Home</p>
        </Link>
        <Link href="/shop">
          <p className='navtextbtn'>Shop</p>
        </Link>
        <Link href="/">
          <p className='navtextbtn'>Lookbook</p>
        </Link>
        <Link href="/">
          <p className='navtextbtn'>FAQ</p>
        </Link>
        <Link href="/">
          <p className='navtextbtn'>About Us</p>
        </Link>
        <Link href="/">
          <p className='navtextbtn'>Contact</p>
        </Link>
        <button type="button" className="cart-icon" onClick={() => setShowCart(true)}>
          <AiOutlineShopping />
          <span className="cart-item-qty">{totalQuantities}</span>
        </button>

        {showCart && <Cart />}
      </Nav>
    {/* <AnimationNav /> */}
    {/* <Navfunction /> */}
    </>
  )
}

export default Navbar