import React from 'react';
import resumeData from '../resumeData';
import "../index.css"
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
              <section id="four" >
                <div className=" skills show-on-scroll skillsData">
                  <i className="devicon-html5-plain-wordmark"/>
                  <i className="devicon-css3-plain-wordmark"/>
                  <i className="devicon-javascript-plain"/>
                  <i className="devicon-react-plain-wordmark"/>
                  <i className="devicon-redux-original"/>
                  <i className="devicon-mongodb-plain-wordmark"/>
                  <i className="devicon-nodejs-plain"/>
                  <i className="devicon-materialui-plain"/>
                </div>
              </section>
            </div>
          </div>
        </section>
      </section>;
  }
