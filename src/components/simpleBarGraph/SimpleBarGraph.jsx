import "./simpleBarGraph.scss";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const SimpleBarGraph = ({ aspect, title,data }) => {
    return (
      <div className="simpleBarGraph">
        <div className="title">{title}</div>
        <ResponsiveContainer width="100%" aspect={aspect}>
            <BarChart width={150} height={40} data={data}>
                <Bar dataKey="uv" fill="#8884d8" />
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
            </BarChart>
        </ResponsiveContainer>
      </div>
    );
  };
  
  export default SimpleBarGraph;