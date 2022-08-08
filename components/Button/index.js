import React from "react";

const Button = ({ children, type, onClick, classes }) => {
  if (type === "primary") {
    return (
      <button
        onClick={onClick}
        type="button"
        className="text-sm tablet:text-base p-1 laptop:p-2 m-1 laptop:m-2 rounded-lg text-white bg-black transition-all duration-300 ease-out first:ml-0 hover:scale-105 active:scale-100"
      >
        {children}
      </button>
    );
  }
 
};

export default Button;
