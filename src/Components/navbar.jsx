import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = (props) => {
  const navigate = useNavigate();

  function handleLoginState() {
    props.setLoginStatus(false);
  }

  return (

    <div className="fixed top-0 left-0 h-screen bg-[#000] p-3 flex flex-col items-center  z-50">
      <div onClick={() => navigate("/home")} className="cursor-pointer flex flex-col items-center mt-4">
        <img className="w-24" src="https://img.hotstar.com/image/upload/v1656431456/web-images/logo-d-plus.svg" alt="logo" />
      </div>
      <Link to={props.loginStatus ? "/home/signup" : "/home/signin"} className="mt-4">
        <div
          onClick={handleLoginState}
          className="text-white bg-gray-500 border-2 border-gray-500 px-2 py-1 rounded-xl cursor-pointer hover:bg-gray-600 transition-colors duration-300"
        >
          <span className=" ">{props.loginStatus ? "Sign out" : "Sign in"}</span>
        </div>
      </Link>
    </div>


  );
}

export default Navbar;
