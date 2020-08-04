import React, { Component } from 'react'

export default class Bio extends Component {
    render() {
        return (
            <div className="Bio Content">
            <img src={require('../images/computer-photo.jpg')} alt={require('../images/error-image.jpg')} className="Profile-pic"/>
                <p>
                    Hello! I am a fullstack web developer in the early stages of my career. I graduated from the 
                    University of Illinois at Urbana-Champaign in 2016 with a kinesiology degree. After working
                    in the health and fitness industry, I realized that I wanted to be more creative, challenge myself
                     mentally, and do something that I truly love. That's when I stumbled upon coding! I started to 
                     teach myself on my own but then decided to go to a coding bootcamp so that I could fully commit and 
                     learn best practices. I attended Fullstack Academy of Code's immersive software engineering bootcamp where 
                     I leared fullstack JavaScript and the basics of web development.  
                </p>
                <br />
                <p>
                    After my bootcamp, I began a 6.5 month apprenticechip at 84.51 which is nearing the end. During this apprenticeship, 
                    I learned a variety of new skills such as Java, Spring Boot, Angular, and many, many more while on the job. 
                    I was developing enterprise level, production code while pair programming or working solo. I had a mentor from
                    a company called Gaslight who helped me get up to speed, taught me best practices, and more so that I can begin 
                    my career on the right foot. The apprenticeship also included book clubs, algorithm challenges, and side projects. 
                </p>
                <br />
                <p>
                    I am currently a fullstack web developer at Kinetic Vision. For this position, I help plan and develop projects from beginning to end.
                    This includes scoping, estimates, feature design, development, bug fixes, documentation, and deployment. I also meet with clients to review 
                    features and discuss next steps. In addition, I review code and help co-ops and other developers improve their skills. 
                </p>
                <p>
                    Please get in touch with me if you are interested in having
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
                    <h3>
                        Also, Java, Spring, Spring Boot, Angular, Ngrx, Rxjs, Pivotal Cloud Foundry, Jest,
                        Python, Tornado, TypeScript, and Docker.
                    </h3>
                </div>
            </div>
        )
    }
}



//give discription of each skill in a "learn more" dropdown menue 