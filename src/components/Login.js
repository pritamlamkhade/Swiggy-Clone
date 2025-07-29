import React, { useState } from "react";
import { sendOtp, verifyOtp } from "../auth/auth";
import { LOGIN_RENDERER } from "../utils/constants";

const Login = ({ closeLogin }) => {
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [isSignUp, SetIsSignUp] = useState(false);

  return (
    <>
      <div id="recaptcha-container"></div>

      <div className="bg-white absolute w-[500px] h-full right-0 z-[2] flex flex-col m-auto p-8">
        <button
          className="text-3xl font-thin text-gray-600 text-left"
          onClick={closeLogin}
        >
          {" "}
          &times;
        </button>

        <h1 className="text-3xl my-4">{isSignUp ? "Sign Up" : "Login"}</h1>

        <div className="flex">
          <span>or &nbsp;</span>
          <button
            className="text-left mb-4 text-[#ff5200] font-bold"
            onClick={() => SetIsSignUp((prev) => !prev)}
          >
            {isSignUp ? "create an account" : "login to your account"}
          </button>
        </div>

        <img
          src={LOGIN_RENDERER}
          alt="img renderer"
          className="w-[100px] h-[100px] absolute right-[100px] top-[60px]"
        ></img>

        <input
          type="tel"
          value={phone}
          onChange={(e) => {
            const input = e.target.value.replace(/[^\d+]/g, ""); // keep + and digits
            setPhone(input);
          }}
          placeholder="+91XXXXXXXXXX"
          className="h-[70px] w-[360px] border border-gray-300 p-2 mt-4"
        />
        {isSignUp && (
          <>
            <input
              placeholder="Name"
              className="h-[70px] w-[360px] border border-gray-300 p-2"
            />

            <input
              placeholder="Email"
              className="h-[70px] w-[360px] border border-gray-300 p-2"
            />

            <button className="text-[#5d8ed5]/80 text-left mt-6 font-bold">
              Have a referral code?
            </button>
          </>
        )}

        <button
          onClick={() => sendOtp(phone)}
          className="h-[50px] w-[360px] bg-[#ff5200] text-white mt-4"
        >
          Send OTP
        </button>

        {/* <input
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          placeholder="One time password"
          className="h-[70px] w-[360px] border border-gray-300 my-4 p-2"
        />

        <button
          onClick={() => verifyOtp(otp)}
          className="h-[50px] w-[360px] bg-[#ff5200] text-white"
        >
          Verify
        </button> */}

        <span className="text-xs w-[360px] py-1">
          By clicking on Login, I accept the{" "}
          <b> Terms & Conditions & Privacy Policy</b>
        </span>
      </div>
    </>
  );
};

export default Login;
