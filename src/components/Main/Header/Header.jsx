import React from 'react';
import {Link} from "react-router-dom"
import "./Header.css";
const Header = () => {
  return (
    <section className={"Header-Wrapper"}>
        <div className={"innerWidth Header-Container"}>
            <Link to={"/"}> <img src={"/"} alt={"Logo"} /></Link>
            <div className=" Nav-Menu">
                <Link to={"/"}> Product</Link>
                <Link to={"/"}> Resources</Link>
                <Link to={"/"}> Features</Link>
                <Link to={"/"}> Contact Sales</Link>
                <Link to={"/"}> About Us</Link>
            </div>
            <div className="Sign-Menu">
                <button className={" SignBtn"}>
                    <Link to={"/"}> Log In</Link>
                </button>
                <button className={" SignBtn"}>
                    <Link to={"/"}> Get Started</Link>
                </button>
            </div>
        </div>
    </section>
  )
}

export default Header