import React, { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import useFetch from '../../hooks/useFetch'
import "./formPoket.css"

const FormPoket = ({setFormUrl, urlBase}) => {

    const inputPoke = useRef()

    const navigate = useNavigate()


    

    const url = `https://pokeapi.co/api/v2/type/`

    const [types, getAllTypes, hasError ] = useFetch(url)


    useEffect(() => {
        getAllTypes()
    }, [])


    
    const handleSubmit = e =>{
        e.preventDefault()
        
        const path = `/pokedex/${inputPoke.current.value.trim().toLowerCase()}`
        navigate(path)
    }




    const handleChange = e =>{
        setFormUrl(e.target.value);
    }




    return (
        <div className='form__poket-container'>
            <form onSubmit={handleSubmit} >
                <input className='form__poket-input' ref={inputPoke} type="text" placeholder='Look for a pokemon' />
                <button className='form__poket-button'>Search</button>
            </form>


            <select className='form__poket-select' onChange={handleChange}>
                <option   value={urlBase}>All Pokemons</option>
                {
                    types?.results.map(type => (
                        <option className='form__poket-option'
                        key={type.url} 
                        value={type.url}
                        >{type.name}</option>
                    ))
                }

            </select>
        </div>
    )
}

export default FormPoket