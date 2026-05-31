import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { GrProjects, GrContact } from "react-icons/gr";
import "./header.css";
import logo from "../assets/logo.png";

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

            <div className="logo" onClick={() => window.open("https://github.com/diego-dutra1510", "_blank")}>
                <img src={logo} alt="LOGO" />
                <h1>Diego Dutra Do Amaral</h1>
            </div>

            <nav className="nav-center">
                <Link to="/" className={location.pathname === "/" ? "active" : ""}>
                    Home
                </Link>
                <Link to="/projetos" className={location.pathname === "/projetos" ? "active" : ""}>
                    Projetos
                </Link>
                <Link to="/contato" className={location.pathname === "/contato" ? "active" : ""}>
                    Contato
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
                        <FaHome style={{ marginRight: "6px", marginLeft: "6px" }} />
                        Home
                    </div>

                    <IoIosArrowForward />
                </Link>
                <Link
                    to="/projetos"
                    className={location.pathname === "/projetos" ? "active" : ""}
                    onClick={() => setMenuAberto(false)}
                >
                    <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                        <GrProjects style={{ marginRight: "6px", marginLeft: "6px" }} />
                        Projetos
                    </div>

                    <IoIosArrowForward />
                </Link>
                <Link
                    to="/contato"
                    className={location.pathname === "/contato" ? "active" : ""}
                    onClick={() => setMenuAberto(false)}
                >
                    <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                        <GrContact style={{ marginRight: "6px", marginLeft: "6px" }} />
                        Contato
                    </div>

                    <IoIosArrowForward />
                </Link>
            </nav>
        </header>
    );
}

export default Header;