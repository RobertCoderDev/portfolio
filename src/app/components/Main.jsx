import styles from "@styles/Main.module.css";
import Link from "next/link";
import Image from "next/image";
import Hero from "./Hero";
import About from "./About";
import Projects from "./Projects";
import Technologies from "./Technologies";
import face from "@public/face.png";
import insta from "@public/insta.png";
import twit from "@public/twit.png";
import form from "@public/form.png";

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
            <section className={styles.technologies} id="technologies">
                <Technologies />
            </section>
            <section className={styles.contact} id="contact">
                <h1>Contáctame</h1>
                <div className={styles.contactImg}>
                    <Link href="https://www.facebook.com/robertcoderdev" target="_blank"><Image src={face} alt="face" priority quality={100} /></Link>
                    <Link href="https://www.instagram.com/robertcoderdev" target="_blank"><Image src={insta} alt="insta" priority quality={100} /></Link>
                    <Link href="https://twitter.com/robertcoderdev" target="_blank"><Image src={twit} alt="twit" priority quality={100} /></Link>
                    <Link href="https://docs.google.com/forms/d/e/1FAIpQLSfFWf5MZYOyM5jnsJz9haeGKWFwEUTOwjv-4Qz_-4nJe3esUw/viewform?usp=sf_link" target="_blank"><Image src={form} alt="form" priority quality={100} /></Link>
                </div>
            </section>
        </div>
    );
};

export default Main;
