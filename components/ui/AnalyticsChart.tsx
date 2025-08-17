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
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/utils/firebase";
import { usePathname } from "next/navigation";
import { logAnalyticsEvent } from "@/utils/logAnalyticsEvent";

export default function AnalyticsChart() {
  const [data, setData] = useState<{ page: string; count: number }[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchAnalytics() {
      try {
        const snapshot = await getDocs(collection(db, "analytics"));
        const countMap: Record<string, number> = {};

        snapshot.forEach((doc) => {
          const { page } = doc.data();
          if (page) {
            countMap[page] = (countMap[page] || 0) + 1;
          }
        });

        const formatted = Object.entries(countMap).map(([page, count]) => ({
          page,
          count,
        }));
        setData(formatted);
      } catch (err) {
        setError("⚠ Kunde inte hämta analytics. Kontrollera rättigheter.");
        console.error(err);
      }
    }

    fetchAnalytics();
  }, []);

  const path = usePathname();

  useEffect(() => {
    if (path) logAnalyticsEvent(path);
  }, [path]);

  return (
    <div className="bg-background-soft p-4 rounded-xl mt-12">
      <h2 className="text-xl font-semibold mb-4 text-text-base">
        📈 Analytics
      </h2>
      {error ? (
        <p className="text-red-600 text-sm">{error}</p>
      ) : (
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <XAxis dataKey="page" />
            <YAxis allowDecimals={false} />
            <Tooltip />
            <Bar dataKey="count" fill="#301705" />
          </BarChart>
        </ResponsiveContainer>
      )}
    </div>
  );
}
