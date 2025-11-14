import express from "express";
import cors from "cors";
import fs from "fs";

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Ruta de registro
app.post("/registro", (req, res) => {
  const datos = req.body;

  // Leer registros existentes
  let registros = [];
  const filePath = "./registros.json";

  if (fs.existsSync(filePath)) {
    const data = fs.readFileSync(filePath, "utf8");
    registros = JSON.parse(data);
  }

  // Agregar nuevo registro
  registros.push(datos);

  // Guardar de nuevo en JSON
  fs.writeFileSync(filePath, JSON.stringify(registros, null, 2));

  console.log("Datos guardados:", datos);
  res.json({ mensaje: "Registro exitoso", datos });
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
