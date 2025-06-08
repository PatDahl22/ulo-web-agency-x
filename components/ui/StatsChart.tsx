"use client";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Hemsida", bokningar: 18 },
  { name: "Design", bokningar: 12 },
  { name: "SEO", bokningar: 9 },
  { name: "Strategi", bokningar: 5 },
];

export default function StatsChart() {
  return (
    <div className="w-full h-80 bg-background-soft rounded-xl p-4 shadow-md">
      <h3 className="text-lg font-semibold mb-4 text-text-base">
        Populäraste tjänster
      </h3>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="bokningar" fill="#301705" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
