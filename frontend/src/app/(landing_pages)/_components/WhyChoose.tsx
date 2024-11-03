
import React from 'react';
import Image from 'next/image';
import AnimateTextWord from '@/components/common/AnimateTextWord';
import { whyChooseUs } from '@/constants';

const WhyChoose = () => {
    return <div className='min-h-[500px] lg:min-h-[550px] py-16 flex lg:items-center gap-8 lg:justify-center'>
        <div className="max-w-custom mx-auto w-[90%] grid grid-cols-1 gap-12">
            <div className="w-full flex flex-col lg:items-center lg:justify-center gap-8">
                <span className='text-base lg:text-lg font-normal lg:text-center max-w-[500px]'>
                    <AnimateTextWord type='bigtext_Center'>
                        Our Features
                    </AnimateTextWord>
                </span>
                <div className="flex flex-col gap-4 lg:items-center lg:justify-center ">
                    <h2 className="text-4xl lg:text-7xl max-w-[900px] lg:mx-auto lg:text-center leading-[1.2] family2 text-dark family2">
                        <AnimateTextWord type='bigtext_Center'>
                            Innovative Features of Phoneblock
                        </AnimateTextWord>
                    </h2>
                    <span className='text-base lg:text-xl font-normal lg:text-center max-w-[360px] lg:max-w-[600px]'>
                        <AnimateTextWord>

                            Access and provide communication services through a decentralized, node-based network. Earn rewards while connecting communities.

                        </AnimateTextWord>
                    </span>
                </div>
            </div>
            <div className="w-full flex flex-col lg:items-center lg:justify-center gap-4">
                <ol className="lg:w-[90%] grid mt-4 lg:grid-cols-3 gap-4 lg:gap-6">
                    {
                        whyChooseUs?.map((data, index) => {
                            return <div key={index} className="w-full flex flex-col justify-center items-start gap-8 min-h-[260px] lg:min-h-[310px]  border p-6 rounded-2xl">
                                {
                                    data.icon
                                }
                                <h4 className="text-2xl lg:text-3xl">
                                    <span className="family2">
                                        <AnimateTextWord type='bigtext'>
                                            {
                                                data?.text
                                            }
                                        </AnimateTextWord>

                                    </span>
                                    <span className="block text-base md:text-lg py-3 font-normal">

                                        <AnimateTextWord>
                                            {data?.subtext}
                                        </AnimateTextWord>

                                    </span>
                                </h4>
                            </div>
                        })
                    }

                </ol>

            </div>
        </div>
    </div>;
}

export default WhyChoose;