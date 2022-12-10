import { useState } from "react";

import {
  RiMenu2Fill,
  RiSearch2Line,
  RiNotification4Line,
  RiCheckboxBlankCircleFill,
} from "react-icons/ri";
import "../css/styles.css";


export const NavBar = () => {
  const [searchBar, setSearchbar] = useState(false);
  const [profile, setProfile] = useState(false)
  const [notifications, setNotifications] = useState(false)

  const handleNotifications = ()=>{
    setNotifications(!notifications)
  }

  const handleProfile = () =>{
    setProfile(!profile)
  }

  const handleSearchBar = () => {
    setSearchbar(!searchBar);
  };

  return (
    <div className="navbarGeneral">
    <div className="navbar">
      <div className="navbar__left">
        <div className="navbar__logo">
          <h2>LOGO</h2>
        </div>
        <div className="navbar__menuicon">
          <RiMenu2Fill />
        </div>
      </div>
      <div
        className={`${
          searchBar ? "navbar__searchdiv--active" : "navbar__searchdiv"
        }`}
      >
        <div className="navbar__searchdiv--icon" onClick={handleSearchBar}>
          <RiSearch2Line />
        </div>
        <div className="navbar__searchdiv--input">
          <input type="text" placeholder="Busqueda..." id="search" />
        </div>
      </div>
      <div className="navbar__right">
        <div className="navbar__notifications" onClick={handleNotifications}>
          <div className="navbar__notifications--bell">
            <RiNotification4Line />
          </div>
          <div className="navbar__notifications--circle">
            <RiCheckboxBlankCircleFill />
          </div>
        </div>
        <div className="profile" onClick={handleProfile}>
          <div className="profile"><img className="profile__image" src="/profile.jpg"/></div>
          <div className="profile__name">Perfil Prueba</div>
          
        </div>
      </div>
    </div>
    {profile ?  
    <div className="profileactive">
      <div>
      <img src="/profile.jpg" className="profileimage" alt="" />
      </div>
      <div>
      <h2 className="profileactive__name">Perfil Prueba</h2>
      </div>
      <div>
      <h3 className="profilecargo">DEVELOPER</h3>
      </div>
      <div className="profileNav" onClick={handleProfile}>
           PERFIL
      </div>
      <div className="profileNav" onClick={handleProfile}>
           CERRAR SESION
      </div>

    </div>
     : ""}
     {notifications ? 
     <div className="notificationsActive">
      No hay notificaciones
     </div>
      : ""}
    </div>
  );
}
