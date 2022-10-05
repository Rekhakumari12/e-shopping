import React, { Component } from "react";
import { signInWithGoogle } from "../../firebase/firebase.utils";
import Button from "../button/Button";
import FormInput from "../form-input/FormInput";
import './sign-in.style.scss'
import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";
export default class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }
  handleSubmit = async (e) => {
    e.preventDefault()
    const { email, password } = this.state
    try {
      const { user } = await auth.signInWithEmailAndPassword(email, password)
      await createUserProfileDocument(user)
    } catch (e) {
      console.log("error", e)
      alert(e)
    }
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
          <div className='buttons'>
            <Button type="submit" >Sign In </Button>
            <Button onClick={signInWithGoogle} isGoogleSignIn>Sign In with Google </Button>
          </div>
        </form>
      </div>
    );
  }
}
