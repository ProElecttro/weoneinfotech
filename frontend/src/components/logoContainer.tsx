import 'react'
import { NavLink } from 'react-router-dom'
import Logo from "../assets/WeOneInfotech_Logo.png";
import style from "../styles/LogoContainer.module.css";

export default function LogoContainer(props: any) {
  return (
    <div className={style.LogoContainer}>
        <NavLink to="/"> <img id={style.Logo} src={Logo} alt="Logo" /> </NavLink>
        <p>{props.title}</p>
    </div>
  )
}