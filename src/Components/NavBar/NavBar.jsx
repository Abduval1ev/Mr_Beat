import React from 'react'
import style from '../../sass/base/blocks/nav.module.scss'
import { Link } from 'react-router-dom'
import Ul from '../Ul/Ul'

export default function NavBar() {
    return (
        <>
            <nav className={style.nav}>
                <div className={style.nav_left}>
                    <Link to={'/'}>
                        <div className={style.logo}>
                            <h1 className={style.nav_link}>MR.</h1>
                            <h1 className={style.nav_link_}>БЫТ</h1>
                        </div>
                    </Link>
                    <Ul />
                </div>
                <div className={style.nav_right}>
                    <h1 className={style.nav_region}>Moсква и Подмосковье</h1>
                    <h1 className={style.nav_call}>8 (495) <span>106-52-16</span></h1>
                </div>
            </nav>
        </>
    )
}
