import { useState } from 'react';
import styles from '../../styles/Navbar.module.css';
import { Link } from 'react-scroll';

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
            <div className={styles.navbarBrand}>
                <Link to="home" smooth={true} duration={200}>Mi Portafolio</Link>
                <button
                    className={`${styles.navbarToggle} ${openMenu ? styles.navbarToggleOpen : ""}`}
                    onClick={handleToggleMenu}
                >
                    <span className={styles.navbarToggleIcon}></span>
                </button>
            </div>

            <ul className={`${styles.navbarNav} ${openMenu ? styles.navbarNavOpen : ""}`}>
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