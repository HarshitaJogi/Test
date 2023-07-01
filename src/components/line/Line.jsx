import "./Line.scss";
import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// const data = [
//   {
//     name: '2017',
//     female: 1398,
//     male: 4000,
//     amt: 2400,
//   },
//   {
//     name: '2018',
//     female: 1398,
//     male: 3000,
//     amt: 2210,
//   },
//   {
//     name: '2019',
//     female: 2000,
//     male: 9800,
//     amt: 2290,
//   },
//   {
//     name: '2020',
//     female: 2780,
//     male: 3908,
//     amt: 2000,
//   },
//   {
//     name: '2021',
//     female: 1890,
//     male: 4800,
//     amt: 2181,
//   },
//   {
//     name: '2022',
//     female: 2390,
//     male: 3800,
//     amt: 2500,
//   },
//   {
//     name: '2023',
//     female: 3490,
//     male: 4300,
//     amt: 2100,
//   },
// ];

const Chart = ({ aspect, title,data }) => {
  return (
    <div className="line">
      <div className="title">{title}</div>
      <ResponsiveContainer width="100%" aspect={aspect}>
        <LineChart
          width={730}
          height={250}
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="female" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="male" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
