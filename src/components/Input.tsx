import clsx from "clsx";
import React from "react";

const Input: React.FC<{ placeholder: string; type?: string; className?: string }> = ({ placeholder, type = "text", className }) => {
    return (
      <input
        type={type}
        placeholder={placeholder}
        className={clsx("px-3 py-2 border rounded-md w-full", className)}
      />
    );
  };
  export default Input;