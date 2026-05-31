import React, { useState, useMemo, useEffect } from "react";
import { FaChevronDown } from "react-icons/fa";
import { motion, AnimatePresence, useMotionValue } from "framer-motion";
import "./home.css";

import perfil from "../../assets/perfil1.png";

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
        return Array.from({ length: 40 }, () => ({
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
                <motion.div className="content-wrapper">
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

                    <motion.div className="right-side"
                        initial={{ opacity: 0, scale: 1.3 }}
                        whileInView={{
                            opacity: 1, scale: 1,
                            transition: {
                                duration: 1,
                                delay: 3,
                                ease: [0.22, 1, 0.36, 1]
                            }
                        }}
                        viewport={{ once: true }}>
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
                            <img src={perfil} alt="Foto de Perfil" className="Card_img" />
                        </div>
                    </motion.div>
                </motion.div>

                <motion.section className="biografia"
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

                    viewport={{ once: true }}>
                    <h2 className='title'>Biografia</h2>
                    <p
                        onMouseEnter={() =>
                            setCursorVariant("hover")
                        }

                        onMouseLeave={() =>
                            setCursorVariant("default")
                        }>
                        Minha trajetória acadêmica iniciou-se no curso de Jovem Talentos do Senac, uma experiência rica em aprendizado, embora eu não tenha obtido o certificado devido ao desempenho em uma matéria específica. Atualmente, estou aprofundando meus conhecimentos no curso técnico de Desenvolvimento de Sistemas no Senai, onde tenho tido a oportunidade de explorar tecnologias que despertaram minha verdadeira paixão.O mundo da tecnologia me fascinou especialmente com o uso do framework React, uma ferramenta que venho dominando aos poucos e que abriu portas para novas possibilidades, como o desenvolvimento com React Native utilizando Expo. Além disso, banco de dados é outra área que me interessa profundamente, complementando minhas habilidades técnicas. Essa paixão pelo desenvolvimento também se manifesta no meu hobby de criar addons para Minecraft, onde consigo aplicar minha criatividade e conhecimento de programação de forma prática e divertida.Minha principal motivação diária é a busca por uma vida estável e confortável, onde eu possa conquistar minha independência financeira e ter a liberdade de adquirir o que desejo. Esse objetivo me impulsiona a me esforçar ao máximo nos estudos e no desenvolvimento das minhas habilidades. Meus valores estão pautados no respeito ao próximo, pois acredito que o respeito mútuo é fundamental para qualquer convívio saudável, e desejo ser tratado da mesma forma que trato os outros.Além disso, encontro inspiração em profissionais da área de tecnologia, cujas trajetórias e conquistas me motivam a persistir e a crescer. É essa combinação de aprendizado constante, paixão pela tecnologia e objetivos claros que guia meu caminho e me faz acreditar em um futuro promissor.
                    </p>
                </motion.section>

                <motion.button
                    className="btn_biografia"
                    onClick={() => div_open("objetivo")}
                    initial={{ opacity: 0, x: -100, }}
                    whileInView={{
                        opacity: 1, x: 0, transition: {
                            duration: 1,
                            delay: 3,
                            ease: [0.22, 1, 0.36, 1]
                        }
                    }}
                >
                    Biografia

                    <motion.div
                        animate={{
                            rotate: objetivo_div ? -90 : 0
                        }}
                        transition={{
                            duration: 0.3,
                            ease: "easeInOut"
                        }}
                    >
                        <FaChevronDown />
                    </motion.div>
                </motion.button>
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
                                Minha trajetória acadêmica iniciou-se no curso de Jovem Talentos do Senac, uma experiência rica em aprendizado, embora eu não tenha obtido o certificado devido ao desempenho em uma matéria específica. Atualmente, estou aprofundando meus conhecimentos no curso técnico de Desenvolvimento de Sistemas no Senai, onde tenho tido a oportunidade de explorar tecnologias que despertaram minha verdadeira paixão.O mundo da tecnologia me fascinou especialmente com o uso do framework React, uma ferramenta que venho dominando aos poucos e que abriu portas para novas possibilidades, como o desenvolvimento com React Native utilizando Expo. Além disso, banco de dados é outra área que me interessa profundamente, complementando minhas habilidades técnicas. Essa paixão pelo desenvolvimento também se manifesta no meu hobby de criar addons para Minecraft, onde consigo aplicar minha criatividade e conhecimento de programação de forma prática e divertida.Minha principal motivação diária é a busca por uma vida estável e confortável, onde eu possa conquistar minha independência financeira e ter a liberdade de adquirir o que desejo. Esse objetivo me impulsiona a me esforçar ao máximo nos estudos e no desenvolvimento das minhas habilidades. Meus valores estão pautados no respeito ao próximo, pois acredito que o respeito mútuo é fundamental para qualquer convívio saudável, e desejo ser tratado da mesma forma que trato os outros.Além disso, encontro inspiração em profissionais da área de tecnologia, cujas trajetórias e conquistas me motivam a persistir e a crescer. É essa combinação de aprendizado constante, paixão pela tecnologia e objetivos claros que guia meu caminho e me faz acreditar em um futuro promissor.
                            </p>
                        </motion.div>
                    )}
                </AnimatePresence>
                <section className="tech-stack">
                    <h2 className="title">Tech Stack</h2>

                    <div className="stack-grid">

                        <motion.div className="stack-category"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}>
                            <h3>Frontend</h3>
                            <div className="skills-list">
                                <span>HTML5</span>
                                <span>CSS3</span>
                                <span>JavaScript</span>
                                <span>React.js</span>
                            </div>
                        </motion.div>

                        <motion.div className="stack-category"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}>
                            <h3>Mobile</h3>
                            <div className="skills-list">
                                <span>React Native</span>
                                <span>Expo</span>
                            </div>
                        </motion.div>

                        <motion.div className="stack-category"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}>
                            <h3>Banco de Dados</h3>
                            <div className="skills-list">
                                <span>PostgreSQL</span>
                                <span>pgAdmin</span>
                            </div>
                        </motion.div>

                        <motion.div className="stack-category"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.6 }}>
                            <h3>Ferramentas & Hobbies</h3>
                            <div className="skills-list">
                                <span>Git & GitHub</span>
                                <span>VS Code</span>
                                <span>Minecraft Addons</span>
                            </div>
                        </motion.div>
                    </div>
                </section>


            </main >
        </>
    );
}

export default Home;