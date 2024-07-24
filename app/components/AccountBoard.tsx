import React from "react";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { AccountBalanceIcon, InfoIcon } from "./icons";

const AccountBoard = () => {
  return (
    <div className="px-5">
      <div className="flex flex-col w-full">
        <div className="flex gap-5 w-full">
          <AccountBalanceIcon className="w-12" />
          <div className="flex gap-1 flex-col">
            <h1 className="text-[1.6rem] text-darkblue">62,540 SAR</h1>
            <div className="flex gap-5 items-center cursor-pointer">
              <span className="text-md text-darkblue leading-4 font-thin">
                Account Balance
              </span>
              <ChevronRight size={15} color="gray" />
            </div>
          </div>
        </div>

        <div className="flex gap-5 my-8 w-full">
          <button className="rounded-full bg-primary text-white border-0 outline-none py-4 w-[8rem]">
            Deposit
          </button>
          <button className="rounded-full bg-white text-darkblue border-[1px] border-light-gray outline-none py-4 w-[8rem]">
            Withdraw
          </button>
        </div>

        <div className="flex items-start gap-3">
          <InfoIcon width="2.5rem" className="mt-1" />
          <p className="m-0 font-thin text-darkblue opacity-70">
            To withdraw more than{" "}
            <strong className="font-semibold">10,000 SAR</strong> you need to
            <strong className="font-semibold"> verify </strong>
            your banking account.
          </p>
        </div>
      </div>

      <div className="flex justify-center my-8">
        <hr className="h-[2px] bg-light-gray w-[80%]" />
      </div>

      <div className="flex flex-col items-center py-5">
        <Image
          src="/assets/images/vector.png"
          width={170}
          height={170}
          alt="lendo-logo"
        />
        <div className="flex flex-col items-center gap-4 mt-5  text-center text-darkblue">
          <h1 className="text-xl font-semibold">Why Should You Trust It?</h1>
          <p className="m-0 font-thin opacity-70">
            Because of this and that. Anyway investing is very good
          </p>
        </div>
      </div>
    </div>
  );
};

export default AccountBoard;
