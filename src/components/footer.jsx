import React, { useState, useEffect } from "react";
import { FaDiscord, FaYoutube, FaInstagram } from "react-icons/fa";
import logo from "../assets/hero.png";
import "./footer.css";

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <img src={logo} alt="LOGO" className="footer-logo" />
                <p>Vivendo e aprendendo nesse ano de {new Date().getFullYear()} </p>
                <div className="social-icons">
                    <a href="https://discord.gg/FW9ZGNZNsr" target="_blank">
                        <FaDiscord className="discord-icon icon" />
                    </a>
                    <a href="https://www.youtube.com/@cidadebaixa_roleplay" target="_blank">
                        <FaYoutube className="youtube-icon icon" />
                    </a>
                    <a href="https://www.instagram.com/cidadebaixa_roleplay" target="_blank">
                        <FaInstagram className="instagram-icon icon" />
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;