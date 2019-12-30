import React, { Component } from 'react'
import PropTypes from 'prop-types'
import pic02 from '../images/pic02.jpg'
import eday from '../images/eday_icon.png'
import advantage from '../images/advantage_home_icon.png'
import ieee from '../images/ieee_icon.png'
import simplepart from '../images/simplepart_icon.png'
import machinelearning from '../images/machine_learning_gt.jpg'
import advantage_logo from '../images/advantage_home_logo.jpg'
import uva_logo from '../images/uva_logo.png'

class Work extends Component {
    render() {
        return (
            <article
                id="work"
                className={`${this.props.article === 'work' ? 'active' : ''} ${
                    this.props.articleTimeout ? 'timeout' : ''
                    }`}
                style={{ display: 'none' }}
            >
                <h2 className="major">Work</h2>

                <h3 className="major">Current Work</h3>
                {/* <span className="image main">
                    <img src={pic02} alt="" />
                </span> */}
                <div className="card">
                    <div className="content">
                        <h4>Web Application Developer Intern - SimplePart LLC</h4>
                        <h3></h3>
                        <p>
                            I handle full stack development but primarily focus on backend.
                            Currently working on a variety of technologies such as SQL, ASP.NET, C#, LESS, and JavaScript.
                            In addition, I'm contributing to new features that are released on the platform such as Ebay integration.
                            The development environment is structured around Agile and holds biweekly development team retros
                            to review and reflect on code changes.
                            Changes are deployed onto top Original Equipment Manufacturer dealers like Toyota, Subaru, Volkswagen, BMW, Audi, and Lexus
                            to over <strong>5</strong> million users.

                        </p>
                    </div>
                    <div className="cardImage">
                        <img
                            className="image clear"
                            src={simplepart}
                        />
                    </div>
                </div>
                <div className="card">
                    <div className="content">
                        <h4>Undergraduate Research Assistant - Machine Learning Group @ GT</h4>
                        <p>
                            I research with two Ph.D. students and <a href="https://www.cc.gatech.edu/~lsong/">Prof. Le Song</a> with a focus on Inductive Logic Programming (ILP) and deep learning.
                            Our current project is applying machine learning applications to the Inductive General Game Playing problem set,
                            a traditionally ILP-based problem. The problem involves learning the rules to general games like Sudoku and Tic Tac Toe
                            given allowed or restricted moves in the game environment. The paper describing the problem can be seen <a href="https://arxiv.org/abs/1906.09627">here</a>.
                        </p>
                    </div>
                    <div className="cardImage">
                        <img
                            className="image clear"
                            src={machinelearning}
                        />
                    </div>
                </div>
                <h3 className="major">Previous Work</h3>
                <div className="card">
                    <div className="content">
                        <h4>React Native Mobile Developer - Freelancing</h4>
                        <p>
                            I developed two apps for a local contracting company in my hometown.
                            Both are detailed below, but for a short synopsis, the first was a scheduler app for entrepreneurs
                            and the second was a company app for the contractor that would give a free estimate from
                            a snapshot of a home improvement problem.
                        </p>
                    </div>
                    <div className="cardImage">
                        <img
                            className="image clear"
                            src={advantage_logo}
                        />
                    </div>
                </div>
                <div className="card">
                    <div className="content">
                        <h4>Researcher - Center for Automata Processing @ UVA</h4>
                        <p>
                            I did research for three summers under Jack Wadden and Prof. Kevin Skadron with a focus on
                            exploring the capabilities of Micron's Automata Processor, the first non-von Neumann
                            processor that accelerates non-deterministic finite automata (NFA) hardware processing.
                            I explored optimizations and applications to the Automata Processor,
                            namely a literal string matching engine optimization that would skip over redundant NFA strings
                            and, more notably, the Automata-based file carver. This file carver retrieved files from given raw bit data
                            of a hard drive faster and more accurate than state-of-the-art file carvers like Scalpel and bulk_extractor (see more below).
                        </p>
                    </div>
                    <div className="cardImage">
                        <img
                            className="image clear"
                            src={uva_logo}
                        />
                    </div>
                </div>
                <h3 className="major">Projects</h3>
                <div className="projects">
                    <div className="projectCard">
                        <a href="https://apps.apple.com/us/app/eday/id1449660016">
                            <img
                                className="image clear applogo"
                                src={eday}
                            />
                        </a>
                        <a href="https://apps.apple.com/us/app/eday/id1449660016">
                            <h3>Eday App</h3>
                        </a>
                        <ul className="icons">
                            <li>
                                <a href="https://github.com/jdt2/eday" className="icon fa-github">
                                    <span className="label">GitHub</span>
                                </a>
                            </li>
                            <li>
                                <a href="https://apps.apple.com/us/app/eday/id1449660016" className="icon fa-apple">
                                    <span className="label">Apple Store</span>
                                </a>
                            </li>
                        </ul>
                        <p>
                            Eday is an app that helps entrepreneurs learn and apply daily habits
                            widely used by successful people.
                    </p>
                    </div>
                    <div className="projectCard">
                        <a href="https://apps.apple.com/us/app/advantage-home-contracting/id1466536680">
                            <img
                                className="image clear applogo"
                                src={advantage}
                            />
                        </a>
                        <a href="https://apps.apple.com/us/app/advantage-home-contracting/id1466536680">
                            <h3>Advantage Home Contracting App</h3>
                        </a>
                        <ul className="icons">
                            <li>
                                <a href="https://github.com/jdt2/advantage-home-contracting" className="icon fa-github">
                                    <span className="label">GitHub</span>
                                </a>
                            </li>
                            <li>
                                <a href="https://apps.apple.com/us/app/eday/id1449660016" className="icon fa-apple">
                                    <span className="label">Apple Store</span>
                                </a>
                            </li>
                        </ul>
                        <p>
                            Advantage Home Contracting is an app that gives a free estimate for any home improvement needs.
                    </p>
                    </div>
                    <div className="projectCard">
                        <a href="https://ieeexplore.ieee.org/document/8573482">
                            <img
                                className="image clear applogo"
                                src={ieee}
                            />
                        </a>
                        <a href="https://ieeexplore.ieee.org/document/8573482">
                            <h3>AutomataZoo: A Modern Automata Processing Benchmark Suite</h3>
                        </a>
                        <ul className="icons">
                            <li>
                                <a href="https://ieeexplore.ieee.org/document/8573482" className="icon fa-arrow-right">
                                    <span className="label">GitHub</span>
                                </a>
                            </li>
                        </ul>
                        <p>
                            One of the many features in AutomataZoo is the Automata-based file carver,
                        which is <strong>10x</strong> faster and more accurate than state-of-the-art
                                                                                                                                                                        file carvers (Scalpel and bulk_extractor, namely).
                    </p>
                    </div>

                </div>
                <h3 className="major">Technologies and Skills</h3>
                <div className="box">
                    <h4>General Skills</h4>
                    <ul className="icons">
                        <li><span className="skill">Data Structures & Algorithms</span></li>
                        <li><span className="skill">Java</span></li>
                        <li><span className="skill">Python</span></li>
                        <li><span className="skill">C++</span></li>
                        <li><span className="skill">C#</span></li>
                        <li><span className="skill">C</span></li>
                    </ul>
                </div>
                <div className="box">
                    <h4>Web Skills</h4>
                    <ul className="icons">
                        <li><span className="skill">React</span></li>
                        <li><span className="skill">Angular</span></li>
                        <li><span className="skill">Node.js</span></li>
                        <li><span className="skill">ASP.NET</span></li>
                        <li><span className="skill">SQL Server</span></li>
                        <li><span className="skill">LESS</span></li>
                        <li><span className="skill">HTML</span></li>
                        <li><span className="skill">(S)CSS</span></li>
                        <li><span className="skill">JavaScript</span></li>
                        <li><span className="skill">PHP</span></li>
                    </ul>
                </div>
                <div className="box">
                    <h4>Primary Development Tools/Technologies</h4>
                    <ul className="icons">
                        <li><span className="skill">Emacs</span></li>
                        <li><span className="skill">Linux Terminal</span></li>
                        <li><span className="skill">Git</span></li>
                        <li><span className="skill">Visual Studio Code</span></li>
                        <li><span className="skill">IntelliJ IDEA</span></li>
                        <li><span className="skill">Microsoft Office Suite</span></li>
                    </ul>
                </div>
                <div className="box">
                    <h4>Other Skills/Technologies</h4>
                    <ul className="icons">
                        <li><span className="skill">React Native</span></li>
                        <li><span className="skill">Machine Learning</span></li>
                        <li><span className="skill">Unity3D</span></li>
                    </ul>
                </div>
                {this.props.close}
            </article>
        )
    }
}

Work.propTypes = {
    article: PropTypes.string,
    articleTimeout: PropTypes.bool,
    close: PropTypes.element,
}

export default Work