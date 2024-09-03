"use client"

import { useAppSelector } from '@/lib/redux/hooks'
import { RootState } from '@/lib/redux/store';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react'

function ProfilePage() {
    const user = useAppSelector((state:RootState)=>state.user);
    const router = useRouter();

    useEffect(()=>{
        if(user.username === ""){
            router.push("/auth")
        }
    })

  return (
    <div className='flex flex-col justify-center items-center self-center h-full w-full'>
        <div className='text-lg font-semibold mb-6 mx-auto'>
            Welcome {user.username}!
        </div>
        <section id='profile-main' className='mt-4'>
            <div className='bg-slate-200 text-black font-semibold p-2 rounded-lg bg-opacity-65'>
                Welcome to your page
            </div>
            <div className='bg-slate-200 text-black font-semibold p-2 rounded-lg bg-opacity-65 my-5'>
                Your information below:
            </div>
            <ul>
                <li>
                    {user.email !== "" ? user.username : "No data"}
                </li>
            </ul>
        </section>
    </div>
  )
}

export default ProfilePage
