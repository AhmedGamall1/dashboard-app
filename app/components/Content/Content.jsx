import { MdOutlineMenu } from "react-icons/md";
import AreaCards from "./AreaCards";
import AreaCharts from "./AreaCharts";
import TableCard from "./TableCard";
import { useTheme } from "next-themes";
import moonIcon from "../../assets/icons/moon.svg";
import sunIcon from "../../assets/icons/sun.svg";
import Image from "next/image";

const Content = ({ openSidebar, setOpenSidebar }) => {
  const { theme, setTheme } = useTheme("light");
  return (
    <div className="bg-[#FAFAFA] dark:bg-[#383854] w-full">
      <div className="lg:mr-[260px] lg:px-8 sm:mr-[67px] px-6 py-5 sm:py-8">
        <div className="flex sm:flex-row flex-col sm:justify-between sm:items-center">
          <div className="flex items-center justify-start gap-2">
            <MdOutlineMenu
              size={22}
              className="sm:hidden cursor-pointer block dark:text-white"
              onClick={() => {
                setOpenSidebar(true);
              }}
            />
            <div className="flex justify-center items-center gap-2">
              <h1 className="font-bold text-[20px] dark:text-white">
                لوحه التحكم
              </h1>
              <Image
                src={theme === "light" ? sunIcon : moonIcon}
                width={22}
                height={22}
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="cursor-pointer"
              />
            </div>
          </div>
          <div className="shadow-sm bg-white dark:bg-[#2E2E48] rounded-md flex justify-between items-center dark:text-[#E0E0E0]  py-3 text-cBase sm:mt-0 mt-3 w-[340px] px-8 text-[15px]">
            <div>17 فبراير 2024</div>
            <div>24 فبراير 2024</div>
          </div>
        </div>
        <AreaCards />
        <AreaCharts />
        <TableCard />
      </div>
    </div>
  );
};

export default Content;
