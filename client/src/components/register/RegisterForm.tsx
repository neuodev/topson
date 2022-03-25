import React from "react";
import TextField from "../common/TextField";

const RegisterForm = () => {
  return (
    <div className="w-96 bg-white px-8 py-10 rounded-lg">
      <div className="mb-6">
        <TextField placeholder="First Name" />
      </div>
      <div className="mb-6">
        <TextField placeholder="Last Name" />
      </div>
      <div className="mb-6">
        <TextField placeholder="Email" />
      </div>
      <div className="mb-6">
        <TextField placeholder="Password" isPassword />
      </div>
    </div>
  );
};

export default RegisterForm;
