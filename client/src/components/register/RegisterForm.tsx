import React from "react";
import Button from "../common/Button";
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
      <div className="mb-6">
        <TextField placeholder="Password Confirmation" isPassword />
      </div>

      <div>
        <Button primary>Register</Button>
        <Button>Login</Button>
      </div>
    </div>
  );
};

export default RegisterForm;
