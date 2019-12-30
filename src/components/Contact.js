import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Contact extends Component {
    render() {
        return (
            <article
                id="contact"
                className={`${this.props.article === 'contact' ? 'active' : ''} ${
                    this.props.articleTimeout ? 'timeout' : ''
                    }`}
                style={{ display: 'none' }}
            >
                <h2 className="major">Contact</h2>
                <form method="post" action="#" data-netlify="true">
                    <div className="field half first">
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" id="name" />
                    </div>
                    <div className="field half">
                        <label htmlFor="email">Email</label>
                        <input type="text" name="email" id="email" />
                    </div>
                    <div className="field">
                        <label htmlFor="message">Message</label>
                        <textarea name="message" id="message" rows="4"></textarea>
                    </div>
                    <ul className="actions">
                        <li>
                            <input type="submit" value="Send Message" className="special" />
                        </li>
                        <li>
                            <input type="reset" value="Reset" />
                        </li>
                    </ul>
                </form>
                <ul className="icons">
                    <li>
                        <a href="mailto:jessejesse10@gmail.com" className="icon fa-envelope">
                            <span className="label">Email</span>
                        </a>
                    </li>
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
                {this.props.close}
            </article>
        )
    }
}

Contact.propTypes = {
    article: PropTypes.string,
    articleTimeout: PropTypes.bool,
    close: PropTypes.element
}

export default Contact