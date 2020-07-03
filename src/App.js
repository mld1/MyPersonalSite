import React from "react";
import "./App.css";
import cloud from "./images/cloud.png";
import mountain from "./images/mountain.png";

function App() {
  return (
    <div className="App">
      <div className="top-container">
        <img src={cloud} alt="cloud" className="top-cloud"></img>
        <h1>I'm Marsha</h1>
        <p>
          a <span className="pro">pro</span>grammer
        </p>
        <img src={cloud} alt="cloud" className="bottom-cloud"></img>
        <img src={mountain} alt="mountain" className="mountain"></img>
      </div>

      <div className="middle-container">
        <div className="profile">
          <img src="" alt=""></img>
          <h2>Hello.</h2>
          <p>
            Lorem ipsum dolor sit amet, vitae volutpat, dui conubia, dolor urna.
            Non auctor, montes nulla distinctio.
          </p>
        </div>
        <hr></hr>
        <div className="skills">
          <h2>My Skills.</h2>
          <div className="skill-row">
            <img className="" src="" alt=""></img>
            <h3>Lorem & Ipsum</h3>
            <p>
              Lorem ipsum dolor sit amet, quis in duis, iaculis id felis.
              Consectetuer vestibulum, nunc urna lectus, erat ligula. Hendrerit
              nam, lectus ante, ut lorem eros.
            </p>
          </div>
          <div className="skill-row">
            <img className="" src="" alt=""></img>
            <h3>Lorem Ipsum Dolor</h3>
            <p>
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
        <p>© 2020 Marsha Dunn.</p>
      </div>
    </div>
  );
}

export default App;
