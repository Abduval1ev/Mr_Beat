import React from 'react'
import style from '../../sass/base/blocks/masterSelectItem.module.scss'

export default function SelectTheMaster() {
    return (
        <>
            <div className={style.master_select_item}>
                <div className={style.master_select_item_left_border}>
                    <div className={style.left_border}></div>
                    <h1 className={style.master_select_item_title}>
                        ПОДБЕРЕМ БЛИЖАЙШЕГО МАСТЕРА
                    </h1>
                    <p className={style.master_select_item_text}>
                        Введите ваш адрес, и узнайте где ближайший наш мастер. И рассчет время прибытия.
                    </p>
                </div>
            </div>
        </>
    )
}
