import PropTypes from 'prop-types'
import React from 'react'
import Work from './Work'
import Resume from './Resume'
import About from './About'
import Contact from './Contact'
import Experience from './Experience';

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <Resume
          article={this.props.article}
          articleTimeout={this.props.articleTimeout}
          onCloseArticle={this.props.onCloseArticle}
          close={close}
        />

        <Work
          article={this.props.article}
          articleTimeout={this.props.articleTimeout}
          onCloseArticle={this.props.onCloseArticle}
          close={close}
        />

        {/* <Experience
          article={this.props.article}
          articleTimeout={this.props.articleTimeout}
          onCloseArticle={this.props.onCloseArticle}
          close={close}
        /> */}

        <About
          article={this.props.article}
          articleTimeout={this.props.articleTimeout}
          onCloseArticle={this.props.onCloseArticle}
          close={close}
        />

        <Contact
          article={this.props.article}
          articleTimeout={this.props.articleTimeout}
          onCloseArticle={this.props.onCloseArticle}
          close={close}
        />

      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
