import { Navigate, Route, Routes } from "react-router-dom"

import { AgendaPage, ComplaintsPage, Dashboard, RequestPage } from "../pages";
import { NavBar, Sidebar } from "../components";
import { LoginPage } from "../pages/LoginPage";

export const AppRouter = () => {
  return (
    <>
    
    

      <NavBar />

      <div className="d-flex">
        <Sidebar />

        {/* para darle un poco de separacion al contenido del sidebar */}
        <div className="container">
          <Routes>
            {/* Ruta por defecto (se puede cambiar) */}
            <Route path="/*" element={ <Navigate to='/agenda' /> }/>
            <Route path="/panel" element={ <Dashboard />} />
            <Route path="/denuncias" element={ <ComplaintsPage /> } />
            <Route path="/solicitudes" element={ <RequestPage /> } />
            <Route path="/agenda" element={ <AgendaPage /> } />
            <Route path="/login" element={<LoginPage/>} />
          </Routes>
        </div>

      </div>
    </>   
  )
}