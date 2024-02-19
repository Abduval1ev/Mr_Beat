import React from 'react'
import style from '../../sass/base/blocks/nav.module.scss'
import { Link } from 'react-router-dom'
import Ul from '../Ul/Ul'
import Region from '../Region/Region'

export default function NavBar() {
    return (
        <>
            <div className="container none" >
                <nav className={style.nav}>
                    <div className={style.nav_left}>
                        <Link to={'/'}>
                            <div className={style.logo}>
                                <h1 className={style.nav_link}>MR.</h1>
                                <h1 className={style.nav_link_}>БЫТ</h1>
                            </div>
                        </Link>
                    </div>
                    <div className={style.nav_dubble_lists}>
                        <Ul />
                        <Region />
                    </div>


                    <div className={style.nav_right}>
                        <h1 className={style.nav_call}>8 (495) <span>106-52-16</span></h1>
                    </div>
                </nav>
            </div >
        </>
    )
}
