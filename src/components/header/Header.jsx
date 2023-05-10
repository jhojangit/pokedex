import React from 'react'
import "./header.css"
import { Link, useNavigate } from 'react-router-dom'

const Footer = () => {

  const navigate = useNavigate()

  const handleClick = () =>{
    navigate(`/pokedex`)
  }
  

  return (

    <div className='header__container'>
        <div className="header__flag">
            <div className="header__red">
              <h1 className='header__h1' onClick={handleClick} >POKEDEX </h1>
            </div>
            <div className="header__black"> </div>
            <div className="header__circle-extern"></div>
            <div className="header__circle-intern"></div>
            <div className="header__circle-externo"></div>
        </div>

    </div>
  )
}

export default Footer