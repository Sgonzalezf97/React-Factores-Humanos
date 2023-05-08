import React from 'react'
import imagen1 from '../Assets/Logo-blanco.png'
import AccessBar from './AccessBar';

function Nav() {
  return (
    <>
    <div className=' bg-blue' >
      <div className="container d-flex align-items-center justify-content-between">

        <div className="logo d-flex">
          <a href="index.html"><img src={imagen1} alt="Logo" className="img-logo"></img></a>
          <h1 className='center-nav mx-3'><a href="index.html"><span>TechMart</span></a></h1>
        </div>

        <nav id="navbar" className="navbar">
          <ul>
            <li><a className="nav-link scrollto" href="/">Home <i class="bi bi-house"></i></a></li>
            <li><a className="nav-link scrollto" href="/About">About <i class="bi bi-person-vcard-fill"></i></a></li>
            <li><a className="nav-link scrollto" href="/Cart">Cart<i class="bi bi-cart-check"></i></a></li>
            <li><a className="nav-link scrollto" href="/Products">Products <i class="bi bi-box"></i></a></li>
            <li className="dropdown"><a href="#"><span>Support <i class="bi bi-clipboard-plus"></i></span> <i className="bi bi-chevron-down"></i></a>
              <ul>
                <li><a href="/Contact">Contact Us</a></li>
                {/* <li className="dropdown"><a href="#"><span>Deep Drop Down</span> <i className="bi bi-chevron-right"></i></a>
                  <ul>
                    <li><a href="#">Deep Drop Down 1</a></li>
                    <li><a href="#">Deep Drop Down 2</a></li>
                    <li><a href="#">Deep Drop Down 3</a></li>
                    <li><a href="#">Deep Drop Down 4</a></li>
                    <li><a href="#">Deep Drop Down 5</a></li>
                  </ul>
                </li> */}
                {/* <li><a href="#">Who are us?</a></li>
                <li><a href="#">Feedback</a></li> */}
              </ul>
            </li>
            <li className="dropdown"><a className="nav-link scrollto" href="/profile">profile <i class="bi bi-person-circle"> <i className="bi bi-chevron-down"></i></i></a>
              <ul>
                <li><a href="/Profile">View Profile</a></li>
                <li><a href="/Login">Exit</a></li>
              </ul>
            </li>
          </ul>
          <i className="bi bi-list mobile-nav-toggle"></i>
        </nav>

      </div>
    </div>
    <AccessBar />
    </>
  );
}

export default Nav;