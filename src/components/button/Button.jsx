import React from 'react';
import './button.style.scss'
const Button = ({ children, isGoogleSignIn, ...otherProps }) => {
  return (
    <button className={`${isGoogleSignIn && `google-sign-in`} custom-button`} {...otherProps}>
      {children}
    </button>
  );
}

export default Button;
