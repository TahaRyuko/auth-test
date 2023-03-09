import React from "react";

const Card = ({ children }) => {
  return (
    <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md w-full">
      {children}
    </div>
  );
};

export default Card;
