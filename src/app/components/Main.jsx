import styles from "../../styles/Main.module.css";
import Link from "next/link";

const Main = () => {
    return (
        <div className={styles.main}>
            <section className={styles.hero} id="home">
                <h1>Hola, Soy Robert Vazquez</h1>
                <p>@robertvdev</p>
            </section>
            <section className={styles.section} id="about">
                <h1>Acerca de</h1>
                <p>
                    ¡Hola! Soy Roberto Vazquez, un desarrollador web apasionado por crear soluciones web únicas y
                    efectivas.
                </p>
                <p>Si tienes un proyecto en mente, ¡no dudes en contactarme!</p>
            </section>
            <section className={styles.section} id="projects">
                <h1>Proyectos</h1>
                <p>Aquí puedes ver algunos de mis proyectos más recientes:</p>
                <div className={styles.project}>
                    <h2>Proyecto rick and Morty</h2>
                    <p>una web construida con vanilla JS, HTML5 y CSS3</p>
                    <p>aquí va el link al proyecto</p>
                </div>
                <div className={styles.project}>
                    <h2>Proyecto Platzi store</h2>
                    <p>una web construida con Rect</p>
                    <p>aquí va el link al proyecto</p>
                </div>
                <div className={styles.project}>
                    <h2>Proyecto Billar</h2>
                    <p>una web construida con Next.js</p>
                    <p>aquí va el link al proyecto</p>
                </div>
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
