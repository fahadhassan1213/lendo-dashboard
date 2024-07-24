import { LucideProps } from "lucide-react";

const InfoIcon = ({ ...props }: LucideProps) => {
  return (
    <svg
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 14 13"
      {...props}
    >
      <g opacity="0.2">
        <circle
          cx="6.89028"
          cy="6.31388"
          r="5.58125"
          stroke="#0D0F52"
          stroke-width="1.24028"
        />
        <rect
          x="6.27043"
          y="2.59348"
          width="1.24028"
          height="4.96111"
          rx="0.620139"
          fill="#0D0F52"
        />
        <rect
          x="6.27043"
          y="8.17465"
          width="1.24028"
          height="1.24028"
          rx="0.620139"
          fill="#0D0F52"
        />
      </g>
    </svg>
  );
};

export default InfoIcon;
