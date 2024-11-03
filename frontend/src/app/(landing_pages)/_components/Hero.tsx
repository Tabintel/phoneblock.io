
import React from 'react';
const Hero = () => {
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
                            // onClick={() => OnLoginModal()} 

                            className="text-sm lg:text-sm px-4 lg:px-8 py-3 md:py-4 border rounded-full text-white bg-[#3e3aff] shadows">Get Started!</button>
                    </span>
                    <button
                        //  onClick={OnRegisterModal}
                        className="text-sm lg:text-sm px-4 lg:px-8 py-3 md:py-4 rounded-full shadows border">Sign Up</button>
                </div>
                {/* <div className="flex p-4 md:flex-row flex-col md:items-center gap-4">
                    <div className="flex items-center">
                        <span>
                            <Image
                                src={'/images/face/avatar_1.jpg'}
                                width={50}
                                height={50}
                                className='rounded-full'
                                alt='Avatar for user'
                            />
                        </span>
                        <span className='-ml-4 z-10 border-4 rounded-full border-[#fff]'>
                            <Image
                                src={'/images/face/avatar_2.png'}
                                width={50}
                                height={50}
                                className='rounded-full'
                                alt='Avatar for user'
                            />
                        </span>
                        <span className='-ml-4 z-20 border-4 rounded-full border-[#fff]'>
                            <Image
                                src={'/images/face/avatar_2.png'}
                                width={50}
                                height={50}
                                className='rounded-full'
                                alt='Avatar for user'
                            />
                        </span>
                        <span className='-ml-4 z-20 border-4 rounded-full border-[#fff]'>
                            <Image
                                src={'/images/face/avatar_3.png'}
                                width={50}
                                height={50}
                                className='rounded-full'
                                alt='Avatar for user'
                            />
                        </span>

                    </div>
                    <span className='text-base font-normal md:text-center max-w-[300px]'>
                        <span className='text-[#3e3aff] family2'>
                            40k+
                        </span> Talents found <br /> Their dream jobs

                    </span>
                </div> */}
            </div>
        </div>
    </div>;
}

export default Hero;