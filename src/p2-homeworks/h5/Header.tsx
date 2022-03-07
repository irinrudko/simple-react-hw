import React, { useState, MouseEventHandler } from 'react'
import style from './Header.module.css'
import { NavLink } from 'react-router-dom'
import { PATH } from './Routers'

function Header() {
    const [navbar, setNavbar] = useState<boolean>(false)

    const toggleNavbarHandler = () => setNavbar(!navbar)

    const toggleNavbar = navbar ? style.none : '';


    return (
        <div>
            <div className={`${style.header}`}>
                <div className={`${toggleNavbar} ${style.item}`}>
                    <NavLink to={PATH.PRE_JUNIOR} className={`${style.link} ${style.yellow}`} > PreJunior </NavLink>
                    <NavLink to={PATH.JUNIOR} className={`${style.link} ${style.blue}`}> Junior </NavLink>
                    <NavLink to={PATH.JUNIOR_PLUS} className={`${style.link} ${style.pink}`}> JuniorPlus </NavLink>
                </div>
                <div onMouseMove={toggleNavbarHandler} className={`${style.navbarButton}`}>{navbar}</div>
            </div >

        </div>
    )
}

export default Header
