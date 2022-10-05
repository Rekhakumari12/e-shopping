import React, { Component } from 'react';
import FormInput from '../form-input/FormInput';
import Button from '../button/Button';
import './sign-up.style.scss'
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';
class SignUp extends Component {
  constructor() {
    super()
    this.state = {
      displayName: '',
      email: '',
      password: '',
      confirmPassword: ''
    }
  }

  handleSubmit = async (e) => {
    e.preventDefault()
    const { email, displayName, password, confirmPassword } = this.state

    if (password !== confirmPassword) {
      alert('Password dont match')
      return
    }

    try {
      //after enabling google email and password as signin method we can use like this
      //it will return me user after authorizing it(if it wont exist create it, if exist then give error)
      const { user } = await auth.createUserWithEmailAndPassword(email, password)
      await createUserProfileDocument(user, { displayName })
      this.setState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
      })
    }
    catch (error) {
      console.log('error while creating user', error.message)
      alert(error.message)
    }

  }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  render() {
    const { email, displayName, password, confirmPassword } = this.state
    return (
      <div className='sign-up'>
        <h2 className='title'>I do not have an account</h2>
        <span>Sign up with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput type="email" name="email" value={email} label='Email' required onChange={this.handleChange} />
          <FormInput type="text" name="displayName" value={displayName} label='Display Name' required onChange={this.handleChange} />
          <FormInput type="password" name="password" value={password} label='Password' required onChange={this.handleChange} />
          <FormInput type="password" name="confirmPassword" value={confirmPassword} label='Confirm Password' required onChange={this.handleChange} />
          <Button type="submit">Sign up</Button>
        </form>
      </div>
    );
  }
}

export default SignUp;
