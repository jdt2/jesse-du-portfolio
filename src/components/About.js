import React, { Component } from 'react'
import PropTypes from 'prop-types'
import pic03 from '../images/pic03.jpg'

class About extends Component {
    render() {
        return (
            <article
                id="about"
                className={`${this.props.article === 'about' ? 'active' : ''} ${
                    this.props.articleTimeout ? 'timeout' : ''
                    }`}
                style={{ display: 'none' }}
            >
                <h2 className="major">About Me</h2>
                <span className="image main">
                    <img src={pic03} alt="" />
                </span>
                <p>
                    I'm a Computer Science major at Georgia Tech specializing
                    in Intelligence and Information Internetworks.
                </p>
                {this.props.close}
            </article>
        )
    }
}

About.propTypes = {
    article: PropTypes.string,
    articleTimeout: PropTypes.bool,
    close: PropTypes.element
}

export default About