import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from '@styles/Technologies.module.css'
import html from '@public/html.png'
import css from '@public/css.png'
import js from '@public/js.png'
import node from '@public/node.png'
import react from '@public/react.png'
import next from '@public/next.png'
import ts from '@public/ts.png'
import git from '@public/git.png'
import github from '@public/github.png'

const Technologies = () => {
    return (
        <div className={styles.container}>
            <h1>Algunas de las tecnologías que domino</h1>
            <div className={styles.containerTech}>
                <div className={styles.tech}>
                    <motion.div
                        initial={{ opacity: 0, y: -150 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 1.5,
                            delay: 1,
                        }}
                    >
                        <Image src={html} alt="html" priority quality={100} />
                    </motion.div>
                    <div className={styles.text}>
                        <h2>HTML 5</h2>
                        <p>El lenguaje de marcado utilizado para crear páginas web</p>
                    </div>
                </div>
                <div className={styles.tech}>
                    <motion.div
                        initial={{ opacity: 0, y: -150 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 1.5,
                            delay: 1,
                        }}
                    >
                        <Image src={css} alt="css" priority quality={100} />
                    </motion.div>
                    <div className={styles.text}>
                        <h2>CSS 3</h2>
                        <p>utilizado para dar estilo a páginas web y aplicaciones en línea.</p>
                    </div>
                </div>
                <div className={styles.tech}>
                    <motion.div
                        initial={{ opacity: 0, y: -150 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 1.5,
                            delay: 1,
                        }}
                    >
                        <Image src={js} alt="js" priority quality={100} />
                    </motion.div>
                    <div className={styles.text}>
                        <h2>JavaScript</h2>
                        <p>lenguaje de programación de la web</p>
                    </div>
                </div>
                <div className={styles.tech}>
                    <motion.div
                        initial={{ opacity: 0, y: -150 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 1.5,
                            delay: 1,
                        }}
                    >
                        <Image src={node} alt="node" priority quality={100} />
                    </motion.div>
                    <div className={styles.text}>
                        <h2>Node JS</h2>
                        <p>permite ejecutar JS en el servidor y construir aplicaciones de backend</p>
                    </div>
                </div>
                <div className={styles.tech}>
                    <motion.div
                        initial={{ opacity: 0, y: -150 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 1.5,
                            delay: 1,
                        }}
                    >
                        <Image src={react} alt="react" priority quality={100} />
                    </motion.div>
                    <div className={styles.text}>
                        <h2>React</h2>
                        <p>biblioteca de JavaScript para construir interfaces de usuario</p>
                    </div>
                </div>
                <div className={styles.tech}>
                    <motion.div
                        initial={{ opacity: 0, y: -150 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 1.5,
                            delay: 1,
                        }}
                    >
                        <Image src={next} alt="next" priority quality={100} />
                    </motion.div>
                    <div className={styles.text}>
                        <h2>Next.JS</h2>
                        <p>framework de React para crear aplicaciones web de SSG y SSR</p>
                    </div>
                </div>
                <div className={styles.tech}>
                    <motion.div
                        initial={{ opacity: 0, y: -150 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 1.5,
                            delay: 1,
                        }}
                    >
                        <Image src={ts} alt="ts" priority quality={100} />
                    </motion.div>
                    <div className={styles.text}>
                        <h2>TypeScript</h2>
                        <p>JavaScript vitaminado</p>
                    </div>
                </div>
                <div className={styles.tech}>
                    <motion.div
                        initial={{ opacity: 0, y: -150 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 1.5,
                            delay: 1,
                        }}
                    >
                        <Image src={git} alt="git" priority quality={100} />
                    </motion.div>
                    <div className={styles.text}>
                        <h2>Git</h2>
                        <p>sistema de control de versiones</p>
                    </div>
                </div>
                <div className={styles.tech}>
                    <motion.div
                        initial={{ opacity: 0, y: -150 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 1.5,
                            delay: 1,
                        }}
                    >
                        <Image src={github} alt="github" priority quality={100} />
                    </motion.div>
                    <div className={styles.text}>
                        <h2>GitHub</h2>
                        <p>Una plataforma de alojamiento de código fuente que utiliza Git</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Technologies;