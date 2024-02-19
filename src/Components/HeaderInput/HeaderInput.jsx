import React from 'react'
import style from '../../sass/base/blocks/input.module.scss'

export default function HeaderInput() {
    return (
        <>
            <div className={style.header_input}>
                <label className={style.header_label}>
                    <input className={style.input} type="telphone" placeholder='+7 (999) 000-00-00' />
                </label>
                <button className={style.input_btn}>Заказать</button>
            </div>
        </>
    )
}
