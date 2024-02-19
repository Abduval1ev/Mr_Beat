import React from 'react'
import style from '../../sass/base/blocks/header.module.scss'
import supplier from '../images/supplier.svg'
import masterImg from '../images/master_1.svg'
import HeaderInput from '../HeaderInput/HeaderInput'

export default function Header() {
    return (
        <>
            <header className={style.header}>
                <div className="container">
                    <div className={style.header_left}>
                        <h1 className={style.header_text}>БЫСТРО И ПРОСТО</h1>
                        <h1 className={style.header_title}>РЕМОНТ БЫТОВОЙ ТЕХНИКИ</h1>
                        <div className={style.header_info}>
                            <img className={style.info_img} src={supplier} alt="Supplier" />
                            <p className={style.info_text}>Выезд мастера от 30 минут</p>
                        </div>
                        <HeaderInput />
                    </div>
                    <div className={style.header_right}>
                        <img
                            className={style.header_maaster_image}
                            src={masterImg}
                            alt=""
                        />
                    </div>
                </div>
            </header>
        </>
    )
}
