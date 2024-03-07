import React from 'react'
import style from '../../sass/base/blocks/masterCard.module.scss'
import MasterCardImage from '../images/image-docs.svg'
import IconImg from '../images/check.svg'

export default function MasterCard() {
    return (
        <>
            <div className={style.master_card}>
                <ul className={style.ul_lists}>
                    <li className={style.item_list}>
                        <img
                            className={style.icon_image}
                            src={IconImg}
                            alt="Image"
                        />
                        Проверям документы
                    </li>
                    <li className={style.item_list}>
                        <img
                            className={style.icon_image}
                            src={IconImg}
                            alt="Image"
                        />
                        Только граждане РФ
                    </li>
                    <li className={style.item_list}>
                        <img
                            className={style.icon_image}
                            src={IconImg}
                            alt="Image"
                        />
                        Подтвежденные сертификаты
                    </li>
                </ul>
                <img src={MasterCardImage} alt="Image" className={style.master_card_image} />
            </div>
        </>
    )
}
