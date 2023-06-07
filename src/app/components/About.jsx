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
                    Soy Roberto Vázquez, un apasionado por la tecnología y la programación. Como ingeniero en sistemas
                    computacionales, estoy siempre aprendiendo nuevas tecnologías para crear soluciones web únicas y
                    efectivas. Me encantan los retos y crear Aplicaciones web que sean fáciles de usar. ¡Hablemos de tu
                    proyecto!
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
