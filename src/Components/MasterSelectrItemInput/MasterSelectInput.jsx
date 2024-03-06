import React from 'react'
import style from '../../sass/base/blocks/masterSelectInput.module.scss'

export default function MasterSelectInput() {
    return (
        <>
            <div className={style.label}>
                <input type="text" placeholder='Введите адрес..' className={style.input} />
                <div className={style.btn}>Проверить</div>
            </div>
            <div className={style.text_content_label}>
                <input type="checkbox" className={style.input_checkbox} />
                <p className={style.text}>
                    Нажимая на кнопку "Проверить", я даю свое согласие на обработку своих персональных данных.
                </p>
            </div>
        </>
    )
}
