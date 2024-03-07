import React from 'react'
import Header from '../Components/Header/Header'
import SectionCarts from '../Components/SectionCarts/SectionCarts'
import MasterCart from '../Components/MasterCart/MasterCart'
import Funcion from '../API_Funcions/Funcion'
import AboutUs from '../Components/AbpoutUs/AboutUs'

export default function Indexx() {
  return (
    <>
      {/* <Header /> */}
      <SectionCarts />
      <MasterCart />
      <AboutUs />
    </>
  )
}
