import React from 'react';
import './Navbar.css';
import { AiFillCloseCircle } from "react-icons/ai";
import { TbGridDots } from "react-icons/tb";


const Navbar = () => {
  return (
    <section classname = 'navbarSection'>
        <header classname = 'header-flex'>
            <div classname = 'logoDiv'>
                {/* <a href = "#" classname = "logo flex"> */}
                    <h1>STUDENT STRESS DETECTION</h1>
                {/* </a> */}
            </div>

            <div className="navbar">
                <ul className="navbarlists-flex">
                    <li className="navitem">
                        <a href="#" className="navlink">Home</a>
                    </li>
                    <li className="navitem">
                        <a href="#" className="navlink">Nav1</a>
                    </li>
                    <li className="navitem">
                        <a href="#" className="navlink">Nav2</a>
                    </li>
                    <li className="navitem">
                        <a href="#" className="navlink">Admin Login</a>
                    </li>
                </ul>

                <div className="closenavbar">
                    <AiFillCloseCircle className="icon"/>
                </div>
            </div>

            <div className="toggleNavbar" >
                <TbGridDots className="icon"/>
            </div>
        </header>
    </section>
  );
};

export default Navbar;
