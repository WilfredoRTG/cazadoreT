import express from "express";
import {getCazador, altaCazador, bajasCazador} from "../controllers/cazador.js";

const cazadorRouter = express.Router();

cazadorRouter.get('/', getCazador)
cazadorRouter.get('/altas', altaCazador)
cazadorRouter.get('/bajas', bajasCazador)

export default cazadorRouter;