import React, { useEffect, useState } from 'react';
import './Dashboard.css'
import { Line, LineChart, Pie, PieChart, Tooltip, XAxis, YAxis } from 'recharts';

const Dashboard = () => {
    const [data, setData] = useState([])


    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])

    return (
        <div>
            <h1 className='d-flex justify-content-center mt-5 analytics'>Analytics</h1>
            <div className='d-flex justify-content-between m-5 mx-5 dashboard'>
                <div className='line-chart'>
                    <LineChart width={400} height={300} data={data}>
                        <Line dataKey="revenue" />
                        <Tooltip></Tooltip>
                        <YAxis></YAxis>
                        <XAxis></XAxis>
                    </LineChart>
                    <h3 className='mt-3 chart-title'>Growth rate over years</h3>
                </div>
                <div className='pia-chart'>
                    <PieChart width={500} height={300}>
                        <Pie data={data} dataKey="investment" cx="50%" cy="50%" outerRadius={60} fill="#8884d8"></Pie>
                        <Pie data={data} dataKey="sell" cx="50%" cy="50%" innerRadius={70} outerRadius={90} fill="#82ca9d" label></Pie>
                        <Tooltip></Tooltip>
                    </PieChart>
                    <h3 className='pie-chart-title'>Sell and Investment portfolio</h3>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;