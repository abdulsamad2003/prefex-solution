    import React from 'react'
    import "./Nav.scss"
    import { gsap } from 'gsap'
    import logo from '../assets/logo.png'
    import { Link } from 'react-router-dom'
    import { CiTextAlignRight } from "react-icons/ci";
    import { MdOutlineCancel } from "react-icons/md";
    import { IoHomeOutline } from "react-icons/io5";
    import { GiNetworkBars } from "react-icons/gi";
    import { GrUserExpert } from "react-icons/gr";
    import { IoIosContacts } from "react-icons/io";
    function Nav() {
    
        const mobList = document.querySelector('.mob-list')
        const mobLinks = document.querySelectorAll('ul a') 
        const openerIcon = document.querySelector('.opener') ;
        const closerIcon = document.querySelector('.closer')

        const opener = () => {
            openerIcon.style.display = 'none';
            closerIcon.style.display = 'block'
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
            openerIcon.style.display = 'block';
            closerIcon.style.display = 'none'

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
                <div className="mob-nav-opener">
                    <span onClick={opener} >< CiTextAlignRight className="opener" style={{ fontSize: '2rem',display: 'block' }} /></span>
                    <span onClick={closer} ><MdOutlineCancel className="closer"  style={{ fontSize: '2rem',display: 'none' }} /></span>
                </div>
                <div className="mob-list">
                    <ul className='main-font'>
                    <Link>
                            <IoHomeOutline style={{fontSize: '1.5rem'}} />
                            <li>Home</li>
                    </Link>
                    <Link>
                            <GiNetworkBars style={{fontSize: "1.5rem"}} />
                            <li>Portfolio Service</li>
                    </Link>
                    <Link>
                            <GrUserExpert style={{fontSize: "1.5rem"}} />
                            <li>Expert Advisor</li>
                    </Link>
                    <Link>
                            <IoIosContacts style={{fontSize: "1.5rem"}} />
                            <li>Contact Us</li>
                    </Link>
                    </ul>
            </div>
            </nav>
        
        
        </section>
        )
    }

    export default Nav