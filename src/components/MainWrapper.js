import React from "react";

const MainWrapper = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center py-12 sm:px-6 lg:px-8">
      {children}
    </div>
  );
};

export default MainWrapper;
