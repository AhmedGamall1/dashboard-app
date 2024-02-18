import React from "react";

const TableCard = () => {
  const data = [
    {
      product: "Iphone 13 pro",
      orderId: 1123,
      date: "منذ يومان",
      customerName: "Ahmed Ramy",
      status: "تم التوصيل",
      amount: "$300.00",
    },
    {
      product: "Macbook Pro",
      orderId: 1124,
      date: "منذ يوم",
      customerName: "Ibrahim Sayed",
      status: "قيد الانتظار",
      amount: "$1000.00",
    },
    {
      product: "Apple Watch",
      orderId: 1125,
      date: "منذ اسبوع",
      customerName: "Kamal Ali",
      status: "ملغى",
      amount: "$600.00",
    },
    {
      product: "Microsoft Book",
      orderId: 1124,
      date: "منذ اسبوعان",
      customerName: "Gamal",
      status: "تم التوصيل",
      amount: "$100.00",
    },
    {
      product: "Apple Pen",
      orderId: 1123,
      date: "منذ شهر",
      customerName: "Ahmed Saed",
      status: "تم التوصيل",
      amount: "$80.00",
    },
    {
      product: "Airpods",
      orderId: 1122,
      date: "منذ شهر",
      customerName: "Micheal",
      status: "تم التوصيل",
      amount: "$60.00",
    },
  ];

  return (
    <div className="mt-5 bg-white dark:text-white dark:bg-[#2E2E48] shadow-sm p-4  rounded-md">
      <div className="text-[20px] font-bold mb-[10px]">احدث الطلبات</div>
      <div className="overflow-x-auto table-scrollbar flex flex-col border-[#F2F4FF] border-[1px] dark:border-none rounded-md ">
        <div className="flex justify-between items-center bg-[#F2F4FF] dark:bg-[#383854]  py-3 px-4 font-bold min-w-[870px]">
          <div className="flex-center w-full">المنتجات</div>
          <div className="flex-center w-full">رقم الطلب</div>
          <div className="flex-center w-full">التاريخ</div>
          <div className="flex-center w-full">اسم العميل</div>
          <div className="flex-center w-full">الحاله</div>
          <div className="flex-center w-full">الكميه</div>
          <div className="flex-center w-full">تفاصيل</div>
        </div>
        {data.map((item, index) => (
          <div
            className=" bg-white dark:bg-[#2E2E48] min-w-[870px] flex justify-between items-center p-4 text-[15px] font-semibold"
            key={index}
          >
            <div className="flex-center w-full">{item.product}</div>
            <div className="flex-center w-full">{item.orderId}</div>
            <div className="flex-center w-full">{item.date}</div>
            <div className="flex-center w-full">{item.customerName}</div>
            <div className="flex-center w-full">
              {item.status === "تم التوصيل" && (
                <div className="flex-center gap-[6px]">
                  <div className="rounded-full w-[9px] h-[9px] bg-cGreen" />
                  <div>{item.status}</div>
                </div>
              )}
              {item.status === "قيد الانتظار" && (
                <div className="flex-center gap-[6px]">
                  <div className="rounded-full w-[9px] h-[9px] bg-cOrange" />
                  <div>{item.status}</div>
                </div>
              )}
              {item.status === "ملغى" && (
                <div className="flex-center gap-[6px]">
                  <div className="rounded-full w-[9px] h-[9px] bg-cRed" />
                  <div>{item.status}</div>
                </div>
              )}
            </div>
            <div className="flex-center w-full">{item.amount}</div>
            <div className="flex-center w-full  gap-[2px] cursor-pointer">
              <div className="w-1 h-1 rounded-full bg-[#292929] dark:bg-white" />
              <div className="w-1 h-1 rounded-full bg-[#292929] dark:bg-white" />
              <div className="w-1 h-1 rounded-full bg-[#292929] dark:bg-white" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TableCard;
