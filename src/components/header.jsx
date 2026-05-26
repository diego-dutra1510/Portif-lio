import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaHome, FaNewspaper, FaBook } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import "./header.css";
import logo from "../assets/hero.png";

function Header() {
    const [menuAberto, setMenuAberto] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className={isScrolled ? "scrolled" : ""}>

            <div className="logo" onClick={() => window.open("https://discord.gg/FW9ZGNZNsr", "_blank")}>
                <img src={logo} alt="LOGO" />
                <h1>Diego Dutra Do Amaral</h1>
            </div>

            <nav className="nav-center">
                <Link to="/" className={location.pathname === "/" ? "active" : ""}>
                    <FaHome style={{ marginRight: "6px" }} /> Home
                </Link>
            </nav>


            <button
                className={`menu-btn ${menuAberto ? "ativo" : ""}`}
                onClick={() => setMenuAberto(!menuAberto)}
            >
                ☰
            </button>

            <nav className={menuAberto ? "mobile-menu ativo" : "mobile-menu"}>
                <div className="mobile-menu-header">
                    <h6>Menu</h6>
                </div>
                <Link
                    to="/"
                    className={location.pathname === "/" ? "active" : ""}
                    onClick={() => setMenuAberto(false)}
                >
                    <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                        <FaHome style={{ marginRight: "6px" }} />
                        Home
                    </div>

                    <IoIosArrowForward />
                </Link>
            </nav>
        </header>
    );
}

export default Header;