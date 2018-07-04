import React, { Component } from 'react'

export default class Bio extends Component {
    render() {
        return (
            <div className="Bio">
                <p>Rashaun is seeking a career as a full stack software engineer. He is changing from a career in health and fitness to follow his passion for web and mobile development</p>
                <img src={require('../computer-photo.jpg')} />
            </div>
        )
    }
}
//add picture on top
