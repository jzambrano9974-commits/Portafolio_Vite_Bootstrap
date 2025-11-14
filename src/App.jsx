import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./index.css";
import perfil from "./assets/perfil.jpg";
import Registro from "./Registro.jsx";

export default function App() {
  return (
    <Routes>
      {/* Portafolio */}
      <Route
        path="/"
        element={
          <>
            {/* NAVBAR */}
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary sticky-top shadow-sm">
              <div className="container">
                <div className="navbar-brand mb-0 h1">
                  Juan<span style={{ color: '#e6bc00fb' }}>Zambrano</span>
                </div>

                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#mainNavbar"
                  aria-controls="mainNavbar"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="mainNavbar">
                  <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-center">
                    <li className="nav-item"><a className="nav-link" href="#inicio">Inicio</a></li>
                    <li className="nav-item"><a className="nav-link" href="#sobre-mi">Sobre mí</a></li>
                    <li className="nav-item"><a className="nav-link" href="#habilidades">Habilidades</a></li>
                    <li className="nav-item"><a className="nav-link" href="#contacto">Contacto</a></li>

                    {/* BOTÓN REGISTRO */}
                    <li className="nav-item ms-2">
                      <Link 
                        to="/registro" 
                        className="nav-link fw-bold text-dark"
                        style={{
                          backgroundColor: "#ffc107",
                          borderRadius: "5px",
                          textAlign: "center",
                          padding: "0.375rem 0.75rem"
                        }}
                      >
                        Registro
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>

            {/* INICIO */}
            <section id="inicio" className="inicio text-center">
              <div className="intro container">
                <img src={perfil} alt="Foto de perfil" className="perfil" />
                <h1>Buenas, soy <span>Juan Zambrano</span></h1>
                <p>
                  Estudiante de Tecnologías de la Información en la Universidad Técnica de Manabí.
                  Me interesa el desarrollo web, las redes y la administración de sistemas.
                </p>
                <a href="#contacto" className="btn">Mis Contactos</a>
              </div>
            </section>

            {/* SOBRE MÍ */}
            <section id="sobre-mi" className="sobre-mi">
              <h2>Sobre mí</h2>
              <p>
                Soy un estudiante apasionado por la tecnología y por aprender cómo se conectan las diferentes áreas de la informática.
                Me gusta experimentar con nuevas herramientas, trabajar en proyectos que nuevos y seguir mejorando mis conocimientos
                en programación, redes y sistemas operativos.
                Actualmente estoy dando mis primeros pasos en el desarrollo web y fortaleciendo mis bases en Java y administración de servidores.
              </p>
            </section>

            {/* HABILIDADES */}
            <section id="habilidades" className="habilidades">
              <h2>Mis habilidades</h2>
              <div className="skills-grid">
                <div className="skill">HTML y CSS</div>
                <div className="skill">Java</div>
                <div className="skill">Python</div>
                <div className="skill">Administración de sistemas</div>
                <div className="skill">Redes de computadoras</div>
                <div className="skill">Bases de datos (MySQL)</div>
              </div>
            </section>

            {/* CONTACTO */}
            <section id="contacto" className="contacto">
              <h2>Contacto</h2>
              <p>Correo electrónico: <a href="mailto:jzambrano9974@utm.edu.ec">jzambrano9974@utm.edu.ec</a></p>
              <p>Teléfono: <a href="tel:0984034826">0984034826</a></p>
            </section>

            {/* FOOTER */}
            <footer>
              <p>© 2025 Juan Zambrano | Todos los derechos reservados</p>
            </footer>
          </>
        }
      />

      {/* Página de registro */}
      <Route path="/registro" element={<Registro />} />
    </Routes>
  );
}
