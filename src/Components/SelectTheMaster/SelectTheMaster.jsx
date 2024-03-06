import React, { useEffect, useState } from 'react'
import style from '../../sass/base/blocks/masterSelectItem.module.scss'
import MasterSelectInput from '../MasterSelectrItemInput/MasterSelectInput'
import axios from 'axios'

export default function SelectTheMaster() {
    const [product, setProduct] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:9000/products`)
            .then(res => setProduct(res.data))
            .catch(err => console.log(err))
    }, [])
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
                <MasterSelectInput />
                {
                    product.slice(3, 4).map(product => {
                        return (
                            <React.Fragment key={product.id}>
                                <img
                                    className={style.master_select_item_image}
                                    src={process.env.PUBLIC_URL + '/ui/' + product.image}
                                    alt="Image"
                                />
                            </React.Fragment>
                        )
                    })
                }
            </div>
        </>
    )
}
