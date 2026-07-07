import express from 'express'
import { createUser } from '../controller/userLogic.js'
import { getuser } from '../controller/userLogic.js'
import { updateuser } from '../controller/userLogic.js'
import { deleteUser } from '../controller/userLogic.js'
const router = express.Router()


router.post('/createuser', createUser)
router.get('/getuser',getuser)
router.put("/updateuser/:userid",updateuser)
router.delete("/deleteuser/:userid",deleteUser)

export default router