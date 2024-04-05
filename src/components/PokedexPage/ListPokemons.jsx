import React, { useEffect } from 'react'
import useFeth from '../../hooks/useFeth'
import { useNavigate } from 'react-router-dom'
import './css/ListPokemons.css'

const ListPokemons = ({ name, url }) => {

    const [pokeInfo, getPokeinfo] = useFeth(url)
    useEffect(() => {
        getPokeinfo()
    }, [])

    const navigate = useNavigate()
    const handlePokeDetail = () => {
        navigate(`/pokeDetailPage/${pokeInfo?.id}`)
    }



    return (
        <article className={` w-full max-w-[25em] p-2 borderC-${pokeInfo?.types[0].type.name} rounded-xl cursor-pointer text-[0.6em]`} onClick={handlePokeDetail}>
            <div className='bg-white rounded-xl '>
                <header className={` fondoC-${pokeInfo?.types[0].type.name} w-full rounded-t-lg aspect-video relative flex justify-center items-center`}>
                    <img className=' absolute w-[60%]  top-[2em] left-[20%]' src={pokeInfo?.sprites.other['official-artwork'].front_default} alt="name" />
                </header>
                <section className=' mt-[3em] flex flex-col justify-center items-center '>
                    <h3 className={` text-center capitalize text-[1.3rem] font-bold mb-2 textC-${pokeInfo?.types[0].type.name} `}>{pokeInfo?.name}</h3>
                    <ul className='  flex justify-center space-x-2 '>
                        {
                            pokeInfo?.types.map(typeInfo => (
                                <li className='card__type text-[#9F9F9F] font-semibold' key={typeInfo.type.url}>{typeInfo.type.name}</li>))
                        }
                    </ul>

                </section>

                <hr className=' border border-[#ccc5] my-[0.8em] mx-[2em]' />

                <section className=' px-2 pb-3 w-full'>
                    <ul className=' grid grid-cols-3 gap-3 w-full'>
                        {
                            pokeInfo?.stats.map(statInfo => (
                                <li className=' flex flex-col justify-center items-center' key={statInfo.stat.url}><span className=' text-[0.8em] font-semibold text-[#9F9F9F]'>{statInfo.stat.name}</span>  <span className={`textC-${pokeInfo?.types[0].type.name} font-semibold`}>{statInfo.base_stat}</span></li>))

                        }
                    </ul>
                </section>
            </div>

        </article>
    )
}

export default ListPokemons