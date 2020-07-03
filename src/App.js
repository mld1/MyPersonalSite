import React from "react";
import "./App.css";
import cloud from "./images/cloud.png";
import mountain from "./images/mountain.png";
import ProfilePic from "./images/profileimage.jpeg";
import Skills from "./images/skills.png";
import Laptop from "./images/analytics.png";

function App() {
  return (
    <div className="App">
      <div className="top-container">
        <img src={cloud} alt="cloud" className="top-cloud"></img>
        <h1>I'm Marsha</h1>
        <h2 className="subtitle">
          a <span className="pro">pro</span>grammer
        </h2>
        <img src={cloud} alt="cloud" className="bottom-cloud"></img>
        <img src={mountain} alt="mountain" className="mountain"></img>
      </div>
      <br></br>
      <div className="middle-container">
        <div className="profile">
          <img
            src={ProfilePic}
            alt="My profile pic"
            className="profilePic"
          ></img>
          <h2>Hello</h2>
          <p>
            I'm a Web Developer who uses React, JavaScript, and CSS to create
            websites you <span className="emphasiseIt">really</span> want to
            look it. I also <span className="perfectPink">&hearts;</span>{" "}
            coffee, nature, and electric guitar.
          </p>
        </div>
        <hr></hr>
        <div className="skills">
          <h2>My Skills</h2>
          <div className="skill-row">
            <img className="skillsPic" src={Skills} alt=""></img>
            <h3>Lorem & Ipsum</h3>
            <p className="skillDescription">
              Lorem ipsum dolor sit amet, quis in duis, iaculis id felis.
              Consectetuer vestibulum, nunc urna lectus, erat ligula. Hendrerit
              nam, lectus ante, ut lorem eros.
            </p>
          </div>
          <div className="skill-row">
            <img className="laptopPic" src={Laptop} alt=""></img>
            <h3>Lorem Ipsum Dolor</h3>
            <p className="laptopDescription">
              Lorem ipsum dolor sit amet, mauris sed consectetuer. Etiam et eu,
              bibendum interdum, lacus quis mauris. Curabitur wisi, quisque vel
              eu, rutrum nam.
            </p>
          </div>
        </div>
        <hr></hr>
        <div className="contact-me">
          <h2>Get In Touch</h2>
          <h3>Lorem ipsum dolor sit amet, non elit.</h3>
          <p>
            Lorem ipsum dolor sit amet, in quis, aenean amet. Phasellus sodales,
            tellus donec dui, ornare erat.
          </p>
          <a className="btn" href="mailto:marshaleonoradunn@gmail.com">
            CONTACT ME
          </a>
        </div>
      </div>

      <div className="bottom-container">
        <a className="footer-link" href="https://www.linkedin.com/">
          LinkedIn
        </a>

        <a className="footer-link" href="https://www.appbrewery.co/">
          Website
        </a>
        <p className="footer-copyright">© 2020 Marsha Dunn.</p>
      </div>
    </div>
  );
}

export default App;
