import React, { useRef, useEffect } from "react";
import "./login.css";
import emailjs from "@emailjs/browser";
const Login = () => {
  useEffect(() => {
    var loginFirst = document.getElementById("loginFirst");
    if (localStorage.getItem("nameShiv") !== null) {
      loginFirst.style.display = "none";
    }
  }, []);
  const form = useRef();
  const sendEmail = (e) => {
    localStorage.setItem("nameShiv", e.target[0].value);
    localStorage.setItem("mailShiv", e.target[1].value);
    e.preventDefault();

    emailjs
      .sendForm(
        "service_unpt23j",
        "template_ryqzom5",
        form.current,
        "W-ghWs-nKjXUvCVe6"
      )
      .then(
        (result) => {
          console.log(result);
          e.target.reset();
          window.location.reload();
          alert("Email sent successfully !");
        },
        (error) => {
          console.log(error.text);
        }
      );
    if (e.target[0].value === "") {
      alert("Name required..!");
    } else {
      window.location.reload();
    }
  };
  return (
    <div id="loginFirst">
      <div id="bgLogin">
        <div id="contact">
          <h2 className="title">Login/SignUp</h2>

          <form id="contactForm" ref={form} onSubmit={sendEmail}>
            <input
              type="text"
              className="name"
              name="user_name"
              placeholder="First Name*"
            />

            <input
              type="email"
              className="email"
              name="user_email"
              placeholder="Your Email"
            />
            <textarea
              name="message"
              className="msg"
              rows="5"
              placeholder="Comments"
            ></textarea>
            <button type="submit" value="send" className="submitBtn">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
