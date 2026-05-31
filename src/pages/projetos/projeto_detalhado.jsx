import React, { useState, useMemo, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion, AnimatePresence, useMotionValue } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaArrowLeft } from "react-icons/fa";
import "./projetos.css";
import { projetos_detalhados } from "../../components/projetos_lista";

function Projects_Info() {
    const { nome } = useParams();
    const navigate = useNavigate();
    const nomeFormatado = decodeURIComponent(nome);

    const projeto = projetos_detalhados.find(p => p.nome === nomeFormatado);

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const [cursorVariant, setCursorVariant] = useState("default");
    const [Modal, setModal] = useState(false);

    useEffect(() => {
        const moveMouse = (e) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };
        window.addEventListener("mousemove", moveMouse);
        return () => window.removeEventListener("mousemove", moveMouse);
    }, []);

    function handleLink(url) {
        if (url) {
            window.open(url, "_blank");
        } else {
            setModal(true);
        }
    }

    if (!projeto) return <div className="error">Projeto não encontrado.</div>;

    return (
        <>
            <motion.div
                className="cursor"
                variants={{ default: { width: 20, height: 20, backgroundColor: "#fff" }, hover: { width: 40, height: 40, backgroundColor: "#f1e4ff" } }}
                animate={cursorVariant}
                style={{ x: mouseX, y: mouseY, translateX: "-50%", translateY: "-50%" }}
            />

            <main className="container-detalhes">
                <div name="void" style={{ height: "4vh" }} />
                <button className="btn-voltar" onClick={() => navigate("/projetos")}
                    onMouseEnter={() =>
                        setCursorVariant("hover")
                    }

                    onMouseLeave={() =>
                        setCursorVariant("default")
                    }
                >
                    <FaArrowLeft /> Voltar
                </button>

                <section className="header-detalhes">
                    <motion.h1 initial={{ y: -20, opacity: 0 }} animate={{ opacity: 1, y: 0 }} style={{ fontFamily: "PortAstro, sans-serif" }}>
                        {projeto.nome}
                    </motion.h1>
                    <img src={projeto.img} alt={projeto.nome} className="img-principal" />
                </section>

                <section className="grid-info">
                    <div className="card-info">
                        <h3>Sobre o Projeto</h3>
                        <p>{projeto.descricaoCompleta}</p>
                    </div>

                    <div className="card-info">
                        <h3 style={{ marginTop: '20px' }}>Objetivo Macro</h3>
                        <p>{projeto.objetivo}</p>

                    </div>

                    <div className="card-info">
                        <h3>Funcionalidades Técnicas</h3>
                        <ul>
                            {projeto.funcionalidades.map((func, i) => (
                                <li key={i}>{func}</li>
                            ))}
                        </ul>
                    </div>

                    <div className="card-info full-width">
                        <h3>Relato Técnico: Desafios</h3>
                        <p>{projeto.desafios}</p>
                        <h3 style={{ marginTop: '20px' }}>Aprendizados Obtidos</h3>
                        <p>{projeto.aprendizados}</p>
                    </div>

                    {projeto.melhorias && (
                        <div className="card-info full-width">
                            <h3>Próximos Passos</h3>
                            {projeto.melhorias.length > 0 ? (
                                <ul>
                                    {projeto.melhorias.map((melhoria, i) => (
                                        <li key={i}>{melhoria}</li>
                                    ))}
                                </ul>

                            ) : (
                                <p>Nenhuma</p>
                            )}
                        </div>
                    )}
                </section>

                <div className="acoes-tecnicas">
                    <button
                        onMouseEnter={() =>
                            setCursorVariant("hover")
                        }

                        onMouseLeave={() =>
                            setCursorVariant("default")
                        }
                        className="btn-acesso" onClick={() => handleLink(projeto.github)}>
                        <FaGithub /> Ver Código no GitHub
                    </button>
                    <button
                        onMouseEnter={() =>
                            setCursorVariant("hover")
                        }

                        onMouseLeave={() =>
                            setCursorVariant("default")
                        }
                        className="btn-acesso deploy" onClick={() => handleLink(projeto.deploy)}>
                        <FaExternalLinkAlt /> Visualizar Produção (Deploy)
                    </button>
                </div>
            </main>

            <AnimatePresence>
                {Modal && (
                    <motion.div className="modal-overlay" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setModal(false)}>
                        <motion.div className="modal-content" initial={{ scale: 0.8 }} animate={{ scale: 1 }} onClick={e => e.stopPropagation()}>
                            <h2>OPS...!</h2>
                            <p>Este link ainda não está disponível pois o projeto está em fase de desenvolvimento ou é privado.</p>
                            <button className="close-btn" onClick={() => { setModal(false); setCursorVariant("default") }}
                                onMouseEnter={() =>
                                    setCursorVariant("hover")
                                }

                                onMouseLeave={() =>
                                    setCursorVariant("default")
                                }
                            >X</button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}

export default Projects_Info;