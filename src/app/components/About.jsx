import Image from "next/image";
import imgAbout from "@public/about.jpg";
import styles from "@styles/About.module.css";
import { motion } from "framer-motion";
import { useEffect } from "react";

const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/CV.pdf";
    link.download = "CV Roberto Vazquez.pdf";
    link.click();
};

const About = () => {
    useEffect(() => {
        const button = document.getElementById("downloadButton");
        button.addEventListener("click", handleDownload);

        return () => {
            button.removeEventListener("click", handleDownload);
        };
    }, []);

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
                <motion.button id="downloadButton" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                        Descarga mi CV
                </motion.button>
            </div>
        </div>
    );
};
export default About;
