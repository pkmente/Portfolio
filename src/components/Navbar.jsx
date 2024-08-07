import React from 'react';
import logo from '../assets/pk_logo.png';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';

const Navbar = () => {
    return (
        <nav className="mb-20 flex items-center justify-between py-6">
            <div className='flex flex-shrink-0 items-center'>
                <img className='mx-2 w-10' src={logo} alt='logo' />
            </div>
            <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
                <a href="www.linkedin.com/in/prabhu-kumar-mente-b547a8267" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin color='white' />
                </a>
                <a href="https://github.com/pkmente" target="_blank" rel="noopener noreferrer">
                    <FaGithub color='white' />
                </a>
                <a href="https://www.instagram.com/your-profile" target="_blank" rel="noopener noreferrer">
                    <FaInstagram color='white' />
                </a>
                <a href="https://twitter.com/your-profile" target="_blank" rel="noopener noreferrer">
                    <FaSquareXTwitter color='white' />
                </a>
            </div>
        </nav>
    );
}

export default Navbar;
