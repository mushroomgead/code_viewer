import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <div className="header">
          <div className="block-name">PORNSAWAN KANTIRANGSIMA</div>
        </div>
        <div id="about-me">
        <h2>about me</h2>
        I am a web developer have experience 2 years.
        I am so passionate in Front-end web development.
        and I love a clean code.
        </div>
        <div id="education">
        <h2>education </h2>
        King Mongkut’s Institute of Technology Ladkrabang           2011 - Present
        Bachelor of Science in Applied Statistics 
        </div>
        <div id="experience">
        <h2>experience</h2>
        Mar – May, 2014
        Soft Square Group of Companies Co., Ltd.
        Position: JAVA Developer (Trainee)
        Responsibility: Developed Web Application using JAVA programming language.
        
        June 2016 – Present
        People Plus Software Co., Ltd.
        Position: Programmer
        Responsibility: Develop and design an Employee Self-Service System based on HRMS standard. The system can be used in either desktop or mobile by web application using PHP and responsiveness environments.
        </div>
        <div id="skill">
        <h2>skill</h2>
        Front-end
        HTML5, CSS, JavaScript, JQuery
        Bootstrap, Semantic UI
        Back-end
        PHP, Oracle Database, Oracle applications, MariaDB(MySQL)
        Laravel
        Web Service
        NuSoAP
        Control Version
        Git
        </div>
        <div id="activity">
        <h2>activity</h2>
        - UX meet-up by UX Connect.
        </div>
        <div id="interests">
        <h2>interests</h2>
          <div className="circle"><i className="fa fa-cutlery"></i>cooking</div>
          <div className="circle"><i className="fa fa-book"></i>reading</div>
          <div className="circle"><i className="fa fa-code"></i>coding</div>
          <div className="circle"><i className="fa fa-train"></i>travel</div>
        </div>
        <div id="contact">
        <h2>contact</h2>
        39/154 Bangmaengmai, Maeng samutparkan, Srinakarin Rd., Samutparkan,10270, Thailand
        Mobile: 090-556-8788  E-mail: pohnsawan.k@gmail.com
        </div>
        <div className="footer">
        &copy; 2016 BY PORNSAWAN KANTIRANGSIMA.
        </div>
      </div>
    );
  }
}
// class GenItemList extends
export default App;
