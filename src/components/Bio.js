import React, { Component } from 'react'

export default class Bio extends Component {
    render() {
        return (
            <div className="Bio">
                <p>
                    Hello! I am a fullstack web developer looking to begin my career. I graduated from the 
                    University of Illinois at Urbana-Champaign in 2016 with a kinesiology degree. After working
                    in the health and fitness industry, I realized that I wanted to be more creative and mentally 
                    challenged. That's when I stumbled upon coding! I started to teach myself on my own but then decided
                    to go to a coding bootcamp. I recently completed Fullstack Academy of Code after 17 weeks of intensive 
                    learing and building. Checkout the rest of this site that I created to learn
                    more about what I know and what I've created. Please get in touch with me if you are interested in having
                    me join your development team or just want to know more about my skills. 
                </p>
                <img src={require('../computer-photo.jpg')} />
            </div>
        )
    }
}


//add boxes that list languages, tools, platforms, etc.
