import express from "express";
import {getCazador, altaCazador} from "../controllers/cazador.js";

const cazadorRouter = express.Router();

cazadorRouter.get('/', getCazador)
cazadorRouter.get('/altas', altaCazador)
cazadorRouter.get('/bajas', altaCazador)

export default cazadorRouter;