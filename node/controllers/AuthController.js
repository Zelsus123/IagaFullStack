import * as User from '../models/UserModels.js'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'
import config from '../config.js'
import RolesModels from '../models/RolesModels.js'

RolesModels.hasOne(User.UserModels)
User.UserModels.belongsTo(RolesModels)

export const signUp = async (req, res )=>{
   try {
    const {Nombre, CedulaUser, CorreoUser, Password, roleId} = req.body;

    let pass = bcrypt.hashSync(Password, 10)

   const savedUser = User.UserModels.create({
        Nombre: Nombre,
        CedulaUser: CedulaUser,
        CorreoUser: CorreoUser,
        Password: pass,
        roleId: roleId

    }, {include: {
        model: RolesModels
    }}); 

  const token = jwt.sign({id: savedUser.id}, config.SECRET, {
        expiresIn: 86400
    })

    res.json({token})
   } catch (error) {
    console.log(error)    
   }

}
export const logIn = async (req, res )=>{
    let {CedulaUser, Password} = req.body
    User.UserModels.findOne({
        where: {
            CedulaUser: CedulaUser
                   }, include: {
            model: RolesModels,
        }
    }).then(user => {
        if (!user){
            res.json("El usuario no existe")
        } else {
           if (bcrypt.compareSync(Password, user.Password)){
            //devolvemos token
            const token = jwt.sign({user: user}, config.SECRET, {
                expiresIn: 86400
            });

            res.json({
                user: user,
                token: token
            })
           } else {
            res.json('contraseña incorrecta')
           }
        }

    }).catch(err=>{
        res.json(err)
        
    })
}

