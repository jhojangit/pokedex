import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import FormPoket from '../components/pokedex/FormPoket'
import PokeContainer from '../components/pokedex/PokeContainer'
import Header from '../components/header/Header'
import "./pokedex.css"



const Pokedex = () => {

  const urlBase = `https://pokeapi.co/api/v2/pokemon?limit=151&offset=0`

  const [formUrl, setFormUrl] = useState(urlBase)

  const {trainerName} = useSelector(state => state)


  return (
    <div className='pokedex__container'>
      <Header/>
      
      <p style={{fontWeight:"bold", padding:"1rem", fontSize:"1.5rem"}}>
        Welcome
        <span style={{color:"red"}}> {trainerName} </span>
      </p>

      <FormPoket urlBase={urlBase} setFormUrl={setFormUrl}  />

      <PokeContainer formUrl={formUrl}/>
    </div>
  ) 
}

export default Pokedex