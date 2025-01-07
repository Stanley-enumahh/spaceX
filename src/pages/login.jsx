import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { auth } from "../components/firebase";
import { Link, Navigate } from "react-router-dom";
import { doSignInWithEmailAndPassword, doSignInWithGoogle } from "./auth";
import { useAuth } from "../context/authContext";

export function Login() {
  const { userLoggedIn } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSigningIn, setIsSigningIn] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isSigningIn) {
      setIsSigningIn(true);
      await doSignInWithEmailAndPassword(email, password);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col justify-center items-center h-screen w-full bg-[#1a1125]"
    >
      {userLoggedIn && <Navigate to={"/App"} replace={true} />}
      <div className="flex-col flex text-white text-xs gap-5 justify-start md:mt-0 mt-5 md:justify-between rounded-lg p-7 h-full md:h-[60%] w-full md:w-[40%] bg-[#261d32]">
        <h1 className=" text-2xl font-bold">Login</h1>
        <div className="flex flex-col gap-1">
          <label htmlFor="username">password:</label>{" "}
          <input
            type="email"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-transparent border-neutral-600 border outline-none px-3 py-4 text-xs rounded-md"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="username">password:</label>

          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="bg-transparent border-neutral-600 border outline-none px-3 py-4 text-xs rounded-md"
          />
        </div>
        <button
          type="submit"
          className="bg-[#2d54f4] w-full text-white py-3 rounded duration-150 transition-all shadow-lg"
        >
          {isSigningIn ? "signing in..." : "sign in"}
        </button>
        <span className="flex flex-row gap-1 w-full justify-center">
          <p>Don't have an account?</p>
          <Link to="/">Sign up</Link>
        </span>
      </div>
    </form>
  );
}
