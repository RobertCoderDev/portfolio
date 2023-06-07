import styles from "@styles/Main.module.css";
import Link from "next/link";
import Hero from "./Hero";
import About from "./About";
import Projects from "./Projects";

const Main = () => {
    return (
        <div className={styles.main}>
            <section className={styles.hero} id="home">
                <Hero />
            </section>
            <section className={styles.about} id="about">
                <About />
            </section>
            <section className={styles.projects} id="projects">
                <Projects />
            </section>
            <section className={styles.section} id="technologies">
                <h1>Tecnologías</h1>
                <p>Aquí puedes ver algunas de las tecnologías que manejo:</p>
                <div className={styles.project}>
                    <h2>JS</h2>
                    <p>Descripción</p>
                </div>
                <div className={styles.project}>
                    <h2>HTML</h2>
                    <p>Descripción</p>
                </div>
                <div className={styles.project}>
                    <h2>CSS</h2>
                    <p>Descripción</p>
                </div>
                <div className={styles.project}>
                    <h2>React</h2>
                    <p>Descripción</p>
                </div>
                <div className={styles.project}>
                    <h2>Next.js</h2>
                    <p>Descripción</p>
                </div>
                <div className={styles.project}>
                    <h2>Git</h2>
                    <p>Descripción</p>
                </div>
                <div className={styles.project}>
                    <h2>GitHub</h2>
                    <p>Descripción</p>
                </div>
                <div className={styles.project}>
                    <h2>Node JS</h2>
                    <p>Descripción</p>
                </div>
            </section>
            <section className={`${styles.section} ${styles.sectionContact}`} id="contact">
                <h1>Contacto</h1>
                <p>Puedes contactarme en roberto_smusic@hotmail.com o a través de mis perfiles en redes sociales:</p>
                <ul className={styles.contact}>
                    <li>
                        <Link href="/">LinkedIn</Link>
                    </li>
                    <li>
                        <Link href="/">Twitter</Link>
                    </li>
                    <li>
                        <Link href="/">Facebook</Link>
                    </li>
                    <li>
                        <Link href="/">Instagram</Link>
                    </li>
                </ul>
            </section>
        </div>
    );
};

export default Main;
