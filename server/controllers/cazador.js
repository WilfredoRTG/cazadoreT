import { db } from "../database/connection.js"

export const getCazador = async (req, res) => {
    try {
        console.log(db);
        res.status(200).render("cazador/cazador")
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}

export const altaCazador = async (req, res) => {
    try {
        res.status(200).render("cazador/altaCazador", {layout: false})
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}

export const bajasCazador = async (req, res) => {
    try {
        res.status(200).render("cazador/bajasCazador")
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}