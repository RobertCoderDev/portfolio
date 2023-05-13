import { useState } from 'react';
import styles from '../../styles/Navbar.module.css';
import { Link } from 'react-scroll';
import Image from 'next/image';
import logo from '../../../public/logo.png';

const Navbar = () => {

    const [openMenu, setOpenMenu] = useState(false);

    const handleToggleMenu = () => {
        setOpenMenu(!openMenu);
    };

    const handleCloseMenu = () => {
        setOpenMenu(false);
    };

    return (
        <nav className={styles.navbar}>
            <Link className={styles.logo} to="home" smooth={true} duration={200}><Image src={logo} alt='logo' /></Link>
            <ul className={styles.nav} >
                <li className={styles.navItem}>
                    <Link to="about" smooth={true} duration={200} className={styles.navLink} onClick={handleCloseMenu}>
                            Acerca de
                    </Link>
                </li>
                <li className={styles.navItem}>
                    <Link to="projects" smooth={true} duration={200} className={styles.navLink} onClick={handleCloseMenu}>
                            Proyectos
                    </Link>
                </li>
                <li className={styles.navItem}>
                    <Link to="technologies" smooth={true} duration={200} className={styles.navLink} onClick={handleCloseMenu}>
                            Tecnologías
                    </Link>
                </li>
                <li className={styles.navItem}>
                    <Link to="contact" smooth={true} duration={200} className={styles.navLink} onClick={handleCloseMenu}>
                            Contacto
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;