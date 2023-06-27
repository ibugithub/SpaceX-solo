import React from 'react';
import { NavLink } from 'react-router-dom';
import saturn from '../images/saturn.png';
import styles from '../Styles/Navigation.module.css';

const NavBar = () => (
  <nav className={styles.dFlx}>
    <div className={styles.logo_title_container}>
      <img className={styles.logo} src={saturn} alt="" />
      <h3 className={styles.fontW400}>Space Travelers&apos; Hub</h3>
    </div>
    <ul className={styles.NavBar_ul}>
      <li>
        <NavLink className={({ isActive }) => (isActive ? styles.active : ' ')} to="/"> Rockets</NavLink>
      </li>
      <li> Missions </li>
      <li>
        <NavLink className={({ isActive }) => (isActive ? styles.active : ' ')} to="/profile"> My Profile </NavLink>
      </li>
    </ul>
  </nav>
);
export default NavBar;
