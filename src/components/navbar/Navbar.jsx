import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';


const setActive = ({ isActive }) => (isActive ? styles.active : "")

const Navbar = () => {
	return (
		<div className={styles.navbar}>
			<div className={styles.tab}><NavLink to='/' className={setActive}>Calculator</NavLink></div>
			<div className={styles.tab}><NavLink to='/exchange' className={setActive}>Exchange Rate</NavLink></div>
			<div className={styles.tab}><NavLink to='/converter' className={setActive}>Unit Converter</NavLink></div>
		</div>
	)
}

export default Navbar;