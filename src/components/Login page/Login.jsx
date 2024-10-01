import React, { useState } from "react";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-[550px] sm:min-h-[600px] bg-gray-100 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200">
      <div className="container max-w-md mx-auto p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
        <div className="flex justify-center mb-4">
          <button
            className={`px-4 py-2 ${
              isLogin
                ? "bg-gradient-to-r from-primary to-secondary text-white"
                : "bg-gray-200 dark:bg-gray-700"
            } rounded-l-full`}
            onClick={() => setIsLogin(true)}
          >
            Login
          </button>
          <button
            className={`px-4 py-2 ${
              !isLogin
                ? "bg-gradient-to-r from-primary to-secondary text-white"
                : "bg-gray-200 dark:bg-gray-700"
            } rounded-r-full`}
            onClick={() => setIsLogin(false)}
          >
            Sign Up
          </button>
        </div>
        {isLogin ? (
          <div>
            <h2 className="text-3xl font-bold text-center mb-4">Login</h2>
            <form>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-3 py-2 border rounded-md bg-gray-200 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                  Password
                </label>
                <input
                  type="password"
                  className="w-full px-3 py-2 border rounded-md bg-gray-200 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <button
                type="submit"
                className="w-full py-2 bg-gradient-to-r from-primary to-secondary text-white rounded-md hover:scale-105 duration-200"
              >
                Login
              </button>
            </form>
          </div>
        ) : (
          <div>
            <h2 className="text-3xl font-bold text-center mb-4">Sign Up</h2>
            <form>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-3 py-2 border rounded-md bg-gray-200 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                  Password
                </label>
                <input
                  type="password"
                  className="w-full px-3 py-2 border rounded-md bg-gray-200 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                  Confirm Password
                </label>
                <input
                  type="password"
                  className="w-full px-3 py-2 border rounded-md bg-gray-200 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <button
                type="submit"
                className="w-full py-2 bg-gradient-to-r from-primary to-secondary text-white rounded-md hover:scale-105 duration-200"
              >
                Sign Up
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;
