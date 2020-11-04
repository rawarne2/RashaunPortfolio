import React, { Component }  from 'react'
import es8Blog from '../images/ES8-blog.png'

export default class Blog extends Component {
    render () {
        return (
            <div className="Content">
                <h1>Check out my blog posts on Medium!</h1>
                <div className="Box">
                    <a href="https://medium.com/@Rashaunwarner/new-es8-features-f3d8b7b4fc8c" target="_blank" rel="noopener noreferrer">
                        <img src={es8Blog} alt="Error" className="Blog-pics" />
                    </a>
                    <p>Learn about the new features that were made available in ES8</p>
                </div>
            </div>
        )
    }
}

//remember to edit pics of blogs if I make changes to the blog

//make blog open in new tab

//fix h1 orientation on mobile