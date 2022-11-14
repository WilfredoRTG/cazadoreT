import express from "express";
import cors from "cors";
import homeRoute from "./server/routes/home.js";
import cazadorRoute from "./server/routes/cazador.js";
import proveedorRoute from "./server/routes/proveedor.js";

const app = express();

app.use(cors());

const PORT = 3000;

// Server config
app.set('port', PORT);
app.set('view engine', 'ejs');
app.use(express.static("public"));
app.use(express.json());

// Routes
app.use("/", homeRoute)
app.use("/cazador", cazadorRoute)
app.use("/proveedor", proveedorRoute)

app.listen(app.get('port'), () => {
    console.log(`Server running on port ${PORT}`);
})