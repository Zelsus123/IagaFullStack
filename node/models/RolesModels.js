//SE IMPORTA LA CONEXION A LA DB
import db from "../database/DB.js";
//importamos sequelize
import { DataTypes } from "sequelize";

const RolesModels = db.define('roles', {
    "id": {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    "rol": {type: DataTypes.STRING},
    "CrearDenuncia": {type: DataTypes.TINYINT},
    "VerDenuncias": {type: DataTypes.TINYINT}
    
})


export default RolesModels;