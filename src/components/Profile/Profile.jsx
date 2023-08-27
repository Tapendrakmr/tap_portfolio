import { useState } from "react";
// import { useNavigate } from "react-router-dom";
import "./profile.css";
const Profile = () => {
  //   const navigate = useNavigate();
  const [fname, setFName] = useState("");
  const [lname, setLName] = useState("");
  const [phone, setPhone] = useState("");
  const [linkedIn, setLinkedIn] = useState("");
  const [github, setGithub] = useState("");

  const handleFname = (e) => {
    setFName(e.target.valeue);
  };
  const handleLname = (e) => {
    setLName(e.target.valeue);
  };
  const handlePhone = (e) => {
    setPhone(e.target.valeue);
  };
  const handleLinkedIn = (e) => {
    setLinkedIn(e.target.valeue);
  };
  const handleGithub = (e) => {
    setGithub(e.target.valeue);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const reqObj = {
      fname,
      lname,
      phone,
      linkedIn,
      github,
    };
    console.log("reqObje", reqObj);
  };
  return (
    <div className="PPage">
      <div className="profileDetail">
        <div className="fname row">
          {/* first name  */}
          <div className="col-25">
            <label htmlFor="fname">First Name</label>
          </div>
          <div className="col-75">
            <input
              type="text"
              id="fname"
              name="firstname"
              placeholder="Your name.."
              value={fname}
              onChange={handleFname}
            />
          </div>
        </div>
        <div className="lname row">
          <div className="col-25">
            <label htmlFor="lname">Last Name</label>
          </div>
          <div className="col-75">
            <input
              type="text"
              id="lname"
              name="lastname"
              placeholder="Your name.."
              value={lname}
              onChange={handleLname}
            />
          </div>
          {/* last name  */}
        </div>
        <div className="phoneNo row">
          {/* phone no  */}
          <div className="col-25">
            <label htmlFor="phone">Phone no.</label>
          </div>
          <div className="col-75">
            <input
              type="text"
              id="phone"
              name="phone"
              placeholder="Your phone.."
              value={phone}
              onChange={handlePhone}
            />
          </div>
        </div>
        <div className="linkedIn row">
          {/* LinkedIn url  */}
          <div className="col-25">
            <label htmlFor="linkedIn">LinkedIn url.</label>
          </div>
          <div className="col-75">
            <input
              type="text"
              id="linkedIn"
              name="linkedIn"
              placeholder="Your linkedIn.."
              value={linkedIn}
              onChange={handleLinkedIn}
            />
          </div>
        </div>
        <div className="github row">
          {/* Linkedin url  */}
          <div className="col-25">
            <label htmlFor="github">Github url.</label>
          </div>
          <div className="col-75">
            <input
              type="text"
              id="github"
              name="github"
              placeholder="Your github.."
              value={github}
              onChange={handleGithub}
            />
          </div>
        </div>

        <div className="submitBtn row">
          <input type="submit" value="Submit" onClick={handleSubmit} />
        </div>
      </div>
    </div>
  );
};

export default Profile;
