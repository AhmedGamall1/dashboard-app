"use client";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import MostSold from "./MostSold";
import { useTheme } from "next-themes";
const AreaCharts = () => {
  const { theme, setTheme } = useTheme();
  const data = [
    {
      الشهر: "Jan",
      الخساره: 70,
      الربح: 100,
    },
    {
      الشهر: "Feb",
      الخساره: 55,
      الربح: 85,
    },
    {
      الشهر: "Mar",
      الخساره: 35,
      الربح: 90,
    },
    {
      الشهر: "April",
      الخساره: 90,
      الربح: 70,
    },
    {
      الشهر: "May",
      الخساره: 55,
      الربح: 80,
    },
    {
      الشهر: "Jun",
      الخساره: 30,
      الربح: 50,
    },
    {
      الشهر: "Jul",
      الخساره: 32,
      الربح: 75,
    },
    {
      الشهر: "Aug",
      الخساره: 62,
      الربح: 86,
    },
    {
      الشهر: "Sep",
      الخساره: 55,
      الربح: 78,
    },
  ];
  const formatTooltipValue = (value) => {
    return `${value}k`;
  };

  const formatYAxisLabel = (value) => {
    return `${value}k`;
  };

  const formatLegendValue = (value) => {
    return value.charAt(0).toUpperCase() + value.slice(1);
  };
  return (
    <div className="grid mt-5 lg:grid-cols-3 grid-cols-1 gap-4">
      <div className="bg-white dark:bg-[#2E2E48] shadow-sm lg:col-span-2 p-3 h-[300px] lg:h-[360px] w-full rounded-md">
        <ResponsiveContainer width={"100%"} height={"100%"}>
          <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 20,
              left: -35,
              bottom: 5,
            }}
            // reverseStackOrder={true}
          >
            <XAxis
              padding={{ left: 30 }}
              dataKey="الشهر"
              tickSize={0}
              axisLine={false}
              tick={{
                fill: `${theme === "dark" ? "#FFFFFF" : "#676767"}`,
                fontSize: 14,
              }}
              reversed={true}
            />
            <YAxis
              padding={{ bottom: 10, top: 10 }}
              tickFormatter={formatYAxisLabel}
              tickCount={6}
              axisLine={false}
              tickSize={0}
              tick={{
                fill: `${theme === "dark" ? "#FFFFFF" : "#676767"}`,
              }}
            />
            <Tooltip
              formatter={formatTooltipValue}
              cursor={{ fill: "transparent" }}
            />
            <Legend
              iconType="circle"
              iconSize={10}
              verticalAlign="top"
              align="right"
              formatter={formatLegendValue}
            />
            <Bar
              dataKey="الربح"
              fill="#475be8"
              activeBar={false}
              isAnimationActive={false}
              barSize={24}
              radius={[4, 4, 4, 4]}
            />
            <Bar
              dataKey="الخساره"
              fill="#e3e7fc"
              activeBar={false}
              isAnimationActive={false}
              barSize={24}
              radius={[4, 4, 4, 4]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <MostSold />
    </div>
  );
};

export default AreaCharts;
