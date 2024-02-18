"use client";
import Image from "next/image";
import logoBlue from "../../assets/images/logo_blue.svg";
import logoWhite from "../../assets/images/logo_white.svg";
import {
  MdOutlineAttachMoney,
  MdOutlineBarChart,
  MdOutlineClose,
  MdOutlineCurrencyExchange,
  MdOutlineGridView,
  MdOutlineLogout,
  MdOutlineMessage,
  MdOutlinePeople,
  MdOutlineSettings,
  MdOutlineShoppingBag,
} from "react-icons/md";
import Link from "next/link";
import { useTheme } from "next-themes";

const Sidebar = ({ openSidebar, setOpenSidebar }) => {
  const { theme, setTheme } = useTheme();
  return (
    <div
      className={`transition-all  fixed right-0 top-0 ease-in-out overflow-x-hidden duration-300 bg-white dark:bg-[#2e2e48] min-h-[100vh] overflow-y-auto py-[15px] sidebar-shadow select-none z-[9999] ${
        !openSidebar &&
        "sm:w-[67px] sm:flex flex-col lg:items-start sm:items-center lg:w-[260px] lg:pl-[40px] lg:pr-[20px] "
      } ${
        openSidebar ? "pl-[40px] pr-[20px] items-start w-[260px]" : "hidden"
      }`}
    >
      <div className={`${!openSidebar && "hidden"} absolute top-5 left-5`}>
        <MdOutlineClose
          size={22}
          className="cursor-pointer text-primary dark:text-[#E0E0E0]"
          onClick={() => {
            setOpenSidebar(false);
          }}
        />
      </div>
      <div className="flex items-center ">
        <Image
          src={theme === "dark" ? logoWhite : logoBlue}
          alt="logo"
          width={45}
          height={45}
        />
        <div
          className={`font-bold lg:block ${
            openSidebar ? "block" : "hidden"
          } text-primary dark:text-white text-[22px] mr-1 mb-2`}
        >
          متجرك
        </div>
      </div>
      <div
        className={`${
          openSidebar && "w-full"
        } lg:w-full w-[80%] h-[1px] dark:bg-[#575777] bg-slate-100`}
      />

      <Link
        href={"/"}
        className="flex items-center lg:w-full lg:px-3 lg:py-[10px] p-[6px] lg:mr-[10px] bg-primary  text-white rounded-lg mt-8 gap-2"
      >
        <MdOutlineGridView size={22} className="" />
        <div
          className={`${
            openSidebar ? "block" : "hidden"
          } font-bold lg:block text-[16px]`}
        >
          لوحه التحكم
        </div>
      </Link>

      <Link
        href={"/"}
        className="flex items-center lg:w-full lg:px-3 lg:py-[10px] p-[6px] lg:mr-[10px]   text-cBase dark:text-[#E0E0E0] rounded-lg mt-2 gap-2 hover:bg-[#f6f6f6] dark:hover:bg-[#525270] transition-all duration-500 ease-in-out"
      >
        <MdOutlineBarChart size={24} className="" />
        <div
          className={`${
            openSidebar ? "block" : "hidden"
          } font-bold lg:block text-[16px]`}
        >
          الإحصائيات
        </div>
      </Link>

      <Link
        href={"/"}
        className="flex items-center lg:w-full lg:px-3 lg:py-[10px] p-[6px] lg:mr-[10px]   text-cBase dark:text-[#E0E0E0] rounded-lg mt-2 gap-2 hover:bg-[#f6f6f6] dark:hover:bg-[#525270] transition-all duration-500 ease-in-out"
      >
        <MdOutlineAttachMoney size={24} className="" />
        <div
          className={`${
            openSidebar ? "block" : "hidden"
          } font-bold lg:block 6px]`}
        >
          الدفع
        </div>
      </Link>

      <Link
        href={"/"}
        className="flex items-center lg:w-full lg:px-3 lg:py-[10px] p-[6px] lg:mr-[10px]   text-cBase dark:text-[#E0E0E0] rounded-lg mt-2 gap-2 hover:bg-[#f6f6f6] dark:hover:bg-[#525270] transition-all duration-500 ease-in-out"
      >
        <MdOutlineCurrencyExchange size={22} className="" />
        <div
          className={`${
            openSidebar ? "block" : "hidden"
          } font-bold lg:block text-[16px]`}
        >
          المعاملات
        </div>
      </Link>

      <Link
        href={"/"}
        className="flex items-center lg:w-full lg:px-3 lg:py-[10px] p-[6px] lg:mr-[10px]   text-cBase dark:text-[#E0E0E0] rounded-lg mt-2 gap-2 hover:bg-[#f6f6f6] dark:hover:bg-[#525270] transition-all duration-500 ease-in-out"
      >
        <MdOutlineShoppingBag size={22} className="" />
        <div
          className={`${
            openSidebar ? "block" : "hidden"
          } font-bold lg:block text-[16px]`}
        >
          المنتجات
        </div>
      </Link>

      <Link
        href={"/"}
        className="flex items-center lg:w-full lg:px-3 lg:py-[10px] p-[6px] lg:mr-[10px]   text-cBase dark:text-[#E0E0E0] rounded-lg mt-2 gap-2 hover:bg-[#f6f6f6] dark:hover:bg-[#525270] transition-all duration-500 ease-in-out"
      >
        <MdOutlinePeople size={22} className="" />
        <div
          className={`${
            openSidebar ? "block" : "hidden"
          } font-bold lg:block text-[16px]`}
        >
          العملاء
        </div>
      </Link>
      <Link
        href={"/"}
        className="flex items-center lg:w-full lg:px-3 lg:py-[10px] p-[6px] lg:mr-[10px]   text-cBase dark:text-[#E0E0E0] rounded-lg mt-2 gap-2 hover:bg-[#f6f6f6] dark:hover:bg-[#525270] transition-all duration-500 ease-in-out"
      >
        <MdOutlineMessage size={22} className="" />
        <div
          className={`${
            openSidebar ? "block" : "hidden"
          } font-bold lg:block text-[16px]`}
        >
          الرسائل
        </div>
      </Link>

      <Link
        href={"/"}
        className="flex items-center lg:w-full lg:px-3 lg:py-[10px] p-[6px] lg:mr-[10px]   text-cBase dark:text-[#E0E0E0] rounded-lg mt-2 gap-2 hover:bg-[#f6f6f6] dark:hover:bg-[#525270] transition-all duration-500 ease-in-out"
      >
        <MdOutlineSettings size={22} className="" />
        <div
          className={`${
            openSidebar ? "block" : "hidden"
          } font-bold lg:block text-[16px]`}
        >
          الإعدادات
        </div>
      </Link>
      <Link
        href={"/"}
        className="flex items-center lg:w-full lg:px-3 lg:py-[10px] p-[6px] lg:mr-[10px]   text-cBase dark:text-[#E0E0E0] rounded-lg mt-2 gap-2 hover:bg-[#f6f6f6] dark:hover:bg-[#525270] transition-all duration-500 ease-in-out"
      >
        <MdOutlineLogout size={22} className="" />
        <div
          className={`${
            openSidebar ? "block" : "hidden"
          } font-bold lg:block text-[16px]`}
        >
          تسجيل الخروج
        </div>
      </Link>
    </div>
  );
};

export default Sidebar;
