import React, { type InputHTMLAttributes } from "react";
import "../../App.css";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

const Input: React.FC<InputProps> = ({ className = "", ...props }) => {
  return (
    <input
      className={`input__filter ${className}`}
      {...props}
    />
  );
};


export { Input };
