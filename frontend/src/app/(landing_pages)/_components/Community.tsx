import React from 'react';
import AnimateTextWord from '@/components/common/AnimateTextWord';
import { Network, Wifi, Phone, MessageSquare, ArrowRight, Shield, Users, Zap } from 'lucide-react'
const Community = () => {
    return (
        <div className='flex w-full py-20 md:py-32 items-center gap-8 justify-center'>
            <div className="max-w-custom mx-auto w-[90%] grid lg:grid-cols-custom gap-10 lg:gap-20">
                <div className="w-full flex flex-col gap-4">
                    <h2 className="text-4xl flex-1 lg:text-6xl text-start leading-[1.2] family2 text-dark family2">
                        <span className="pb-4 block font-normal text-xl">
                            <AnimateTextWord type='bigtext'>
                                Our Vision
                            </AnimateTextWord>

                        </span>
                        <AnimateTextWord type='bigtext'>
                            Maximizing your time with the latest cutting edge Crypto technology
                        </AnimateTextWord>

                    </h2>
                    <div className="flex flex-1 flex-col gap-4">
                        <span className='text-sm lg:text-lg max-w-[600px] font-normal'>
                            <AnimateTextWord>
                                Phoneblock integrates SOON's SVM rollup and Decentralized Physical Infrastructure Networks (DePIN) to build a secure, community-driven telecom ecosystem.
                            </AnimateTextWord>
                        </span>
                        <div className="flex mt-4 gap-2 md:gap-4">
                            <span className=''>
                                <button
                                    // onClick={() => OnLoginModal()} 

                                    className="text-sm lg:text-sm px-4 lg:px-8 py-3 md:py-4 border rounded-full text-white bg-[#3e3aff] shadows">Get Started!</button>
                            </span>
                            <button
                                //  onClick={OnRegisterModal}
                                className="text-sm lg:text-sm px-4 lg:px-8 py-3 md:py-4 rounded-full shadows border">Learn More</button>
                        </div>
                    </div>
                    <div className="w-full mt-4 md:mt-16 grid md:grid-cols-custom gap-4">
                        <div className="w-full"></div>
                        <h4 className="text-sm md:w-[300px] max-w-[600px] md:text-base">
                            <AnimateTextWord >
                                Our innovative method allows you to monetize your users by integrating rewarded crypto mining into your platform.
                                By offering valuable cryptocurrency rewards. you can engage your user base and generate a substantial income.
                            </AnimateTextWord>
                        </h4>
                    </div>
                </div>
                <div className="md:w-[500px] grid lg:grid-cols-1 gap-6">
                    <div className="w-full flex flex-col gap-4">
                        <div className="min-h-[160px] w-full flex relative">
                            <div className="min-h-[100%] z-10 rounded-[20px] w-full bg-[#e8f2fc61] flex p-6 pt-8 flex-col justify-between gap-10">
                                <span>
                                    <Shield className="h-10 w-10 text-blue-600 mb-4" />
                                </span>
                                <div className="flex flex-col gap-4">

                                    <h3 className="text-2xl lg:text-3xl leading-[1.2] family2 text-dark family2">
                                        <AnimateTextWord type='bigtext'>
                                            SVM Rollup Security
                                        </AnimateTextWord>

                                    </h3>
                                    <span className='text-sm lg:text-base font-normal max-w-[400px]'>
                                        <AnimateTextWord>
                                            Enhanced security and scalability through SOON's SVM rollup technology.
                                        </AnimateTextWord>

                                    </span>
                                </div>

                                <span className='flex'>
                                    <button className="text-xs md:text-sm px-6 py-3 border rounded-full text-white bg-[#000] shadows">Get Started!</button>
                                </span>
                            </div>
                        </div>
                        <div className="min-h-[160px] w-full flex relative">
                            <div className="min-h-[100%] z-10 rounded-[20px] w-full bg-[#ffe1cc56] flex p-6 pt-8 flex-col justify-between gap-10">
                                <span>
                                    <Users className="h-10 w-10 text-blue-600 mb-4" />
                                </span>
                                <div className="flex flex-col gap-4">

                                    <h3 className="text-2xl lg:text-3xl leading-[1.2] family2 text-dark family2">
                                        <AnimateTextWord type='bigtext'>
                                            Community-Driven
                                        </AnimateTextWord>

                                    </h3>
                                    <span className='text-sm lg:text-base font-normal max-w-[400px]'>
                                        <AnimateTextWord>
                                            Leveraging DePIN to create a truly decentralized and community-operated network.
                                        </AnimateTextWord>

                                    </span>
                                </div>

                                <span className='flex'>
                                    <button className="text-xs md:text-sm px-4 py-3 border rounded-full text-white bg-[#000] shadows">Get Started!</button>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="w-full min-h-[160px] flex flex-col gap-4">
                        <div className="min-h-full w-full flex relative">
                            <div className="min-h-[100%] z-10 rounded-[20px] w-full bg-[#e8f2fc61] flex p-6 pt-8 flex-col justify-between gap-10">
                                <span>
                                    <Zap className="h-10 w-10 text-blue-600 mb-4" />
                                </span>
                                <div className="flex flex-col gap-4">
                                    <h3 className="text-3xl pb-6 border-b lg:text-4xl leading-[1.2] family2 text-dark family2">
                                        <AnimateTextWord type='bigtext'>
                                            High Performance
                                        </AnimateTextWord>

                                    </h3>
                                    <span className='text-sm pt-6 lg:text-base max-w-[400px]'>
                                        <AnimateTextWord>
                                            Cutting-edge infrastructure ensuring fast and reliable communication services.

                                        </AnimateTextWord>

                                    </span>
                                </div>

                                <span className='flex'>
                                    <button className="text-xs md:text-sm px-4 py-3 border rounded-full text-white bg-[#000] shadows">Get Started!</button>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}



export default Community