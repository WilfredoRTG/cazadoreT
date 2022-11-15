import express from "express";
import cors from "cors";
import homeRoute from "./server/routes/home.js";
import cazadorRoute from "./server/routes/cazador.js";
import proveedorRoute from "./server/routes/proveedor.js";

const app = express();

// app.use(cors());

const PORT = 3000;

// Server config
app.set('port', PORT);
app.set('view engine', 'ejs');
app.use(express.json());
app.set('views', "./client/views");

// Routes
app.use("/", homeRoute, express.static("client/public"));
app.use("/cazador", cazadorRoute, express.static("client/public"))
app.use("/proveedor", proveedorRoute, express.static("client/public"))

app.listen(app.get('port'), () => {
    console.log(`Server running on port ${PORT}`);
})