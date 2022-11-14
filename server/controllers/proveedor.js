export const getProveedor = async (req, res) => {
    try {
        res.status(200).render("./proveedor/proveedor")
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}

export const altaProveedor = async (req, res) => {
    try {
        res.status(200).render("./proveedor/altaProveedor")
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}

export const bajasProveedor = async (req, res) => {
    try {
        res.status(200).render("./proveedor/bajasProveedor")
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}