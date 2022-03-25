import React from "react";
import RegisterForm from "../components/register/RegisterForm";

const RegisterScreen = () => {
  return (
    <div className="h-screen w-full bg-blue-50">
      <div className="flex flex-col items-center justify-center h-full">
        <img className="inline-block mb-10" src="/logo.svg" alt="Topson" />
        <h1 className="mb-10 text-3xl font-semibold text-gray-700">
          Register New Account
        </h1>

        <RegisterForm />
      </div>
    </div>
  );
};

export default RegisterScreen;
