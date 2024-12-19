import React from 'react'
import InicioP1 from '../Components/Home/inicio.jsx'
import LogoSlider from '../Components/LogoSlider.jsx'
import Beneficios from '../Components/Beneficios.jsx'
import Team from '../Components/Equipo.jsx'


const Home = () => {
  return (
    <div className='h-full'>
      <InicioP1 />
      <Beneficios/>
      <LogoSlider/>
      <Team/>
    </div>
  )
}

export default Home