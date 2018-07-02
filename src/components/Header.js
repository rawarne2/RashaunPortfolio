import React, { Component } from 'react'


export default class Header extends Component {
    render() {
        return (
            <div>
                <header className="Header">
                    <nav className="Header-name">Rashaun Warner</nav>
                    <div className="Nav">
                        <nav>About Me</nav>
                        <nav>Projects</nav>
                        <nav>Contacts</nav>
                    </div>
                </header>
            </div>
        )
    }
}

//download library for sticky header

