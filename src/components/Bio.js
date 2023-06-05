import React from "react";
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
    mochaPhoto,
  ];
  return (
    <div className="Bio Content">
      <img src={computerPhoto} alt="Error" className="Profile-pic" />
      <p>
        Hello! I am a Fullstack Developer with a passion for creating web and
        mobile applications. I am currently looking for a full-time position
        that is remote or located in Cincinnati, but I am open to other roles as
        well. I am always looking to improve my skills and learn new
        technologies. I am a team player and I am always willing to help others.
        I am also a creative problem solver and I am always looking for new ways
        to solve problems. I am a quick learner and I am always looking to
        improve my skills and learn new technologies. I graduated from the
        University of Illinois at Urbana-Champaign in 2016 with a kinesiology
        degree. After working in the health and fitness industry, I realized
        that I wanted to be more creative, challenge myself mentally, and do
        something that I truly love. That's when I stumbled upon coding! I
        started to teach myself on my own but then decided to go to a coding
        bootcamp so that I could fully commit and learn best practices. I
        attended Fullstack Academy of Code's immersive software engineering
        bootcamp where I learned fullstack JavaScript and the basics of web
        development. This is 17 week long, top ranked bootcamp that fully
        prepares students for a career in software engineering. I learned a
        variety of new skills such as JavaScript, React, Redux, Node, Express,
        SQL, Sequelize, HTML, CSS, Git, and more. I also learned how to work in
        a team environment on a wide variety of projects.
      </p>
      <br />
      <p>
        After my bootcamp, I did an apprenticeship at 84.51 for about 7 months.
        I learned a variety of new skills such as Java, Spring Boot, Angular,
        and many, many more while on the job. I was developing enterprise level,
        production code while pair programming or working solo. I had a mentor
        from a company called Launch Scout (formerly called Gaslight) who helped
        me get up to speed on new languages, frameworks, paradigms, best
        practices, and more so that I can begin my career on the right foot. The
        apprenticeship also included book clubs, algorithm challenges, and side
        projects.
      </p>
      <br />
      <p>
        After my apprenticeship, I worked as a Fullstack Web Developer at
        Kinetic Vision for 13 months. For this position, I help plan and develop
        projects from beginning to end. This includes scoping, estimates,
        feature design, development, bug fixes, code reviews, documentation, and
        deployment. I also meet with clients to review features and discuss next
        steps. In addition, I helped mentor co-ops and other developers improve
        their skills and share knowledge about different projects.
      </p>
      <p>
        Next, I worked at iFit as a Software Engineer for 2 years. iFit is a
        consumer facing application with over 1 million paid users and many more
        free users. I created new features, fixed bugs, tested features,
        monitored errors, refactored code, and implemented microservices to
        create webviews that are displayed in mobile devices and embedded
        fitness machines. We used TypeScript, AWS, Lambda Serverless, S3, REST,
        React, Redux, and Node. Worked on high visibility sections of the app,
        such as the home screen, pre and post workout screens. Collaborated with
        other teams and helped teammates learn different repos that I had the
        most experience on.
      </p>
      <p>
        Please get in touch with me if you are interested in having me join your
        development team or just want to know more about my skills.
      </p>
      <div className="Skills">
        <h1>Here are some of my skills!</h1>
        {skillsPhotos.map((skill) => (
          <img src={skill} alt="Error" />
        ))}
        <h3>
          Also, Java, Spring, Spring Boot, Angular, Ngrx, Rxjs, Pivotal Cloud
          Foundry, Jest, Python, Tornado, Django, TypeScript, Docker, AWS (S3,
          Lambda, CloudWatch, Cognito), Datadog, and much more!
        </h3>
      </div>
    </div>
  );
}

//give description of each skill in a "learn more" dropdown menu
