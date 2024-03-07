import React from 'react'
import style from '../../sass/base/blocks/masterHeader.module.scss'
import ArrowIcon from '../images/icon-down-arrow.svg'
import SelectTheMaster from '../SelectTheMaster/SelectTheMaster'
import MasterCarts from '../MasterCards/MasterCards'
import SwiperCard from '../SwiperMasterCard/SwiperCard'

export default function MasterCart() {
  return (
    <>
      <div className="container">
        <div className={style.master_header_content}>
          <h1 className='header_title'>Хорошие мастера у нас?</h1>
          <p className='header_text'>
            Наши жесткие критерии отбора мастеров позволяют держать качество ремонта на высшем уровне и оставлять гарантию.
          </p>
          <img className='header_img' src={ArrowIcon} alt="Image" />
        </div>

        <div className={style.master_cards_row}>
          <SelectTheMaster />
          <MasterCarts />
        </div>

        {/* <SwiperCard /> */}




      </div>
    </>
  )
}
