import React from 'react'
import style from './Header.module.css'
import { NavLink } from 'react-router-dom'
import { PATH } from './Routers'

function Header() {
    return (
        <div>
            <div className={style.header}>
                <NavLink to={PATH.PRE_JUNIOR} className={`${style.link} ${style.yellow}`} > PreJunior </NavLink>
                <NavLink to={PATH.JUNIOR} className={`${style.link} ${style.blue}`}> Junior </NavLink>
                <NavLink to={PATH.JUNIOR_PLUS} className={`${style.link} ${style.pink}`}> JuniorPlus </NavLink>
            </div >
        </div>
    )
}

export default Header
