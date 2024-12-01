import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../provaider/AuthProvider";

const Register = () => {
  const { handelRegister, manageProfile } = useContext(AuthContext);
  const [error, setError] = useState("");

  const handleSignUp = async (e) => {
    e.preventDefault();
    setError("");
    const form = e.target;
    const name = form.name.value;
    const photoUrl = form.photoUrl.value;
    const email = form.email.value;
    const password = form.password.value;
    const conPassword = form.conPassword.value;

    // Validation
    if (password.length < 6) {
      setError("Password must contain at least 6 characters");
      return;
    }
    if (password !== conPassword) {
      setError("Passwords didn't match");
      return;
    }
    if (!/[a-z]/.test(password)) {
      setError("Password must contain at least one lowercase letter");
      return;
    }
    if (!/[A-Z]/.test(password)) {
      setError("Password must contain at least one uppercase letter");
      return;
    }

    try {
      // Register the user
      const res = await handelRegister(email, password);
      const user = res?.user;
      const creationTime = user?.metadata?.creationTime; // Fetch creation time safely

      // Manage profile
      await manageProfile(name, photoUrl);
      console.log("Registration successful:", res);

      // Prepare user object
      const newUser = { name, email, create: creationTime };

      // Save user to the database
      const response = await fetch("http://localhost:5000/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser),
      });

      if (!response.ok) {
        throw new Error("Failed to save user to the database");
      }

      const data = await response.json();
      console.log("User created in DB:", data);

      // Reset the form
      form.reset();
    } catch (err) {
      setError("Registration failed: " + err.message);
    }
  };

  return (
    <div className="hero">
      <div className="hero-content flex-col">
        <div className="card bg-base-100 w-full max-w-2xl shrink-0 shadow-2xl p-6">
          <form onSubmit={handleSignUp} className="card-body">
            <h1 className="text-3xl font-semibold text-center mb-6">
              Register your account
            </h1>
            <div className="divider"></div>

            {/* Name Input */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold">Your Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                className="input input-bordered text-lg"
                required
              />
            </div>

            {/* Photo URL Input */}
            <div className="form-control mt-4">
              <label className="label">
                <span className="label-text font-bold">Your Photo URL</span>
              </label>
              <input
                type="url"
                name="photoUrl"
                placeholder="Enter your photo URL"
                className="input input-bordered text-lg"
                required
              />
            </div>

            {/* Email Input */}
            <div className="form-control mt-4">
              <label className="label">
                <span className="label-text font-bold">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="input input-bordered text-lg"
                required
              />
            </div>

            {/* Password Input */}
            <div className="form-control mt-4">
              <label className="label">
                <span className="label-text font-bold">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                className="input input-bordered text-lg"
                required
              />
            </div>

            {/* Confirm Password Input */}
            <div className="form-control mt-4">
              <label className="label">
                <span className="label-text font-bold">Confirm Password</span>
              </label>
              <input
                type="password"
                name="conPassword"
                placeholder="Confirm your password"
                className="input input-bordered text-lg"
                required
              />
            </div>

            <div className="form-control mt-6">
              <button className="btn bg-blue-500 hover:bg-blue-700 text-white py-3 px-6 text-lg rounded focus:outline-none focus:ring-2 focus:ring-blue-500 w-full">
                Register
              </button>
            </div>
            <p className="p-4 text-black text-sm">
              Don’t Have An Account?{" "}
              <Link to="/signIn" className="text-red-600 font-semibold">
                Login
              </Link>
            </p>
            {error && <p className="text-red-700">{error}</p>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
