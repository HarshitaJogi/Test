import './stackedBarGraph.scss'
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// const data = [
//     {
//       name: 'Enginnering',
//       male: 4000,
//       female: 2400,
//       amt: 2400,
//     },
//     {
//       name: 'Accounting',
//       male: 3000,
//       female: 1398,
//       amt: 2210,
//     },
//     {
//       name: 'HR',
//       male: 9800,
//       female: 2000,
//       amt: 2290,
//     },
//     {
//         name: 'Legal',
//         male: 4000,
//         female: 2400,
//         amt: 2400,
//       },
//       {
//         name: 'Marketing',
//         male: 3000,
//         female: 1398,
//         amt: 2210,
//       },
//       {
//         name: 'Sales',
//         male: 9800,
//         female: 2000,
//         amt: 2290,
//       }
//   ];

  
  const StackedBarGraph = ({ aspect, title ,data}) => {
    return (
      <div className="stackbar">
        <div className="title">{title}</div>
        <ResponsiveContainer width="100%" aspect={aspect}>
            <BarChart
            width={50}
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
  
  export default StackedBarGraph;