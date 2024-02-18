import React from "react";

const MostSold = () => {
  return (
    <div className="bg-white dark:bg-[#2E2E48] shadow-sm lg:col-span-1 pt-4 pb-8 px-6 h-[360px] w-full">
      <h5 className="font-bold dark:text-white text-[18px]">
        السلع الأكثر مبيعا
      </h5>
      <div className="mt-4 font-semibold dark:text-white text-[16px] w-full">
        <div className="flex justify-between items-center ">
          <div>Jeans</div>
          <div>70</div>
        </div>
        <div className="w-full h-3 rounded-xl bg-[#f3f3f3] mt-2 overflow-hidden">
          <div className="w-[70%] bg-primary h-full rounded-xl" />
        </div>
      </div>
      <div className="mt-4 font-semibold dark:text-white text-[16px] w-full">
        <div className="flex justify-between items-center ">
          <div>Shirts</div>
          <div>40</div>
        </div>
        <div className="w-full h-3 rounded-xl bg-[#f3f3f3] mt-2 overflow-hidden">
          <div className="w-[40%] bg-primary h-full rounded-xl" />
        </div>
      </div>
      <div className="mt-4 font-semibold dark:text-white text-[16px] w-full">
        <div className="flex justify-between items-center ">
          <div>Beans</div>
          <div>60</div>
        </div>
        <div className="w-full h-3 rounded-xl bg-[#f3f3f3] mt-2 overflow-hidden">
          <div className="w-[60%] bg-primary h-full rounded-xl" />
        </div>
      </div>
      <div className="mt-4 font-semibold dark:text-white text-[16px] w-full">
        <div className="flex justify-between items-center ">
          <div>Caps</div>
          <div>80</div>
        </div>
        <div className="w-full h-3 rounded-xl bg-[#f3f3f3] mt-2 overflow-hidden">
          <div className="w-[80%] bg-primary h-full rounded-xl" />
        </div>
      </div>
      <div className="mt-4 font-semibold dark:text-white text-[16px] w-full">
        <div className="flex justify-between items-center ">
          <div>Others</div>
          <div>20</div>
        </div>
        <div className="w-full h-3 rounded-xl bg-[#f3f3f3] mt-2 overflow-hidden">
          <div className="w-[20%] bg-primary h-full rounded-xl" />
        </div>
      </div>
    </div>
  );
};

export default MostSold;
