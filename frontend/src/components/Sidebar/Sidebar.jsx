import { useState } from 'react'
import {FaBars} from 'react-icons/fa'
import { Links } from '../../data/data.jsx'
import { Item } from '../Item/Index.jsx'
import {
  sidebar,
  sidebarOpen,
  hamburguer,
  linksContainer,
  profileImage,
  nombre
} from './styles.module.scss'


export const Sidebar = () => {
  const [open, setOpen] = useState(false)
  return (
    <div className={open ? sidebarOpen : sidebar}>
      <div>
        <FaBars className={hamburguer} onClick={()=> setOpen(!open)}/>
        <div className={profileImage}><img src="/profile.jpg"/></div>
        <div className={nombre}><h2>Jesús Barrera</h2></div>
        <div className={nombre}><h3>DEVELOPER</h3></div>
        <div className={linksContainer}>
          {Links.map(({text, to, icon}) => <Item open={open} text={text} to={to} icon={icon} key={to}>{text}</Item> )}
        </div>
      </div>
    </div>
    )
}

 