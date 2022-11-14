import express from "express";
import cors from "cors";
import homeRoute from "./server/routes/home.js";
import cazadorRoute from "./server/routes/cazador.js";
import proveedorRoute from "./server/routes/proveedor.js";
import path from "path";

const app = express();

// app.use(cors());

const PORT = 3000;

// Server config
app.set('port', PORT);
app.set('view engine', 'ejs');
app.use(express.json());

// Routes
app.use("/", homeRoute, express.static("public"));
app.use("/cazador", cazadorRoute, express.static("public"))
app.use("/proveedor", proveedorRoute, express.static("public"))

app.listen(app.get('port'), () => {
    console.log(`Server running on port ${PORT}`);
})