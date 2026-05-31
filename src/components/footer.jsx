import React, { useState, useEffect } from "react";
import { FaDiscord, FaYoutube, FaInstagram, FaGithub } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";
import logo from "../assets/logo.png";
import "./footer.css";

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <img src={logo} alt="LOGO" className="footer-logo" />
                <p>Vivendo e aprendendo nesse ano de {new Date().getFullYear()} </p>
                <div className="social-icons">
                    <a href="https://github.com/diego-dutra1510" target="_blank">
                        <FaGithub className="GitHub-icon icon" />
                    </a>
                    <a href="https://www.instagram.com/diego_dutra_dev?igsh=MWpmaGFxMm96dHphbw==" target="_blank">
                        <FaInstagram className="instagram-icon icon" />
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;