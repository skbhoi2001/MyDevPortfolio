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
                <h2>Contact Details</h2>
                <p className="address">
                  <span>{resumeData.name}</span><br />
                  <span>
                    {resumeData.address}
                  </span>
                  <br />
                  <span>
                    <a href="tel:+91 9937062128">{resumeData.mobNo}</a><br />
                    <a href="mailto: soumyak.bhoi.2001@gmail.com">
                      {resumeData.gmail}
                    </a>
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>;
  }
