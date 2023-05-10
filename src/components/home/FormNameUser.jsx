import React, { useRef } from 'react'
import { setTrainerName } from '../../store/slices/trainerName.slice'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import "./formName.css"

const FormNameUser = () => {


    const inputName = useRef()


    const dispatch = useDispatch()

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()

        dispatch(setTrainerName(inputName.current.value))
        navigate('/pokedex')
    }


    return (


        <form onSubmit={handleSubmit} className='home__form'>
            <input className='home__form-input' ref={inputName} type="text" placeholder='Your name...'/>
            <button className='home__form-button'>Start</button>
        </form>

    )
}

export default FormNameUser