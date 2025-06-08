"use client";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/utils/firebase";

type ChartData = {
  service: string;
  count: number;
};

export default function ServiceChart() {
  const [data, setData] = useState<ChartData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        const snapshot = await getDocs(collection(db, "serviceClicks"));
        const counts: Record<string, number> = {};

        snapshot.forEach((doc) => {
          const { service } = doc.data();
          if (service) {
            counts[service] = (counts[service] || 0) + 1;
          }
        });

        const formatted = Object.entries(counts).map(([service, count]) => ({
          service,
          count,
        }));
        setData(formatted);
      } catch (err) {
        setError("Det gick inte att hämta statistik. Kontrollera rättigheter.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (loading)
    return <p className="text-sm text-gray-500">Laddar statistik...</p>;
  if (error) return <p className="text-sm text-red-500">{error}</p>;
  if (data.length === 0)
    return <p className="text-sm text-gray-400">Ingen data ännu.</p>;

  return (
    <div className="p-4 bg-background-soft rounded-xl shadow-md">
      <h2 className="text-xl font-semibold mb-4 text-text-base">
        Tjänsteinteraktioner
      </h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="service" />
          <YAxis allowDecimals={false} />
          <Tooltip />
          <Bar dataKey="count" fill="#301705" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
