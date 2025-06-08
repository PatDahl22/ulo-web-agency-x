"use client";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useEffect, useState } from "react";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { app } from "@/utils/firebase";

export default function ServiceChart() {
  const [data, setData] = useState<{ service: string; count: number }[]>([]);

  useEffect(() => {
    async function fetchData() {
      const db = getFirestore(app);
      const querySnapshot = await getDocs(collection(db, "serviceClicks"));

      const counts: Record<string, number> = {};
      querySnapshot.forEach((doc) => {
        const { service } = doc.data();
        counts[service] = (counts[service] || 0) + 1;
      });

      const formatted = Object.entries(counts).map(([service, count]) => ({
        service,
        count,
      }));
      setData(formatted);
    }

    fetchData();
  }, []);

  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data}>
        <XAxis dataKey="service" />
        <YAxis allowDecimals={false} />
        <Tooltip />
        <Bar dataKey="count" fill="#301705" />
      </BarChart>
    </ResponsiveContainer>
  );
}
