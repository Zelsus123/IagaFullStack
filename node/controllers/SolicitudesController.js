//importacion del modelo de denuncias
import SolicitudesModel from '../models/SolicitudesModels.js'

//METODOS PARA EL CRUD

//MOSTRAR TODOS LOS REGISTROS
export const getAllSolicitudes = async (req, res)=>{
    try {
        const solicitudes = await SolicitudesModel.findAll()
        res.json(solicitudes)
    } catch (error) {
        res.json( {message: error.message})
    }

}
//MOSTRAR UN  REGISTRO
export const getSolicitud = async (req, res) =>{
    try {
        const solicitud = await SolicitudesModel.findAll({
            where:{
                id: req.params.id
            }
        })
        res.json(solicitud[0])
    } catch (error) {
        res.json( {message: error.message})
    }

}
//CREAR UN  REGISTRO

export const createSolicitud = async (req, res) => {
    try {
        await SolicitudesModel.create(req.body)
        res.json({
            "message": "Registro creado correctamente"
        }) 
    } catch (error) {
        res.json( {message: error.message})        
    }

}
//ACTUALIZAR UN  REGISTRO
export const updateSolicitud = async (req,res) =>{
    try {
        await SolicitudesModel.update(req.body, {
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
export const deleteSolicitud = async (req, res)=>{
    try {
        SolicitudesModel.destroy({
            where: {id: req.params.id}
        })
        res.json({
            "message": "Registro eliminado correctamente"
        })
    } catch (error) {
        res.json( {message: error.message})        
    }
}