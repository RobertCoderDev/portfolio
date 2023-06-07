import Image from "next/image";
import Link from "next/link";
import rick from "@public/rick.png";
import billar from "@public/billar.png";
import styles from "@styles/Projects.module.css";
import { motion } from "framer-motion";


const Projects = () => {

    return (
        <>
            <h1 className={styles.h1}>Algunos de mis proyectos más recientes</h1>
            <div className={styles.project}>
                <Link href="https://xblackeaglex.github.io/webRickAndMorty/src/index.html" target="_blank">
                <motion.div
                        initial={{ opacity: 0, y: -150 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 1.5,
                            delay: 1,
                        }}
                    >
                        <Image src={rick} alt="Rick and Morty" priority quality={100} />
                    </motion.div>
                </Link>
                <div className={styles.text}>
                    <h2>Rick and Morty</h2>
                    <p>
                        Esta página web está construida con JavaScript, CSS y HTML5 sin frameworks adicionales. Utiliza
                        una API para mostrar los personajes de la serie, además cuenta con un buscador para personajes,
                        lugares y episodios.
                    </p>
                    <Link href="https://xblackeaglex.github.io/webRickAndMorty/src/index.html" target="_blank">
                        <motion.button id="downloadButton" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                            Visítala
                        </motion.button>
                    </Link>
                </div>
            </div>
            <div id="2container" className={styles.project}>
                <Link href="https://billar.vercel.app/" target="_blank">
                    <motion.div
                        initial={{ opacity: 0, y: 150 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 1.5,
                            delay: 1,
                        }}
                    >
                        <Image src={billar} alt="Rick and Morty" priority quality={100} />
                    </motion.div>
                </Link>
                <div className={styles.text}>
                    <h2>Control de Billar</h2>
                    <p>
                        Esta aplicación web ha sido desarrollada con Next.js, un poderoso framework de React. Nuestro
                        objetivo es proporcionar un control fácil y rápido del tiempo y los productos consumidos en las
                        mesas de billar y dominó para un establecimiento en La Piedad, Michoacán.
                    </p>
                    <Link href="https://billar.vercel.app/" target="_blank">
                        <motion.button id="downloadButton2" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                            Visítala
                        </motion.button>
                    </Link>
                </div>
            </div>
        </>
    );
};
export default Projects;
