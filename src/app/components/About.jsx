import Image from "next/image";
import imgAbout from "@public/about.jpg";
import styles from "@styles/About.module.css";
import { motion } from "framer-motion";
import Link from "next/link";

const About = () => {
    return (
        <div className={styles.container}>
            <div className={styles.image}>
                <Image src={imgAbout} alt="about" priority quality={100} />
            </div>
            <div className={styles.text}>
                <h1>Algunas cosas sobre mi</h1>
                <p>
                Soy Roberto Vázquez, un apasionado de la tecnología con más de 3 años de experiencia. 
                Como ingeniero en sistemas computacionales, me dedico a explorar constantemente nuevas tecnologías para diseñar soluciones web innovadoras y efectivas. 
                Me apasiona enfrentar desafíos y desarrollar aplicaciones web intuitivas que brinden experiencias excepcionales. 
                ¿Tienes un proyecto en mente? ¡Estoy aquí para ayudarte a hacerlo realidad!
                </p>
                <Link href="/CV.pdf" download="CV Roberto Vazquez.pdf" target="_blank">
                    <motion.button id="downloadButton" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                            Descarga mi CV
                    </motion.button>
                </Link>
            </div>
        </div>
    );
};
export default About;
