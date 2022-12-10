//SE IMPORTA LA CONEXION A LA DB
import db from "../database/DB.js";
//importamos sequelize
import { DataTypes } from "sequelize";

const DenunciasModel = db.define('denuncias', {
    Motivo: {type: DataTypes.STRING},
    Cedula: {type: DataTypes.STRING},
    Denunciante: {type: DataTypes.STRING},
    Correo: {type: DataTypes.STRING},
    Telefono1: {type: DataTypes.STRING},
    Telefono2: {type: DataTypes.STRING},
    Direccion: {type: DataTypes.STRING},
    Detalles: {type: DataTypes.STRING},


})

export default DenunciasModel