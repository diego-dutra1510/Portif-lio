import React, { useState, useMemo, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";
import { motion, AnimatePresence, useMotionValue } from "framer-motion";
import "./projetos.css";
import { projetos } from "../../components/projetos_lista";

function Projects() {

    const navigate = useNavigate();

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
        return Array.from({ length: 40 }, () => ({
            size: Math.random() * 18 + 8,
            left: Math.random() * 100,
            duration: Math.random() * 8 + 3,
            delay: Math.random() * 0.5,
        }));
    }, []);

    function detalhes_projeto(nome) {
        const nomeUrl = encodeURIComponent(nome);
        navigate(`/projeto/${nomeUrl}`);
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
                <div name="void" style={{ height: "1vh" }} />
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
                                y: -3900,
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

                <section className="tech-stack">
                    <div className="stack-grid">
                        {projetos.map((projeto) => (
                            <motion.div
                                onClick={() => detalhes_projeto(projeto.nome)} key={projeto.id}
                                onMouseEnter={() =>
                                    setCursorVariant("hover")
                                }

                                onMouseLeave={() =>
                                    setCursorVariant("default")
                                }
                                className="stack-card"
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{
                                    opacity: 1, scale: 1, transition: {
                                        duration: 0.5,
                                        delay: projeto.id,
                                    }
                                }}
                                viewport={{ once: true }}
                            >
                                <img src={projeto.img} alt={projeto.nome} className="stack-card-img" />
                                <h3 className="stack-card-title">{projeto.nome}</h3>
                                <p className="texto_projeto">{projeto.descricao}</p>
                                <div className="stack-card-tecnologias">
                                    {projeto.tecnologias.map((tecnologia, index) => (
                                        <span key={index} className="stack-card-tecnologia" style={{ backgroundColor: tecnologia.cor }}>
                                            {tecnologia.nome}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>

                </section>



            </main >
        </>
    );
}

export default Projects;