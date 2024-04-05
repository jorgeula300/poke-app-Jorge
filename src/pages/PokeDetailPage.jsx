import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import useFeth from '../hooks/useFeth'
import Header from '../components/General/Header'
import Subtitle from '../components/PokeDetailPage/Subtitle'
import '../components/PokeDetailPage/css/Power.css'
import Stats from '../components/PokeDetailPage/Stats'
import '../components/PokedexPage/css/ListPokemons.css'

const PokeDetailPage = () => {
  const { id } = useParams()
  const [operaId, setOperaId] = useState(+id)
  const url = `https://pokeapi.co/api/v2/pokemon/${operaId}`
  const [pokemon, getPokemon] = useFeth(url)
  useEffect(() => {
    getPokemon()
  }, [operaId])



  const handleSumId = () => {
    setOperaId(operaId + 1)
  }

  const handleRestId = () => {
    if (operaId > 0) {
      setOperaId(operaId - 1)
    }
  }

  console.log(operaId)

  console.log(pokemon)
  return (
    <section  >
      <Header />

      <div className='px-2'>
        <div className=' w-full max-w-[50em] mx-auto mt-28 bg-[#FFFFFF] rounded-lg shadow border px-1 pt-1 pb-10'>
          <header className={` fondoC-${pokemon?.types[0].type.name} w-full rounded-t-lg aspect-video relative flex justify-center items-center max-h-[8em]`}>
            <img className=' absolute w-[15em] -top-[6em]  ' src={pokemon?.sprites.other['official-artwork'].front_default} alt="" />
            <div className='w-full flex justify-between items-center [&>button]:text-xl [&>button]:rounded-full [&>button]:text-white [&>button]:border-2 [&>button]:w-11 px-3'>
              <button onClick={handleRestId}><i className='bx bx-left-arrow-alt'></i></button>
              <button onClick={handleSumId}><i className='bx bx-right-arrow-alt' ></i></button>


            </div>
          </header>

          <div className='w-full flex justify-center items-center'>
            <h2 className={` textC-${pokemon?.types[0].type.name} text-center border rounded-lg text-2xl font-medium  my-2 px-2`}>
              #{operaId}
            </h2>
          </div>

          <div className=' w-full flex justify-center items-center space-x-3'>
            <hr className=' border border-[#9F9F9F] w-full max-w-[10em]' />
            <h2 className={` textC-${pokemon?.types[0].type.name} text-2xl font-semibold`} >{pokemon?.name.charAt(0).toUpperCase() + pokemon?.name.substring(1)}</h2>
            <hr className=' border border-[#9F9F9F] w-full max-w-[10em]' />
          </div>

          <div className=' flex justify-center items-center space-x-3 [&>div]:flex [&>div]:flex-col [&>div]:justify-center [&>div]:items-center [&>div>h2]:text-xs [&>div>p]:text-sm'>
            <div>
              <h2>weight</h2>
              <p>{pokemon?.weight}</p>
            </div>
            <div>
              <h2>
                height
              </h2>
              <p>{pokemon?.height}</p>
            </div>

          </div>

          <div className=' flex justify-center items-center [&>div]:flex [&>div]:flex-col [&>div]:justify-center [&>div]:items-center gap-2 mt-2 mb-2 w-full max-w-[50em]  '>
            <div >
              <h2>Type</h2>
              <ul className=' flex flex-wrap justify-center items-center gap-2'>
                {
                  pokemon?.types.map(typeInfo => (
                    <li className={` text-white font-semibold fondoC-${typeInfo.type.name} w-[7em] text-center py-1`} key={typeInfo.type.url}>{typeInfo.type.name}</li>))
                }
              </ul>
            </div>

            <div>
              <h2>Skills</h2>
              <ul className='flex flex-wrap justify-center items-center gap-2'>
                {
                  pokemon?.abilities.map(abilityInfo => (
                    <li className=' text-[#9F9F9F] font-semibold w-[7em] border text-center p-1' key={abilityInfo.ability.url}>{abilityInfo.ability.name}</li>))

                }
              </ul>
            </div>
          </div>

          <Subtitle title={'Stats'} />

          <div>
            <ul className=' flex flex-col justify-center items-center gap-2'>
              {
                pokemon?.stats.map(statInfo => (
                  <Stats key={statInfo.stat.url} statInfo={statInfo} />

                ))

              }
            </ul>
          </div>



        </div>

        <div className=' w-full max-w-[50em] mx-auto mt-28 bg-[#FFFFFF] rounded-lg shadow border p-1 mb-7'>

          <Subtitle title={'Movems'} />
          <div className=' flex flex-wrap w-full max-w-[50em] mx-auto  justify-center items-center mt-2 mb-2 gap-2'>
            {
              pokemon?.moves.map(moveInfo => (
                <li className=' text-black bg-[#E5E5E5] list-none font-semibold w-[7em] rounded-xl border text-center p-1' key={moveInfo.move.url}>{moveInfo.move.name}</li>))
            }

          </div>
        </div>

      </div>

    </section>

  )
}

export default PokeDetailPage