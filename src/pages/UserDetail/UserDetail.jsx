import { useState } from "react";
import "./UserDetail.css";
const UserDetail = () => {
  const [activeTab, setActivateTab] = useState("education");
  const handleTabClick = (tab) => {
    setActivateTab(tab);
  };
  return (
    <div className="userDetail">
      <div className="userCompleteDetail">
        <div className="types">
          <span
            className={`education ${activeTab == "education" ? "active" : ""}`}
            onClick={() => {
              handleTabClick("education");
            }}
          >
            Education
          </span>
          <span
            className={`experience ${
              activeTab == "experience" ? "active" : ""
            }`}
            onClick={() => {
              handleTabClick("experience");
            }}
          >
            Experience
          </span>
          <span
            className={`skills ${activeTab == "skills" ? "active" : ""}`}
            onClick={() => {
              handleTabClick("skills");
            }}
          >
            Skills
          </span>
          <span
            className={`projects ${activeTab == "projects" ? "active" : ""}`}
            onClick={() => {
              handleTabClick("projects");
            }}
          >
            Projects
          </span>
          <span
            className={`achievement ${
              activeTab == "achievement" ? "active" : ""
            }`}
            onClick={() => {
              handleTabClick("achievement");
            }}
          >
            Achievement
          </span>
        </div>

        <div className="container">
          {activeTab === "education" && <h1>education</h1>}
          {activeTab === "experience" && <h1>experience</h1>}
          {activeTab === "skills" && <h1>skills</h1>}
          {activeTab === "projects" && <h1>projects</h1>}
          {activeTab === "achievement" && <h1>achievement</h1>}
        </div>
      </div>
    </div>
  );
};

export default UserDetail;
