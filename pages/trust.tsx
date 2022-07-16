import type { NextPage } from 'next'

const Trust: NextPage = () => {
    return (
        <>
         <div className='text-3xl font-bold text-center mt-5'>Trust Meter for BrickPlanet</div>
            <div className='flex items-center justify-center h-[700px] w-screen'>
              <div></div>
                <div className='w-[200px] rounded  bg-gradient-to-t border-black from-rose-500 to-green-500 relative via-orange-500 border-8 h-3/4'>
                    <div className='w-full h-[97%]  bg-white '></div>
                </div>
            </div>
            <div className='text-xl font-bold text-center'>Status: Bad</div>
        </>
    )
}

export default Trust