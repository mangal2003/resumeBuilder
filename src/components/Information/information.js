import React, { useState, useRef } from "react";
import "./information.css";

const Information = () => {
  const [personalInfo, setPersonalInfo] = useState({
    fullName: "",
    email: "",
    mobile: "",
    address: "",
  });
  const [summary, setSummary] = useState("");
  const [educationLast, setEducationLast] = useState({
    institute: "",
    degree: "",
    endYear: "",
  });
  const [educationSecLast, setEducationSecLast] = useState({
    institute2: "",
    degree2: "",
    endYear2: "",
  });
  const [educationThirdLast, setEducationThirdLast] = useState({
    institute3: "",
    degree3: "",
    endYear3: "",
  });
  const [workExpFirst, setWorkExpFirst] = useState({
    jobTitle: "",
    company: "",
    yearWorked: "",
  });
  const [workExpSec, setWorkExpSec] = useState({
    jobTitle2: "",
    company2: "",
    yearWorked2: "",
  });

  const [skills, setSkills] = useState({
    skill1: "",
    skill2: "",
    skill3: "",
  });
  const [languages, setLanguages] = useState({
    language1: "",
    language2: "",
    language3: "",
  });

  const personalInfoRef = useRef(null);
  const summaryRef = useRef(null);
  const educationLastRef = useRef(null);
  const educationSecLastRef = useRef(null);
  const educationThirdLastRef = useRef(null);
  const workExperienceRef = useRef(null);
  const workExperienceSecRef = useRef(null);
  const skillsRef = useRef(null);
  const languagesRef = useRef(null);
  const fillDetailRef = useRef(null);
  const previewRef = useRef(null);
  const workExpOnRBRef = useRef(null);

  const handlePersonalInfoChange = (e) => {
    const { name, value } = e.target;
    setPersonalInfo({ ...personalInfo, [name]: value });
  };
  const handleEducationLastChange = (e) => {
    const { name, value } = e.target;
    setEducationLast({ ...educationLast, [name]: value });
  };
  const handleEducationSecLastChange = (e) => {
    const { name, value } = e.target;
    setEducationSecLast({ ...educationSecLast, [name]: value });
  };
  const handleEducationThirdLastChange = (e) => {
    const { name, value } = e.target;
    setEducationThirdLast({ ...educationThirdLast, [name]: value });
  };
  const handleWorkExpFirstChange = (e) => {
    const { name, value } = e.target;
    setWorkExpFirst({ ...workExpFirst, [name]: value });
  };
  const handleWorkExpSecChange = (e) => {
    const { name, value } = e.target;
    setWorkExpSec({ ...workExpSec, [name]: value });
  };
  const handleSkillsChange = (e) => {
    const { name, value } = e.target;
    setSkills({ ...skills, [name]: value });
  };
  const handleLanguagesChange = (e) => {
    const { name, value } = e.target;
    setLanguages({ ...languages, [name]: value });
  };

  const savePersonalInfo = () => {
    localStorage.setItem("fullNameRB", personalInfo.fullName);
    localStorage.setItem("emailRB", personalInfo.email);
    localStorage.setItem("mobileRB", personalInfo.mobile);
    localStorage.setItem("addressRB", personalInfo.address);
    personalInfoRef.current.style.display = "none";
    summaryRef.current.style.display = "flex";
  };
  const saveProfessionalSumm = () => {
    localStorage.setItem("summaryRB", summary);
    summaryRef.current.style.display = "none";
    educationLastRef.current.style.display = "flex";
  };
  const saveEducationLast = () => {
    localStorage.setItem("educationLastInstitute", educationLast.institute);
    localStorage.setItem("educationLastDegree", educationLast.degree);
    localStorage.setItem("educationLastEndyear", educationLast.endYear);
    educationLastRef.current.style.display = "none";
    educationSecLastRef.current.style.display = "flex";
  };
  const saveEducationSecLast = () => {
    localStorage.setItem(
      "educationSecLastInstitute",
      educationSecLast.institute2
    );
    localStorage.setItem("educationSecLastDegree", educationSecLast.degree2);
    localStorage.setItem("educationSecLastEndyear", educationSecLast.endYear2);
    educationSecLastRef.current.style.display = "none";
    educationThirdLastRef.current.style.display = "flex";
  };
  const saveEducationThirdLast = () => {
    localStorage.setItem(
      "educationThirdLastInstitute",
      educationThirdLast.institute3
    );
    localStorage.setItem(
      "educationThirdLastDegree",
      educationThirdLast.degree3
    );
    localStorage.setItem(
      "educationThirdLastEndyear",
      educationThirdLast.endYear3
    );
    educationThirdLastRef.current.style.display = "none";
    workExperienceRef.current.style.display = "flex";
  };
  const saveWorkExpFirst = () => {
    localStorage.setItem("jobTitle1", workExpFirst.jobTitle);
    localStorage.setItem("company1", workExpFirst.company);
    localStorage.setItem("yearWorked1", workExpFirst.yearWorked);
    workExperienceSecRef.current.style.display = "flex";
    workExperienceRef.current.style.display = "none";
  };
  const saveWorkExpSec = () => {
    localStorage.setItem("jobTitle2", workExpSec.jobTitle2);
    localStorage.setItem("company2", workExpSec.company2);
    localStorage.setItem("yearWorked2", workExpSec.yearWorked2);
    workExperienceSecRef.current.style.display = "none";
    skillsRef.current.style.display = "flex";
  };
  const saveSkills = () => {
    localStorage.setItem("skill1", skills.skill1);
    localStorage.setItem("skill2", skills.skill2);
    localStorage.setItem("skill3", skills.skill3);
    skillsRef.current.style.display = "none";
    languagesRef.current.style.display = "flex";
  };
  const saveLanguages = () => {
    localStorage.setItem("language1", languages.language1);
    localStorage.setItem("language2", languages.language2);
    localStorage.setItem("language3", languages.language3);
    languagesRef.current.style.display = "none";
    fillDetailRef.current.style.display = "none";
    window.print();
  };

  const backToPersonalInfo = () => {
    personalInfoRef.current.style.display = "flex";
    summaryRef.current.style.display = "none";
  };
  const backToProfessionalSumm = () => {
    educationLastRef.current.style.display = "none";
    summaryRef.current.style.display = "flex";
  };
  const backToEducationLast = () => {
    educationLastRef.current.style.display = "flex";
    educationSecLastRef.current.style.display = "none";
  };
  const backToEducationSecLast = () => {
    educationSecLastRef.current.style.display = "flex";
    educationThirdLastRef.current.style.display = "none";
  };
  const backToEducationThirdLast = () => {
    educationThirdLastRef.current.style.display = "flex";
    workExperienceRef.current.style.display = "none";
  };
  const backToWorkExpFirst = () => {
    workExperienceRef.current.style.display = "flex";
    workExperienceSecRef.current.style.display = "none";
  };
  const backToWorkExpSec = () => {
    workExperienceSecRef.current.style.display = "flex";
    skillsRef.current.style.display = "none";
  };
  const backToSkills = () => {
    languagesRef.current.style.display = "none";
    skillsRef.current.style.display = "flex";
  };

  return (
    <div id="information">
      <h2 ref={fillDetailRef}>Fill Your Details</h2>
      <div ref={personalInfoRef} className="personalInfo">
        <h4>Personal Information</h4> <br />
        <input
          type="text"
          name="fullName"
          value={personalInfo.fullName}
          onChange={handlePersonalInfoChange}
          placeholder="Full Name *"
        />
        <input
          type="email"
          name="email"
          value={personalInfo.email}
          onChange={handlePersonalInfoChange}
          placeholder="Email *"
        />
        <input
          type="text"
          name="mobile"
          value={personalInfo.mobile}
          onChange={handlePersonalInfoChange}
          placeholder="Mobile Number *"
        />
        <input
          type="text"
          name="address"
          value={personalInfo.address}
          onChange={handlePersonalInfoChange}
          placeholder="Address *"
        />
        <button onClick={savePersonalInfo}>Next</button>
      </div>
      <div ref={summaryRef} className="summary" style={{ display: "none" }}>
        <h4>Professional Summary</h4> <br />
        <textarea
          value={summary}
          onChange={(e) => setSummary(e.target.value)}
          placeholder="Write Summary About Yourself"
          rows="10"
          cols="20"
        ></textarea>
        <span className="btnFlex">
          <button onClick={backToPersonalInfo}>Previous</button>
          <button onClick={saveProfessionalSumm}>Next</button>
        </span>
      </div>
      <div
        ref={educationLastRef}
        className="educationLast"
        style={{ display: "none" }}
      >
        <h4>Education - 1/3</h4> <br />
        <input
          type="text"
          placeholder="Institute *"
          name="institute"
          value={educationLast.institute}
          onChange={handleEducationLastChange}
        />
        <input
          type="text"
          placeholder="Degree *"
          name="degree"
          value={educationLast.degree}
          onChange={handleEducationLastChange}
        />
        <input
          type="month"
          name="endYear"
          value={educationLast.endYear}
          onChange={handleEducationLastChange}
        />
        <span className="btnFlex">
          <button onClick={backToProfessionalSumm}>Previous</button>
          <button onClick={saveEducationLast}>Next</button>
        </span>
      </div>
      <div
        ref={educationSecLastRef}
        className="educationSecLast"
        style={{ display: "none" }}
      >
        <h4>Education - 2/3</h4> <br />
        <input
          type="text"
          placeholder="Institute *"
          name="institute2"
          value={educationSecLast.institute2}
          onChange={handleEducationSecLastChange}
        />
        <input
          type="text"
          placeholder="Degree *"
          name="degree2"
          value={educationSecLast.degree2}
          onChange={handleEducationSecLastChange}
        />
        <input
          type="month"
          name="endYear2"
          value={educationSecLast.endYear2}
          onChange={handleEducationSecLastChange}
        />
        <span className="btnFlex">
          <button onClick={backToEducationLast}>Previous</button>
          <button onClick={saveEducationSecLast}>Next</button>
        </span>
      </div>
      <div
        ref={educationThirdLastRef}
        className="educationThirdLast"
        style={{ display: "none" }}
      >
        <h4>Education - 3/3</h4> <br />
        <input
          type="text"
          placeholder="Institute *"
          name="institute3"
          value={educationThirdLast.institute3}
          onChange={handleEducationThirdLastChange}
        />
        <input
          type="text"
          placeholder="Degree *"
          name="degree3"
          value={educationThirdLast.degree3}
          onChange={handleEducationThirdLastChange}
        />
        <input
          type="month"
          name="endYear3"
          value={educationThirdLast.endYear3}
          onChange={handleEducationThirdLastChange}
        />
        <span className="btnFlex">
          <button onClick={backToEducationSecLast}>Previous</button>
          <button onClick={saveEducationThirdLast}>Next</button>
        </span>
      </div>
      <div ref={workExperienceRef} className="workExperience">
        <h4>Work Experience - 1/2</h4> <br />
        <input
          type="text"
          placeholder="Job Title *"
          name="jobTitle"
          value={workExpFirst.jobTitle}
          onChange={handleWorkExpFirstChange}
        />
        <input
          type="text"
          placeholder="Company *"
          name="company"
          value={workExpFirst.company}
          onChange={handleWorkExpFirstChange}
        />
        <input
          type="number"
          placeholder="Years Worked *"
          name="yearWorked"
          value={workExpFirst.yearWorked}
          onChange={handleWorkExpFirstChange}
        />
        <span className="btnFlex">
          <button onClick={backToEducationThirdLast}>Previous</button>
          <button onClick={saveWorkExpFirst}>Next</button>
        </span>
      </div>
      <div ref={workExperienceSecRef} className="workExperienceSec">
        <h4>Work Experience - 2/2</h4> <br />
        <input
          type="text"
          placeholder="Job Title *"
          name="jobTitle2"
          value={workExpSec.jobTitle2}
          onChange={handleWorkExpSecChange}
        />
        <input
          type="text"
          placeholder="Company *"
          name="company2"
          value={workExpSec.company2}
          onChange={handleWorkExpSecChange}
        />
        <input
          type="number"
          placeholder="Years Worked *"
          name="yearWorked2"
          value={workExpSec.yearWorked2}
          onChange={handleWorkExpSecChange}
        />
        <span className="btnFlex">
          <button onClick={backToWorkExpFirst}>Previous</button>
          <button onClick={saveWorkExpSec}>Next</button>
        </span>
      </div>
      <div ref={skillsRef} className="skills">
        <h4>Skills</h4> <br />
        <input
          type="text"
          name="skill1"
          placeholder="Skill 1 *"
          value={skills.skill1}
          onChange={handleSkillsChange}
        ></input>
        <input
          type="text"
          name="skill2"
          placeholder="Skill 2 *"
          value={skills.skill2}
          onChange={handleSkillsChange}
        ></input>
        <input
          type="text"
          name="skill3"
          placeholder="Skill 3 *"
          value={skills.skill3}
          onChange={handleSkillsChange}
        ></input>
        <span className="btnFlex">
          <button onClick={backToWorkExpSec}>Previous</button>
          <button onClick={saveSkills}>Next</button>
        </span>
      </div>
      <div ref={languagesRef} className="languages">
        <h4>Languages</h4> <br />
        <input
          type="text"
          name="language1"
          placeholder="Language 1 *"
          value={languages.language1}
          onChange={handleLanguagesChange}
        ></input>
        <input
          type="text"
          name="language2"
          placeholder="Language 2"
          value={languages.language2}
          onChange={handleLanguagesChange}
        ></input>
        <input
          type="text"
          name="language3"
          placeholder="Language 3"
          value={languages.language3}
          onChange={handleLanguagesChange}
        ></input>
        <span className="btnFlex">
          <button onClick={backToSkills}>Previous</button>
          <button onClick={saveLanguages}>Preview</button>
        </span>
      </div>

      <div ref={previewRef} className="preview">
        <h2 className="nameOfCandidate">
          {localStorage.getItem("fullNameRB").toUpperCase()}
        </h2>
        <br />
        <p>
          {localStorage.getItem("addressRB")} |{" "}
          {localStorage.getItem("mobileRB")} | {localStorage.getItem("emailRB")}
        </p>{" "}
        <br />
        <h3>About Me</h3> <hr />
        <br />
        <p className="summOnRB">{localStorage.getItem("summaryRB")}</p>
        <br />
        <h3>Education</h3>
        <hr />
        <div className="eduWrapper">
          <section className="educationSection">
            <h4>{localStorage.getItem("educationLastDegree").toUpperCase()}</h4>
            <span>{localStorage.getItem("educationLastEndyear")}</span>
          </section>
          {localStorage.getItem("educationLastInstitute")}
          <section className="educationSection">
            <h4>
              {localStorage.getItem("educationSecLastDegree").toUpperCase()}
            </h4>
            <span>{localStorage.getItem("educationSecLastEndyear")}</span>
          </section>
          {localStorage.getItem("educationSecLastInstitute")}
          <section className="educationSection">
            <h4>
              {localStorage.getItem("educationThirdLastDegree").toUpperCase()}
            </h4>
            <span>{localStorage.getItem("educationThirdLastEndyear")}</span>
          </section>
          {localStorage.getItem("educationThirdLastInstitute")}
        </div>
        <section ref={workExpOnRBRef} className="workExpOnRB">
          <br />
          <h3>Work Experience</h3>
          <hr /> <br />
          <div className="expWrapper">
            <h4>{localStorage.getItem("jobTitle1").toUpperCase()}</h4>
            <section className="expSection">
              <span>@ {localStorage.getItem("company1")}</span>
              <span>{localStorage.getItem("yearWorked1")} Year(s) </span>
            </section>
            <h4>{localStorage.getItem("jobTitle2").toUpperCase()}</h4>
            <section className="expSection">
              <span> @ {localStorage.getItem("company2")}</span>
              <span>{localStorage.getItem("yearWorked2")} Year(s) </span>
            </section>
          </div>
        </section>
        <section>
          <br />
          <h3>Skills</h3>
          <hr />
          <br />
          <p>
            {localStorage.getItem("skill1")}&nbsp;
            {localStorage.getItem("skill2")} &nbsp;
            {localStorage.getItem("skill3")}{" "}
          </p>
        </section>
        <section>
          <br />
          <h3>Languages</h3>
          <hr />
          <br />
          <p>
            {localStorage.getItem("language1")} &nbsp;{" "}
            {localStorage.getItem("language2")} &nbsp;{" "}
            {localStorage.getItem("language3")}{" "}
          </p>
          <br />
        </section>
      </div>
    </div>
  );
};

export default Information;
