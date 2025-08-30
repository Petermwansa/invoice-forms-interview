import React, { type ReactNode } from "react";

interface CustomCardProps {
  title: string;
  children: ReactNode;
  className?: string;
}

const CustomCard: React.FC<CustomCardProps> = ({ title, children, className = "" }) => {
  return (
    <div className={`${className}`}>
      <h2 className="title">{title}</h2>
      <div>{children}</div>
    </div>
  );
};

export default CustomCard;
