import React from 'react'
import {Link} from "react-router-dom";
import { SiMinutemailer} from "react-icons/si";
import {MdOutlineAlternateEmail} from "react-icons/md"
import "./Hero.css"
import { HeroImg } from '../../../assets/Main/Data';
const Hero = () => {
  return (
    <div className={"Hero-Wrapper"}>
      <div className={"Hero-Container"}>
          <div className="Hero-Left">
              <div className={"Title-effect"}/>
              <div className="Hero-Title">
                <h1> Zero Work, All Results: Revolutionize Your Project Management!</h1>
                <h3> Zero Work: Unleash Productivity, Streamline Projects, Effortlessly Thrive.
                Your tasks, our technology, seamless collaboration redefine project management with Zero Work App
                </h3>
              </div>
              <div className="Hero-SignIn">
                <MdOutlineAlternateEmail color={"gray"} fontSize={"2rem"}/>
                <input type="text" placeholder={"Email"}/>
                <button className={" mailBtn"}>
                    <Link to={"/"}> 
                        Gets Started <SiMinutemailer />
                    </Link>
                </button>
              </div>
          </div>
          <div className="Image-Container">
              <div/>
              <img src={HeroImg} alt={"Hero Image"} />
          </div>
      </div>
    </div>
  )
}

export default Hero