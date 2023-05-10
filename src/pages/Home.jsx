import React from 'react'
import FormNameUser from '../components/home/FormNameUser'
import "./home.css"
import Footer from '../components/footer/Footer'

const Home = () => {
  return (
    <div className='home__container'>

        <img className='home__title' src="../../pokedex.png" alt="pokedex/img" />
        <h2 className='home__subtitle'>Hi trainer</h2>
        <p className='home__p'>Please give us your name to star</p>

        <FormNameUser/>


        <Footer/>

    </div>
  )
}

export default Home