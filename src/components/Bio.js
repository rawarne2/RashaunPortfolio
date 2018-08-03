import React, { Component } from 'react'

export default class Bio extends Component {
    render() {
        return (
            <div className="Bio Content">
            <img src={require('../images/computer-photo.jpg')} alt={require('../images/error-image.jpg')} className="Profile-pic"/>
                <p>
                    Hello! I am a fullstack web developer looking to begin my career. I graduated from the 
                    University of Illinois at Urbana-Champaign in 2016 with a kinesiology degree. After working
                    in the health and fitness industry, I realized that I wanted to be more creative and mentally 
                    challenged. That's when I stumbled upon coding! I started to teach myself on my own but then decided
                    to go to a coding bootcamp. I recently completed Fullstack Academy of Code's immersive software 
                    engineering bootcamp. Please get in touch with me if you are interested in having
                    me join your development team or just want to know more about my skills. 
                </p>
                <div className="Skills">
                <h1>Here are my skills!</h1>
                    <img src={require('../images/react.png')} alt={require('../images/error-image.jpg')} />
                    <img src={require('../images/react-native.png')} alt={require('../images/error-image.jpg')} />
                    <img src={require('../images/redux.png')} alt={require('../images/error-image.jpg')} />
                    <img src={require('../images/html.png')} alt={require('../images/error-image.jpg')} />
                    <img src={require('../images/css.jpg')} alt={require('../images/error-image.jpg')} />
                    <img src={require('../images/express.png')} alt={require('../images/error-image.jpg')} />
                    <img src={require('../images/git.png')} alt={require('../images/error-image.jpg')} />
                    <img src={require('../images/JavaScript.png')} alt={require('../images/error-image.jpg')} />
                    <img src={require('../images/node.png')} alt={require('../images/error-image.jpg')} />
                    <img src={require('../images/sql.png')} alt={require('../images/error-image.jpg')} />
                    <img src={require('../images/npm.png')} alt={require('../images/error-image.jpg')} />
                    <img src={require('../images/sequelize.png')} alt={require('../images/error-image.jpg')} />
                    <img src={require('../images/jquery.gif')} alt={require('../images/error-image.jpg')} />
                    <img src={require('../images/heroku.jpg')} alt={require('../images/error-image.jpg')} />
                    <img src={require('../images/chai.png')} alt={require('../images/error-image.jpg')} />
                    <img src={require('../images/jasmine.svg')} alt={require('../images/error-image.jpg')} />
                    <img src={require('../images/mocha.jpg')} alt={require('../images/error-image.jpg')} />
                </div>
            </div>
        )
    }
}



//heroku, jQuery, 

//add boxes that list languages, tools, platforms, etc.
