import React, { Component } from 'react'
import YouTube from 'react-youtube'

export default class Projects extends Component {
    constructor(props) {
        super(props)
        this.state = {
            show1: true,
            show2: false,
            show3: false, 
            show4: false,
            num: 1, 
            show1: 'block',
            show2: 'none', 
            show3: 'none',
            show4: 'none',
        }
        this.showProj1 = this.showProj1.bind(this)
        this.showProj2 = this.showProj2.bind(this)
        this.showProj3 = this.showProj3.bind(this)
        this.showProj4 = this.showProj4.bind(this)

    }

    showProj1 = (event) => this.setState({show1: 'block', show2: 'none', show3: 'none', show4: 'none'})
    showProj2 = (event) => this.setState({ show1: 'none', show2: 'block', show3: 'none', show4: 'none' })
    showProj3 = (event) => this.setState({ show1: 'none', show2: 'none', show3: 'block', show4: 'none' })
    showProj4 = (event) => this.setState({ show1: 'none', show2: 'none', show3: 'none', show4: 'block' })

    render() {      
        return (
            <div className="Content">
            <h1>Some of my projects</h1>
            <div className="ProjectNav">
                <h3 onClick={this.showProj1} id="1">NutriYum</h3>
                <h3 onClick={this.showProj2} id="2">Grace Shopper</h3>
                <h3 onClick={this.showProj3} id="3">Meal Wheel</h3>
                <h3 onClick={this.showProj4} id="4">Fullstack Fitness</h3>
            </div>
                <div className="Box proj" style={{display: this.state.show1}}>
                    <h2>NutriYum</h2>
                    <YouTube videoId="C6Lc_XBkEWU" opts={{width: "100%"}} alt={require('../images/error-image.jpg')} className="YouTube"/>
                    <p>NutriYum is a mobile app built with React Native for iOS and Android.
                    NutriYum keeps track of of all the nutrients in what you eat so you dont have to, making your diet managment as simple and easy as possible.
                    All you have to do is snap what you eat then bon appétit!</p>{/* maybe add something about how this was a group project */}
                </div>
                <div className="Box proj" style={{display: this.state.show2}}>
                    <h2>Grace Shopper</h2>
                    <a href="http://graceshopper-furby.herokuapp.com/products" target="_blank" rel="noopener noreferrer">
                    <img className="Proj-img" src={require('../images/grace-shopper.png')} alt={require('../images/error-image.jpg')} />
                    </a>
                    <p>This is an e-commerce website for random items</p>
                </div>
                <div className="Box proj" style={{display: this.state.show3}}>
                    <h2>Meal Wheel</h2>
                    <video className="Proj-img" src={require('../images/meal-wheel-demo.mov')} alt={require('../images/meal-wheel-pic.PNG')} controls={true} />
                    <p>Can you never decide on where to go out to eat? If so then this is the app for you! Meal Wheel 
                        lets you enter as many restaurants as you want and puts it on the wheel. Then you can either try 
                        to land on a certain one if your quick enough, or just randomly stop it. This app was built with React Native.</p>
                </div>
                <div className="Box proj" style={{display: this.state.show4}}>
                    <h2>Fullstack Fitness</h2>
                    <YouTube videoId="6APp1UMvJSI" opts={{width: "100%"}} alt={require('../images/error-image.jpg')} className="YouTube"/>
                    <p>Fullstack Fitness is a React Native mobile application that I created for my Hackathon project at Fullstack Academy. I had just over 2 class days to
                        work on this project and it was my first interaction with React Native. This app can track how far you run or bike and a timer to let you know how 
                        long you have been active. There is also an audible notification every 5 minutes that lets you know how far you have traveled.</p>
                </div>
                <h3>These are just a few of the projects that I have worked on. These projects were made to practice skills that I already have, as well as to learn new ones. 
                    I'm constantly updating these and adding new ones, so come back often to see what I'm up to!</h3>
                <h4>I am currently working on creating a website to easily search for NBA stats. Checkout my progress here:<br/> 
                    <a href="https://nba-stats-search.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                        https://nba-stats-search.herokuapp.com/ 
                    </a>
                </h4>
            </div>
        )
    }
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