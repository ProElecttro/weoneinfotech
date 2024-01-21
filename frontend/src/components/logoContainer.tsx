import 'react'
import { NavLink } from 'react-router-dom'
import Logo from "../assets/WeOneInfotech_Logo.png";
import style from "../styles/LogoContainer.module.css";

export default function LogoContainer(props: any) {
  return (
    <NavLink to="/" className={style.LogoContainer}> 
      <img id={style.Logo} src={Logo} alt="Logo" /> 
      <p>{props.title}</p>
    </NavLink>
  )
}