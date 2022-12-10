//SE IMPORTA LA CONEXION A LA DB
import db from "../database/DB.js";
//importamos sequelize
import { DataTypes } from "sequelize";

export const UserModels = db.define('usuarios', {
    id:{ type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true},
    Nombre: {type: DataTypes.STRING},
    CedulaUser: {type: DataTypes.STRING},
    CorreoUser: {type: DataTypes.STRING},
    Password: {type: DataTypes.STRING},
    roleId: {type: DataTypes.INTEGER, references: 'roles', key:'id'}
});







