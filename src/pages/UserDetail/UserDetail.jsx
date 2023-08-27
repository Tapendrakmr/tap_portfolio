import { useState } from "react";
import Profile from "../../components/Profile/Profile";
import Education from "../../components/Education/Education";
import Experience from "../../components/Experience/Experience";
import Achievment from "../../components/Achievment/Achievment";
import Projects from "../../components/Projects/Projects";
import Skills from "../../components/Skills/Skills";
import "./UserDetail.css";
const UserDetail = () => {
  const [activeTab, setActivateTab] = useState("profile");
  const handleTabClick = (tab) => {
    setActivateTab(tab);
  };
  return (
    <div className="userDetail">
      <div className="userCompleteDetail">
        <div className="types">
          <span
            className={`profile ${activeTab == "profile" ? "active" : ""}`}
            onClick={() => {
              handleTabClick("profile");
            }}
          >
            Profile
          </span>
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
          {activeTab === "profile" && <Profile />}
          {activeTab === "education" && <Education />}
          {activeTab === "experience" && <Experience />}
          {activeTab === "skills" && <Skills />}
          {activeTab === "projects" && <Projects />}
          {activeTab === "achievement" && <Achievment />}
        </div>
      </div>
    </div>
  );
};

export default UserDetail;
