import React from "react";
import Button from "../../Button";
import Text from "../../Text";
import "./style.css";
const SignUp = () => {
  return (
    <div className='gabor-sign-up-section'>
      <div className='gabor-sign-up-text-container'>
        <Text
          className='gabor-sign-up-text'
          text='Sign up for the latest offers by email'
        />
        <Button style={{ borderColor: "#fff", color: "#fff" }} text='SIGN UP' />
      </div>
    </div>
  );
};

export default SignUp;
