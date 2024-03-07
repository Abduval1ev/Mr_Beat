import React, { useEffect, useState } from 'react'
import style from '../../sass/base/blocks/homeSectionCart.module.scss'
import ArrowDown from '../images/icon-down-arrow.svg'
import axios from 'axios'
import { Link } from 'react-router-dom'
import itemIcon from '../images/Item_card_icon.svg'

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
            <h1 className='header_title'>Чем мы поможем?</h1>
            <p
              className='header_text'>
              Приоритетным направлением деятельности нашей компании является ремонт бытовой техники на дому.
            </p>
            <img
              className='header_img'
              src={ArrowDown}
              alt="Icon" />
          </div>
          <div className={style.cart_wrapper}>
            {
              cart.slice(0, 3).map(cart => {
                return (
                  <React.Fragment key={cart.id}>
                    <div className={style.item}>
                      <div className={style.item_title}>{cart.title}</div>
                      <div className={style.item_content}>
                        <div className={style.item_list_link}>
                          <ul className={style.item_lists}>
                            <li className={style.item_list}>{cart.text}</li>
                            <li className={style.item_list}>{cart.text2}</li>
                            <li className={style.item_list}>{cart.text3}</li>
                            <li className={style.item_list}>{cart.text4}</li>
                            <li className={style.item_list}>{cart.text5}</li>
                            <li className={style.item_list}>{cart.text6}</li>
                          </ul>
                          <Link to={'#!'}>
                            <div className={style.item_link}>
                              Подробнее
                              <img
                                className={style.item_link_icon}
                                src={itemIcon}
                                alt="Image"
                              />
                            </div>
                          </Link>
                        </div>
                        <div className={style.item_img}>
                          <img className={style.item_image} src={process.env.PUBLIC_URL + '/ui/' + cart.image} alt="Image" />
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
