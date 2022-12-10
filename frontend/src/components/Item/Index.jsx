import { NavLink } from 'react-router-dom';

import {normal, link_open} from './styles.module.scss';


export const Item = ({text, to, icon, open}) => {
  return (
    <NavLink className={open ? link_open : normal} to={to}>
      <div>{icon}</div>
      {open ? <p>{text}</p> : null}
    </NavLink>
  )
}
