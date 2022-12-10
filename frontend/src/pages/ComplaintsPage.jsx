import { useState } from 'react';
import { useEffect } from 'react';
import { DenList } from '../components/DenList';
import React from 'react'
import  '../css/pagination.css'
import { page_title, Content, CONTENIDO, CdCda, pagination} from '../css/styles.module.scss'
import axios from 'axios'
import CrearDenuncia from '../components/CrearDenuncia'
import { CrearDenunciaForm } from '../components/Forms/CrearDenunciaForm';








export const ComplaintsPage = () => {

/* DATOS Y PAGINACION */
const [currentPage, setCurrentPage] = useState(1)
const [postsPerPage, setPostsPerPage] = useState(8)
const [pageNumberLimit, setPageNumberLimit] = useState(5)
const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(5)
const [minPageNumberLimit, setMinPageNumberLimit] = useState(0)
const [denData, setDenData] = useState([])
const [active, setActive] = useState(false)

const toggle = () =>{
  setActive(!active)
}





const URI = 'http://localhost:8000/denuncias/'

useEffect( ()=> {
  getDenuncias()
 },[])

const getDenuncias = async () =>{
 const res = await axios.get(URI)
 setDenData(res.data)
}


/* PAGINACION BOTONES */
const handleClick = (event)=>{
  setCurrentPage(Number(event.target.id))
}

const handleNextBtn = ()=>{
  setCurrentPage(currentPage+1)

  if(currentPage+1 > maxPageNumberLimit){
    setMaxPageNumberLimit(maxPageNumberLimit+pageNumberLimit)
    setMinPageNumberLimit(minPageNumberLimit+pageNumberLimit)
  }
}

const handlePrevBtn = ()=>{
  setCurrentPage(currentPage-1)

  if((currentPage-1)%pageNumberLimit==0){
    setMaxPageNumberLimit(maxPageNumberLimit-pageNumberLimit)
    setMinPageNumberLimit(minPageNumberLimit-pageNumberLimit)
  }
}

/* CARGA DE DATA */


const Pagination = () => {
 
  const Pages = [];
  for (let i = 1; i <= Math.ceil(denData.length / postsPerPage); i++) {
    Pages.push(i)

  }

  const handleFirstBtn = ()=>{
    setCurrentPage(1)
    if(currentPage <= maxPageNumberLimit){
      setMaxPageNumberLimit(5)
      setMinPageNumberLimit(0)
     } else null
     
    
    
  }
  
  const handleLastBtn = ()=>{
    setCurrentPage(Pages.length);
    if(currentPage >= minPageNumberLimit){
      setMaxPageNumberLimit(Pages.length)
      setMinPageNumberLimit(Pages.length-pageNumberLimit)
  
     } else null
  }

const renderPageNumber = Pages.map((number) =>{
if(number < maxPageNumberLimit+1 && number>minPageNumberLimit){
  return (
  
    <li key={number}
     id={number} 
     onClick={handleClick} 
     className={currentPage == number ? "active" : null}>
      {number}
    </li>
  );
} else {
  return null;
}
});





  return (
    <div>
      <ul className="RenderPageNumber">
        <li><button onClick={handlePrevBtn} 
        disabled={currentPage == [1] ? true:false}
        >Prev</button></li>

        <li><button onClick={handleFirstBtn} disabled={currentPage == [1] ? true:false}>Inicio</button></li>

        {renderPageNumber}


        <li><button onClick={handleLastBtn} disabled={currentPage == [Pages.length] ? true:false}>Fin</button></li>
        <li>
        
          <button onClick={handleNextBtn} disabled={currentPage == [Pages.length] ? true:false}>
          next</button></li>
        
        </ul>
    </div>
    )
}


const lastPostIndex = currentPage * postsPerPage;
const firstPostIndex = lastPostIndex - postsPerPage;
const currentPosts = denData.slice(firstPostIndex, lastPostIndex)
  return (
    <div className={Content}>
      <CrearDenuncia active={active} toggle={toggle}>
        <CrearDenunciaForm setActive={active} toggle={toggle}/>
      </CrearDenuncia>
     
        <div className={page_title}>
          <h2>Denuncias</h2>
          <div className={CdCda} onClick={toggle}><p>Crear Denuncia</p></div>
        </div>

        <div className={CONTENIDO}>
          <DenList denData={currentPosts} currentPage={setCurrentPage}  />
            
        </div>
        <div className={pagination}>
        <Pagination/> 
        </div>
    </div>
  )
}
