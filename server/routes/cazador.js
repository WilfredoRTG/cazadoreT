import express from "express";
import {getCazador} from "../controllers/cazador.js";

const cazadorRouter = express.Router();

cazadorRouter.get('/', getCazador)

export default cazadorRouter;