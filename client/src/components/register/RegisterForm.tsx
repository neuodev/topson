import React from "react";
import Button from "../common/Button";
import TextField from "../common/TextField";

const RegisterForm = () => {
  return (
    <div className="w-96 bg-white px-8 py-10 rounded-lg shadow-2xl">
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

      <div className="mb-4">
        <Button onClick={() => {}} primary>
          Register
        </Button>
      </div>
      <Button onClick={() => {}}>Login</Button>
    </div>
  );
};

export default RegisterForm;
