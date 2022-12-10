import jwt from 'jsonwebtoken'
import config from '../config.js'
import * as User from '../models/UserModels.js'
import Roles from '../models/RolesModels.js'


export const verifyToken = async (req, res, next) =>{

Roles.hasMany(User.UserModels)
User.UserModels.belongsTo(Roles)



    
    //Comprobar que existe el token

    if(!req.headers.authorization){
        res.status(401).json({message: 'Acceso no autorizado'})
    } else {

        //comprobar validez del token
        let token = req.headers.authorization.split(" ")[1];

        jwt.verify(token, config.SECRET, (err, decoded) =>{
            if(err){
                res.json({msg: "Unauthorized"});
            } else {
               User.UserModels.findByPk(decoded.user.id, {include: {
                model: Roles
               }}).then(user => {
                    
                    req.user = user;

                
                    next()
                    console.log(JSON.stringify(user))
                })
              
            }
        })

       
    }

}