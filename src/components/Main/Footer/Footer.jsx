import React from 'react'
import {ImLocation} from "react-icons/im"
import {CgPhone} from "react-icons/cg"
import {HiOutlineMail} from "react-icons/hi"
import { SiMinutemailer} from "react-icons/si";
import {MdOutlineAlternateEmail} from "react-icons/md"
import {IoLogoWhatsapp} from "react-icons/io"
import {AiFillFacebook, AiFillInstagram, AiFillTwitterCircle} from "react-icons/ai"
import "./Footer.css";
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <footer className="Footer-Container">
		<div className="Footer-Box">
			<img src={"/"} alt="Company-Logo" />
			<h4>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis, quis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, a.</h4>
		</div>
		<div className="Footer-Address">
			<h2> Address</h2>
			<Link to={"https://maps.app.goo.gl/p7RBFn7qy4XuZdRz6"}className={"Address"}><ImLocation color={"white"} />Block C, Nadia, Kalyani, West Bengal 741245 </Link>
			<p><CgPhone /> +91 88888 88888</p>
			<p><HiOutlineMail /> sursen420@gmail.com</p>
		</div>
		<div className="socialMedia">
			<div className="Footer-SignIn">
                <MdOutlineAlternateEmail color={"gray"} fontSize={"2rem"}/>
                <input type="text" placeholder={"Email"}/>
                <button className={" Footer-mailBtn"}>
                    <Link to={"/"}> 
                        Join Now <SiMinutemailer />
                    </Link>
                </button>
            </div>
			<div className="Footer-Media">
				<Link to={"/"}><IoLogoWhatsapp className={"Media-Icons"}/> </Link>
				<Link to={"/"}><AiFillTwitterCircle className={"Media-Icons"}/> </Link>
				<Link to={"/"}><AiFillFacebook className={"Media-Icons"}/> </Link>
				<Link to={"/"}><AiFillInstagram className={"Media-Icons"}/> </Link>
			</div>
		</div>
	</footer>
  )
}

export default Footer