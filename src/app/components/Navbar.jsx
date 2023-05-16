import { useState, useEffect } from 'react';
import styles from '../../styles/Navbar.module.css';
import { Link } from 'react-scroll';
import Image from 'next/image';
import logo from '../../../public/logo.png';
import Menu from './Menu';
import Links from './Links'

const Navbar = () => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const handleResize = () => {
            const screenWidth = window.innerWidth;

            if (screenWidth <= 1200) {
            setIsVisible(false);
            } else {
            setIsVisible(true);
            }
        };
    window.addEventListener("resize", handleResize);

    return () => {
        window.removeEventListener("resize", handleResize);
    };
    }, []);

    const [openMenu, setOpenMenu] = useState(false);

    const handleToggleMenu = () => {
        setOpenMenu(!openMenu);
        console.log("acción");
    };

    const handleCloseMenu = () => {
        setOpenMenu(false);
    };

    return (
        <nav className={styles.navbar}>
            <Link className={styles.logo} to="home" smooth={true} duration={200}><Image src={logo} alt='logo' /></Link>
            <div className={styles.link}>
                {isVisible ? <Links handle={handleToggleMenu} /> : <Menu open={openMenu} handle={handleToggleMenu} />}
            </div>
        </nav>
    );
}

export default Navbar;