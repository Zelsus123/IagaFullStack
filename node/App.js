import express from "express";
import cors from "cors";
import db from "./database/DB.js";
import morgan from 'morgan'
//importar enrutadores
import denunciasRoutes from './routes/routes.js'
import userRoutes from './routes/user.routes.js'
import rolesRoutes from './routes/roles.routes.js'
import authRoutes from './routes/auth.routes.js'
import solRoutes from './routes/sol.routes.js'



const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded())
app.use('/denuncias', denunciasRoutes)
app.use('/users', userRoutes)
app.use('/roles', rolesRoutes)
app.use('/auth', authRoutes)
app.use('/solicitudes', solRoutes)
app.use(morgan('dev'));

try {
    await db.authenticate()
    console.log('Conexion exitosa a la DB MYSQL')
} catch (error) {
    console.log(`EL ERROR DE CONEXION ES: ${error}`)
    
}
app.get('/', (req, res)=>{
    res.send('HOLA MUNDO')
})


app.listen(8000, ()=>{
    console.log('SERVER IS RUNNING IN http://localhost:8000/')
})