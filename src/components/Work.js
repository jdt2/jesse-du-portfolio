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
import knightscope from '../images/knightscope.png'
import slack from '../images/slack.png'

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

                <h3 className="major">Current</h3>
                <div className="card">
                    <div className="content">
                        <h4>Robotics Software Engineer Intern - Knightscope Inc.</h4>
                        <p>
                            <ul>
                                <li>Developing autonomous security features on <strong>100+</strong> robots across the U.S. using ROS, Ansible, Python, and C++</li>
                                <li>Released software solving 3-year-old connectivity issues with robots through Ansible and Bash</li>
                                <li>Rescued business critical communication server and prevented company-wide robot outage after faulty update</li>
                            </ul>
                        </p>
                    </div>
                    <div className="cardImage">
                        <img
                            className="image clear"
                            src={knightscope}
                        />
                    </div>
                </div>
                <div className="card">
                    <div className="content">
                        <h4>Founding Software Engineer - Stealth Mode Startup</h4>
                        <p>
                            <ul>
                                <li>Worked directly with founder to ideate and build a prototype from scratch and signed up <strong>first</strong> customer</li>
                                <li>Built and designed React.js dashboard platform with Cytoscape.js graph visualization and responsive charts</li>
                                <li>Developed using Firebase and Google Cloud Functions with integration from Slack API data</li>
                            </ul>
                        </p>
                    </div>
                    <div className="cardImage">
                        <img
                            className="image clear"
                            src={slack}
                        />
                    </div>
                </div>
                <div className="card">
                    <div className="content">
                        <h4>Researcher - Center for Automata Processing @ UVA</h4>
                        <p>
                            <ul>
                                <li>Worked on major C++ and computer architecture projects under Chair of Computer Science Prof. <a href="http://www.cs.virginia.edu/~skadron/">Kevin Skadron</a></li>
                                <li>Built digital forensic file carver with Automata processor and Intel’s Hyperscan more accurate and <strong>50x</strong> faster than state-of-the-art applications</li>
                                <li>Co-authored international conference paper <a href="http://www.iiswc.org/iiswc2020/index.html">(IISWC)</a> including patent pending file carving application</li>
                            </ul>
                        </p>
                    </div>
                    <div className="cardImage">
                        <img
                            className="image clear"
                            src={uva_logo}
                        />
                    </div>
                </div>
                {/* <span className="image main">
                    <img src={pic02} alt="" />
                </span> */}
                <h3 className="major">Past</h3>
                <div className="card">
                    <div className="content">
                        <h4>Web Application Developer Intern - SimplePart LLC</h4>
                        <p>
                            <ul>
                                <li>Developed full-stack features using ASP.NET, C#, LESS, JavaScript, and SQL Server on SimplePart's <strong>5 million</strong> user e-commerce platform for top OEM dealers like Toyota, Volkswagen, BMW, and Audi </li>
                                <li>Contributed to projects like Ebay payment integration and product details overhaul netting thousands in revenue</li>
                                <li>Collaborated in Agile software development through biweekly sprints and development team retros </li>
                            </ul>
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
                            <ul>
                                <li>Created a new angle to the protein structure prediction problem orthogonal to existing AlphaFold pipeline under <a href="https://www.cc.gatech.edu/~lsong/">Prof. Le Song</a> and Ph.D. student <a href="http://xinshi-chen.com/">Xinshi Chen</a></li>
                                <li>Applied deep learning models on RCSB Protein Data Bank to predict protein contact maps using Python</li>
                            </ul>
                        </p>
                    </div>
                    <div className="cardImage">
                        <img
                            className="image clear"
                            src={machinelearning}
                        />
                    </div>
                </div>
                <div className="card">
                    <div className="content">
                        <h4>React Native Mobile Developer - Freelancing</h4>
                        <p>
                            <ul>
                                <li>Launched, designed, built, and maintained two iOS apps for local company with React Native and Firebase</li>
                                <li>Created entrepreneurial planner app (500+ downloads) and home contracting app for online free estimates</li>
                            </ul>
                        </p>
                    </div>
                    <div className="cardImage">
                        <img
                            className="image clear"
                            src={advantage_logo}
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
                                <a href="https://apps.apple.com/us/app/advantage-home-contracting/id1466536680" className="icon fa-apple">
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
                        which is <strong>50x</strong> faster and more accurate than state-of-the-art
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