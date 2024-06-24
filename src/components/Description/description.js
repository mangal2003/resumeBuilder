import React, { useEffect } from "react";
import "./description.css";
const Description = () => {
  useEffect(() => {
    let navbarWrapper = document.getElementById("navbarWrapper");
    let descriptionWrapper = document.getElementById("descriptionWrapper");
    if (localStorage.getItem("nameShiv") === null) {
      navbarWrapper.style.display = "none";
      descriptionWrapper.style.display = "none";
    }
  }, []);
  const detailForResume = () => {
    let descriptionWrapper = document.getElementById("descriptionWrapper");
    descriptionWrapper.style.display = "none";
    let information = document.getElementById("information");
    information.style.display = "flex";
  };
  return (
    <div id="descriptionWrapper">
      <h2>
        Hey{" "}
        <span className="userName">'{localStorage.getItem("nameShiv")}' </span>!
      </h2>
      <h1 className="descHeading">
        Elevate Your Career with a Stunning Resume.!
      </h1>
      <p className="descHeadingDesc">
        Craft a professional resume that stands out from the crowd with our
        easy-to-use resume building app. Start your journey to success today!
      </p>
      <div className="features">
        <h2>Offerings</h2>

        <p className="featTitleDesc">
          <h3 className="featTitle">Customize Your Resume Anytime, Anywhere</h3>
          Your resume is a living document, and the app makes it easy to update
          and personalize it whenever you need. Add new skills, tweak your
          experiences, or adjust the layout on-the-go, ensuring your resume
          always reflects your current qualifications
        </p>
        <p className="featTitleDesc">
          <h3 className="featTitle">
            Download Your Resume in Multiple Formats
          </h3>
          Once you've perfected your resume, download it in the format of your
          choice. The app supports various file types, making it simple to share
          your resume with employers, upload it to job portals, or print it out
          for interviews
        </p>
      </div>
      <div className="howItWorks">
        <h2>How It Works</h2>

        <p className="howItWorksDesc">
          <h4>
            Customize your resume by adding your personal information, work
            experience, and skills.
          </h4>
        </p>
        <p className="howItWorksDesc">
          <h4>Preview your resume to ensure it looks perfect.</h4>
        </p>
        <p className="howItWorksDesc">
          <h4>
            Download your resume in your preferred format and start applying for
            jobs!
          </h4>
        </p>
      </div>
      <div className="faq">
        <h2>Frequently Asked Questions</h2>

        <p className="faqs">
          <details>
            <summary>How do I download my resume?</summary> <br />
            After customizing your resume, you can download it by clicking the
            "Download" button and selecting your preferred format.
          </details>
        </p>
        <p className="faqs">
          <details>
            <summary>Can I edit my resume after downloading?</summary> <br />
            Yes, you can always return to the app, make changes, and download
            the updated version of your resume.
          </details>
        </p>
      </div>

      <div className="callToAction">
        <p>
          <h3>Ready to Build Your Perfect Resume?</h3>
          <button className="callToActionBtn" onClick={detailForResume}>
            Get Started Now
          </button>
        </p>
      </div>
    </div>
  );
};

export default Description;
