import React from "react";

const Checkbox = ({ isValid, _handleCheckbox }) => {
  return (
    <div className="mt-6">
      <label className="relative flex items-start mt-2">
        <div className="flex items-center h-5">
          <input
            type="checkbox"
            className={`${
              isValid ? "" : "border-red-500"
            } form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out cursor-pointer`}
            onChange={_handleCheckbox}
          />
        </div>
        <div className="ml-2 text-sm leading-5">
          <span className="font-medium text-gray-700">
            <font style={{ verticalAlign: "inherit" }}>
              <font style={{ verticalAlign: "inherit" }}>
                I have read and accept
              </font>
              <font style={{ verticalAlign: "inherit" }}>Kiwify's </font>
            </font>
            <a href="#!" className="underline">
              <font style={{ verticalAlign: "inherit" }}>
                <font style={{ verticalAlign: "inherit" }}>terms of use</font>
              </font>
            </a>
            <font style={{ verticalAlign: "inherit" }}>
              <font style={{ verticalAlign: "inherit" }}> , </font>
            </font>
            <a href="#!" className="underline">
              <font style={{ verticalAlign: "inherit" }}>
                <font style={{ verticalAlign: "inherit" }}>
                  software license terms
                </font>
              </font>
            </a>
            <font style={{ verticalAlign: "inherit" }}>
              <font style={{ verticalAlign: "inherit" }}> , </font>
            </font>
            <a href="#!" className="underline">
              <font style={{ verticalAlign: "inherit" }}>
                <font style={{ verticalAlign: "inherit" }}>content policy</font>
              </font>
            </a>
            <font style={{ verticalAlign: "inherit" }} />
          </span>
          {!isValid && (
            <div className="text-xs text-red-500 mt-2">
              (Esse campo é obrigatório)
            </div>
          )}
        </div>
      </label>
    </div>
  );
};

export default Checkbox;
