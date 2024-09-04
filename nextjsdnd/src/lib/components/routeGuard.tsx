import Link from 'next/link'
import React from 'react'

function RouteGuard() {
  return (
    <div className='text-center bg-slate-200 bg-opacity-40 font-semibold text-black w-fit mx-auto mt-10 p-4 rounded-lg'>
        Please <Link href={"/auth"} className='transition-all ease-in-out duration-500 border-0 p-2 text-stone-400 font-semibold hover:text-white hover:border-2 hover:border-slate-200'> log in or sign up </Link> to use this feature
    </div>
  )
}

export default RouteGuard
