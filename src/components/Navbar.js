import React from 'react'
import {FaLinkedin} from 'react-icons/fa'
import {FaGithub} from 'react-icons/fa'

 
function Navbar() {
  return (
    <>
         <a  className='Name' href='/'>Gayathri.M</a>
          <ul className='Navbar'>
            <li><a href='/' className='home'>HOME</a></li>
            <li><a href='/about' className='home' >ABOUT ME</a></li>
            <li><a href='/resume' className='home'>Resume</a></li>
            <li><a href='https://www.linkedin.com/in/gayathri-m-393574200/' className='icons'><FaLinkedin /></a></li>
            <li><a href='https://github.com/GAYATHRI1924' className='icons'><FaGithub /></a></li>
          </ul>
    </>
  )
}

export default Navbar