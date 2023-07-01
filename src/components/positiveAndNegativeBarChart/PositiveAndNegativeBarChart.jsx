import "./positiveAndNegativeBarChart.scss"
import React, { PureComponent } from 'react';
import {
    BarChart,
    Bar,
    Cell,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ReferenceLine,
    ResponsiveContainer,
  } from 'recharts';

  const PositiveAndNegativeBarChart = ({ aspect, title,data }) => {
    return (
      <div className="positiveAndNegativeBarChart">
        <div className="title">{title}</div>
        <ResponsiveContainer width="100%" aspect={aspect}>
            <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
            }}
            >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <ReferenceLine y={0} stroke="#000" />
            <Bar dataKey="resigned" fill="#8884d8" />
            <Bar dataKey="joiners" fill="#82ca9d" />
            </BarChart>
        </ResponsiveContainer>
      </div>
    );
  };
  
  export default PositiveAndNegativeBarChart;