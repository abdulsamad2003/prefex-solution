import React from 'react'
import "./Nav.scss"
import { gsap } from 'gsap'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'
function Nav() {
 
    const opener = () => {
        const mobList = document.querySelector('.mob-list')
        const mobLinks = document.querySelectorAll('ul a') 

        gsap.to(mobList, {
            right: 0,
            duration: 0.5,
        })
        gsap.from(mobLinks, {
            x: 80,
            opacity: 0,
            duration: 1,
            stagger: 0.1
        })
   
    }
    const closer = () => {
        const mobList = document.querySelector('.mob-list')
        gsap.to(mobList, {
            right: '-100%',
            duration: 0.5,
        })
   
    }
    return (
    <section className='navbar'>        
        <nav className='main-font'>
            <div className="logo">
                <img src={logo} alt="" width={150}  />
            </div>
            <ul className='lists main-font'>
                <Link>Home</Link>
                <Link>Portfolio Management Service</Link>
                <Link>Export Advisor</Link>
                <Link>Contact Us</Link>
            </ul>
            <div onClick={opener} className="mob-nav-opener">
                <span>open</span>
            </div>
            <div className="mob-list">
                <span onClick={closer}>X</span>
                <ul className='main-font'>
                        <Link>Home</Link>
                        <Link>Portfolio Management Service</Link>
                        <Link>Export Advisor</Link>
                        <Link>Contact Us</Link>
                </ul>
        </div>
        </nav>
      
      
    </section>
    )
}

export default Nav