import React, { useRef } from 'react'
import { setTrainer } from '../../store/state/trainer.slice'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'


const FormTranier = () => {
    const tranierInput = useRef()
    const dispatch = useDispatch()
    const navegate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault()
       

        dispatch(setTrainer(tranierInput.current.value))
        navegate('/pokedexPage')

        tranierInput.current.value = ''
    }
    return (
        <form className='text-white' onSubmit={handleSubmit}>
            <input  className=' shadow-gray-400 shadow w-[200px] h-[40px] text-black px-2 rounded-l-lg' type="text" placeholder='Yur name' ref={tranierInput} />
            <button className=' bg-red-500 font-semibold px-2 h-[40px] shadow-gray-400 shadow'>Let start</button>
        </form>
    )
}

export default FormTranier