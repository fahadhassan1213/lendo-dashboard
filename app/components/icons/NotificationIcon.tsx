import { LucideProps } from "lucide-react";

const NotificationIcon = ({ ...props }: LucideProps) => {
  return (
    <svg
      fill="none"
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clip-path="url(#clip0_699_78)">
        <line
          x1="2.58608"
          y1="13.2819"
          x2="13.7486"
          y2="13.2819"
          stroke="#A4A6BB"
          strokeWidth="1.24028"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M3.82635 13.2524V7.84833C3.82635 5.45088 5.76987 3.50735 8.16733 3.50735V3.50735C10.5648 3.50735 12.5083 5.45087 12.5083 7.84833V13.2524"
          stroke="#A4A6BB"
          strokeWidth="1.24028"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8.78752 15.2014L7.54724 15.2014"
          stroke="#A4A6BB"
          strokeWidth="1.24028"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8.16736 3.50736L8.16736 1.55835"
          stroke="#A4A6BB"
          strokeWidth="1.24028"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_699_78">
          <rect
            width="14.8833"
            height="14.8833"
            fill="white"
            transform="translate(0.725708 0.938202)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default NotificationIcon;
