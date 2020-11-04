import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Header() {

    const [underlineState, setUnderlineState] = useState({
        me: "none",
        proj: "none", 
        blog: "none"
    })

    const clickMe = () => {
        setUnderlineState({ me: "underline", proj: "none", blog: "none" })
    }
    const clickProj = () => {
        setUnderlineState({ me: "none", proj: "underline", blog: "none" })
    }
    const clickBlog = () => {
        setUnderlineState({ me: "none", proj: "none", blog: "underline" })
    }

    return (
        <header className="Header">
            <div className="Header-name">Rashaun Warner</div>
            <nav className="Nav">
                <Link to={`/bio`} onClick={clickMe} style={{"textDecoration": underlineState.me}}>About Me</Link>
                <Link to={`/projects`} onClick={clickProj} style={{"textDecoration": underlineState.proj}}>Projects</Link>
                <Link to={`/blog`} onClick={clickBlog} style={{"textDecoration": underlineState.blog}}>Blog</Link>
            </nav>
        </header>
    )
}



