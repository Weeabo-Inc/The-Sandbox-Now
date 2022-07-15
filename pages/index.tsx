import type { NextPage } from 'next'
import Link from "next/link"
const Home: NextPage = () => {
  return (
    <div>
      <div className='text-5xl xl:text-8xl font-bold text-center  mt-5'>
        <div className='bg-clip-text text-transparent bg-gradient-to-r from-red-500  to-blue-600'>BrickPlanet</div>
        <div>Transparency</div>
        <div className=''>Tracker</div>
      </div>

      <div className=' text-center xl:w-2/4 mx-auto text-gray-400  font-semibold text-lg'>Does <span>BrickPlanet</span> respect your data, your transparency requests or your privacy rights? This web app allows you to see if they keep up to their promises. With the 8th release of BrickPlanet around the corner, safety is never enough. Many refunds from the 7th iteration have never reached the users, don&apos;t let it happen again.</div>
      <div className='grid grid-cols-2 xl:w-1/6 mx-auto items-center gap-4 justify-center'>
        <Link href="/main">
          <button className='mt-5 bg-blue-600 rounded w-[100px] mx-auto text-center p-2 text-white font-semibold'>
            Go
          </button>
        </Link>
        <Link href="https://discord.gg/87jwQT38zN">
          <button className='mt-5 bg-blue-600 rounded w-[150px] mx-auto text-center p-2 text-white font-semibold'>
            Join Discord
          </button>
        </Link>
      </div>
    </div>

  )
}

export default Home
