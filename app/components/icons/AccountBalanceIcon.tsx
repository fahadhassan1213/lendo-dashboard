import { LucideProps } from "lucide-react";

const AccountBalanceIcon = ({ ...props }: LucideProps) => {
  return (
    <svg
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 26 24"
      {...props}
    >
      <rect
        x="0.89028"
        y="5.37084"
        width="23.5653"
        height="17.3639"
        rx="0.620139"
        stroke="#2D91FE"
        stroke-width="1.24028"
      />
      <path
        d="M15.1535 5.37084L10.3962 1.14217C9.92629 0.724459 9.21815 0.724459 8.74822 1.14217L3.99097 5.37084"
        stroke="#2D91FE"
        strokeWidth="1.24028"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21.3549 11.5722H18.8743C18.1893 11.5722 17.634 12.1275 17.634 12.8125V15.2931C17.634 15.978 18.1893 16.5333 18.8743 16.5333H21.3549"
        stroke="#2D91FE"
        strokeWidth="1.24028"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default AccountBalanceIcon;
