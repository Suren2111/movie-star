import React, { useState, useRef } from "react";
import Header from "./Header";
import { validationCheck } from "../utils/validate";
const Login = () => {
  const [isSignedIn, setIsSignedIn] = useState(true);
  const[errMessage,setErrMessage]=useState(null);
  const email = useRef(null);
  const password = useRef(null);
  const name=useRef(null);
  const validateForm=()=>{
    if(name.current){
      const errMessage=validationCheck(email.current.value,password.current.value,name.current.value);
      setErrMessage(errMessage);
    }
    else{
        const errMessage=validationCheck(email.current.value,password.current.value);
        setErrMessage(errMessage);
    }
    
  }
  const toggleSignIn = () => {
    setIsSignedIn(!isSignedIn);
  };
  return (
    <div className="">
      <Header />
      <img
        className=""
        src="https://assets.nflxext.com/ffe/siteui/vlv3/e94073b0-a056-402f-9015-16cb1e7e45c2/web/IN-en-20251110-TRIFECTA-perspective_46e74acc-70aa-4691-988a-dbcf958149d1_small.jpg"
        alt="logo"
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/12">
        <form
          className="bg-black flex flex-col gap-4 p-6 w-full text-white"
          onSubmit={(e) => e.preventDefault()}
        >
          <h1>{isSignedIn ? "Sign In" : "Sign Up"}</h1>
          {!isSignedIn && (
            <input
            ref={name}
              type="text"
              className="p-2 bg-gray-700"
              placeholder="Name"
            ></input>
          )}
          <input
          ref={email}
            type="text"
            className="p-2 bg-gray-700"
            placeholder="Email Address"
          ></input>
          <input
          ref={password}
            type="password"
            placeholder="Password"
            className="p-2 bg-gray-700"
          ></input>
          <p className="text-red-600 font-bold">{errMessage}</p>
          <button className="bg-red-500 rounded-lg p-2" onClick={validateForm}>
            {isSignedIn ? "Sign In" : "Sign Up"}
          </button>
          <p className="cursor-pointer" onClick={toggleSignIn}>
            {isSignedIn
              ? "New To Netflix? Sign up now."
              : "Already user,Sign in now."}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
