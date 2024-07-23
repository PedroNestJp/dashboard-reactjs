import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Comunidade', uv: 4000, pv: 2400, amt: 2400 },
  { name: 'Ambiental', uv: 3000, pv: 1398, amt: 2210 },
  { name: 'Colaboradores', uv: 2000, pv: 9800, amt: 2290 },
  { name: 'Fornecedores', uv: 2780, pv: 3908, amt: 2000 },
];

const Chart = () => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart
        data={data}
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="uv" fill="#8884d8" />
        <Bar dataKey="pv" fill="#82ca9d" />
      </BarChart>
    </ResponsiveContainer>
  );
}

export default Chart;
