import React from 'react'
import PropTypes from 'prop-types'

const Header = (props) => (
    <header id="header" style={props.timeout ? { display: 'none' } : {}}>
        <div className="logo">
            {/* <span className="icon fa-diamond"></span> */}
        </div>
        <div className="content">
            <div className="inner">
                <h1>Jesse Du</h1>
                <p>Computer Science Major at Georgia Tech specializing in intelligence.<br />
                    interested in a variety of software engineering
                    fields from web application<br /> development to computer architecture</p>
                <ul className="icons">
                    <li>
                        <a href="https://www.linkedin.com/in/jesse-du-189b20191/" className="icon fa-linkedin">
                            <span className="label">LinkedIn</span>
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://github.com/jdt2"
                            className="icon fa-github"
                        >
                            <span className="label">GitHub</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        <nav>
            <ul>
                <li><a href="javascript:;" onClick={() => { props.onOpenArticle('resume') }}>Resume</a></li>
                <li><a href="javascript:;" onClick={() => { props.onOpenArticle('work') }}>Work</a></li>
                {/* <li><a href="javascript:;" onClick={() => { props.onOpenArticle('experience') }}>Experience</a></li> */}
                <li><a href="javascript:;" onClick={() => { props.onOpenArticle('about') }}>About</a></li>
                <li><a href="javascript:;" onClick={() => { props.onOpenArticle('contact') }}>Contact</a></li>

            </ul>
        </nav>
    </header>
)

Header.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
}

export default Header
