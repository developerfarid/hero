
import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Area, AreaChart, Bar, BarChart, CartesianGrid, Legend, Line, LineChart, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const Dashboard = () => {
    const [data, setData] = useState()
    useEffect(() => {
        fetch("data.json").then(res => res.json()).then(data => setData(data))
    }, [])
    console.log(data);
    // const data = [{name: 'Page A', uv: 400, pv: 2400, amt: 2400}, {name: 'Page A', uv: 500, pv: 400, amt: 200}];
    return (
        <section>
            <Container className='mt-5'>
                <Row lg={2}>
                    <Col className='text-center'>

                        <LineChart width={500} height={400} data={data} style={{ margin: "auto" }} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                            <Line type="monotone" dataKey="sell" stroke="#8884d8" />
                            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                            <XAxis dataKey="month" />
                            <YAxis />
                            <Tooltip />
                        </LineChart>

                    </Col>
                    <Col className='text-center'>
                        <ResponsiveContainer width="100%" height="100%">
                            <AreaChart width={500} height={400} data={data}
                                style={{ margin: "auto" }}
                                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
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
                                <XAxis dataKey="month" />
                                <YAxis />
                                <CartesianGrid strokeDasharray="3 3" />
                                <Tooltip />
                                <Area type="monotone" dataKey="investment" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
                                <Area type="monotone" dataKey="revenue" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
                            </AreaChart>
                        </ResponsiveContainer>
                    </Col>
                    <Col className='text-center'>

                        <PieChart width={500} height={400} style={{ margin: "auto" }}>
                            <Pie data={data} dataKey="revenue" nameKey="revenue" cx="50%" cy="50%" outerRadius={50} fill="#8884d8" />
                            <Pie data={data} dataKey="investment" nameKey="investment" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#82ca9d" label />
                        </PieChart>

                    </Col>
                    <Col className='text-center'>
                        <ResponsiveContainer width="100%" height="100%">
                            <LineChart width={500} height={400} data={data}
                                style={{ margin: "auto" }}
                                margin={{ top: 5, right: 0, left: 0, bottom: 5 }}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="month" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Line type="monotone" dataKey="investment" stroke="#8884d8" />
                                <Line type="monotone" dataKey="revenue" stroke="#82ca9d" />
                            </LineChart>
                        </ResponsiveContainer>
                    </Col>
                    <Col className='text-center m-auto'>

                        <AreaChart
                            style={{ margin: "auto" }}
                            width={500}
                            height={400}
                            data={data}
                            margin={{
                                top: 10,
                                right: 0,
                                left: 0,
                                bottom: 0,
                            }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="month" />
                            <YAxis />
                            <Tooltip />
                            <Area type="monotone" dataKey="investment" stackId="1" stroke="#8884d8" fill="#8884d8" />
                            <Area type="monotone" dataKey="revenue" stackId="1" stroke="#82ca9d" fill="#82ca9d" />

                        </AreaChart>

                    </Col>
                    <Col className='m-auto'>

                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart
                                style={{ margin: "auto" }}
                                width={500}
                                height={400}
                                data={data}
                                margin={{
                                    top: 20,
                                    right: 0,
                                    left: 20,
                                    bottom: 5,
                                }}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="month" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Bar dataKey="investment" stackId="a" fill="#8884d8" />
                                <Bar dataKey="revenue" stackId="a" fill="#82ca9d" />
                            </BarChart>
                        </ResponsiveContainer>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Dashboard;