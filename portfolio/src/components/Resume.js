import React from 'react';
import resumeData from '../resumeData';
export default  function Resume() {
    return <section id="resume">
        <div className="row education">
          <div className="three columns header-col">
            <h1>
              <span>Education</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            {resumeData.education && resumeData.education.map((item) => {
                return <div className="row item" key={item.id}>
                    <div className="twelve columns">
                      <h3>{item.UniversityName}</h3>
                      <p className="info">
                        {item.specialization}
                        <span>&bull;</span> <em className="date">
                          {item.MonthOfPassing} {item.YearOfPassing}
                        </em>
                      </p>
                    </div>
                  </div>;
              })}
          </div>
        </div>

        <section id="resume">

          <div className="row skill">
            <div className="three columns header-col">
              <h1>
                <span>Skills</span>
              </h1>
            </div>

            <div className="nine columns main-col">
              <section id="four" className="skills">
                <div className="languages skills show-on-scroll ">
                  <i className="devicon-html5-plain-wordmark  technology" />
                  <i className="devicon-css3-plain-wordmark  technology" />
                  <i className="devicon-javascript-plain  technology" />
                  <i className="devicon-react-plain-wordmark  technology" />
                  <i className="devicon-redux-original  technology" />
                  <i className="devicon-mongodb-plain-wordmark  technology" />
                  <i className="devicon-nodejs-plain technology" />
                  <i className="devicon-materialui-plain  technology" />
                </div>
              </section>
            </div>
          </div>
        </section>
      </section>;
  }
