import React from "react";
import LoginForm from "../Components/LoginForm";

const Login = ({ setIsLoggedIn={setIsLoggedIn}})=> {
  return (
   <div>
      <LoginForm  setIsLoggedIn={setIsLoggedIn}/>
   </div>
  );
}

export default Login;
