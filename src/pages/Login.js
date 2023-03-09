import { React, useState } from "react";
import MainWrapper from "../components/MainWrapper";
import Logo from "../assets/logo.png";
import Card from "../components/Card";
import InputField from "../components/InputField";
import Button from "../components/Button";
import { Link } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [formValidation, setFormValidation] = useState({
    email: true,
    password: true,
  });
  const [errorMessages, setErrorMessages] = useState({
    email: [],
    password: [],
  });

  const _handleOnChange = (e) => {
    let currentInputName = e.target.name;
    let currentInputValue = e.target.value;
    setFormData((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      };
    });
    _validateFields(currentInputName, currentInputValue);
  };

  const _handleOnBlur = (e) => {
    let currentInputName = e.target.name;
    let currentInputValue = e.target.value;
    _validateFields(currentInputName, currentInputValue);
  };
  const _validateFields = (currentField, currentValue) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    switch (currentField) {
      case "email":
        if (!currentValue) {
          setFormValidation((prevState) => {
            return {
              ...prevState,
              [currentField]: false,
            };
          });
          setErrorMessages((prevState) => {
            return {
              ...prevState,
              [currentField]: ["Esse campo é obrigatório"],
            };
          });
        } else if (!regex.test(currentValue)) {
          setFormValidation((prevState) => {
            return {
              ...prevState,
              [currentField]: false,
            };
          });
          setErrorMessages((prevState) => {
            return {
              ...prevState,
              [currentField]: ["O e-mail deve ser válido"],
            };
          });
        } else {
          setFormValidation((prevState) => {
            return {
              ...prevState,
              [currentField]: true,
            };
          });
        }

        break;
      case "password":
        if (!currentValue) {
          setFormValidation((prevState) => {
            return {
              ...prevState,
              [currentField]: false,
            };
          });
          setErrorMessages((prevState) => {
            return {
              ...prevState,
              [currentField]: ["Esse campo é obrigatório"],
            };
          });
        } else {
          setFormValidation((prevState) => {
            return {
              ...prevState,
              [currentField]: true,
            };
          });
        }
        break;
      default:
        setFormValidation((prevState) => {
          return {
            ...prevState,
            [currentField]: true,
          };
        });
    }
  };

  return (
    <MainWrapper>
      <>
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <img className="mx-auto h-12 w-auto" src={Logo} alt="Logo" />
          <h2 className="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
            Entrar na sua conta
          </h2>
          <p className="mt-2 text-center text-base leading-5 text-gray-600">
            Ou
            <Link
              to="/signUp"
              className="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150 mx-1"
            >
              fazer cadastro
            </Link>
          </p>
        </div>
        <Card>
          <form className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <InputField
              type={"email"}
              name={"email"}
              labelName="E-mail"
              errorMessage={errorMessages.email}
              _handleOnChange={_handleOnChange}
              value={formData.email}
              isValid={formValidation.email}
              _handleOnBlur={_handleOnBlur}
            />

            <InputField
              type={"password"}
              name={"password"}
              labelName="Senha"
              errorMessage={errorMessages.password}
              classes={"mt-6"}
              _handleOnChange={_handleOnChange}
              value={formData.password}
              isValid={formValidation.password}
              _handleOnBlur={_handleOnBlur}
            />
            <Button text={"Entrar"} classes={"mt-6"} />
          </form>
        </Card>
      </>
    </MainWrapper>
  );
};

export default Login;
