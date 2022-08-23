import "../App.css";
import {Link} from 'react-scroll'
import React, { useState } from 'react';

function NavBar() {
    const home = 'HOME'
    const about = 'ABOUT';
    const resume = 'RESUME';
    const work = 'WORK';
    const contact = 'CONTACT';

    const [color, setColor] = useState(false)
const changeNavBg = () => {
    if (window.scrollY >= 150) {
        setColor(true)
    } else {
        setColor(false)
    }
}

window.addEventListener('scroll', changeNavBg)
  
    return (
  
        <ul className="navContainer active" class="nav md" id={color ? 'navContainer-bg' : 'navContainer'}>
            <li class="nav-item">
                <Link to="home" smooth={true} offset={0} duration={300} class="nav-link" id={color ? 'navText-bg' : 'navText'} >{home}</Link>
            </li>
            <li class="nav-item">
                <Link to="about" smooth={true} offset={-50} duration={300} class="nav-link " id={color ? 'navText-bg' : 'navText'} >{about}</Link>
            </li>
            <li class="nav-item">
                <Link to="work" smooth={true} offset={-50} duration={500} class="nav-link " id={color ? 'navText-bg' : 'navText'} >{work}</Link>
            </li>
            <li class="nav-item">
                <Link to="contact" spy={true} smooth={true} offset={50} duration={500} class="nav-link " id={color ? 'navText-bg' : 'navText'}>{contact}</Link>
            </li>
            <li class="nav-item">
                <a class="nav-link " id={color ? 'navText-bg' : 'navText'} target="_blank" rel="noreferrer" href="https://docs.google.com/document/d/e/2PACX-1vSiJgiJKFbeAVsUsXwc-CIv9bfowdcp9lWjfHhK9zlNzPUzoAmmJB_VDfN9UC-JH-OjZ42oUzECpd4S/pub">
                    {resume}</a>
            </li>
        </ul>
 
);
}

export default NavBar;