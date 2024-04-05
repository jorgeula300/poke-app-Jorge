import React from 'react'

const Stats = ({ statInfo }) => {

    const style = {
        width: `${(statInfo.base_stat / 260) * 100}%`
    }

    return (
        <div className='w-full relative flex flex-col justify-center items-center '>
            <li className=' w-full max-w-[30em] flex justify-between items-center' key={statInfo.stat.url}><span className=' text-[0.8em] font-semibold text-[#9F9F9F]'>{statInfo.stat.name}</span>  <span className={` font-semibold`}>{statInfo.base_stat}/260</span></li>
            <div className='w-full max-w-[30em] h-4 bg-[#F6F6F6]   '>
                <div style={style}
                    className={` power h-4 `}>

                </div>
            </div>
        </div>
    )
}

export default Stats