import express from "express";
import {getProveedor, altaProveedor, bajasProveedor} from "../controllers/proveedor.js";

const proveedorRouter = express.Router();

proveedorRouter.get('/', getProveedor)
proveedorRouter.get('/altas', altaProveedor)
proveedorRouter.get('/bajas', bajasProveedor)

export default proveedorRouter;