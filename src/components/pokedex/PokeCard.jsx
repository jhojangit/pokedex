import React, { useState, useEffect } from 'react'
import useFetch from '../../hooks/useFetch';
import './pokeCard.css'
import { useNavigate } from 'react-router-dom';



const PokeCard = ({ url }) => {

    const [pokemon, fetch] = useFetch(url)



    useEffect(() => {
        fetch()
    }, [])


    const navigate = useNavigate()

    const handleClick = () =>{
        navigate(`/pokedex/${pokemon.name}`)
    }

    return (
        <div onClick={handleClick} className={`poket__cart ${pokemon?.types[0].type.name} `}>
            <section className='poket__main'>


                <img loading='lazy'  className='poket__img' style={{ width: "200px" }} src={pokemon?.sprites.other['official-artwork'].front_default} alt="" />
            
            
            <h2 className= {`poket__name ${pokemon?.types[0].type.name}__name`} >{pokemon?.name}</h2>
            


                <div className="typeInfo">
                    {  
                    
                        pokemon?.types.map(typeInfo => (
                        <div  key={typeInfo.type.url}>
                            <p>{typeInfo.type.name} </p>
                        </div>
                        
                        ))
                        
                    }
                    
                </div>
                    <h4>Type</h4>
                    
            

            <div className="poket__data">
                <p className={`${pokemon?.types[0].type.name}__name  `} > <span className='poket__span'>{pokemon?.stats[0].stat.name}</span>  <br /> {pokemon?.stats[0].base_stat}</p>
                <p className={`${pokemon?.types[0].type.name}__name  `} > <span className='poket__span'>{pokemon?.stats[1].stat.name}</span>  <br /> {pokemon?.stats[1].base_stat}</p>
                <p className={`${pokemon?.types[0].type.name}__name  `} > <span className='poket__span'>{pokemon?.stats[2].stat.name}</span>  <br /> {pokemon?.stats[2].base_stat}</p>
                <p className={`${pokemon?.types[0].type.name}__name  `} > <span className='poket__span'>{pokemon?.stats[5].stat.name}</span>  <br /> {pokemon?.stats[5].base_stat}</p>
            </div>
            </section>
            

        </div>)

}

export default PokeCard