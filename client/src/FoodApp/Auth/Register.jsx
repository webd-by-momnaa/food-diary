import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Modal, Spin } from "antd";

const Register = ({ isVisible, onClose }) => {
  const naviagte = useNavigate()
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await axios.post("http://localhost:5000/user/post", {
        name,
        email,
        password,
      });
      setName("");
      setEmail("");
      setPassword("");
      setError("");
      setLoading(false);
      onClose(); // Close modal after registration
      naviagte("/Home")
    } catch (err) {
      setLoading(false);
      setError(err.response?.data || "An error occurred");
    }
  };

  return (
    <Modal
      title="Register"
      open={isVisible}
      onCancel={onClose}
      footer={null}
    >
      {loading ? (
        <Spin />
      ) : (
        <form onSubmit={handleRegister}>
          <p>Enter Your Name:</p>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="e.g. John Doe"
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
          <p className="mt-4">Enter Your Email:</p>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="e.g. johndoe@gmail.com"
            className="w-full p-2 border border-gray-300 rounded"
            required
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
            className="bg-green-500 text-white px-4 py-2 rounded mt-4"
          >
            Register
          </button>
        </form>
      )}
    </Modal>
  );
};

export default Register;
