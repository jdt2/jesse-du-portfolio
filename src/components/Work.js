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
import akooda from '../images/akooda_icon.png'

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
                        <h4>Robotics Software Engineer - Knightscope Inc.</h4>
                        <p>
                            <ul>
                                <li>Currently working as full-time engineer while a full-time student; transitioned from summer internship; serving as main technical interview lead for new engineer candidates </li>
                                <li>Led project to implement fever detection using FDA-approved thermal cameras, leading to $300,000 incremental revenue for the company using ROS, Ansible, Python, and C++</li>
                                <li>Restructured audio system to reduce robot downtime and achieved cost savings of $210,000 across the entire fleet of 100+ autonomous security robots</li>
                                <li>Rescued critical communication server after faulty update and saved over 120,000 messages of robot information</li>
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
                        <h4>Founding Software Engineer - Akooda Inc. (Stealth Mode Startup)</h4>
                        <p>
                            <ul>
                                <li>Worked directly with Harvard Business School alumnus technical founder to ideate and build a prototype from scratch; signed up first paying customer and helped raise series A funding</li>
                                <li>Built and designed React.js platform with Firebase, Google Cloud Functions, Slack API data, and Cytoscape.js</li>
                            </ul>
                        </p>
                    </div>
                    <div className="cardImage">
                        <img
                            className="image clear"
                            src={akooda}
                        />
                    </div>
                </div>
                {/* <span className="image main">
                    <img src={pic02} alt="" />
                </span> */}
                <h3 className="major">Past</h3>
                <div className="card">
                    <div className="content">
                        <h4>Undergraduate Researcher - Center for Automata Processing @ UVA</h4>
                        <p>
                            <ul>
                                <li>Built digital forensic file carver with Automata processor and Intel’s Hyperscan, resulting in more accurate and 25x faster than state-of-the-art applications using C++ with Chair of Computer Science Prof. Kevin Skadron</li>
                                <li>Filed patent on carver application as co-inventor; co-authored international conference paper <a href="http://www.iiswc.org/iiswc2020/index.html">(IISWC)</a></li>
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
                <div className="card">
                    <div className="content">
                        <h4>Undergraduate Research Assistant - Center for Machine Learning at Georgia Tech</h4>
                        <p>
                            <ul>
                                <li>Applied deep learning models and convolutional neural networks to predict protein contact maps using Python</li>
                                <li>Optimized accuracy of distance mapping for the <a href="https://deepmind.com/blog/article/AlphaFold-Using-AI-for-scientific-discovery">AlphaFold</a> pipeline from Google’s DeepMind, focusing on protein structure prediction problem</li>
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
                        <h4>Web Application Developer Intern - SimplePart LLC</h4>
                        <p>
                            <ul>
                                <li>Developed full-stack features using ASP.NET, C#, LESS, JavaScript, and SQL Server on SimplePart's 5 million user e-commerce platform for top OEM dealers like Toyota, Volkswagen, BMW, and Audi</li>
                                <li>Contributed to projects like Ebay payment integration and product details overhaul for over $100,000 in revenue</li>
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