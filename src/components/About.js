import React, { Component } from 'react'
import PropTypes from 'prop-types'
//import pic03 from '../images/pic03.jpg'
import brick_edited from '../images/brick_edited.jpg'
import bg_atlanta from '../images/bg_atlanta.jpg'

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
                {/* <span className="image main">
                    <img src={pic03} alt="" />
                </span> */}
                <div className="card">
                    <div className="content">
                        <p>
                            I'm a Computer Science major at Georgia Tech specializing
                            in Intelligence and Information Internetworks.
                            I've been learning computer science for the past 8 years. Ever
                            since I opened that Intro to Python book, I've never looked back.
                        </p>
                    </div>
                    <div className="cardImage">
                        <img
                            className="image clear"
                            src={brick_edited}
                            alt=""
                        />
                    </div>
                </div>
                <hr />
                <div className="card">
                    <div className="content">
                        <p>
                            At Georgia Tech, I'm involved in a variety of interests in computer science,
                            from the Agency club focused on machine learning and AI to the GT iOS Club
                            focused on developing responsive and innovative iPhone apps.
                        </p>
                    </div>
                    <div className="cardImage">
                        <img
                            className="image clear"
                            src={bg_atlanta}
                            alt=""
                        />
                    </div>
                </div>
                <hr />
                <div className="card">
                    {/* <img
                        className="image"
                        src={}
                        alt=""
                    /> */}
                    <div className="content">
                        <p>
                            In my free time, I like to play the accordion, play on a basketball team,
                            inline skating, and spending time with friends and family.
                        </p>
                    </div>
                </div>

                {this.props.close}
            </article >
        )
    }
}

About.propTypes = {
    article: PropTypes.string,
    articleTimeout: PropTypes.bool,
    close: PropTypes.element
}

export default About