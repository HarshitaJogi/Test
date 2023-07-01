import './smallStackedBar.scss'
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

  
  const SmallStackedBarGraph = ({ aspect, title,data }) => {
    return (
      <div className="smallstackbar">
        <div className="title">{title}</div>
        <ResponsiveContainer width="100%" aspect={aspect}>
            <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
                top: 20,
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
            <Bar dataKey="female" stackId="a" fill="#8884d8" />
            <Bar dataKey="male" stackId="a" fill="#82ca9d" />
            </BarChart>
        </ResponsiveContainer>
      </div>
    );
  };
  
  export default SmallStackedBarGraph;