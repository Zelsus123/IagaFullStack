//importacion del modelo de denuncias
import DenunciasModel from "../models/DenunciasModel.js";

//METODOS PARA EL CRUD

//MOSTRAR TODOS LOS REGISTROS
export const getAllDenuncias = async (req, res)=>{
    try {
        const denuncias = await DenunciasModel.findAll()
        res.json(denuncias)
    } catch (error) {
        res.json( {message: error.message})
    }

}
//MOSTRAR UN  REGISTRO
export const getDenuncia = async (req, res) =>{
    try {
        const denuncia = await DenunciasModel.findAll({
            where:{
                id: req.params.id
            }
        })
        res.json(denuncia[0])
    } catch (error) {
        res.json( {message: error.message})
    }

}
//CREAR UN  REGISTRO

export const createDenuncia = async (req, res) => {
    try {
        await DenunciasModel.create(req.body)
        res.json({
            "message": "Registro creado correctamente"
        }) 
    } catch (error) {
        res.json( {message: error.message})        
    }

}
//ACTUALIZAR UN  REGISTRO
export const updateDenuncia = async (req,res) =>{
    try {
        await DenunciasModel.update(req.body, {
            where: {id: req.params.id}
        })
        res.json({
            "message": "Registro actualizado correctamente"
        })
    } catch (error) {
        res.json( {message: error.message})
    }
}
//ELIMINAR UN  REGISTRO
export const deleteDenuncia = async (req, res)=>{
    try {
        DenunciasModel.destroy({
            where: {id: req.params.id}
        })
        res.json({
            "message": "Registro eliminado correctamente"
        })
    } catch (error) {
        res.json( {message: error.message})        
    }
}




