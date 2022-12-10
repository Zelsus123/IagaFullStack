import React from 'react'
import {Formik} from 'formik'
import {Formulario, ModalTitle,ErrorDenuncia} from '../../css/styles.module.scss'
import axios from 'axios'

const URI = 'http://localhost:8000/solicitudes/'


const sendForm = async (values)=>{
  await axios.post(URI, values, {
    
    Solicitante: Solicitante,
    Cedula: Cedula,
    Correo: Correo,
    Telefono1: Telefono1,
    Telefono2: Telefono2,
    Direccion: Direccion,
    Motivo: Motivo ,
    Detalles: Detalles
  })

  }

export const CrearSolicitudForm = (setActive, toggle) => {


  return (
    <>
     <div className={ModalTitle}><h2>CREAR SOLICITUD</h2></div>
    <Formik
    initialValues={{
      Solicitante: '',
      Cedula: '',
      Correo: '',
      Telefono1: '',
      Telefono2: '',
      Direccion: '',
      Motivo: '',
      Detalles: ''
    }}
    validate={(valores) =>{
      let errores ={};
      if(!valores.Solicitante){
        errores.Solicitante = 'Por favor ingresa un nombre completo'
      } else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.Denunciante)){
        errores.Solicitante = 'El nombre solo puede contener letras y espacios'
      }

      if(!valores.Cedula){
        errores.Cedula = 'Por favor ingresa un numero de Cedula'
      } else if(!/^[VE]\-\d{1,2}\.\d{3}\.\d{3}$/.test(valores.Cedula)){
        errores.Cedula = 'El numero de cedula debe ser en el siguiente formato V-XX.XXX.XXX o E-XX.XXX.XXX'
      }
      if(!valores.Correo){
        errores.Correo = 'Por favor ingresa un Correo Electronico'
      } else if(!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.Correo)){
        errores.Correo = 'No estas ingresando los caracteres aceptados para un correo electronico'
      }
      if(!valores.Telefono1){
        errores.Telefono1 = 'Por favor ingresa un Numero de Telefono'
      } else if(!/^[01246]{4}\-\d{3}\-\d{2}\-\d{2}$/.test(valores.Telefono1)){
        errores.Telefono1 = 'El formato para numero de telefono es: ejemplo:0424-888-88-88'
      }
      if(!valores.Telefono2){
        null
      }else if(!/^[01246]{4}\-\d{3}\-\d{2}\-\d{2}$/.test(valores.Telefono2)){
        errores.Telefono2 = 'El formato para numero de telefono es: ejemplo:0424-888-88-88'
      }

      if(!valores.Direccion){
        errores.Direccion = 'Debe ingresar una dirección'
      }
      if(!valores.Motivo){
        errores.Motivo = 'Debe seleccionar un motivo de denuncia'
      }


      return errores
    }}

    onSubmit={(valor, {resetForm})=>{
      sendForm(valor)
      resetForm();
      
    }}
  >
      

    
      {({handleSubmit, values, touched, handleChange, handleBlur, errors})=> (
        <form className={Formulario} onSubmit={handleSubmit}>
        <div>
        <label htmlFor="Solicitante">Solicitante</label>
        <div>
        <input 
        type="text" 
        id='Solicitante' 
        name='Solicitante' 
        placeholder='Jose Ramirez' 
        value={values.Denunciante}
        onChange={handleChange}
        onBlur={handleBlur}
         />
         {touched.Solicitante && errors.Solicitante && <div className={ErrorDenuncia}>{errors.Solicitante}</div>}
         </div>
        </div>
        <div>
        <label htmlFor="Cedula">Cedula</label>
        <div>
        <input 
        type="text" 
        id='Cedula' 
        name='Cedula' 
        placeholder='V-XX-XXX-XXX' 
        value={values.Cedula} 
        onChange={handleChange}
        onBlur={handleBlur}
        />
        {touched.Cedula && errors.Cedula && <div className={ErrorDenuncia}>{errors.Cedula}</div>}
        </div>
        </div>
        <div>
        <label htmlFor="Correo">Correo Electronico</label>
        <div>
        <input 
        type="text" 
        id='Correo' 
        name='Correo' 
        placeholder='ejemplo@iaga.com' 
        value={values.Correo}
        onChange={handleChange}
        onBlur={handleBlur}
        />
        {touched.Correo && errors.Correo && <div className={ErrorDenuncia}>{errors.Correo}</div>}
        </div>
        </div>
        <div>
        <label htmlFor="Telefono1">Telefono 1</label>
        <div>
        <input 
        type="text" 
        id='Telefono1' 
        name='Telefono1' 
        placeholder='04XX-XXX-XX-XX' 
        value={values.Telefono1}
        onChange={handleChange}
        onBlur={handleBlur}
        />
         {touched.Telefono1 && errors.Telefono1 && <div className={ErrorDenuncia}>{errors.Telefono1}</div>}
        </div>
        </div>
        <div>
        <label htmlFor="Telefono2">Telefono 2</label>
        <div>
        <input 
        type="text" 
        id='Telefono2' 
        name='Telefono2' 
        placeholder='04XX-XXX-XX-XX' 
        value={values.Telefono2}
        onChange={handleChange}
        onBlur={handleBlur}
        />
         {touched.Telefono2 &&  errors.Telefono2 && <div className={ErrorDenuncia}>{errors.Telefono2}</div>}
        </div>
        </div>
        <div>
        <label htmlFor="Direccion">Direccion</label>
        <div>
        <input 
        type="text"
         id='Direccion'
         name='Direccion' 
        placeholder='Av. XXXXX Calle XXXXXX Casa #XXXX' 
        value={values.Direccion}
        onChange={handleChange}
        onBlur={handleBlur}
        />
         {touched.Direccion &&  errors.Direccion && <div className={ErrorDenuncia}>{errors.Direccion}</div>}
        </div>
        </div>
        <div>
          <label htmlFor="Motivo">Motivo</label>
          <div>
          <select 
          name="Motivo" 
          id="Motivo"
          placeholder='Seleccione un motivo de denuncia'
           value={values.Motivo}
           onChange={handleChange}
           onBlur={handleBlur}
           >
            
            <option value="">Seleccione un tipo de solicitud</option>
          <option value="Prueba Solicitud 1">Prueba solicitud 1</option>
          <option value="Prueba Solicitud 2">Prueba solicitud 2</option>
          </select>
         {touched.Motivo && errors.Motivo && <div className={ErrorDenuncia}>{errors.Motivo}</div>}
          
          </div>
        </div>
        <div>
          <label htmlFor="Detalles">Detalles</label>
          <textarea 
          name="Detalles" 
          id="Detalles" 
          cols="30" 
          rows="5" 
          value={values.Detalles}
          onChange={handleChange}
          onBlur={handleBlur}
          ></textarea>
        </div>
  
  
        <button type="submit">Enviar Denuncia</button>
  
      </form>
      )}
    
    </Formik>

    </>
  )
}
