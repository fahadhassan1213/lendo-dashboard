"use client";

import React, { useState } from "react";
import { NotificationIcon } from "../icons";

const Header = () => {
  const tabs = ["overview", "invest", "auto-invest", "my portfolio"];
  const [activeTab, setActiveTab] = useState(tabs[2]);

  return (
    <header className="flex flex-col justify-between h-full pt-12 pb-10 px-10 border-b-2">
      <div className="flex justify-between px-5 w-full h-full">
        <nav className="flex gap-10 font-thin relative">
          {tabs.map((tab) => (
            <a
              href="#"
              className={`text-darkblue capitalize ${
                activeTab === tab
                  ? "font-semibold before:rounded-full before:absolute before:w-10 before:h-[5px] before:bottom-[-2.6rem] before:bg-primary"
                  : "font-thin"
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </a>
          ))}
        </nav>
        <div className="flex h-fit items-start gap-10">
          <span className="text-darkblue opacity-70 cursor-pointer">EN</span>
          <div className="relative cursor-pointer">
            <NotificationIcon size={20} className="w-6" />
            <div className="absolute border-[1px] border-white right-[-5px] bottom-[-5px] rounded-full w-4 h-4 bg-primary text-center text-xs text-white">
              3
            </div>
          </div>
          <img
            className="inline-block h-10 w-10 rounded-full ring-2 ring-white translate-y-[-10px] cursor-pointer"
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
