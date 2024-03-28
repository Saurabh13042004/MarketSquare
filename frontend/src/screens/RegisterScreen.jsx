import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AiOutlineUser, AiOutlineMail, AiOutlineLock } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { useRegisterMutation } from "../slices/usersApiSlice";
import Loader from "../components/Loader";
import toast, { Toaster } from "react-hot-toast";
import FormContainer from "../components/FormContainer";

function RegisterScreen() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [register, { isLoading }] = useRegisterMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }
    try {
      await register({ name, email, password }).unwrap();
      toast.success("Registration successful. Please login.");
      navigate("/login");
    } catch (err) {
      if (err && err.data && err.data.message) {
        toast.error(err.data.message);
      } else {
        toast.error("An error occurred during registration");
      }
    }
  };

  return (
    <FormContainer>
      <h1 className="text-2xl font-semibold mb-4">Register</h1>
      <form onSubmit={handleSubmit}>
        <label className="input input-bordered flex items-center gap-2 mb-4">
          <AiOutlineUser />
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            className="grow"
          />
        </label>
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
        <label className="input input-bordered flex items-center gap-2 mb-4">
          <AiOutlineLock />
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm Password"
            className="grow"
          />
        </label>
        <button type="submit" className="btn btn-primary" disabled={isLoading}>
          Register
        </button>
        {isLoading && <Loader />}
      </form>
      <div className="mt-4">
        <span className="text-gray-600">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-500">
            Login
          </Link>
        </span>
      </div>
      <Toaster />
    </FormContainer>
  );
}

export default RegisterScreen;
