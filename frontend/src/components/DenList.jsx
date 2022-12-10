import React, {useState} from 'react'
import { Card } from '../components/Cards/Card'
import {CONTENIDO, Filter, Cedula, IDIcon} from '../css/styles.module.scss'
import { HiOutlineIdentification } from "react-icons/hi";



export const DenList = ({denData, currentPage}) => {
  const [search, setSearch] = useState("")
 



 
  const searcher = (e)=>{
    setSearch(e.target.value)
    currentPage(1)
  }


let results = [];
if(!search){
  results = denData
} else {
 results = denData.filter((den) => den.Cedula.toString().includes(search) )}

 

 
  return (
    
    <>   
    
     <div className={Filter}>
      <div className={IDIcon}><HiOutlineIdentification/></div>
    <input type="text" name="search" id="search" onChange={searcher} className={Cedula} placeholder="Busqueda por C.I..."/>
    </div>
    <div className={CONTENIDO}>
      {results.map(({Denunciante, createdAt, Motivo, id, Cedula, Direccion, Telefono1, Telefono2, Detalles, })=> <Card Denunciante={Denunciante} createdAt={createdAt} key={id} Motivo={Motivo} Cedula={Cedula} Direccion={Direccion} Telefono1={Telefono1} Telefono2={Telefono2} Detalles = {Detalles} id={id}/>)}     
      
    </div>
    </>

  )
}



