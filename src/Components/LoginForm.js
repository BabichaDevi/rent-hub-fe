import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

const LoginForm = ({setIsLoggedIn})=> {
    const navigate=useNavigate();
    const[formData,setFormData]=useState({
        email:"",password:""
    })

  
    function changeHandler(event){
        setFormData((prevData)=>(
            {
                ...prevData,
                [event.target.name]:event.target.value
            }
        ))
    }
    function submitHandler(event){
        event.preventDefault();
       setIsLoggedIn(true);
      
       navigate("/")

    }
  return (
    <form onSubmit={submitHandler}>
        <label>
            <p>
                Email Address<sup>*</sup>
            </p>
            <input
                required
                type="text"
                value={formData.value}
                onChange={changeHandler}
                placeholder="Enter email id"
                name="email"
            />
        </label>

        <label>
            <p>
                Password<sup>*</sup>
            </p>
            <input
                required
                type="password"
                value={formData.password}
                onChange={changeHandler}
                placeholder="Enter password"
                name="password"
            />

            
        </label>
        <button>Sign in</button>
    </form>
  );
}

export default LoginForm;
