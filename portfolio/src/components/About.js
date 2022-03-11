import React from 'react';
import resumeData from '../resumeData';
export default function About() {
  return <section id="about">
        <div className="row">
          <div className="three columns">
            <img style={{borderRadius:"20%",background:"white"}} src="https://github.com/skbhoi2001/MyDevPortfolio/blob/main/portfolio/docs/photo_soumyak.png?raw=true" alt="" width="500px"/>
          </div>
          <div className="nine columns main-col">
            <h2>About Me</h2>
            <p>{resumeData.aboutme}</p>
            <div className="row">
              <div className="columns contact-details">
              <ul className="social" style={{display:"flex",gap:"10%",fontSize:"30px"}} >
                                              {resumeData.socialLinks && resumeData.socialLinks.map(
                                                  (
                                                    item
                                                  ) => {
                                                    return (
                                                      <li
                                                        key={
                                                          item.name
                                                        }
                                                      >
                                                        <a
                                                          href={
                                                            item.url
                                                          }
                                                          target="_blank"
                                                        >
                                                          <i
                                                            className={
                                                              item.className
                                                            }
                                                          />
                                                        </a>
                                                      </li>
                                                    );
                                                  }
                                                )}
                                            </ul>
                                            <a target="__blank" href="https://drive.google.com/file/d/1Me0ppnBHdL1_awIlEwKoDD6NGMSu8xEx/view?usp=sharing" download>
                                              <button>
                                                <i class="fa fa-download" download /> &nbsp;
                                                DOWNLOAD RESUME
                                              </button>
                                            </a>
              </div>
            </div>
          </div>
        </div>
      </section>;
  }
