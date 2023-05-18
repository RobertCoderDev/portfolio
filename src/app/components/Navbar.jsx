import { useState, useEffect, useRef } from 'react';
import styles from '@styles/Navbar.module.css';
import { Link } from 'react-scroll';
import Image from 'next/image';
import logo from '@public/logo.png';
import Menu from '@components/Menu';
import Links from '@components/Links';

const Navbar = () => {
    const [isVisible, setIsVisible] = useState(false);

    const handleResize = () => {
        const screenWidth = window.innerWidth;

        if (screenWidth < 1200) {
            setIsVisible(false);
        } else {
            setIsVisible(true);
        }
    }

    useEffect(() => {
        handleResize(); // Llamar a la función una vez al iniciar

        window.addEventListener("resize", handleResize);

        window.scrollTo(0, 0)

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []); 

    const [openMenu, setOpenMenu] = useState(false);

    const handleToggleMenu = () => {
        setOpenMenu(!openMenu);
    };

    return (
        <nav className={styles.navbar}>
            <Link className={styles.logo} to="home" smooth={true}  offset={-60} duration={200}><Image src={logo} alt='logo' /></Link>
            <div className={styles.link}>
                {isVisible ? <Links handle={handleToggleMenu} /> : <Menu open={openMenu} handle={handleToggleMenu} />}
            </div>
        </nav>
    );
}

export default Navbar;