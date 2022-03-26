import React, { Component } from "react";
import Button from "../common/Button";
import TextField from "../common/TextField";
import { connect } from "react-redux";
import { userRegisterAction } from "../../actions/userActions";

type State = {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  passwordConfirmation: string;
  username: string;
};

type Props = {
  userRegisterAction(data: State): Promise<void>;
  // register: ;
};

export class RegisterForm extends Component<Props, State> {
  state: State = {
    first_name: "",
    last_name: "",
    username: "",
    email: "",
    password: "",
    passwordConfirmation: "",
  };

  onUpdate(e: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ ...this.state, [e.target.name]: e.target.value });
  }

  async onSubmit() {
    this.props.userRegisterAction(this.state);
  }

  render() {
    return (
      <div className="w-96 bg-white px-8 py-10 rounded-lg shadow-2xl">
        <div className="mb-6">
          <TextField
            name="first_name"
            value={this.state.first_name}
            // error={this.props.register.first_name[0]}
            onChange={this.onUpdate.bind(this)}
            placeholder="First Name"
          />
        </div>
        <div className="mb-6">
          <TextField
            name="last_name"
            value={this.state.last_name}
            onChange={this.onUpdate.bind(this)}
            placeholder="Last Name"
          />
        </div>
        <div className="mb-6">
          <TextField
            name="username"
            value={this.state.username}
            onChange={this.onUpdate.bind(this)}
            placeholder="Username"
          />
        </div>
        <div className="mb-6">
          <TextField
            name="email"
            value={this.state.email}
            onChange={this.onUpdate.bind(this)}
            placeholder="Email"
          />
        </div>
        <div className="mb-6">
          <TextField
            name="password"
            value={this.state.password}
            onChange={this.onUpdate.bind(this)}
            placeholder="Password"
            isPassword
          />
        </div>
        <div className="mb-6">
          <TextField
            name="passwordConfirmation"
            value={this.state.passwordConfirmation}
            onChange={this.onUpdate.bind(this)}
            placeholder="Password Confirmation"
            isPassword
          />
        </div>

        <div className="mb-4">
          <Button onClick={this.onSubmit.bind(this)} primary>
            Register
          </Button>
        </div>
        <Button onClick={() => {}}>Login</Button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  register: state.register,
});

export default connect(mapStateToProps, { userRegisterAction })(RegisterForm);
