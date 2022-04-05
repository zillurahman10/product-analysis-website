import React, { useEffect, useState } from 'react';
import { Line, LineChart, Pie, PieChart, Tooltip, XAxis, YAxis } from 'recharts';

const Dashboard = () => {
    const [data, setData] = useState([])


    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])

    return (
        <div className='d-flex justify-content-between m-5 mx-5'>
            <LineChart width={400} height={300} data={data}>
                <Line dataKey="revenue" />
                <Tooltip></Tooltip>
                <YAxis></YAxis>
                <XAxis></XAxis>
            </LineChart>

            <PieChart width={500} height={400}>
                <Pie data={data} dataKey="investment" cx="50%" cy="50%" outerRadius={60} fill="#8884d8"></Pie>
                <Pie data={data} dataKey="sell" cx="50%" cy="50%" innerRadius={70} outerRadius={90} fill="#82ca9d" label></Pie>
                <Tooltip></Tooltip>
            </PieChart>
        </div>
    );
};

export default Dashboard;