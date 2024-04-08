import React, { useState } from "react";
import { GoogleLogin } from '@react-oauth/google';

function SignIn() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginSuccess = credentialResponse => {
    console.log(credentialResponse);
    setIsLoggedIn(true);
  };

  const handleLoginFailure = () => {
    console.log('Login Failed');
  };

  const handleLogout = () => {
    // Clear user session or token here
    setIsLoggedIn(false);
    console.log('Logout Successful');
  };

  return (
    <div>
      {isLoggedIn ? (
        <button onClick={handleLogout}>Logout</button>
      ) : (
        <GoogleLogin
          onSuccess={handleLoginSuccess}
          onError={handleLoginFailure}
          clientId="256263441291-rnh5e5km57l3oo5p8uh9a0iqr330b5jm.apps.googleusercontent.com"
          buttonText="Login with Google"
        />
      )}
    </div>
  );
}

export default SignIn;
