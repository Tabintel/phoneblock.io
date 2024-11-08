
"use client"
import { BsLuggage } from "react-icons/bs";
import { BiMessage } from "react-icons/bi";

export default function Widget() {
    const widgetData = [
        {
            title: "Total Users",
            subtext: "Browse your applied jobs here and check their respective progress..",
            bgColor: "#cdeed3",
            icon: <BsLuggage fontSize={"24px"} />,
            color: "#347345"
        },
        {
            title: "Active Subscriptions",
            subtext: "Browse your applied jobs here and check their respective progress..",
            bgColor: "#deddff",
            icon: <BiMessage fontSize={"24px"} />,
            color: "#347345"
        }, {
            title: "Network Health",
            subtext: "Browse your applied jobs here and check their respective progress..",
            bgColor: "#ffeec3",
            icon: <BsLuggage fontSize={"24px"} />,
            color: "#347345"
        }, {
            title: "Active Alerts",
            subtext: "Browse your applied jobs here and check their respective progress..",
            bgColor: "#f3f3f1",
            icon: <BsLuggage fontSize={"24px"} />,
            color: "#347345"
        },
    ]
    return (
        <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-4">
            {/* widget */}
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
                                    10
                                </h3>
                           </div>

                           
                        </div>
                        <span className="text-xs flex-1 pt-2 lg:text-sm block font-normal">
                            {data?.subtext}
                        </span>
                    </div>
                })
            }
        </div>
    );
}
