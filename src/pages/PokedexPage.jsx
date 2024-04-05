import React, { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import useFeth from '../hooks/useFeth'
import ListPokemons from '../components/PokedexPage/ListPokemons'
import SelectType from '../components/PokedexPage/SelectType'
import Header from '../components/General/Header'

const PokedexPage = () => {
  const [pokeSearch, setPokeSearch] = useState('')
  const [pokeType, setPokeType] = useState('allPokemons')
  const inputSearch = useRef()
  const tranier = useSelector(state => state.trainer)
  const url = `https://pokeapi.co/api/v2/pokemon?limit=20&offset=0`
  const [pokemons, getPokemons, getPokeByType] = useFeth(url)
  useEffect(() => {
    if (pokeType !== 'allPokemons') {
      getPokeByType(pokeType)
    } else {
      getPokemons()
    }
  }, [pokeType])

  console.log(pokeType)

  const handleSubmit = (e) => {
    e.preventDefault()
    setPokeSearch(inputSearch.current.value.trim().toLowerCase())
  }

  const pokemonsFilter = pokemons?.results.filter(pokemon => pokemon.name.includes(pokeSearch))

  return (
    <div className=''>
      <Header />
      <div className='m-7 space-y-5'>
        <p className='  text-lg font-semibold'> <span className=' text-[#FC1936] font-bold'>Welcome {tranier}</span>, hare you can find your favorite pokemon</p>

        <div className=' w-full flex justify-center items-center lg:flex-row  flex-col space-y-4 lg:space-x-5 lg:space-y-0'>
          <form className='w-full sm:w-[30em] flex justify-center items-center ' onSubmit={handleSubmit}>
            <input className='w-full sm:w-[20em] border max-w-[20em] h-[4.1em] shadow px-2 focus:outline-none ' type="text" ref={inputSearch} placeholder='Search Pokémon' />
            <button className='w-full border max-w-[10em] h-[4.2em]  bg-[#D93F3F] text-white shadow font-bold'>Search</button>
          </form>

          <SelectType setPokeType={setPokeType} />

        </div>



      </div>


      <div className=' w-full max-w-[990px] mx-auto  grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 justify-items-center gap-3'>
        {
          pokemonsFilter?.map(pokemon => (
            <ListPokemons key={pokemon.url} name={pokemon.name} url={pokemon.url} />
          ))
        }

      </div>


    </div>
  )
}

export default PokedexPage