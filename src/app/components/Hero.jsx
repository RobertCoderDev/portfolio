import Image from "next/image";
import { useEffect, useState } from "react";
import mobile from "@public/yoMobile.png";
import desktop from "@public/yo.png";
import styles from "@styles/Hero.module.css";
import { Player } from "@lottiefiles/react-lottie-player";
import { motion } from "framer-motion";

const Hero = () => {
    const [foto, setFoto] = useState(mobile);

    const handleResize = () => {
        const screenWidth = window.innerWidth;
        if (screenWidth < 1200) {
            setFoto(foto);
        } else {
            setFoto(desktop);
        }
    };

    useEffect(() => {
        handleResize();
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className={styles.container}>
            <motion.div
                className={styles.motion}
                initial={{ opacity: 0, y: 150 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    duration: 1.5,
                    delay: 1.5,
                }}
            >
                <Image className={styles.foto} src={foto} alt="yo" priority quality={100} />
            </motion.div>
            <div className={styles.divNombre}>
                <motion.h1
                    initial={{ opacity: 0, y: 150 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 1.5,
                        delay: 0.5,
                    }}
                    className={styles.nombre}
                >
                    Hola, Soy Robert Vázquez
                </motion.h1>
                <p className={styles.tag}>@RobertCoder</p>
                <Player
                    className={styles.lottie}
                    autoplay
                    loop
                    src="https://assets8.lottiefiles.com/temporary_files/9SxYT7.json"
                ></Player>
            </div>
        </div>
    );
};

export default Hero;
