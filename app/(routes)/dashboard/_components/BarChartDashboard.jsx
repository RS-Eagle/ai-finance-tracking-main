import React from "react";
import {
  Bar,
  BarChart,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";

function CustomTooltip({ active, payload, label }) {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-3 border rounded shadow-md">
        <p className="font-bold">{label}</p>
        <p className="text-sm text-gray-700">
          Total Spend: <span className="font-semibold">${payload[0].value}</span>
        </p>
        <p className="text-sm text-gray-700">
          Budget Amount: <span className="font-semibold">${payload[1].value}</span>
        </p>
      </div>
    );
  }
  return null;
}

function BarChartDashboard({ budgetList }) {
  return (
    <div className="border rounded-2xl p-5 shadow-md bg-white">
      <h2 className="font-bold text-lg mb-4 text-gray-800">Activity Overview</h2>
      <ResponsiveContainer width="100%" height={350}>
        <BarChart
          data={budgetList}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 20,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
          <XAxis
            dataKey="name"
            tick={{ fill: "#555", fontSize: 12 }}
            label={{ value: "Categories", position: "bottom", offset: -10, fill: "#555" }}
          />
          <YAxis
            tick={{ fill: "#555", fontSize: 12 }}
            label={{
              value: "Amount ($)",
              angle: -90,
              position: "insideLeft",
              fill: "#555",
              fontSize: 12,
            }}
          />
          <Tooltip content={<CustomTooltip />} />
          <Legend verticalAlign="top" height={36} />
          <Bar dataKey="totalSpend" stackId="a" fill="#4845d2" radius={[10, 10, 0, 0]} />
          <Bar dataKey="amount" stackId="a" fill="#C3C2FF" radius={[10, 10, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default BarChartDashboard;
