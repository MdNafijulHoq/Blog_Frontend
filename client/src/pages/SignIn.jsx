import { Eye, EyeOff } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import Return from '../components/Return';
import toast from 'react-hot-toast';
import AuthStore from '../hooks/useAuthStore';

const SignIn = () => {
    const [showPass, setShowPass] = useState(false);
    const navigate = useNavigate();
    const { AuthUser, signIn } = AuthStore();

    const [formData, setFormData] = useState({ username: "", password: "" });
    const handleInput = (key, value) => {
    setFormData((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  useEffect(() => {
    if(AuthUser){
      navigate("/")
    }
  },[AuthUser, navigate])


  const handleFormSubmit = (e) => {
    e.preventDefault();
    if(!formData.username || !formData.password){
        return toast.error("All Fields are required");
      }
      if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/.test(formData.password)) {
        return toast.error("Invalid Credentials");
      }
      console.log("form Data", formData);
      signIn(formData);
  };
    
    return (
        <div className="h-screen flex justify-center items-center bg-gray-100">
      <form onSubmit={handleFormSubmit}
        className="max-w-[400px] w-full text-center border border-gray-300/60 rounded-2xl px-8 bg-white"
      >
        <div onClick={() => navigate("/")} className="flex justify-end">
          <Return />
        </div>

        <h1 className="text-gray-900 text-3xl mt-10 font-medium">Login</h1>
        <p className="text-gray-500 text-sm mt-2">Please sign in to continue</p>

        <div className="flex items-center w-full mt-10 bg-white border border-gray-300/80 h-12 rounded-full overflow-hidden pl-6 gap-2">
          <svg
            width="18"
            height="18"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.125 13.125a4.375 4.375 0 0 1 8.75 0M10 4.375a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0"
              stroke="#6B7280"
              strokeOpacity=".6"
              strokeWidth="1.3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          <input
            className="bg-transparent text-gray-500 placeholder-gray-500 outline-none text-sm w-full h-full"
            type="text"
            value={formData.username}
            onChange={(e) => handleInput("username", e.target.value)}
            placeholder="Username"
            required
          />
        </div>

        <div className="relative flex items-center mt-4 w-full bg-white border border-gray-300/80 h-12 rounded-full overflow-hidden pl-6 gap-2">
          <svg
            width="13"
            height="17"
            viewBox="0 0 13 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13 8.5c0-.938-.729-1.7-1.625-1.7h-.812V4.25C10.563 1.907 8.74 0 6.5 0S2.438 1.907 2.438 4.25V6.8h-.813C.729 6.8 0 7.562 0 8.5v6.8c0 .938.729 1.7 1.625 1.7h9.75c.896 0 1.625-.762 1.625-1.7zM4.063 4.25c0-1.406 1.093-2.55 2.437-2.55s2.438 1.144 2.438 2.55V6.8H4.061z"
              fill="#6B7280"
            />
          </svg>
          <input
            type={showPass ? "text" : "password"}
            placeholder="Password"
            value={formData.password}
            onChange={(e) => handleInput("password", e.target.value)}
            className="bg-transparent text-gray-500 placeholder-gray-500 outline-none text-sm w-full h-full"
            required
          />
           <button
            type="button"
            onClick={() => setShowPass(!showPass)}
            className="absolute inset-y-0 right-0 pr-3 flex items-center"
          >
            {showPass ? (
              <Eye className="size-5 text-base-content/40" />
             
            ) : (
              <EyeOff className="size-5 text-base-content/40" />
            )}
          </button>
        </div>
        <div className="mt-5 text-left text-indigo-500">
          <a className="text-sm" href="#">
            Forgot password?
          </a>
        </div>

        <button
          type="submit"
          className="mt-2 w-full h-11 rounded-full text-white bg-indigo-500 hover:opacity-90 transition-opacity"
        >
         Log In
        </button>
        <p className="text-gray-500 text-sm mt-3 mb-11">
          Don’t have an account?{" "}
          <Link className="text-indigo-500" to="/sign-up">
            Sign up
          </Link>
        </p>
      </form>
    </div>
    );
};

export default SignIn;