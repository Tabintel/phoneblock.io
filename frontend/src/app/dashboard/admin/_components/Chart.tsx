"use client"
import React, { useState, useEffect } from "react";
import Chart from "react-apexcharts";
const Charts = () => {
    const [options, setOptions] = useState({
        chart: {
            height: 350,
            type: "bar",
            fontFamily: "Regular",
            foreColor: "#333",
            fontSize: "30px",
            textTransform: "capitalize",
            zoom: {
                enabled: false,
            },
        },
        dataLabels: {
            enabled: false,
        },
        colors: ["#2E0266", "#E3413F"],
        stroke: {
            curve: "smooth",
        },
        xaxis: {
            // categories: totalMonth,
            categories: [
              "Jan",
              "Febr",
              "Mar",
              "Apr",
              "May",
              "Jun",
              "Jul",
              "Aug",
              "sept",
            ],
        },
    });
    const [series, setSeries] = useState([
        {
            name: "Revenue",
            data: [120,30,20,10,30,30,40,40,20,35],
        },
        {
            name: "Revenue",
            data: [100, 40, 10, 50, 20, 10, 60, 20, 50, 45],
        },
    ]);
    return <div className='py-8 border rounded-xl flex flex-col w-full gap-6'>
        <div className="px-4 flex flex-col gap-1">
            <h3 className="text-xl block lg:text-2xl text-dark family2">
                Network Overview
            </h3>
            <h4 className="text-sm block lg:text-base text-dark">
                An overview of your user and node growth over time.
            </h4>
        </div>
        <div className="w-full px-2">
            <Chart
                options={options}
                series={series}
                type="bar"
                width={"100%"}
                height={"400px"}
            />
        </div>
    </div>;
}

export default Charts;