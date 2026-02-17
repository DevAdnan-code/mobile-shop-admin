import { useState } from "react";
import { TextField, Button } from "@mui/material";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (email === "admin@gmail.com" && password === "123456") {
      login({ email });
      navigate("/dashboard");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow w-[90%] max-w-sm flex flex-col gap-4">

        <h1 className="text-xl font-bold text-center">Admin Login</h1>

        <TextField label="Email" fullWidth onChange={(e) => setEmail(e.target.value)} />

        <TextField
          label="Password"
          type="password"
          fullWidth
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button variant="contained" onClick={handleLogin}>
          LOGIN
        </Button>

      </div>
    </div>
  );
};

export default Login;
