import React from 'react'
import style from '../../sass/base/blocks/navUl.module.scss'
import { Link } from 'react-router-dom'
import iconNav from '../images/iconNav.svg'

export default function Ul() {
    return (
        <>
            <ul className={style.ul_lists}>
                <div className={style.nav_list_dropdown}>
                    <img className={style.nav_icon} src={iconNav} alt="Icon" />
                    <h4 className={style.nav_list_dropdown}>Цены на услуги</h4>
                </div>
                <Link to={'/about'}>
                    <li
                        className={style.list_item}>О компании</li>
                </Link>
                <Link to={'/reviews'}>
                    <li
                        className={style.list_item}>Отзывы</li>
                </Link>
                <Link to={'/contacts'}>
                    <li
                        className={style.list_item}>Контакты</li>
                </Link>
            </ul>
        </>
    )
}
