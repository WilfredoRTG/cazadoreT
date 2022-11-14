export const getCazador = async (req, res) => {
    try {
        res.status(200).render("./cazador/cazador")
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}

export const altaCazador = async (req, res) => {
    try {
        res.status(200).render("./cazador/altaCazador")
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}

export const bajasCazador = async (req, res) => {
    try {
        res.status(200).render("./cazador/bajasCazador")
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}