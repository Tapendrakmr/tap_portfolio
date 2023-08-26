import { useState } from "react";
import SignIn from "../../components/SignIn/SignIn";
import SignUp from "../../components/SignUp/SignUp";
import "./Auth.css";
const Auth = () => {
  const [activeTab, setActivateTab] = useState("signIn");
  const handleTabClick = (tab) => {
    setActivateTab(tab);
  };
  return (
    <div className="auth">
      Auth
      <div className="authentication">
        {/* type */}
        <div className="authType">
          <span
            className={`signIn ${activeTab == "signIn" ? "active" : ""}`}
            onClick={() => {
              handleTabClick("signIn");
            }}
          >
            Sign In
          </span>
          <span
            className={`signUp ${activeTab == "signUp" ? "active" : ""}`}
            onClick={() => {
              handleTabClick("signUp");
            }}
          >
            SignUp
          </span>
        </div>
        <div className="container">
          {activeTab === "signIn" && <SignIn />}
          {activeTab === "signUp" && <SignUp />}
        </div>
      </div>
    </div>
  );
};

export default Auth;
