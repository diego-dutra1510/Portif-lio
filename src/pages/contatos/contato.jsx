import React, { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence, useMotionValue } from "framer-motion";
import { z } from 'zod';
import emailjs from '@emailjs/browser';
import { TfiEmail, TfiUser, TfiWrite, TfiCommentAlt } from "react-icons/tfi";
import "./contato.css";

function Contato() {

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const [cursorVariant, setCursorVariant] = useState("default");
    useEffect(() => {
        const moveMouse = (e) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };
        window.addEventListener("mousemove", moveMouse);
        return () => window.removeEventListener("mousemove", moveMouse);
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




    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [assunto, setAssunto] = useState("");
    const [mensagem, setMensagem] = useState("");

    const [erro, setErro] = useState("");
    const [sucesso, setSucesso] = useState(false);
    const [loading, setLoading] = useState(false);


    const contatoSchema = z.object({
        nome: z.string().trim().min(1, { message: "Por favor, diga seu nome." }),
        email: z.string()
            .trim()
            .min(1, { message: "O e-mail é obrigatório." })
            .email({ message: "Digite um e-mail válido!" })
            .refine((email) => {
                const dominio = email.split('@')[1] || '';
                const partes = dominio.split('.');
                const extensaoFinal = partes[partes.length - 1];
                const extensoesPermitidas = ['com', 'br', 'net', 'org', 'edu', 'gov'];
                return extensoesPermitidas.includes(extensaoFinal.toLowerCase());
            }, { message: "Use uma extensão comum (.com, .br, etc)." }),
        assunto: z.string().trim().min(3, { message: "O assunto precisa de ao menos 3 letras." }),
        mensagem: z.string().trim().min(10, { message: "Escreva um pouco mais na mensagem (mín. 10 caracteres)." })
    });

    const enviarContato = async (e) => {
        e.preventDefault();
        setErro("");

        const resultado = contatoSchema.safeParse({ nome, email, assunto, mensagem });

        if (!resultado.success) {
            setErro(resultado.error.issues[0].message);
            return;
        }

        setLoading(true);

        const templateParams = {
            name: nome,
            message: mensagem,
            subject: assunto,
            reply_to: email,
            time: new Date().toLocaleString('pt-BR')
        };

        try {
            await emailjs.send(
                'service_g6ii36e',
                'template_2exm4dn',
                templateParams,
                'XWp2MhYSjPYz0lxom'
            );

            setSucesso(true);
            setErro("");
            setNome(""); setEmail(""); setAssunto(""); setMensagem("");

            setTimeout(() => setSucesso(false), 5000);
        } catch (err) {
            console.error("Erro ao enviar:", err);
            setErro("Falha ao enviar e-mail. Tente novamente mais tarde.");
        } finally {
            setLoading(false);
        }
    };


    return (
        <>
            <motion.div
                className="cursor"
                variants={{ default: { width: 20, height: 20, backgroundColor: "#fff" }, hover: { width: 40, height: 40, backgroundColor: "#f1e4ff" } }}
                animate={cursorVariant}
                style={{ x: mouseX, y: mouseY, translateX: "-50%", translateY: "-50%" }}
            />
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
            <main className="contato-container">
                <motion.section className="contato-card">
                    <h1>Vamos conversar?</h1>
                    <p>Preencha os campos abaixo e eu te responderei o quanto antes.</p>

                    <form onSubmit={enviarContato} className="contato-form">
                        <div className="input-group">
                            <TfiUser className="input-icon" />
                            <input type="text" placeholder="Seu nome" value={nome} onChange={(e) => setNome(e.target.value)} />
                        </div>

                        <div className="input-group">
                            <TfiEmail className="input-icon" />
                            <input type="email" placeholder="Seu melhor e-mail" value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>

                        <div className="input-group">
                            <TfiWrite className="input-icon" />
                            <input type="text" placeholder="Assunto" value={assunto} onChange={(e) => setAssunto(e.target.value)} />
                        </div>

                        <div className="input-group">
                            <TfiCommentAlt className="input-icon textarea-icon" />
                            <textarea placeholder="Sua mensagem..." value={mensagem} onChange={(e) => setMensagem(e.target.value)} />
                        </div>

                        <AnimatePresence>
                            {erro && <motion.p className="error-msg" >{erro}</motion.p>}
                            {sucesso && <motion.p className="success-msg" >Mensagem enviada com sucesso!</motion.p>}
                        </AnimatePresence>

                        <button
                            type="submit"
                            className="btn-enviar"
                            disabled={loading}
                            style={{ opacity: loading ? 0.7 : 1, cursor: "none"}}
                            onMouseEnter={() =>
                                setCursorVariant("hover")
                            }

                            onMouseLeave={() =>
                                setCursorVariant("default")
                            }
                        >
                            {loading ? "Enviando..." : "Enviar Mensagem"}
                        </button>
                    </form>
                </motion.section>
            </main>
        </>
    );
}

export default Contato;