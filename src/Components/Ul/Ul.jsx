import React from 'react'
import style from '../../sass/base/blocks/navUl.module.scss'
import { Link } from 'react-router-dom'

export default function Ul() {
    return (
        <>
            <ul className={style.ul_lists}>
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
