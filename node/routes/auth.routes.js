import express from 'express'
const router = express.Router()

import * as authCtrl from '../controllers/AuthController.js'

router.post('/signup', authCtrl.signUp)
router.post('/login', authCtrl.logIn)

export default router;