import { useState } from "react";
import {useNavigate} from "react-router-dom"
import axios from "axios";
import { message, Modal, Spin } from "antd";

const Login = ({ isVisible, onClose }) => {
 const navigate = useNavigate()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const API_BASE = import.meta.env.VITE_APP_API_BASE_URL;

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await axios.post(`${import.meta.env.VITE_APP_API_BASE_URL}/user/log`, {
        email,
        password,
      });
      const data = JSON.stringify(res.data);
      localStorage.setItem("auth", data);
      setEmail("");
      setPassword("");
      setError("");
      setLoading(false);
      onClose(); // Close modal after login
      navigate("/Home", {state:{message:"Welcome Back!"}})
    } catch (err) {
      setLoading(false);
      setError(err.response?.data || "An error occurred");
    }
  };

  return (
    <Modal
      title="Login"
      open={isVisible}
      onCancel={onClose}
      footer={null}
      className=""
    >
      {loading ? (
        <Spin />
      ) : (
        <form onSubmit={handleLogin}>
          <p>Enter Your Email:</p>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="e.g. johndoe@gmail.com"
            className="w-full p-2 border border-gray-300 rounded"
            required
            autoComplete="email"
          />
          <p className="mt-4">Enter Your Password:</p>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="e.g. 123@jo_"
            className="w-full p-2 border border-gray-300 rounded"
            minLength={7}
            required
          />
          {error && <p className="text-red-500 mt-4">{error}</p>}
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
          >
            Login
          </button>
        </form>
      )}
    </Modal>
  );
};

export default Login;
