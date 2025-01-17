    import React, { useState} from 'react'
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
    
        const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

        const handleMobileMenuToggle = () => {
          setIsMobileMenuOpen((prev) => !prev);
      
          const mobList = document.querySelector(".mob-list");
          const mobLinks = mobList.querySelectorAll("ul a");
      
          if (!isMobileMenuOpen) {
            gsap.to(mobList, {
              right: 0,
              duration: 0.5,
            });
            gsap.from(mobLinks, {
              x: 150,
              opacity: 0,
              duration: 1,
              stagger: 0.1,
            });
          } else {
            gsap.to(mobList, {
              right: "-100%",
              duration: 0.5,
            });
          }
        };
        return (
        <section className='navbar'>        
            <nav className='main-font'>
                <div className="logo">
                    <img src={logo} alt="" width={150}  />
                </div>
                <ul className='lists main-font'>
                    <Link to="/contact">Home</Link>
                    <Link to="/contact"> Portfolio Management Service</Link>
                    <Link to="/contact"> Export Advisor</Link>
                    <Link to="/contact">Contact Us</Link>
                </ul>
                <div className="mob-nav-opener">
                <span onClick={handleMobileMenuToggle}>
            {isMobileMenuOpen ? (
              <MdOutlineCancel className="closer" />
            ) : (
              <CiTextAlignRight className="opener" />
            )}
          </span>
                </div>
                <div className="mob-list">
                    <ul className='main-font'>
                        <Link to="/">
                            <IoHomeOutline />
                            <li>Home</li>
                        </Link>
                        <Link to="/portfolio">
                            <GiNetworkBars />
                            <li>Portfolio Service</li>
                        </Link>
                        <Link to="/advisor">
                            <GrUserExpert />
                            <li>Expert Advisor</li>
                        </Link>
                        <Link to="/contact">
                            <IoIosContacts />
                            <li>Contact Us</li>
                        </Link>
                    </ul> 
            </div>
            </nav>
        
        
        </section>
        )
    }

    export default Nav