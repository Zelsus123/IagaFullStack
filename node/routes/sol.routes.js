import express from "express";
import * as solicitudes from '../controllers/SolicitudesController.js'
import { verifyToken } from "../middlewares/authjwt.js";
const router = express.Router()


router.get('/', solicitudes.getAllSolicitudes)
router.get('/:id', solicitudes.getSolicitud)
router.post('/', solicitudes.createSolicitud)
router.put('/:id', solicitudes.updateSolicitud)
router.delete('/:id', solicitudes.deleteSolicitud)

export default router