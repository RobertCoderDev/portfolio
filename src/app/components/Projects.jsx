import Image from "next/image";
import Link from "next/link";
import iddo from "@public/iddo.png";
import billar from "@public/billar.png";
import styles from "@styles/Projects.module.css";
import { motion } from "framer-motion";


const Projects = () => {

    return (
        <>
            <h1 className={styles.h1}>Algunos de mis proyectos más recientes</h1>
            <div className={styles.project}>
                <Link href="https://www.iddotec.com/" target="_blank">
                <motion.div
                        initial={{ opacity: 0, y: -150 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 1.5,
                            delay: 1,
                        }}
                    >
                        <Image src={iddo} alt="iddo" priority quality={100} />
                    </motion.div>
                </Link>
                <div className={styles.text}>
                    <h2>IddO Tec</h2>
                    <p>
                        Esta página web está construida con JavaScript, CSS y HTML5, todo esto en el framework de Astro JS.
                        Este proyecto es SSG, permitiendo un excelente tiempo de carga, ademas esta estilizado con Tailwind. 
                    </p>
                    <Link href="https://www.iddotec.com/" target="_blank">
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
