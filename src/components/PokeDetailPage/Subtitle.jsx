import React from 'react'

const Subtitle = ({ title  }) => {
    return (
        <div className=' w-full max-w-[30em] mx-auto flex justify-between items-center space-x-2 relative mt-5'>


            <div className=' relative w-full  max-w-[5em]'>
            <h2 className=' sm:text-3xl text-lg font-bold  absolute -top-6 right-0'>{title}</h2>

            </div>

            <hr className=' border w-[23em] border-[#D3D3D3]' />

            <div className=' rounded-full w-[60px] h-[60px] border border-[#D3D3D3] flex justify-center items-center'>
                <hr className=' border border-[#D3D3D3] w-[1em]' />
                <div className=' flex justify-center items-center rounded-full w-[30px] h-[30px] border border-[#D3D3D3]'>
                    <div className=' rounded-full w-[15px] h-[15px] border border-[#D3D3D3]' >
                    </div>
                </div>
                <hr className=' border border-[#D3D3D3] w-[1em]' />
            </div>

        </div>
    )
}

export default Subtitle