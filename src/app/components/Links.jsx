import { Link } from 'react-scroll';
import { useEffect, useState } from 'react';
import styles from '@styles/Link.module.css'
import styles2 from '@styles/Linkfull.module.css'

const Links = ({handle}) => {
    
    const [style, setStyle] = useState(styles2)

    useEffect(() => {
        const screenWidth = window.innerWidth;
        if (screenWidth < 1200) {
            setStyle(styles)
            console.log('soy mobile');
        } else {
            setStyle(styles2)
            console.log('soy desktop');
        }
    },[])

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