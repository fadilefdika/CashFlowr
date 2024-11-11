import React from 'react';
import { Bar, BarChart, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

function BarChartDashboard({ budgetList }) {
  console.log('ini budget', budgetList);

  return (
    <div className="border rounded-2xl p-5">
      <h2 className="font-bold text-lg">Activity</h2>
      <ResponsiveContainer width={'80%'} height={300}>
        <BarChart
          data={budgetList}
          margin={{
            top: 7,
          }}
        >
          <XAxis dataKey="name" />
          <YAxis tickFormatter={(value) => `${value / 1000} rb`} />
          <Tooltip />
          <Legend />
          <Bar dataKey="amount" fill="#C3C2FF" radius={[10, 10, 0, 0]} />
          <Bar dataKey="totalSpend" fill="#4845d2" radius={[10, 10, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default BarChartDashboard;
