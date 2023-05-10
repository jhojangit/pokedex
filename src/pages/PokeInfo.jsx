import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch'
import Header from '../components/header/Header.jsx'
import "./pokeInfo.css"



const PokeInfo = () => {

    const { name } = useParams()
    const navigate = useNavigate()

    const url = `https://pokeapi.co/api/v2/pokemon/${name}`

    const [pokemon, getPokemonByName, hasError] = useFetch(url)

    useEffect(() => {
        getPokemonByName()
    }, [name])

    const handleBack = () => {
        navigate("/pokedex")
    }



    return (
        <div className='poke__info-container-pag'>
            <Header/>

            <button onClick={handleBack} className={`poke__info-btn ${pokemon?.types[0].type.name}`}> ⬅️ Back</button>

            
            {
                hasError
                    ? <h1> No existe </h1>
                    :

                    <div className='poke__info-container'>

                        

                        <header className="poke__info-header">

                            <div className="poke__info-img-container">
                                <div className={`poke__info-background ${pokemon?.types[0].type.name}`}></div>
                                <img className='poke_info-img' src={pokemon?.sprites.other["official-artwork"].front_default} alt="" />
                            </div>

                            <h3 className={`poke__info-id ${pokemon?.types[0].type.name}__name `}>#{pokemon?.id}</h3>
                            <h2 className={`poke__info-name ${pokemon?.types[0].type.name}__name`}> <hr /> {pokemon?.name} <hr /> </h2>

                        </header>

                        <hr className='poke__header-line' />

                        <main className='poke__info-main'>

                            

                            <div className="poke__info-measures">
                                <p className={`poke__info-weight ${pokemon?.types[0].type.name}__name`}> Weight <br /><b> {pokemon?.weight / 10} kg</b> </p>
                                <p className= {`poke__info-weight ${pokemon?.types[0].type.name}__name`}> Height <br /> <b>{pokemon?.height * 10} cm </b></p>
                            </div>

                            <div className="poke__info-info">

                                <div className="poke__info-types">
                                    <h3 className= {`poke__info-type-h3 ${pokemon?.types[0].type.name}__name`}>type</h3>
                                    
                                    <div className="poke__info-info-content">
                                        {

                                            pokemon?.types.map(type => (
                                                <div key={type.type.url} >
                                                    <button className={`poke_info-word-type ${pokemon?.types[0].type.name} `}>{type.type.name}</button>
                                                </div>
                                            ))

                                        }
                                    </div>
                                </div>

                                <div className="poke__info-types">
                                    <h3 className={`poke__info-type-h3 ${pokemon?.types[0].type.name}__name`}>Abilities</h3>
                                    <div className="poke__info-info-content">
                                        {
                                            pokemon?.abilities.map(ability => (
                                                <div key={ability.ability.url} >
                                                    <button className={`poke_info-word ${pokemon?.types[0].type.name}__name`}>{ability.ability.name}</button>
                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>

                            </div>



                            <footer className='poke__info-footer'>
                                <h3 className='poke__info-stats-title'>Stats</h3>


                                <div className='poke__info-stats-container'>
                                    {
                                        pokemon?.stats.map(stat => (
                                            <div key={stat.stat.url} >

                                                <div className='poke__info-stat-data'>
                                                    <p className='poke__info-stat-word'>{stat.stat.name}</p>
                                                    <p className='poke__info-stat-word'>{stat.base_stat}</p>
                                                </div>

                                                <div className="poke__info-stat-percentage-container">
                                                    <div className={`poke__info-stat-percentage ${pokemon?.types[0].type.name}`} style={{ width: `${stat.base_stat}%` }} />
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>


                                <h2 className='poke__info-movements-h2'>Movements</h2>


                                <div className="poke__info-movements-container">


                                    {
                                        pokemon?.moves.map(move => (
                                            <p key={move.move.name}
                                                className={`poke__info-movements-list ${pokemon?.types[0].type.name}__name`}>
                                                {move.move.name}</p>
                                        ))
                                    }
                                </div>

                            </footer>

                        </main>

                    </div>

            }

        </div>


    )
}

export default PokeInfo