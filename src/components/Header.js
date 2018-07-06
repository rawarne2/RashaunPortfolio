import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Header extends Component {
    constructor (props) {
        super(props)
        this.state = {
            me: "none",
            proj: "none", 
            blog: "none"
        }
        this.clickMe = this.clickMe.bind(this)
        this.clickProj = this.clickProj.bind(this)
        this.clickBlog = this.clickBlog.bind(this)
    }

    clickMe = () => {
        this.setState({ me: "underline", proj: "none", blog: "none" })
    }
    clickProj = () => {
        this.setState({ me: "none", proj: "underline", blog: "none" })
    }
    clickBlog = () => {
        this.setState({ me: "none", proj: "none", blog: "underline" })
    }

    render() {
        return (
            <div>
                <header className="Header">
                    <div className="Header-name">Rashaun Warner</div>
                    <nav className="Nav">
                            <Link to={`/bio`} onClick={this.clickMe} style={{"textDecoration": this.state.me}}>About Me</Link>
                            <Link to={`/projects`} onClick={this.clickProj} style={{"textDecoration": this.state.proj}}>Projects</Link>
                            <Link to={`/blog`} onClick={this.clickBlog} style={{"textDecoration": this.state.blog}}>Blog</Link>
                    </nav>
                </header>
            </div>
        )
    }
}



