import {UserModels} from '../models/UserModels.js'
import Roles from '../models/RolesModels.js'

export const createUser = async (req, res) => {
    try {
        await UserModels.create(req.body)
        res.json({
            "message": "Usuario Creado Correctamente"
        }) 
    } catch (error) {
        res.json( {message: error.message})        
    }
}

export const getUsers = async (req, res) => {

    try {
        const usuarios = await UserModels.findAll()
        res.json(usuarios)
    } catch (error) {
        res.json( {message: error.message})
    }
    
    
}

export const getUserById = async (req, res) => {
    try {
        const denuncia = await UserModels.findAll({
            where:{
                id: req.params.id
            }
        })
        res.json(denuncia[0])
    } catch (error) {
        res.json( {message: error.message})
    }
}

export const deleteUserById = (req, res) => {
    try {
        UserModels.destroy({
            where: {id: req.params.id}
        })
        res.json({
            "message": "Registro eliminado correctamente"
        })
    } catch (error) {
        res.json( {message: error.message})        
    }
}


export const updateUserById = async (req, res) => {
    try {
        await UserModels.update(req.body, {
            where: {id: req.params.id}
        })
        res.json({
            "message": "Registro actualizado correctamente"
        })
    } catch (error) {
        res.json( {message: error.message})
    }
}