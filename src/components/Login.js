import React from 'react'
import { useState } from 'react';
const Login = ({isSubmitted,setIsSubmitted}) => {
    const renderErrorMessage = (name) =>
  name === errorMessages.name && (
    <div className="error">{errorMessages.message}</div>
  );
// const [errorMessages, setErrorMessages] = useState({});
// const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessages, setErrorMessages] = useState({});
const database = [
    {
      username: "user1",
      password: "pass1"
    },
    {
      username: "user2",
      password: "pass2"
    }
  ];

  const errors = {
    uname: "invalid username",
    pass: "invalid password"
  };
const handleSubmit = (event) => {
    // Prevent page reload
    event.preventDefault();
  
  var { uname, pass } = document.forms[0];
  const userData = database.find((user) => user.username === uname.value)

  if (userData) {
    if (userData.password !== pass.value) {
      // Invalid password
      setErrorMessages({ name: "pass", message: errors.pass });
    } else {
      setIsSubmitted(true);
    }
  } else {
    // Username not found
    setErrorMessages({ name: "uname", message: errors.uname });
  }
}

const renderForm=(
    <form onSubmit={handleSubmit} className='<add-form'>
        <div className='form-control'>
            <label>Log in</label>
            <input type='text' name='uname' required></input>
            {renderErrorMessage("uname")}
        </div>
        <div className='form-control'>
            <label>Password</label>
            <input type='password' name='pass' required></input>
            {renderErrorMessage("pass")}
        </div>
        <div className='btn' >
            <input type="submit"></input>
        </div>
        
        </form>

)
  return (
    <div className='container'>
                {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
    </div>
  )
}

export default Login