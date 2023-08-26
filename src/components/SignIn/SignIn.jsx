import { useState } from "react";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email: </label>
          <input type="email" value={email} onChange={handleEmailChange} />
        </div>
        <div>
          <label>Password: </label>
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
};

export default SignIn;