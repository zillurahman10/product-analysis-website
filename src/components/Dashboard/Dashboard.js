import React, { useEffect, useState } from 'react';
import { AreaChart, Line, LineChart, PieChart, Tooltip, XAxis, YAxis } from 'recharts';

const Dashboard = () => {
    const [data, setData] = useState([])


    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])


    // const data = [
    //     {
    //         "month": "Mar",
    //         "investment": 100000,
    //         "sell": 241,
    //         "revenue": 10401
    //     },
    //     {
    //         "month": "Apr",
    //         "investment": 200000,
    //         "sell": 423,
    //         "revenue": 24500
    //     },
    //     {
    //         "month": "May",
    //         "investment": 500000,
    //         "sell": 726,
    //         "revenue": 67010
    //     },
    //     {
    //         "month": "Jun",
    //         "investment": 500000,
    //         "sell": 529,
    //         "revenue": 40405
    //     },
    //     {
    //         "month": "Jul",
    //         "investment": 600000,
    //         "sell": 601,
    //         "revenue": 50900
    //     },
    //     {
    //         "month": "Aug",
    //         "investment": 700000,
    //         "sell": 670,
    //         "revenue": 61000
    //     }
    // ]



    return (
        <div>
            <LineChart width={400} height={300} data={data}>
                <Line dataKey="investment" />
                <Tooltip></Tooltip>
                <YAxis></YAxis>
                <XAxis></XAxis>
            </LineChart>

            {/* <AreaChart width={400} height={250} data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <defs>
                    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                        <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                        <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                    </linearGradient>
                </defs>
                <XAxis dataKey="sell"></XAxis>
                <YAxis dataKey="sell"></YAxis>
            </AreaChart> */}

            <PieChart width={400} height></PieChart>
        </div>
    );
};

export default Dashboard;