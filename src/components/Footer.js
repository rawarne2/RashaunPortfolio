import React from 'react'
import { SocialIcon } from 'react-social-icons'

export default function Footer() {
    return (
        <footer className="Footer">
            <p>Contact me!</p>
            <SocialIcon className="Social" url="https://www.linkedin.com/in/rashaun-warner/" title="linkedin"/>
            <SocialIcon className="Social" url="https://github.com/rawarne2" title="github"/>
            <SocialIcon className="Social" url="https://medium.com/@Rashaunwarner" title="medium"/>
            <SocialIcon className="Social" url="mailto:RashaunWarner@yahoo.com" title="email" />
        </footer>
    )
}


//make a box to send an email right there