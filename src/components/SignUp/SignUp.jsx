import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SignUp.css";
const SignUp = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleUserNameChange = (e) => {
    setUserName(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const reqObj = {
      userName,
      email,
      password,
    };
    console.log("reqOj", reqObj);
    navigate("/userDetail");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="usernamae">Username: </label>
          <input
            type="text"
            id="usernamae"
            value={userName}
            onChange={handleUserNameChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <div>
          <label>Password: </label>
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <button type="submit">Sign up</button>
      </form>
    </div>
  );
};

export default SignUp;
