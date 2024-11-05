"use client"
import React from 'react';
import { applicantsData } from '@/constants';
import TableCard from '@/components/common/TableCard';
const TabularData = () => {
    return (
        <div className='px-6 py-8 border rounded-lg flex flex-col w-full gap-4'>
            <div className="w-full flex items-center justify-between gap-4">
                <h3 className="text-xl block lg:text-xl text-dark family2 family2">
                    User Overview
                </h3>
                <div className=" flex flex-row gap-4 lg:items-center justify-end">
                    <form action="" className='max-w-[140px] lg:w-[150px] relative'>
                        <input type="text" placeholder='Search Users' className="text-sm font-normal rounded-full w-full " />
                    </form>
                </div>
            </div>
            <div className="w-full flex flex-col">
                <h5 className="text-xs block lg:text-sm text-dark">
                    Your Current Estimated Users
                </h5>
                <h3 className="text-4xl block lg:text-5xl text-dark family2 family2">
                    4000
                </h3>

            </div>
            <div className="w-full mt-4 md:mt-4">
                <TableCard
                    tableheadList={["ID", "Full Name", "Email", "Status", "Actions"]}
                    tabledata={applicantsData}
                />
            </div>
        </div>
    )
}

export default TabularData;