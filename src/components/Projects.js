import React, { Component } from 'react'
import YouTube from 'react-youtube'

export default class Projects extends Component {
    render() {
        return (
            <div className="Content">
                <h1>List of projects</h1>
                <div className="Box">
                <YouTube videoId="C6Lc_XBkEWU" opts={{width: "100%"}}/>
                <p>NutriYum is a mobile app built with React Native for iOS and Android.
                NutriYum keeps track of of all the nutrients in what you eat so you dont have to, making your diet managment as simple and easy as possible.
                All you have to do is snap what you eat then bon appétit!</p>{/* maybe add something about how this was a group project */}
            </div>
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
