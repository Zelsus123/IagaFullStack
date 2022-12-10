import express from 'express'
const router = express.Router()

import * as roleController from '../controllers/RolesController.js'

router.get('/', roleController.getRoles)
router.post('/', roleController.createRole)
router.get('/:id', roleController.getRoleById)
router.put('/:id', roleController.updateRoleById)
router.delete('/:id', roleController.deleteRoleById)

export default router;