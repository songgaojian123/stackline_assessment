import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { Sale } from "../types/Types";

interface SalesGraphProps {
  salesData: Sale[];
}


const SalesGraphComponent: React.FC<SalesGraphProps> = ({ salesData }) => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart
        data={salesData}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="weekEnding" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="retailSales"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
        <Line type="monotone" dataKey="wholesaleSales" stroke="#82ca9d" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default SalesGraphComponent;