import { useState } from "react";
import IMG from "/images/loginImage.png";

const roles = ["Admin", "Student", "Faculty"];

const LoginPage = () => {
  const [role, setRole] = useState("Student");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);

  return (
    <div className="mainSec h-screen flex justify-center items-center">
      <div className="max-h-[65vh] w-[65vw] flex justify-center items-center">
        <div>
          <img src={IMG} alt="" className="max-h-[55vh]" />
        </div>
        <div className="loginSec">
          <div className="flex justify-center items-center">
            <div className="w-96 p-6 rounded-lg max-h-[55vh]">
              <div className="flex justify-center space-x-2 mb-4 border-2 border-blue-300 p-2 w-72 ml-6 rounded-md shadow-sm shadow-blue-300">
                {roles.map((r) => (
                  <button
                    key={r}
                    onClick={() => setRole(r)}
                    className={`px-4 py-1 rounded-md ${
                      role === r
                        ? "bg-blue-500 text-white"
                        : "bg-white text-black"
                    }`}
                  >
                    {r}
                  </button>
                ))}
              </div>
              <h2 className="text-lg font-semibold text-left mb-4">
                Nice to see you again
              </h2>
              <div className="mb-4">
                <label className="block text-sm mb-1 font-light">Login</label>
                <input
                  type="text"
                  placeholder="Email or phone number"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-2 font-medium rounded outline-none bg-gray-100"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm mb-1 font-light">
                  Password
                </label>
                <input
                  type="password"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full p-2 font-medium outline-none rounded bg-gray-100"
                />
              </div>
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    checked={remember}
                    onChange={() => setRemember(!remember)}
                    className="mr-2"
                  />
                  <span>Remember me</span>
                </div>
                <a href="#" className="text-sm text-blue-500 hover:underline">
                  Forgot password?
                </a>
              </div>
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded">
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
