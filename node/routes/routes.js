import express from "express";
import { createDenuncia, deleteDenuncia, getAllDenuncias, getDenuncia, updateDenuncia } from "../controllers/DenunciasController.js";
import { verifyToken } from "../middlewares/authjwt.js";
const router = express.Router()


router.get('/', getAllDenuncias)
router.get('/:id', getDenuncia)
router.post('/', createDenuncia)
router.put('/:id', updateDenuncia)
router.delete('/:id', deleteDenuncia)

export default router