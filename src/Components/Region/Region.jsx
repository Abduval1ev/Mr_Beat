import React from 'react'
import style from '../../sass/base/blocks/navRegion.module.scss'
import iconBottom from "../images/icon_dropbottom.svg"

export default function Region() {
    return (
        <>
            <div className={style.nav_region}>
                <div className={style.nav_region_icon}>
                    <img src={iconBottom} className={style.nav_dropicon} alt="Icon" />
                </div>
                <h1
                    className={style.nav_region_text}
                >Moсква и Подмосковье</h1>
            </div>
        </>
    )
}
