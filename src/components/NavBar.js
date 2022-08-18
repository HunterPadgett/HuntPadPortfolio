import "../App.css";
import React from 'react';
// import Container from 'react-bootstrap/Container';
// import Navbar from 'react-bootstrap/Navbar';


function NavBar() {
    const home = 'HOME';
    const about = 'ABOUT';
    const resume = 'RESUME';
    const work = 'WORK';
    const contact = 'CONTACT';
  
    return (
    <ul class="nav justify-content-center p-3 md">
        <li class="nav-item ">
            <a class="nav-link " id='navText' aria-current="page" href="#">{home}</a>
        </li>
        <li class="nav-item">
            <a class="nav-link " id='navText' href="#">{about}</a>
        </li>
        <li class="nav-item">
            <a class="nav-link " id='navText' href="#">{resume}</a>
        </li>
        <li class="nav-item">
            <a class="nav-link " id='navText' href="#">{work}</a>
        </li>
        <li class="nav-item">
            <a class="nav-link " id='navText' href="#">{contact}</a>
        </li>
    </ul>
);
}

export default NavBar;