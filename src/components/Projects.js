import React, { useState } from "react";
import YouTube from "react-youtube";
import graceShopperPhoto from "../images/grace-shopper.png";
import mealWheelDemo from "../images/meal-wheel-demo.mov";
import mealWheelPhoto from "../images/meal-wheel-pic.PNG";
import nbaStatsPhoto from "../images/nba-stats.png";
import lcaPhoto from "../images/lca.png";

export default function Projects() {
  const [projects, setProjects] = useState({
    num: 1,
    show1: "block",
    show2: "none",
    show3: "none",
    show4: "none",
    show5: "none",
    show6: "none",
    show7: "none",
  });

  const showProj1 = () =>
    setProjects({
      show1: "block",
      show2: "none",
      show3: "none",
      show4: "none",
      show5: "none",
      show6: "none",
      show7: "none",
    });
  const showProj2 = () =>
    setProjects({
      show1: "none",
      show2: "block",
      show3: "none",
      show4: "none",
      show5: "none",
      show6: "none",
      show7: "none",
    });
  const showProj3 = () =>
    setProjects({
      show1: "none",
      show2: "none",
      show3: "block",
      show4: "none",
      show5: "none",
      show6: "none",
      show7: "none",
    });
  const showProj4 = () =>
    setProjects({
      show1: "none",
      show2: "none",
      show3: "none",
      show4: "block",
      show5: "none",
      show6: "none",
      show7: "none",
    });
  const showProj5 = () =>
    setProjects({
      show1: "none",
      show2: "none",
      show3: "none",
      show4: "none",
      show5: "block",
      show6: "none",
      show7: "none",
    });
  const showProj6 = () =>
    setProjects({
      show1: "none",
      show2: "none",
      show3: "none",
      show4: "none",
      show5: "none",
      show6: "block",
      show7: "none",
    });
  const showProj7 = () =>
    setProjects({
      show1: "none",
      show2: "none",
      show3: "none",
      show4: "none",
      show5: "none",
      show6: "none",
      show7: "block",
    });

  return (
    <div className="Content">
      <h1>Some of my projects</h1>
      <div className="ProjectNav">
        <h3 onClick={showProj1} id="1">
          NutriYum
        </h3>
        <h3 onClick={showProj2} id="2">
          Grace Shopper
        </h3>
        <h3 onClick={showProj3} id="3">
          Meal Wheel
        </h3>
        <h3 onClick={showProj4} id="4">
          Fullstack Fitness
        </h3>
        <h3 onClick={showProj5} id="5">
          NBA Stats Search
        </h3>
        <h3 onClick={showProj6} id="6">
          LCA Properties, LLC
        </h3>
        <h3 onClick={showProj7} id="7">
          In Development
        </h3>
      </div>
      <div className="Box proj" style={{ display: projects.show1 }}>
        <h2>NutriYum</h2>
        <YouTube
          videoId="C6Lc_XBkEWU"
          opts={{ width: "100%" }}
          alt="Error"
          className="YouTube"
        />
        <p>
          NutriYum is a mobile app built with React Native for iOS and Android.
          NutriYum keeps track of of all the nutrients in what you eat so you
          don't have to, making your diet managment as simple and easy as
          possible. All you have to do is snap what you eat then bon appétit!
        </p>
        {/* maybe add something about how this was a group project */}
      </div>
      <div className="Box proj" style={{ display: projects.show2 }}>
        <h2>Grace Shopper</h2>
        <a
          href="http://graceshopper-furby.herokuapp.com/products"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="Proj-img" src={graceShopperPhoto} alt="Error" />
        </a>
        <p>This is an e-commerce website for random items</p>
      </div>
      <div className="Box proj" style={{ display: projects.show3 }}>
        <h2>Meal Wheel</h2>
        <video
          className="Proj-img"
          src={mealWheelDemo}
          alt={mealWheelPhoto}
          controls={true}
        />
        <p>
          Can you never decide on where to go out to eat? If so then this is the
          app for you! Meal Wheel lets you enter as many restaurants as you want
          and puts it on the wheel. Then you can either try to land on a certain
          one if your quick enough, or just randomly stop it. This app was built
          with React Native.
        </p>
      </div>
      <div className="Box proj" style={{ display: projects.show4 }}>
        <h2>Fullstack Fitness</h2>
        <YouTube
          videoId="6APp1UMvJSI"
          opts={{ width: "100%" }}
          alt="Error"
          className="YouTube"
        />
        <p>
          Fullstack Fitness is a React Native mobile application that I created
          for my Hackathon project at Fullstack Academy. I had just over 2 class
          days to work on this project and it was my first interaction with
          React Native. This app can track how far you run or bike and a timer
          to let you know how long you have been active. There is also an
          audible notification every 5 minutes that lets you know how far you
          have traveled.
        </p>
      </div>
      <div className="Box proj" style={{ display: projects.show5 }}>
        <h2>NBA Stats Search</h2>
        <a
          href="https://nba-stats-search.herokuapp.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="Proj-img" src={nbaStatsPhoto} alt="Error" />
        </a>
        <p>
          This application allows users to search for the major NBA stats by
          player name. It is made using React and Redux
        </p>
      </div>
      <div className="Box proj" style={{ display: projects.show6 }}>
        <h2>LCA Properties, LLC</h2>
        <a
          href="http://www.lcaresidentialproperties.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="Proj-img" src={lcaPhoto} alt="Error" />
        </a>
        <p>
          This application provides information about LCA Properties, LLC and
          allows residents to submit maintenance requests. This will eventually
          be used by real residents and showcase more properties when it is
          complete. It was made using an Angular frontend with express and node
          on the backend.
        </p>
      </div>
      <div className="Box proj" style={{ display: projects.show7 }}>
        <h2>Fitness App</h2>

        <p>
          This is a React Native application that currently uses Amazon Cognito
          for user management and authentication. It will also use Redux,
          TypeScript, GraphQL, Graphene, PostreSQL, Apollo, and Jest. This app
          will allow trainers to upload exercise videos and create curated
          workouts for their client. This will also include a a library of
          exercises, create your own workout, nutrition tracker, exercise of the
          day, and more!
        </p>
      </div>
      <h3>
        These are just a few of the projects that I have worked on. These
        projects were made to practice skills that I already have, as well as to
        learn new ones. I'm constantly updating these and adding new ones, so
        come back often to see what I'm up to! After learning a variety of new
        skills during my apprenticeship, I have realized that there is a lot of
        room for improvement for these projects even though they are just proof
        of concept. I am currently working on a new application for a dating app
        that will eventually be released on the App Store and Google Play. This
        app will use React Native, Django, and MongoDB.
      </h3>
    </div>
  );
}

//use build version!!!! update react???

//meal wheel video does not have a image before loading on mobile
//add the parlax for projects and horizontal automatic scroll for projects
//play button for meal wheel overlaps the header

//when I have enough projects, have each one slide in from the side when you scroll down.

//mention that this site is also mobile friendly!

//add current weather at the top

//list of all of the projects above current one. When you click on one, it slides over
//to the one that was clicked.

//onClick => slide out and clicked one slides in
