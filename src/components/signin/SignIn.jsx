import React, { Component } from "react";
import { signInWithGoogle } from "../../firebase/firebase.utils";
import Button from "../button/Button";
import FormInput from "../form-input/FormInput";
import './sign-in.style.scss'
export default class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }
  handleSubmit = (e) => {
    e.preventDefault()
    this.setState({ email: '', password: '' })
  }
  handleChange = e => {
    const { value, name } = e.target
    this.setState({ [name]: value })
  }
  render() {
    const { email, password } = this.state
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput name="email" type="email" value={email} required id="email" handleChange={this.handleChange} label="Email" />
          <FormInput name="password" type="password" value={password} required id="password" handleChange={this.handleChange} label="Password" />
          <dov className='buttons'>
            <Button type="submit" >Sign In </Button>
            <Button onClick={signInWithGoogle} isGoogleSignIn>Sign In with Google </Button>
          </dov>
        </form>
      </div>
    );
  }
}
