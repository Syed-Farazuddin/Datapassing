import { useState } from "react";
import axios from "axios";
// import useNavigate from "react-router-dom";
import { useRef } from "react";
function Login() {
  const hook = useRef();
  //   const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/login", [name, password])
      .then((res) => {
        console.log(res);
        // navigate("/home");
        // hook("/home");
      })
      .catch((e) => {
        console.log(e);
      });
  };
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="bg-slate-400 h-[100vh] flex items-center justify-center">
      <form
        action=""
        onSubmit={handleSubmit}
        className="flex justify-center items-center gap-4 flex-col bg-red-400 h-[400px] w-80"
      >
        <h1 className="text-2xl text-black">Login Page</h1>
        <input
          className="border-red-200 border-2 rounded-md p-3"
          type="text"
          id="name"
          placeholder="Name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <input
          className="p-3 border-red-200 border-2 rounded-md "
          placeholder="Password"
          type="password"
          id="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button className="p-3 bg-purple-500 rounded-lg w-1/2" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Login;
