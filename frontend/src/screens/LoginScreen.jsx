import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AiOutlineUser, AiOutlineMail, AiOutlineLock } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { useLoginMutation } from "../slices/usersApiSlice";
import { setCredentials } from "../slices/authSlice";
import Loader from "../components/Loader";
import toast, { Toaster } from "react-hot-toast";
import FormContainer from "../components/FormContainer";

function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [login, { isLoading }] = useLoginMutation();

  const { userInfo } = useSelector((state) => state.auth);

  const { search } = useLocation();
  const sp = new URLSearchParams(search);
  const redirect = sp.get("redirect") || "/";

  useEffect(() => {
    if (userInfo) {
      navigate(redirect);
    }
  }, [navigate, userInfo, redirect]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await login({ email, password }).unwrap();
      dispatch(setCredentials({ ...res }));
      navigate(redirect);
    } catch (err) {
      if (err && err.data && err.data.message) {
        toast.error(err.data.message);
      } else {
        toast.error("Invalid email or password");
      }
    }
  };

  return (
    <FormContainer>
      <h1 className="text-2xl font-semibold mb-4">Sign In</h1>
      <form onSubmit={handleSubmit}>
        <label className="input input-bordered flex items-center gap-2 mb-4">
          <AiOutlineMail />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="grow"
          />
        </label>
        <label className="input input-bordered flex items-center gap-2 mb-4">
          <AiOutlineLock />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="grow"
          />
        </label>
        <button type="submit" className="btn btn-primary" disabled={isLoading}>
          Sign In
        </button>
        {isLoading && <Loader />}
      </form>
      <div className="mt-4">
        <span className="text-gray-600">
          New Customer?{" "}
          <Link
            to={redirect ? `/register?redirect=${redirect}` : "/register"}
            className="text-blue-500"
          >
            Register
          </Link>
        </span>
      </div>
      <Toaster />
    </FormContainer>
  );
}

export default LoginScreen;
