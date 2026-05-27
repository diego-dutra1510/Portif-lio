import React, { useState, useMemo } from "react";
import { FaDiscord, FaYoutube, FaInstagram } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import "./home.css"

function Home() {

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
            <h1 className="atuacao">TÉCNICO EM DESENVOLVIMENTO DE SISTEMAS</h1>
            <div className="Objetivos">

                <motion.div
                    className="container"
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                        duration: 1,
                        ease: [0.22, 1, 0.36, 1]
                    }}
                    whileHover={{
                        y: -8,
                        scale: 1.02
                    }}
                    viewport={{ once: true }}
                >
                    <p>
                        Tenho aspirações de crescer continuamente no mercado de tecnologia, buscando sempre aprimorar minhas habilidades técnicas e desenvolver soluções inovadoras que possam transformar e otimizar processos. Meu objetivo é contribuir com conhecimento, criatividade e dedicação para impulsionar projetos que façam a diferença no dia a dia das pessoas e das empresas. Quero agregar valor ao mercado de tecnologia por meio da colaboração, aprendizado constante e da aplicação prática de novas tecnologias, promovendo impactos positivos e sustentáveis no setor.
                    </p>
                </motion.div>

                <motion.div
                    className="model"
                    initial={{ opacity: 0, x: 100, scale: 0.8 }}
                    whileInView={{
                        opacity: 1,
                        x: 0,
                        scale: 1
                    }}
                    transition={{
                        duration: 1.2,
                        ease: [0.22, 1, 0.36, 1]
                    }}
                    viewport={{ once: true }}
                >
                    
                </motion.div>

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


        </main>
    );
}

export default Home;