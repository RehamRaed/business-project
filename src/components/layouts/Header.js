import { React, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import logo from '../../assest/9d11157ea873dc8867aad6ccd486da29-removebg-preview.png';
import '../../styles/Header.css';

function Header() {
    const [sideNav, setsideNav] = useState(false);
    const [sticky, setsticky] = useState(false);

    const sidenavShow = () => {
        setsideNav(!sideNav);
    };

    useEffect(() => {
        const handleScroll = () => {
            setsticky(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className={`${sticky ? "sticky" : ''}`}>
            <div id="site_header">
                <nav className="navbar container" id="Navbar">
                    <div className="navbar-brand">
                        <Link to="/">
                            <img src={logo} alt="logo" />
                        </Link>
                    </div>
                    <div className="navbar-toggler" onClick={sidenavShow}>
                        <i className="bi bi-list list_icon"></i>
                    </div>
                    <div className={`menu-items ${sideNav ? "active" : ''}`}>
                        <ul>
                            <li>
                                <ScrollLink 
                                    to="hero_section" 
                                    spy={true} 
                                    smooth={true} 
                                    offset={-70} 
                                    duration={500} 
                                    onClick={() => setsideNav(false)}
                                >
                                    Home
                                </ScrollLink>
                            </li>
                            <li>
                                <ScrollLink 
                                    to="about_section" 
                                    spy={true} 
                                    smooth={true} 
                                    offset={-70} 
                                    duration={500} 
                                    onClick={() => setsideNav(false)}
                                >
                                    About Us
                                </ScrollLink>
                            </li>
                            <li>
                                <ScrollLink 
                                    to="services_section" 
                                    spy={true} 
                                    smooth={true} 
                                    offset={-70} 
                                    duration={500} 
                                    onClick={() => setsideNav(false)}
                                >
                                    Services
                                </ScrollLink>
                            </li>
                            <li>
                                <ScrollLink 
                                    to="blog_section" 
                                    spy={true} 
                                    smooth={true} 
                                    offset={-70} 
                                    duration={500} 
                                    onClick={() => setsideNav(false)}
                                >
                                    Blog
                                </ScrollLink>
                            </li>
                            <li>
                                <ScrollLink 
                                    to="contact_section" 
                                    spy={true} 
                                    smooth={true} 
                                    offset={-70} 
                                    duration={500} 
                                    onClick={() => setsideNav(false)}
                                >
                                    Contact Us
                                </ScrollLink>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
    );
}

export default Header;
