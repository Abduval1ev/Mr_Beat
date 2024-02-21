import React from 'react'
import style from '../../sass/base/blocks/homeSectionCart.module.scss'
import ArrowDown from '../images/icon-down-arrow.svg'

export default function SectionCarts() {


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

            }
          </div>
        </div>
      </section>
    </>
  )
}
