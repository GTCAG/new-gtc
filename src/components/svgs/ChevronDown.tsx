import React from "react";
interface ChevronDownProps {
  color?: string;
}

const ChevronDown: React.FC<ChevronDownProps> = ({
  color,
}: ChevronDownProps) => {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M9 11.7848L13.5075 7.27725L12.4478 6.216L9 9.666L5.553 6.216L4.4925 7.2765L9 11.7848Z"
        fill={color ? color : "#000000"}
      />
    </svg>
  );
};

export default ChevronDown;
