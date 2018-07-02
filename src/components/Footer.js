import React, { Component } from 'react'
import { SocialIcon } from 'react-social-icons'

export default class Footer extends Component {
    render() {
        return (
            <div>
                <footer className="Footer">
                    <p>Email me at rashaunwarner@yahoo.com</p>
                    <SocialIcon className="Social" url="https://www.linkedin.com/in/rashaun-warner/" title="linkedin"/>
                    <SocialIcon className="Social" url="https://github.com/rawarne2" title="github"/>
                    <SocialIcon className="Social" url="https://medium.com/" title="medium"/>
                </footer>
            </div>
        )
    }
}


//make a box to send an email right there