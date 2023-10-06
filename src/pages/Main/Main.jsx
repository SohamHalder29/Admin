// @ts-nocheck
import React from 'react'
import './Main.css'

import Header from "../../components/Main/Header/Header"
import Hero from "../../components/Main/Hero/Hero"
import LogoSlider from "../../components/Main/logoSlider/LogoSlider"
import ReportBox from "../../components/Main/Report/Report"
import Footer from "../../components/Main/Footer/Footer"

function Main() {

  return (
    <div className={"Main"}>
        <Header/>
        <Hero/>
        <LogoSlider/>
        <ReportBox/>
        <Footer/>
    </div>
  )
}

export default Main