import {CardDenuncia, CardDenunciaTitulo, CardDenunciaImagen, contentCard, DenunciaCDA, imagenDenuncia, datosDenuncia, ModalDenuncias, detalle, propiedad, valor, TituloDenuncia} from '../../css/styles.module.scss'
import CrearDenuncia from '../CrearDenuncia';

import { useState } from 'react';


export const Card = ({Denunciante, createdAt, Motivo, Cedula, Telefono1, Telefono2, Direccion, Detalles, id}) => {
    const [active, setActive] = useState(false)

const toggle = () =>{
    setActive(!active)
}

  



  return (
    <>
    <CrearDenuncia active={active} toggle={toggle}>
        <div className={ModalDenuncias}>
            <div className={TituloDenuncia}>DETALLES DE LA DENUNCIA: {id}</div>
            <div className={imagenDenuncia}>
                <img src="/profile.jpg"/>
            </div>
                <div className={datosDenuncia}>
                    <div className={detalle}>
                        <div className={propiedad}>
                    Denunciante:
                    </div>
                    <div className={valor}>
                     {Denunciante}
                     </div>
                    </div>
                    <div className={detalle}>
                        <div className={propiedad}>
                    Cedula:
                    </div>
                    <div className={valor}>
                     {Cedula}
                     </div>
                    </div>
                    <div className={detalle}>
                        <div className={propiedad}>
                    Motivo:
                    </div>
                    <div className={valor}>
                     {Motivo}
                     </div>
                    </div>
                    <div className={detalle}>
                        <div className={propiedad}>
                    Telefono 1:
                    </div>
                    <div className={valor}>
                     {Telefono1}
                     </div>
                    </div>
                    <div className={detalle}>
                        <div className={propiedad}>
                    Telefono 2:
                    </div>
                    <div className={valor}>
                     {Telefono2}
                     </div>
                    </div>
                    <div className={detalle}>
                        <div className={propiedad}>
                    Fecha:
                    </div>
                    <div className={valor}>
                     {createdAt}
                     </div>
                    </div>
                    <div className={detalle}>
                        <div className={propiedad}>
                    Direccion:
                    </div>
                    <div className={valor}>
                     {Direccion}
                     </div>
                    </div>
                    <div className={detalle}>
                        <div className={propiedad}>
                    Detalles:
                    </div>
                    <div className={valor}>
                     {Detalles}
                     </div>
                    </div>
                   
               
            </div>
        </div>
    </CrearDenuncia>
  
    <div className={CardDenuncia}>
        <div className={CardDenunciaImagen}>
            <img src="/profile.jpg"/>
        </div>
        <div className={CardDenunciaTitulo}>
            <h3>{Motivo}</h3>
        </div>
        <div className={contentCard}>
            <div>Denunciante: {Denunciante}</div>
            <div>Cedula: {Cedula}</div>

            <div>Fecha: {createdAt}</div>
        </div>
        <div className={DenunciaCDA} onClick={toggle} ><p>Ver Denuncia</p></div>
        </div>
        </>
  )
}
