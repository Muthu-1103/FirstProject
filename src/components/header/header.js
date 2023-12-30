import React from 'react';
import { Link } from 'react-scroll';
import "./header.css"
const Header = () => {

  return (
    <div className='header'>
    <div className='header_left'>
      <h1><span>P</span>ort<span>F</span>olio</h1>
    </div>
    <div className='header_right'>
        <Link to='about' smooth={true} duration={500}>
            <h4>About Me</h4>
        </Link>
        <Link to='projects' smooth={true} duration={500}>
            <h4>Projects</h4>
        </Link>
        <Link to='skills' smooth={true} duration={500}>
            <h4>Skills</h4>
        </Link>
        <Link to='Contacts' smooth={true} duration={500}>
            <h4>Contact Me</h4>
        </Link>
    </div>
    </div>
  )
}

export default Header
