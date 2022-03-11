/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import resumeData from '../resumeData';
export default function Header() {return <React.Fragment>
                                      <header id="home" >
                                        <nav id="nav-wrap">
                                          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
                                            Show navigation
                                          </a>
                                          <a className="mobile-btn" href="#" title="Hide navigation">
                                            Hide navigation
                                          </a>
                                          <ul id="nav" className="nav">
                                            <li className="current">
                                              <a className="smoothscroll" href="#home">
                                                Home
                                              </a>
                                            </li>
                                            <li>
                                              <a className="smoothscroll" href="#about">
                                                About
                                              </a>
                                            </li>
                                            <li>
                                              <a className="smoothscroll" href="#resume">
                                                Education & Skills
                                              </a>
                                            </li>
                                            <li>
                                              <a className="smoothscroll" href="#portfolio">
                                                Projects
                                              </a>
                                            </li>
                                            <li>
                                              <a className="smoothscroll" href="#contact">
                                                Contact
                                              </a>
                                            </li>
                                          </ul>
                                        </nav>

                                        <div className="row banner" >
                                          <div >
                                            <h3  style={{fontSize:"55px", fontFamily:"fantasy",color:"white"}}>
                                              I
                                              am{" "}
                                              {
                                                resumeData.name
                                              }

                                              .
                                            </h3>
                                            <h3 style={{ color: "#fff", fontFamily: "sans-serif ",padding:"10%"}}>
                                              {resumeData.roleDescription}
                                            </h3>                                            
                                          </div>
                                        </div>

                                        <p className="scrolldown">
                                          <a className="smoothscroll" href="#about">
                                            <i className="icon-down-circle" />
                                          </a>
                                        </p>
                                      </header>
                                    </React.Fragment>;
  }
