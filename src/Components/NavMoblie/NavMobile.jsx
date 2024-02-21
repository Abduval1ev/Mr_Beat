import React from 'react'
import iconNav from '../images/iconNav.svg'
import style from '../../sass/base/blocks/navMobile.module.scss'

export default function NavMobile() {
    return (
        <>
            <div className={style.nav_mobile}>
                <img className={style.mobile_menu_icon} src={iconNav} alt="Icon" />
                {/* <ul className={style.mobile_lists}>
                    <li
                        className={style.mobile_item}>
                        Стиральные м
                        ашины</li>
                    <li
                        className={style.mobile_item}>
                        Посудомоечны
                        е машины</li>
                    <li
                        className={style.mobile_item}>
                        Холодильники
                    </li>
                    <li
                        className={style.mobile_item}>
                        О компании</
                    li>
                    <li
                        className={style.mobile_item}
                    >Отзывы</li>

                    <li
                        className={style.mobile_item}>
                        Контакты</li
                    >
                </ul> */}
            </div>
        </>
    )
}
