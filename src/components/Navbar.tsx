import { Minus } from "lucide-react";
import { useState } from "react";
import Container from "./Container";
import { appData } from "@/data/app";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  return (
    <nav className=" bg-blue-900">
      <Container>
        <div className="flex items-center justify-between w-full relative py-[8px]">
          {/* <img
          src="https://i.ibb.co/0BZfPq6/darklogo.png"
          alt="logo"
          className="w-[55px]"
        /> */}

          <h1 className="text-4xl py-1.9 text-white font-bold">C-SUITE</h1>

          <ul className="items-center gap-[20px] text-[1rem] text-[#424242] lg:flex hidden">
            {appData.navlinks.map((item) => (
              <Link key={item.title} to={item.link}>
                <li className="before:w-0 hover:before:w-full text-white before:bg-[#3B9DF8] before:h-[2px] before:transition-all before:duration-300 before:absolute relative before:rounded-full before:bottom-[-2px] hover:text-[#3B9DF8] transition-all duration-300 before:left-0 cursor-pointer capitalize">
                  {item.title}
                </li>
              </Link>
            ))}
          </ul>

          <div className="items-center gap-[10px] flex lg:hidden">
            <Minus
              className="text-[1.8rem] mr-1 text-[#424242]c cursor-pointer lg:hidden flex"
              onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)}
            />
          </div>

          <aside
            className={` ${
              mobileSidebarOpen
                ? "translate-x-0 opacity-100 z-20"
                : "translate-x-[200px] opacity-0 z-[-1]"
            } lg:hidden bg-white boxShadow p-4 text-center absolute top-[65px] right-0 w-full rounded-md transition-all duration-300`}
          >
            <ul className="items-center gap-[20px] text-[1rem] text-gray-600 flex flex-col">
              {appData.navlinks.map((item, index) => (
                <Link to={item.link} key={index}>
                  <li className="hover:border-b-[#3B9DF8] border-b-[2px] border-transparent transition-all duration-500 cursor-pointer capitalize">
                    {item.title}
                  </li>
                </Link>
              ))}
            </ul>
          </aside>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
