import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { auth } from "../components/firebase";
import { Link, Navigate } from "react-router-dom";
import { doCreateUserWithEmailAndPassword } from "./auth";
import { useAuth } from "../context/authContext";

export function Register() {
  const { userLoggedIn } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isRegistering, setIsRegistering] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await doCreateUserWithEmailAndPassword(email, password);
  };

  return (
    <div
      onSubmit={handleSubmit}
      className="flex flex-col justify-center items-center h-screen w-full bg-[#1a1125]"
    >
      {userLoggedIn && <Navigate to={"/App"} replace={true} />}
      <form className="flex-col flex text-white text-xs gap-5 justify-between rounded-lg p-7 h-[60%] w-[40%] bg-[#261d32]">
        <h1 className=" text-2xl font-bold">Login</h1>
        <div className="flex flex-col gap-1">
          <label htmlFor="username">email:</label>{" "}
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
        <div className="flex flex-col gap-1">
          <label htmlFor="username">comfirm password:</label>

          <input
            type="password"
            placeholder="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="bg-transparent border-neutral-600 border outline-none px-3 py-4 text-xs rounded-md"
          />
        </div>
        <button className="bg-[#2d54f4] w-full text-white py-3 rounded duration-150 transition-all shadow-lg">
          sign in
        </button>
        <span className="flex flex-row gap-1 w-full justify-center">
          <p>have an account?</p>
          <Link to="/">Sign up</Link>
        </span>
      </form>
    </div>
  );
}
