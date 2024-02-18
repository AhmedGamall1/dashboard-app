"use client";
import { Cell, Pie, PieChart, Tooltip } from "recharts";

const AreaCard = ({ colors, percentFillValue, cardInfo }) => {
  const filledValue = (percentFillValue / 100) * 360; // 360 degress for a full circle
  const remainedValue = 360 - filledValue;

  const data = [
    { name: "Remained", value: remainedValue },
    { name: "Achieved Sales", value: filledValue },
  ];

  const renderTooltipContent = (value) => {
    return `${(value / 360) * 100} %`;
  };

  return (
    <div className="bg-white dark:bg-[#2E2E48] shadow-sm rounded-md py-[20px] flex items-center justify-between px-2">
      <div className="flex flex-col gap-[6px] mr-1">
        <h5 className="text-[#626552] dark:text-[#F3F3F3] font-[700] text-[16px]">
          {cardInfo.title}
        </h5>
        <div className="text-black dark:text-white font-[700] text-[24px]">
          {cardInfo.value}
        </div>
        <p className="text-[#676767] dark:text-[#E0E0E0] text-[15px] font-[600]">
          {cardInfo.text}
        </p>
      </div>
      <div style={{ direction: "rtl" }}>
        <PieChart width={100} height={100}>
          <Pie
            data={data}
            cx={50}
            cy={45}
            innerRadius={20}
            fill="#e4e8ef"
            paddingAngle={0}
            dataKey="value"
            startAngle={-270}
            endAngle={150}
            stroke="none"
            isAnimationActive={true}
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={colors[index % colors.length]}
              />
            ))}
          </Pie>
          <Tooltip formatter={renderTooltipContent} />
        </PieChart>
      </div>
    </div>
  );
};

export default AreaCard;
