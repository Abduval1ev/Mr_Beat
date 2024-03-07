import React, { useEffect, useState } from 'react'
import style from '../../sass/base/blocks/swiperCard.module.scss'
import axios from 'axios';

export default function SwiperCard() {
    const [master, setMaster] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:9000/masters`)
            .then(res => setMaster(res.data))
            .catch(err => console.log(err))
    }, [])
    return (
        <>
        </>
    )
}
