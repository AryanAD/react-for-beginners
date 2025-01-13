import { useState } from "react";

const Forms = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  const [usernameError, setUsernameError] = useState<string>("");
  const [passwordError, setPasswordError] = useState<string>("");
  const [emailError, setEmailError] = useState<string>("");
  const [confirmPasswordError, setConfirmPasswordError] = useState<string>("");

  const validateForm = () => {
    let isValid = true;

    if (username.length < 8) {
      setUsernameError("Username must be at least 8 characters long");
      isValid = false;
    } else {
      setUsernameError("");
    }

    if (password.length < 8) {
      setPasswordError("Password must be at least 8 characters long");
      isValid = false;
    } else {
      setPasswordError("");
    }

    if (password !== confirmPassword) {
      setConfirmPasswordError("Passwords do not match");
      isValid = false;
    } else {
      setConfirmPasswordError("");
    }

    if (email.length === 0 || !/^\S+@\S+\.\S+$/.test(email)) {
      setEmailError("Please enter a valid email address");
      isValid = false;
    } else {
      setEmailError("");
    }

    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      alert("Form submitted successfully!");
    } else {
      alert("Form has errors!");
    }
  };

  return (
    <div className="flex items-center justify-center to-orange-50 bg-gradient-to-br from-lime-100 min-h-screen min-w-[100vw] overflow-hidden transition-all duration-700">
      <div className="flex justify-center w-[80%] p-0 m-0 shadow-sm drop-shadow-md">
        <div className="w-[40%]">
          <img
            src="https://images.unsplash.com/photo-1607799279861-4dd421887fb3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="w-full h-full rounded-tl-lg rounded-bl-lg"
          />
        </div>

        <form
          onSubmit={handleSubmit}
          className="w-[40%] p-8 py-32 bg-white rounded-tr-lg rounded-br-lg"
        >
          <h1 className="text-4xl font-bold text-center">Sign Up</h1>
          <div className="flex flex-col py-1">
            <input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              type="text"
              placeholder="Username"
              className="p-3 rounded-lg focus:outline-none"
            />
            <div
              className={`w-full h-[1px] rounded-full ${
                usernameError ? "bg-red-400" : "bg-gray-300"
              }`}
            ></div>
            {usernameError && (
              <span className="text-sm font-normal text-red-400">
                {usernameError}
              </span>
            )}
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Email"
              className="p-3 rounded-lg focus:outline-none"
            />
            <div
              className={`w-full h-[1px] rounded-full ${
                emailError ? "bg-red-400" : "bg-gray-300"
              }`}
            ></div>
            {emailError && (
              <span className="text-sm font-normal text-red-400">
                {emailError}
              </span>
            )}
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Password"
              className="p-3 rounded-lg focus:outline-none"
            />
            <div
              className={`w-full h-[1px] rounded-full ${
                passwordError ? "bg-red-400" : "bg-gray-300"
              }`}
            ></div>
            {passwordError && (
              <span className="text-sm font-normal text-red-400">
                {passwordError}
              </span>
            )}
            <input
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              type="password"
              placeholder="Confirm Password"
              className="p-3 rounded-lg focus:outline-none"
            />
            <div
              className={`w-full h-[1px] rounded-full ${
                confirmPasswordError ? "bg-red-400" : "bg-gray-300"
              }`}
            ></div>
            {confirmPasswordError && (
              <span className="text-sm font-normal text-red-400">
                {confirmPasswordError}
              </span>
            )}
            <button
              type="submit"
              className="p-3 mt-5 text-white bg-teal-500 rounded-lg hover:bg-teal-600"
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Forms;
