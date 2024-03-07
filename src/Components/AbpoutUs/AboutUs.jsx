import React from 'react'
import ArrowIcon from '../images/icon-down-arrow.svg'
import style from '../../sass/base/blocks/aboutUs.module.scss'

export default function AboutUs() {
    return (
        <>
            <main className='main_header'>
                <h1 className='header_title'>Что о нас говорят?</h1>
                <p className='header_text'>
                    Нам доверили свою технику более 10 тыс. жителей Москвы и Подмосковья, и большинство остались довольным нашими услугами.
                </p>
                <img className='header_img' src={ArrowIcon} alt="Image" />
            </main>
        </>
    )
}
