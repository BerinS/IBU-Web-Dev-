import React from 'react';
import {useRef} from 'react';
import {FaBars, FaTimes} from 'react-icons/fa';
import "./NavbarStyle.css";
import {createTheme, ThemeProvider, Typography } from '@mui/material';
import { NavLink} from "react-router-dom";

function Navbar() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

	return (
		<header>			 
			<Typography><h3 className='LogoText'>PC Builder</h3></Typography>
			<nav ref={navRef}>
				<Typography>
				<NavLink to="/">Build</NavLink>
				<NavLink to="/Blog">Blog</NavLink>				
				<NavLink to="/Contact">Contact</NavLink>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
				</Typography>
			</nav>
			<button
				className="nav-btn"
				onClick={showNavbar}>
				<FaBars />
			</button>			
		</header>
	);
}

export default Navbar;