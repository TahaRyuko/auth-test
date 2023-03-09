import { React } from "react";

const InputField = ({
  type,
  errorMessage: errorMessages,
  name,
  labelName,
  classes,
  _handleOnChange,
  isValid,
  input,
  _handleOnBlur,
}) => {
  return (
    <div className={classes}>
      <label
        htmlFor={name}
        className="block text-sm font-medium leading-5 mb-1 text-gray-700"
      >
        {labelName}
      </label>
      <input
        type={type}
        name={name}
        className={`${
          !isValid ? "border-red-500 " : ""
        }form-input block py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5 w-full`}
        value={input}
        onChange={_handleOnChange}
        onBlur={_handleOnBlur}
        required
      />

      {!isValid &&
        errorMessages.map((value, key) => {
          return (
            <div className="text-xs text-red-500 mt-2" key={key}>
              {value}
            </div>
          );
        })}
    </div>
  );
};

export default InputField;
