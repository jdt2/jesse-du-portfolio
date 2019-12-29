import React, { Component } from 'react'
import PropTypes from 'prop-types';
import pic02 from '../images/pic02.jpg'

class Experience extends Component {
    render() {
        return (
            <article
                id="experience"
                className={`${this.props.article === 'experience' ? 'active' : ''} ${
                    this.props.articleTimeout ? 'timeout' : ''
                    }`
                }
                style={{ display: 'none' }}
            >
                <h2 className="major">Experience</h2>
                <span className="image main">
                    <img src={pic02} alt="" />
                </span>
                <p>
                    Adipiscing magna sed dolor elit. Praesent eleifend dignissim arcu,
                    at eleifend sapien imperdiet ac. Aliquam erat volutpat. Praesent
                    urna nisi, fringila lorem et vehicula lacinia quam. Integer
                    sollicitudin mauris nec lorem luctus ultrices.
          </p>
                <p>
                    Nullam et orci eu lorem consequat tincidunt vivamus et sagittis
                    libero. Mauris aliquet magna magna sed nunc rhoncus pharetra.
                    Pellentesque condimentum sem. In efficitur ligula tate urna.
                    Maecenas laoreet massa vel lacinia pellentesque lorem ipsum dolor.
                    Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis
                    libero. Mauris aliquet magna magna sed nunc rhoncus amet feugiat
                    tempus.
          </p>
                {this.props.close}
            </article >
        )
    }
}

Experience.propTypes = {
    article: PropTypes.string,
    articleTimeout: PropTypes.bool,
    close: PropTypes.element,
}

export default Experience