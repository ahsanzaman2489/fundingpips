"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import {ChartData} from "@/lib/types";

interface ChartContentProps {
  data: ChartData[];
  type: "line" | "area" | "bar"; // to Scale
  ticker: string;
}

export function ChartContent({ data, ticker }: ChartContentProps) {
  return (
    <div className="container mx-auto py-4">
      <div className="mx-auto py-4 flex">
        <Link href={"/"}>
          <ArrowLeft />
        </Link>
        <h1 className="ml-5">History of {ticker}</h1>
      </div>

      <ResponsiveContainer width="100%" height={500}>
        <BarChart data={data}>
          <CartesianGrid
            strokeDasharray="3 3"
            stroke="hsl(var(--muted-foreground))"
            opacity={0.2}
          />
          <XAxis
            dataKey="date"
            stroke="hsl(var(--muted-foreground))"
            opacity={0.5}
            tick={{ fontSize: 12 }}
          />
          <YAxis
            stroke="hsl(var(--muted-foreground))"
            opacity={0.5}
            tick={{ fontSize: 12 }}
            width={45}
            tickFormatter={(value) => "$ " + value}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: "hsl(var(--background))",
              borderColor: "hsl(var(--border))",
            }}
            labelStyle={{ color: "hsl(var(--foreground))" }}
            formatter={(value: number) => ["$ " + value.toFixed(2)]}
          />
          <Bar dataKey="price" fill="#82ca9d" stroke={"blue"} strokeWidth={1} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
