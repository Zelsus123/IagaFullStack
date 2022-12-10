import express from 'express'
const router = express.Router()

import * as userController from '../controllers/UserControllers.js'
//importar middleware
import { verifyToken } from '../middlewares/authjwt.js'

router.get('/', userController.getUsers)
router.post('/', userController.createUser)
router.get('/:id', userController.getUserById)
router.put('/:id', verifyToken, userController.updateUserById)
router.delete('/:id', userController.deleteUserById)

export default router;