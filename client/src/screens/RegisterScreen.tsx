import React from "react";
import RegisterForm from "../components/register/RegisterForm";

const RegisterScreen = () => {
  return (
    <div className="h-screen w-full bg-blue-50">
      <div>
        <img src="/logo.svg" alt="Topson" />
        <h1>Register New Account</h1>

        <RegisterForm />
      </div>
    </div>
  );
};

export default RegisterScreen;
