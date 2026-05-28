import React, { useState, useMemo, useEffect } from "react";
import { FaDiscord, FaYoutube, FaInstagram } from "react-icons/fa";
import { motion, AnimatePresence, useMotionValue } from "framer-motion";
import "./home.css";

function Home() {

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const [cursorVariant, setCursorVariant] = useState("default");

    useEffect(() => {

        const moveMouse = (e) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };

        window.addEventListener(
            "mousemove",
            moveMouse
        );

        return () => {
            window.removeEventListener(
                "mousemove",
                moveMouse
            );
        };
    }, []);

    const variants = {
        default: {
            width: 20,
            height: 20,
            backgroundColor: "#ffffff",
        },

        hover: {
            width: 40,
            height: 40,
            backgroundColor: "rgb(241, 228, 255)",
        }
    };

    const gotas = useMemo(() => {
        return Array.from({ length: 50 }, () => ({
            size: Math.random() * 18 + 8,
            left: Math.random() * 100,
            duration: Math.random() * 8 + 3,
            delay: Math.random() * 0.5,
        }));
    }, []);

    const [objetivo_div, setEstado_objetivo] = useState(false);

    function div_open(tipo) {
        if (tipo === "objetivo") {
            setEstado_objetivo(!objetivo_div);
        }
    }

    return (
        <>
            <motion.div
                className="cursor"
                variants={variants}
                animate={cursorVariant}
                style={{
                    x: mouseX,
                    y: mouseY,
                    translateX: "-50%",
                    translateY: "-50%",
                }}
            />

            <main className="container-home">
                <div name="void" style={{ height: "12vh" }} />
                <motion.section className="secao_atuacao">
                    {gotas.map((gota, i) => (
                        <motion.div
                            key={i}
                            className="gota"
                            initial={{
                                y: 500,
                                opacity: 0,
                            }}
                            animate={{
                                y: -1900,
                                opacity: [0, 1, 1, 0],
                            }}
                            transition={{
                                duration: gota.duration,
                                repeat: Infinity,
                                delay: gota.delay,
                                ease: "linear",
                            }}
                            style={{
                                left: `${gota.left}%`,
                                width: `${gota.size}px`,
                                height: `${gota.size}px`,
                            }}
                        />
                    ))}
                </motion.section>
                <div className="content-wrapper">
                    <div className="left-side">
                        <h1 className="atuacao">TÉCNICO EM DESENVOLVIMENTO DE SISTEMAS</h1>
                        <div className="Objetivos">

                            <motion.div
                                className="container"
                                initial={{ opacity: 0, x: -100, }}
                                whileInView={{
                                    opacity: 1, x: 0, transition: {
                                        duration: 1,
                                        delay: 3,
                                        ease: [0.22, 1, 0.36, 1]
                                    }
                                }}
                                whileHover={{
                                    y: -8,
                                    scale: 1.02,
                                    transition: {
                                        duration: 0.3
                                    }
                                }}

                                viewport={{ once: true }}

                            >
                                <h2 className="title">OBJETIVOS</h2>
                                <p
                                    onMouseEnter={() =>
                                        setCursorVariant("hover")
                                    }

                                    onMouseLeave={() =>
                                        setCursorVariant("default")
                                    }>
                                    Tenho aspirações de crescer continuamente no mercado de tecnologia, buscando sempre aprimorar minhas habilidades técnicas e desenvolver soluções inovadoras que possam transformar e otimizar processos. Meu objetivo é contribuir com conhecimento, criatividade e dedicação para impulsionar projetos que façam a diferença no dia a dia das pessoas e das empresas. Quero agregar valor ao mercado de tecnologia por meio da colaboração, aprendizado constante e da aplicação prática de novas tecnologias, promovendo impactos positivos e sustentáveis no setor.
                                </p>
                            </motion.div>

                        </div>
                    </div>

                    <div className="right-side">
                        <div className="Card">
                            <div className="Card_header">
                                <div style={{
                                    width: 20,
                                    height: 20,
                                    borderRadius: "50%",
                                    backgroundColor: "#d30000",
                                }} />
                                <div style={{
                                    width: 20,
                                    height: 20,
                                    borderRadius: "50%",
                                    backgroundColor: "#d37800",
                                }} />
                                <div style={{
                                    width: 20,
                                    height: 20,
                                    borderRadius: "50%",
                                    backgroundColor: "#00e013",
                                }} />
                            </div>
                        </div>
                    </div>
                </div>

                {/* <button onClick={() => div_open("objetivo")}>Objetivos</button>
            <AnimatePresence mode="wait">
                {objetivo_div && (
                    <motion.div
                        initial={{
                            opacity: 0,
                            x: -100,
                            filter: "blur(10px)"
                        }}
                        animate={{
                            opacity: 1,
                            x: 0,
                            filter: "blur(0px)"
                        }}
                        exit={{
                            opacity: 0,
                            x: -100,
                            filter: "blur(10px)"
                        }}
                        transition={{
                            duration: 0.8,
                            ease: [0.22, 1, 0.36, 1]
                        }}
                    >
                        <p className="texto_descricao">

                        </p>
                    </motion.div>
                )}
            </AnimatePresence> */}


            </main >
        </>
    );
}

export default Home;