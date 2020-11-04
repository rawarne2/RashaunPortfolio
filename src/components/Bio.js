import React, { Component } from "react";
import computerPhoto from "../images/computer-photo.jpg";
import ReactPhoto from "../images/react.png";
import reactNativePhoto from "../images/react-native.png";
import reduxPhoto from "../images/redux.png";
import htmlPhoto from "../images/html.png";
import cssPhoto from "../images/css.jpg";
import expressPhoto from "../images/express.png";
import gitPhoto from "../images/git.png";
import JavaScriptPhoto from "../images/JavaScript.png";
import nodePhoto from "../images/node.png";
import sqlPhoto from "../images/sql.png";
import npmPhoto from "../images/npm.png";
import sequelizePhoto from "../images/sequelize.png";
import jqueryPhoto from "../images/jquery.gif";
import herokuPhoto from "../images/heroku.jpg";
import chaiPhoto from "../images/chai.png";
import jasminePhoto from "../images/jasmine.svg";
import mochaPhoto from "../images/mocha.jpg";

export default function Bio() {
  const skillsPhotos = [
    ReactPhoto,
    reactNativePhoto,
    reduxPhoto,
    htmlPhoto,
    cssPhoto,
    expressPhoto,
    gitPhoto,
    JavaScriptPhoto,
    nodePhoto,
    sqlPhoto,
    npmPhoto,
    sequelizePhoto,
    jqueryPhoto,
    herokuPhoto,
    chaiPhoto,
    jasminePhoto,
    mochaPhoto
  ];
  return (
    <div className="Bio Content">
      <img src={computerPhoto} alt="Error" className="Profile-pic" />
      <p>
        Hello! I am a fullstack web developer in the early stages of my career.
        I graduated from the University of Illinois at Urbana-Champaign in 2016
        with a kinesiology degree. After working in the health and fitness
        industry, I realized that I wanted to be more creative, challenge myself
        mentally, and do something that I truly love. That's when I stumbled
        upon coding! I started to teach myself on my own but then decided to go
        to a coding bootcamp so that I could fully commit and learn best
        practices. I attended Fullstack Academy of Code's immersive software
        engineering bootcamp where I learned fullstack JavaScript and the basics
        of web development.
      </p>
      <br />
      <p>
        After my bootcamp, I began a 6.5 month apprenticeship at 84.51 which is
        nearing the end. During this apprenticeship, I learned a variety of new
        skills such as Java, Spring Boot, Angular, and many, many more while on
        the job. I was developing enterprise level, production code while pair
        programming or working solo. I had a mentor from a company called
        Gaslight who helped me get up to speed, taught me best practices, and
        more so that I can begin my career on the right foot. The apprenticeship
        also included book clubs, algorithm challenges, and side projects.
      </p>
      <br />
      <p>
        I am currently a fullstack web developer at Kinetic Vision. For this
        position, I help plan and develop projects from beginning to end. This
        includes scoping, estimates, feature design, development, bug fixes,
        documentation, and deployment. I also meet with clients to review
        features and discuss next steps. In addition, I review code and help
        co-ops and other developers improve their skills.
      </p>
      <p>
        Please get in touch with me if you are interested in having me join your
        development team or just want to know more about my skills.
      </p>
      <div className="Skills">
        <h1>Here are my skills!</h1>
        {skillsPhotos.map(skill => (
          <img src={skill} alt="Error" />
        ))}
        <h3>
          Also, Java, Spring, Spring Boot, Angular, Ngrx, Rxjs, Pivotal Cloud
          Foundry, Jest, Python, Tornado, TypeScript, and Docker.
        </h3>
      </div>
    </div>
  );
}

//give discription of each skill in a "learn more" dropdown menue
