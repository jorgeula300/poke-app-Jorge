import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header className=' w-full h-[20vh]  relative'>
            <div className=' w-full min-h-[12vh] bg-[#DD1A1A] relative'>
                <Link to='/pokedexPage'><img className=' absolute sm:w-[25em] w-[14em] sm:top-8 top-11 sm:left-[4em] left-[0.5em]' src="/imgPokedex.png" alt="imgPokedex" /></Link>
            </div>
            <div className='absolute sm:right-7 right-0  top-[50%] sm:border-[12px] border-[10px] border-[#000000] bg-[#FFFFFF] rounded-full sm:w-[100px] sm:h-[100px] w-[90px] h-[90px] flex justify-center items-center'>
                <div className=' rounded-full sm:w-[50px] sm:h-[50px] w-[45px] h-[45px] bg-[#212121] sm:border-[10px] border-[8px] border-[#000000]'>

                </div>
            </div>
            <div className=' w-full min-h-[8vh] bg-[#0C0C0C]'>

            </div>
        </header>
    )
}

export default Header