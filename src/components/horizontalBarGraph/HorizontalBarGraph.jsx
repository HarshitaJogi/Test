import "./horizontalBarGraph.scss";
import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Executives',
    female: 1398,
    male: 4000,
    amt: 2400,
  },
  {
    name: 'Manager',
    female: 1398,
    male: 3000,
    amt: 2210,
  },
  {
    name: 'Professions',
    female: 2000,
    male: 9800,
    amt: 2290,
  },
  {
    name: 'Support',
    female: 2780,
    male: 3908,
    amt: 2000,
  },
  {
    name: 'Interns',
    female: 2780,
    male: 3908,
    amt: 2000,
  },
];

const Chart = ({ aspect, title }) => {
  return (
    <div className="horizontalBarGraph">
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
          <YAxis dataKey="name" />
          <XAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="female" fill="#8884d8" />
          <Bar dataKey="male" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
