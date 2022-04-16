import React from 'react'

import LogoW from '../assets/img/light.jpg'
import LogoD from '../assets/img/dark.jpg'

var dd=LogoW
var kk=LogoD


const Nav = () => {
    function darkMode(){
    
    
    
        let isOnClick=localStorage.getItem("dark")

        if (isOnClick == "on") {
            localStorage.setItem("dark","off")
        }else{
            localStorage.setItem("dark","on")
        }
        
        // Qaraldan Funksiya --------------------------------------------------------------------
        const darkClass=document.getElementsByClassName('dark-class')
        for (let i = 0; i < darkClass.length; i++) {
            
            darkClass[i].classList.toggle("dark")
            // if (darkClass[i].classList.contains("dark")) {
            //     dd=<img src={LogoD} width="100" alt="" />
            // }
            // console.log(darkClass);
            
            
        }
        
        if(darkClass[0].classList.contains("dark")){
            var image = document.querySelector(".hhh");
            image.src = kk;
        }else{
            var image = document.querySelector(".hhh");
            image.src = dd;
        }
            
        
        // ------------------------------------------------------------------------------------------
        // Textleri Agardan Funksiya-----------------------------------------------------------------
        const wihteText=document.getElementsByClassName("white-text")
        for (let a = 0; a < wihteText.length; a++) {
            wihteText[a].classList.toggle("white")
            
        }
        // ----------------------------------------------------------------------------------------------
        //Arxani Agardan Funksiya------------------------------------------------------------------------
        const whiteBack=document.getElementsByClassName("white-back")
        for (let b = 0; b < whiteBack.length; b++) {
            whiteBack[b].classList.toggle("backg-white")
            
        }
        
    }

    document.addEventListener("DOMContentLoaded", function(event) {
        let isOn=localStorage.getItem("dark")

        if (isOn == "on") {
            darkClick()
        }else if(isOn == "off"){
            whiteClick()
        }
        
        
        function darkMode(){
    
    
    
            let isOnClick=localStorage.getItem("dark")
    
            if (isOnClick == "on") {
                localStorage.setItem("dark","off")
            }else{
                localStorage.setItem("dark","on")
            }
            
            // Qaraldan Funksiya --------------------------------------------------------------------
            const darkClass=document.getElementsByClassName('dark-class')
            for (let i = 0; i < darkClass.length; i++) {
                
                darkClass[i].classList.toggle("dark")
                // if (darkClass[i].classList.contains("dark")) {
                //     dd=<img src={LogoD} width="100" alt="" />
                // }
                // console.log(darkClass);
                
                
            }
            
            if(darkClass[0].classList.contains("dark")){
                var image = document.querySelector(".hhh");
                image.src = kk;
            }else{
                var image = document.querySelector(".hhh");
                image.src = dd;
            }
                
            
            // ------------------------------------------------------------------------------------------
            // Textleri Agardan Funksiya-----------------------------------------------------------------
            const wihteText=document.getElementsByClassName("white-text")
            for (let a = 0; a < wihteText.length; a++) {
                wihteText[a].classList.toggle("white")
                
            }
            // ----------------------------------------------------------------------------------------------
            //Arxani Agardan Funksiya------------------------------------------------------------------------
            const whiteBack=document.getElementsByClassName("white-back")
            for (let b = 0; b < whiteBack.length; b++) {
                whiteBack[b].classList.toggle("backg-white")
                
            }
            
        }
        function darkClick() {
            const darkClass=document.getElementsByClassName('dark-class')
            for (let i = 0; i < darkClass.length; i++) {
                
                darkClass[i].classList.add("dark")
            }
            
            if(darkClass[0].classList.contains("dark")){
                var image = document.querySelector(".hhh");
                image.src = kk;
            }else{
                var image = document.querySelector(".hhh");
                image.src = dd;
            }
                
            
            // ------------------------------------------------------------------------------------------
            // Textleri Agardan Funksiya-----------------------------------------------------------------
            const wihteText=document.getElementsByClassName("white-text")
            for (let a = 0; a < wihteText.length; a++) {
                wihteText[a].classList.add("white")
                
            }
            // ----------------------------------------------------------------------------------------------
            //Arxani Agardan Funksiya------------------------------------------------------------------------
            const whiteBack=document.getElementsByClassName("white-back")
            for (let b = 0; b < whiteBack.length; b++) {
                whiteBack[b].classList.add("backg-white")
                
            }
        }
        function whiteClick() {
            const darkClass=document.getElementsByClassName('dark-class')
            for (let i = 0; i < darkClass.length; i++) {
                
                darkClass[i].classList.remove("dark")
            }
            
            if(darkClass[0].classList.contains("dark")){
                var image = document.querySelector(".hhh");
                image.src = kk;
            }else{
                var image = document.querySelector(".hhh");
                image.src = dd;
            }
                
            
            // ------------------------------------------------------------------------------------------
            // Textleri Agardan Funksiya-----------------------------------------------------------------
            const wihteText=document.getElementsByClassName("white-text")
            for (let a = 0; a < wihteText.length; a++) {
                wihteText[a].classList.remove("white")
                
            }
            // ----------------------------------------------------------------------------------------------
            //Arxani Agardan Funksiya------------------------------------------------------------------------
            const whiteBack=document.getElementsByClassName("white-back")
            for (let b = 0; b < whiteBack.length; b++) {
                whiteBack[b].classList.remove("backg-white")
                
            }
        }
      });
    


    
    
  return (
      
           
            
        <section className='dark-class' id="header">
            <div className="container custom-container">
            <div className="row large-screen">
                <div className="col-lg-2 logos col-md-3">
                {/* <img src={LogoW} width="100" alt="" /> */}
                <img className='hhh' src={dd} width="200" alt="" />
                
                </div>
                <div className="col-lg-6 menu col-md-6">
                <div className="large-nav">
                    <ul>
                    <li><a className='white-text' href="#">HOME</a></li>
                    <li className="lay-out"><a className='white-text' href="#">LAYOUT <i className="fas fa-angle-down" /></a>
                        
                    </li>
                    <li><a className='white-text' href="#">FEATURES</a></li>
                    <li><a className='white-text' href="#">BLOG</a></li>
                    <li className="bon-us"><a className='white-text' href="#">BONUS PAGE <i className="fas fa-angle-down" /></a>
                        <div className="bonus-over">
                        <p className="up">Contact Us</p>
                        <p>About us</p>
                        <p>Services</p>
                        <p>Faqs</p>
                        <p>Photo Gallery</p>
                        <p>Coming Soon</p>
                        <p>Support 24/7 Page</p>
                        <p className="down">Page 404</p>
                        </div>
                    </li>
                    </ul>
                </div>
                </div>
                <div className="col-lg-3 contact">
                <div className="tel-mail">
                    <div className="icon">
                    <i className='dark-light' onClick={darkMode} class="fas fa-moon"></i>
                    </div>
                    <div className="tel-text">
                    <strong className='white-text'>Call us now :</strong><span className="tel white-text"> (+84) 4567 421 978</span> <br />
                    <p className="mail white-text">Email : contact@revo.com</p>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </section>
        
        
    
  )
}

export default Nav