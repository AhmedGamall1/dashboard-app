import AreaCard from "./AreaCard";

const AreaCards = () => {
  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4 lg:grid-cols-3 mt-[18px]">
      <AreaCard
        colors={["#e4e8ef", "#475be8"]}
        percentFillValue={80}
        cardInfo={{
          title: "مبيعات اليوم",
          value: "$20.4K",
          text: "لقد قمنا ببيع 123 قطعة.",
        }}
      />
      <AreaCard
        colors={["#e4e8ef", "#4ce13f"]}
        percentFillValue={50}
        cardInfo={{
          title: "إيرادات اليوم",
          value: "$8.2K",
          text: "متاح للدفع",
        }}
      />
      <AreaCard
        colors={["#e4e8ef", "#f29a2e"]}
        percentFillValue={40}
        cardInfo={{
          title: "في الضمان",
          value: "$18.2K",
          text: "متاح للدفع",
        }}
      />
    </div>
  );
};

export default AreaCards;
