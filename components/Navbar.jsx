import React from 'react';
import Link from 'next/link';
import { AiOutlineShopping } from 'react-icons/ai'

import { Cart } from './';
import { useStateContext} from '../context/StateContext';


//Animation for the Navbar
setTimeout(() => {
  var element = document.getElementById("NavigationBar");
    
    window.addEventListener("scroll", function(event){
      var scroll = this.scrollY;
      if(scroll > 0) { //Can also use the toggle function here
        element.classList.remove("animatedNavBarpre");
        element.classList.add("animatedNavBarpost");
      }else{
        element.classList.remove("animatedNavBarpost");
        element.classList.add("animatedNavBarpre");
      }
    })
}, 100); //delay of 100 ms



const Navbar = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();
  
  return (
      <>
      <nav id="NavigationBar"  className='animatedNavBarpre'>
        <Link href="/">
          <img src='./images/logo02.jpg' alt='logo' className='navLogo'/>
        </Link>
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
      </nav>
    </>
  )
}

export default Navbar