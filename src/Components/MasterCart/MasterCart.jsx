import React from 'react'
import style from '../../sass/base/blocks/masterHeader.module.scss'
import ArrowIcon from '../images/icon-down-arrow.svg'
import SelectTheMaster from '../SelectTheMaster/SelectTheMaster'
export default function MasterCart() {
  return (
    <>
      <div className="container">
        <div className={style.master_header_content}>
          <h1 className={style.master_header_title}>Хорошие мастера у нас?</h1>
          <p className={style.master_header_text}>
            Наши жесткие критерии отбора мастеров позволяют держать качество ремонта на высшем уровне и оставлять гарантию.
          </p>
          <img src={ArrowIcon} alt="Image" />
        </div>
        <SelectTheMaster />
      </div>
    </>
  )
}
