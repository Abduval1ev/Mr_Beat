import React, { useEffect, useState } from 'react'
import style from '../../sass/base/blocks/homeSectionCart.module.scss'
import ArrowDown from '../images/icon-down-arrow.svg'
import axios from 'axios'

export default function SectionCarts() {
  const [cart, setCarts] = useState([])

  useEffect(() => {
    axios.get(`http://localhost:9000/products`)
      .then(res => setCarts(res.data))
      .catch(err => console.log(err))
  }, [])

  return (
    <>
      <section className={style.section}>
        <div className="container">
          <div className={style.section_content}>
            <h1 className={style.section_title}>Чем мы поможем?</h1>
            <p
              className={style.section_text}>
              Приоритетным направлением деятельности нашей компании является ремонт бытовой техники на дому.
            </p>
            <img
              className={style.section_down_icon}
              src={ArrowDown}
              alt="Icon" />
          </div>
          <div className={style.cart_wrapper}>
            {
              cart.map(cart => {
                return (
                  <React.Fragment key={cart.id}>
                    <div className={style.item}>
                      <div className={style.item_title}>{cart.title}</div>
                      <div className={style.item_content}>
                        <ul className={style.item_lists}>
                          <li className={style.item_list}>{cart.text}</li>
                          <li className={style.item_list}>{cart.text2}</li>
                          <li className={style.item_list}>{cart.text3}</li>
                          <li className={style.item_list}>{cart.text4}</li>
                          <li className={style.item_list}>{cart.text5}</li>
                          <li className={style.item_list}>{cart.text6}</li>
                        </ul>
                        <div className={style.item_img}>
                        </div>
                      </div>
                    </div>
                  </React.Fragment>
                )
              })
            }
          </div>
        </div>
      </section>
    </>
  )
}
