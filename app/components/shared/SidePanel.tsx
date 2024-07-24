import Image from "next/image";
import React from "react";
import AccountBoard from "../AccountBoard";

const SidePanel = () => {
  return (
    <div className="flex flex-col h-full p-10 border-r-[1px] border-r-light-gray">
      <div className="flex gap-2 mb-20">
        <Image
          src="/assets/images/lendo-logo.png"
          width={50}
          height={50}
          alt="lendo-logo"
        />
        <h1 className="text-3xl font-bold text-darkblue mt-1">Lendo</h1>
      </div>
      <AccountBoard />
    </div>
  );
};

export default SidePanel;
