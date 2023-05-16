import { Link } from 'react-scroll';
import { useEffect } from 'react';
import styles from '../../styles/Link.module.css'
import styles2 from '../../styles/Linkfull.module.css'

const Links = ({handle}) => {
    let style = styles2

    const screenWidth = window.innerWidth;

    if (screenWidth <= 1200) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        style = styles
    } else {
        style = styles2
    }


    return (
        <ul className={style.nav} >
            <li className={style.navItem}>
                <Link to="about" smooth={true} duration={200} className={style.navLink} onClick={handle}>
                        Acerca de
                </Link>
            </li>
            <li className={style.navItem}>
                <Link to="projects" smooth={true} duration={200} className={style.navLink} onClick={handle}>
                        Proyectos
                </Link>
            </li>
            <li className={style.navItem}>
                <Link to="technologies" smooth={true} duration={200} className={style.navLink} onClick={handle}>
                        Tecnologías
                </Link>
            </li>
            <li className={style.navItem}>
                <Link to="contact" smooth={true} duration={200} className={style.navLink} onClick={handle}>
                        Contacto
                </Link>
            </li>
        </ul>
    );
}

export default Links;