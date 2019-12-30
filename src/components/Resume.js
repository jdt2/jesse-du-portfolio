import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Resume extends Component {
    render() {
        return (
            <article
                id="resume"
                className={`${this.props.article === 'resume' ? 'active' : ''} ${
                    this.props.articleTimeout ? 'timeout' : ''
                    }`}
                style={{ display: 'none' }}
            >
                <h2 className="major">Resume</h2>
                {/* <span className="image main">
            <img src={pic01} alt="" />
          </span> */}
                <p style={{ textAlign: 'center' }}>
                    If the embed doesn't work below, try this <a href="https://www.dropbox.com/s/6cx7w4574sepzga/20191220_Du_Jesse_Resume.pdf?dl=0">link</a>.
          </p>
                <iframe
                    className="embed"
                    title="resume"
                    src={"https://www.dropbox.com/s/6cx7w4574sepzga/20191220_Du_Jesse_Resume.pdf?raw=1#view=FitH"}
                />
                {this.props.close}
            </article>
        )
    }
}

Resume.propTypes = {
    article: PropTypes.string,
    articleTimeout: PropTypes.bool,
    close: PropTypes.element
}

export default Resume