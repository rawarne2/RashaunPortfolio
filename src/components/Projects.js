import React, { Component } from 'react'
import YouTube from 'react-youtube'

export default class Projects extends Component {
    render() {
        return (
            <div className="Content">
                <h1>Some of my projects</h1>
                <div className="Box">
                    <h2>NutriYum</h2>
                    <YouTube videoId="C6Lc_XBkEWU" opts={{width: "100%"}} alt="Unable to load" className="YouTube"/>
                    <p>NutriYum is a mobile app built with React Native for iOS and Android.
                    NutriYum keeps track of of all the nutrients in what you eat so you dont have to, making your diet managment as simple and easy as possible.
                    All you have to do is snap what you eat then bon appétit!</p>{/* maybe add something about how this was a group project */}
            </div>
            <div className="Box">
                <h2>Grace Shopper</h2>
                <a href="http://graceshopper-furby.herokuapp.com/products" target="_blank">
                <img className="Proj-img" src={require('../images/grace-shopper.png')} alt="Unable to load" />
                </a>
                <p>This is an e-commerce website for random items</p>
            </div>
            <div className="Box">
                <h2>Meal Wheel</h2>
                <video className="Proj-img" src={require('../images/meal-wheel-demo.mov')} alt="Unable to load" controls={true}/>
                <p>Can you never decide on where to go out to eat? If so then this is the app for you! Meal Wheel 
                    lets you enter as many restaurants as you want and puts it on the wheel. Then you can either try 
                    to land on a certain one if your quick enough, or just randomly stop it. This app was built with React Native.</p>
            </div>
            <h4>I'm currently working on improving a run tracking app. That will be posted soon!</h4>
            <h3>I'm constantly adding more so come back often to see what I'm up to!</h3>
            </div>
        )
    }
}

//rounded corner boxes with borders for pics of projects
//have written description of each project
//make sure project pics have links


//when I have enough projects, have each one slide in from the side when you scroll down. 

//mention that this site is also mobile friendly! 

//projects: NutriYum, GraceShopper, RunTracker
