/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import resumeData from '../resumeData';
export default function ContactUs() {
  return <section id="contact">
      <div className="row section-head">
        <div className="ten columns">
          <p className="lead">
            Feel free to contact me for any work or suggestions below
          </p>
        </div>
      </div>
      <div className="row">
        <aside className="eigth columns footer-widgets">
          <div className="widget">
            <h4>
              Mobile No : <a href="tel:+91 9937062128">{resumeData.mobNo}</a>
              <br />
              Linked in : <a href="https://www.linkedin.com/in/soumyak-kumar-bhoi-3b73a4184/" target="_blank">
                {resumeData.linkedinId}
              </a>
              <br />
              Outlook : <a href="mailto: soumyak.bhoi.2001@gmail.com">
                {resumeData.gmail}
              </a>
            </h4>
          </div>
        </aside>
      </div>
    </section>;
  }
