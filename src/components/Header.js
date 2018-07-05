import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Header extends Component {
    render() {
        return (
            <div>
                <header className="Header">
                    <div className="Header-name">Rashaun Warner</div>
                    <nav className="Nav">
                            <Link to={`/bio`}>About Me</Link>
                            <Link to={`/projects`}>Projects</Link>
                            <Link to={`/blog`}>Blog</Link>
                    </nav>
                </header>
            </div>
        )
    }
}



