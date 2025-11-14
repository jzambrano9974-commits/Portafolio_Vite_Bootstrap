import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Registro() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    nombre: "",
    correo: "",
    contraseña: "",
    telefono: "",
    direccion: "",
  });

  const [mensaje, setMensaje] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/registro", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      console.log(data);

      setMensaje("Registro exitoso!");
      setFormData({
        nombre: "",
        correo: "",
        contraseña: "",
        telefono: "",
        direccion: "",
      });

      // Opcional: redirigir después de 3s
      setTimeout(() => navigate("/"), 3000);

    } catch (error) {
      console.error(error);
      setMensaje("Error al registrar. Intenta de nuevo.");
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4 text-primary">Registro de Usuario</h1>

      <div className="card shadow p-4 mx-auto" style={{ maxWidth: "600px" }}>
        {mensaje && <div className="alert alert-success text-center">{mensaje}</div>}
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Nombre completo</label>
            <input type="text" className="form-control" name="nombre" value={formData.nombre} onChange={handleChange} required />
          </div>

          <div className="mb-3">
            <label className="form-label">Correo electrónico</label>
            <input type="email" className="form-control" name="correo" value={formData.correo} onChange={handleChange} required />
          </div>

          <div className="mb-3">
            <label className="form-label">Contraseña</label>
            <input type="password" className="form-control" name="contraseña" value={formData.contraseña} onChange={handleChange} required />
          </div>

          <div className="mb-3">
            <label className="form-label">Teléfono</label>
            <input type="text" className="form-control" name="telefono" value={formData.telefono} onChange={handleChange} />
          </div>

          <div className="mb-3">
            <label className="form-label">Dirección</label>
            <textarea className="form-control" name="direccion" rows="3" value={formData.direccion} onChange={handleChange}></textarea>
          </div>

          <div className="d-grid gap-2">
            <button className="btn btn-primary" type="submit">Registrar</button>
            <button className="btn btn-secondary" type="button" onClick={() => navigate("/")}>
              Volver al Portafolio
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
