
"use client"
import { BiHealth } from "react-icons/bi";
import { IoMail } from "react-icons/io5";
import { AiFillAlert } from "react-icons/ai";
import { HiUsers } from "react-icons/hi2";
import { GoArrowUpRight, GoArrowDownRight } from "react-icons/go";
export default function Widget() {
    const widgetData = [
        {
            title: "Total Users",
            subtext: "Browse your applied jobs here and check their respective progress..",
            bgColor: "#cdeed3b7",
            icon: <HiUsers fontSize={"24px"} />,
            value: "18,395",
            trend: "+20.1",
            color: "#61668E"
        },
        {
            title: "Active Subscriptions",
            subtext: "Browse your applied jobs here and check their respective progress..",
            bgColor: "#deddffcc",
            icon: <IoMail fontSize={"24px"} />,
            value: "15,395",
            trend: "+10.1",
            color: "#F2B80F"
        }, {
            title: "Network Health",
            subtext: "Browse your applied jobs here and check their respective progress..",
            bgColor: "#ffeec3ca",
            icon: <BiHealth fontSize={"24px"} />,
            value: "98.7%",
            trend: "+20.1",
            color: "#7F3CDA"
        }, {
            title: "Active Alerts",
            subtext: "Browse your applied jobs here and check their respective progress..",
            bgColor: "#f3f3f1d2",
            icon: <AiFillAlert fontSize={"24px"} />,
            value: "3",
            trend: "-20.1",
            color: "#E3413F"
        },
    ]
    return (
        <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-4">
            {
                widgetData?.map((data, index) => {
                    return <div key={index} className="w-full shadows p-4 lg:p-4 items-start justify-center min-h-[200px] lg:min-h-[250px] border rounded-xl flex flex-col gap-4">
                        <div className="flex lg:flex-row flex-col lg:items-center gap-1 lg:gap-4">
                            <div style={{
                                backgroundColor: `${data?.bgColor}`,
                                color: `${data?.color}`
                            }} className="w-10 lg:w-12 flex items-center justify-center h-10 lg:h-12 rounded-md">
                                {
                                    data?.icon
                                }
                            </div>
                            <h4 className="text-sm lg:text-base family2">
                                {data?.title}
                            </h4>
                        </div>
                        <div className="w-full lg:pt-3 flex flex-col">
                            <div className="flex flex-col gap-2 w-full">
                                <span className="text-xs flex-1 block font-normal">
                                    Reward Rate
                                </span>
                                <h3 className="text-3xl lg:text-4xl family2">
                                    {data?.value}
                                </h3>
                            </div>


                        </div>
                        <div className="flex items-center gap-2 w-full">
                            <div className="w-6 text-sm text-[#000] h-6 rounded-full bg-[#4AFC4E] flex items-center justify-center">
                                <GoArrowUpRight/>
                            </div>
                            <span className="text-xs lg:text-sm family2">
                                {data?.trend} from last week
                            </span>
                        </div>
                        {/* <span className="text-xs flex-1 pt-2 lg:text-sm block font-normal">
                            {data?.subtext}
                        </span> */}
                    </div>
                })
            }
        </div>
    );
}
