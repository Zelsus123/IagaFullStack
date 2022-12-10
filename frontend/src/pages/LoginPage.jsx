import React from 'react'
import {Formik} from 'formik'
import {Formulario, ErrorDenuncia} from '../css/styles.module.scss'
import axios from 'axios'


const URI = 'http://localhost:8000/auth/login'




const sendForm = async (values)=>{
  await axios.post(URI, values, {   
    CedulaUser: CedulaUser,
    Password: Password
  }).then((res)=>{
    if(res.status = "ok"){
      const {data} = res;
      window.localStorage.setItem("dataUser", JSON.stringify(data))
    } else  {
      console.log("ha ocurrido un problema")
    
    }
    
    
    
  })

  }

export const LoginPage = (setActive, toggle) => {


  return (
    <>
    <Formik
    initialValues={{

      CedulaUser: '',
      Password: ''

    }}
    validate={(valores) =>{
      let errores ={};

      if(!valores.CedulaUser){
        errores.CedulaUser = 'Por favor ingresa un numero de Cedula'
      } else if(!/^[VE]\-\d{1,2}\.\d{3}\.\d{3}$/.test(valores.CedulaUser)){
        errores.CedulaUser = 'El numero de cedula debe ser en el siguiente formato V-XX.XXX.XXX o E-XX.XXX.XXX'
      }
      if(!valores.Password){
        errores.Password = 'Por favor ingresa tu contraseña'
      } 

      return errores
    }}

    onSubmit={(valor, {resetForm})=>{
      sendForm(valor)


      
    }}
  >
      

    
      {({handleSubmit, values, touched, handleChange, handleBlur, errors})=> (
        <form className={Formulario} onSubmit={handleSubmit}>
        <div>
        <label htmlFor="Cedula">Cedula</label>
        <div>
        <input 
        type="text" 
        id='CedulaUser' 
        name='CedulaUser' 
        placeholder='V-XX-XXX-XXX' 
        value={values.Cedula} 
        onChange={handleChange}
        onBlur={handleBlur}
        />
        {touched.CedulaUser && errors.CedulaUser && <div className={ErrorDenuncia}>{errors.CedulaUser}</div>}
        </div>
        </div>
        <div>
        <label htmlFor="Password">Contraseña</label>
        <div>
        <input 
        type="password" 
        id='Password' 
        name='Password' 
        placeholder='contraseña' 
        value={values.Correo}
        onChange={handleChange}
        onBlur={handleBlur}
        />
        {touched.Password && errors.Password && <div className={ErrorDenuncia}>{errors.Password}</div>}
        </div>
        </div>
       
  
  
        <button type="submit">Login</button>
  
      </form>
      )}
    
    </Formik>

    </>
  )
}