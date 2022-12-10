import Roles from '../models/RolesModels.js'

export const createRole = async (req, res) => {
    try {
        await Roles.create(req.body)
        res.json({
            "message": "Rol Creado Correctamente"
        }) 
    } catch (error) {
        res.json( {message: error.message})        
    }
}

export const getRoles = async (req, res) => {

    try {
        const denuncias = await Roles.findAll()
        res.json(denuncias)
    } catch (error) {
        res.json( {message: error.message})
    }
    
    
}

export const getRoleById = async (req, res) => {
    try {
        const denuncia = await Roles.findAll({
            where:{
                id: req.params.id
            }
        })
        res.json(denuncia[0])
    } catch (error) {
        res.json( {message: error.message})
    }
    res.json("get user by ID")    
}

export const deleteRoleById =  (req, res) => {
    try {
        RolesModels.destroy({
            where: {id: req.params.id}
        })
        res.json({
            "message": "Registro eliminado correctamente"
        })
    } catch (error) {
        res.json( {message: error.message})        
    }
}



export const updateRoleById = async (req, res) => {
    try {
        await Roles.update(req.body, {
            where: {id: req.params.id}
        })
        res.json({
            "message": "Registro actualizado correctamente"
        })
    } catch (error) {
        res.json( {message: error.message})
    }
    res.json("update user by id")    
}