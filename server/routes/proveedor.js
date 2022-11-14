import express from "express";
import {getProveedor} from "../controllers/proveedor.js";

const proveedorRouter = express.Router();

proveedorRouter.get('/', getProveedor)

export default proveedorRouter;