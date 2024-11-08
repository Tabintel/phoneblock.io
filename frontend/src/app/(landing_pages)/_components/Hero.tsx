
"use client"
import React from 'react';
import { onLoginModal, onRegisterModal } from '@/services/modalSlice';
import { useDispatch } from 'react-redux'

const Hero = () => {
    const dispatch = useDispatch()

    return <div className=' min-h-[750px] py-12 lg:py-24 flex items-center gap-8 justify-center'>
        <div className="max-w-custom mx-auto w-[90%] grid grid-cols-1 gap-4">
            <div className="w-full flex flex-col lg:items-center lg:justify-center gap-4">
                <div className="px-6 py-2 max-w-[300px] border bg-[#deddff5b] rounded-full text-sm text-[#3e3aff] family2">
                    #1 Trending on Crypto Network
                </div>
                <h2 className="text-4xl max-w-[980px] capitalize md:mx-auto leading-[1.1] lg:text-7xl lg:text-center text-dark family2">
                    Revolutionized your transactions with
                    Decentralized Telecom Network
                </h2>
                <span className='text-base lg:text-xl font-normal lg:text-center max-w-[360px] md:max-w-[600px]'>
                    Access and provide communication services through a decentralized, node-based network. Earn rewards while connecting communities.
                </span>
                <div className="flex mt-4 lg:items-center lg:justify-center gap-2 md:gap-4">
                    <span className=''>
                        <button
                            onClick={() => dispatch(onRegisterModal(""))}


                            className="text-sm lg:text-sm px-4 lg:px-8 py-3 md:py-4 border rounded-full text-white bg-[#3e3aff] shadows">Get Started!</button>
                    </span>
                    <button
                        onClick={() => dispatch(onLoginModal(""))}

                        className="text-sm lg:text-sm px-4 lg:px-8 py-3 md:py-4 rounded-full shadows border">Sign Up</button>
                </div>

            </div>
        </div>
    </div>;
}

export default Hero;