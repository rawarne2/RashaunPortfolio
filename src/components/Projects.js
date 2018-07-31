import React, { Component } from 'react'
import YouTube from 'react-youtube'

export default class Projects extends Component {
    render() {
        return (
            <div className="Content">
                <h1>Some of my projects</h1>
                <div className="Box">
                    <h2>NutriYum</h2>
                    <YouTube videoId="C6Lc_XBkEWU" opts={{width: "100%"}} alt={require('../images/error-image.jpg')} className="YouTube"/>
                    <p>NutriYum is a mobile app built with React Native for iOS and Android.
                    NutriYum keeps track of of all the nutrients in what you eat so you dont have to, making your diet managment as simple and easy as possible.
                    All you have to do is snap what you eat then bon appétit!</p>{/* maybe add something about how this was a group project */}
                </div>
                <div className="Box">
                    <h2>Grace Shopper</h2>
                    <a href="http://graceshopper-furby.herokuapp.com/products" target="_blank" rel="noopener noreferrer">
                    <img className="Proj-img" src={require('../images/grace-shopper.png')} alt={require('../images/error-image.jpg')} />
                    </a>
                    <p>This is an e-commerce website for random items</p>
                </div>
                <div className="Box">
                    <h2>Meal Wheel</h2>
                    <video className="Proj-img" src={require('../images/meal-wheel-demo.mov')} alt={require('../images/meal-wheel-pic.PNG')} controls={true} />
                    <p>Can you never decide on where to go out to eat? If so then this is the app for you! Meal Wheel 
                        lets you enter as many restaurants as you want and puts it on the wheel. Then you can either try 
                        to land on a certain one if your quick enough, or just randomly stop it. This app was built with React Native.</p>
                </div>
                <div className="Box">
                    <h2>Fullstack Fitness</h2>
                    <YouTube videoId="6APp1UMvJSI" opts={{width: "100%"}} alt={require('../images/error-image.jpg')} className="YouTube"/>
                    <p>Fullstack Fitness is a React Native mobile application that I created for my Hackathon project at Fullstack Academy. I had just over 2 class days to
                        work on this project and it was my first interaction with React Native. This app can track how far you run or bike and a timer to let you know how 
                        long you have been active. There is also an audible notification every 5 minutes that lets you know how far you have traveled.</p>
                </div>
                <h3>These are just a few of the projects that I have worked on. Although the projects above are not perfect, they were created to learn new concepts. 
                    I'm constantly adding more projects and updating these so come back often to see what I'm up to!</h3>
                <h4>I am currently working on creating a website with stats for fantasy football. </h4>
            </div>
        )
    }
}


//meal wheel video does not have a image before loading on mobile


//when I have enough projects, have each one slide in from the side when you scroll down. 

//mention that this site is also mobile friendly! 

