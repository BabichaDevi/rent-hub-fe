
import React from "react";
import { NavLink } from "react-router-dom";
import useUser from "../Hooks/useUser";
import { getAuth, signOut } from "firebase/auth";
import logo from "../Images/logo.jpg";

const Navbar = () => {
  const { user } = useUser();

  const handleSignOut = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        // Optionally, you can navigate to another page or perform any other actions.
      })
      .catch((error) => {
        // An error happened.
        console.error('Error signing out:', error);
      });
  };

  return (
    <div className="flex flex-col md:flex-row md:justify-between md:items-center w-full px-4 py-2" >
      <nav className="flex justify-between items-center mb-4 md:mb-0">
      <NavLink exact to="/" activeClassName="active-link">
      <img src={logo} className="w-50 h-20 rounded-full" alt="Logo" />
      </NavLink>
      </nav>

      <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6">
        <div className="flex gap-6">
          <NavLink exact to="/" activeClassName="active-link">
            <button className="text-sm md:text-base font-medium focus:outline-none hover: mr-2">Home</button>
          </NavLink>
          <NavLink to="/form-room" activeClassName="active-link">
            <button className="text-sm md:text-base font-medium focus:outline-none hover:text-gray-300">List Your Room</button>
          </NavLink>
        </div>

        <div className="flex items-center gap-7">
          {/* <select className="text-sm md:text-base rounded px-2 py-1 focus:outline-none ">
            <option value="CAD">CAD - Canadian Dollar</option>
            <option value="USA">USD - US Dollar</option>
            <option value="INR">INR - Indian Rupee</option>
          </select> */}

          {user ? (
            <button onClick={handleSignOut} className="text-sm md:text-base font-medium focus:outline-none hover:text-gray-300">Sign Out</button>
          ) : (
            <>
              <NavLink to="/loginpage" activeClassName="active-link">
                <button className="text-sm md:text-base font-medium focus:outline-none hover:text-gray-300">Log In</button>
              </NavLink>
              <NavLink to="/createaccount" activeClassName="active-link">
                <button className="text-sm md:text-base font-medium focus:outline-none hover:text-gray-300">Create Account</button>
              </NavLink>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;