
import React, { useEffect } from 'react'
import useFeth from '../../hooks/useFeth'
import './css/SelectType.css'

const SelectType = ({ setPokeType }) => {
    const url = 'https://pokeapi.co/api/v2/type'
    const [types, getTypes] = useFeth(url)
    useEffect(() => {
        getTypes()
    }, [])

    const handleChange = (e) => {

        setPokeType(e.target.value)
    }
    return (
        <div className='relative  w-[260px]   sm:w-full sm:max-w-[30em]  flex justify-center items-center'>
            <select className=' sm:w-full w-full max-w-[25em]  sm:max-w-[30em] h-[4.1em] border px-2 select appearance-none focus:outline-none shadow cursor-pointer ' onChange={handleChange}>
                <option value="allPokemons" >all pokemons</option>
                {
                    types?.results.map(type => (
                        <option className='option-color' key={type.url} value={type.url}>{type.name}</option>
                    ))
                }
            </select>
            <span className=' absolute w-[3em] h-[4.1em] right-0 top-0 bg-[#D93F3F] flex flex-col justify-center items-center  pointer-events-none cursor-pointer shadow'><i className='bx bxs-down-arrow text-white'></i></span>
        </div>

    )
}

export default SelectType