import React, { Component } from 'react';
import logo from './logo.svg';
import  geadimg from './mockup.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <div className="header">
          <div className="block-name">PORNSAWAN KANTIRANGSIMA</div>
        </div>
        <div id="about-me">
        <div className="block-left">
            <img src={geadimg} id="myimg"></img>
        </div>
        <div className="block-right">
        <h2>about me</h2>
        I am a web developer have experience 2 years.
        I am so passionate in Front-end web development.
        and I love a clean code.
        Lorem ipsum dolor sit amet, 
        consectetuer adipiscing elit. 
        Nam nibh. Nunc varius facilisis eros. 
        Sed erat. In in velit quis arcu ornare laoreet. 
        Curabitur adipiscing luctus massa.
        Integer ut purus ac augue commodo commodo. Nunc 
        Ut tincidunt tortor. Donec nonummy, 
        enim in lacinia pulvinar, 
        velit tellus scelerisque augue, 
        ac posuere libero urna eget neque. 
        Cras ipsum. Vestibulum pretium, 
        lectus nec venenatis volutpat, 
        purus lectus ultrices risus.
        </div>
        </div>
        <div id="education">
        <h2>education </h2>
        King Mongkut’s Institute of Technology Ladkrabang <br></br>         
        April 2011 – Mar 2015<br></br>
        Bachelor of Science in Applied Statistics 
        </div>
        <div id="experience">
        <h2>experience</h2>
        Mar – May 2014<br></br>
        Soft Square Group of Companies Co., Ltd.<br></br>
        Position: JAVA Developer (Trainee)<br></br>
        Responsibility: Developed Web Application using JAVA programming language.<br></br>
        
        June 2015 – Present<br></br>
        People Plus Software Co., Ltd.<br></br>
        Position: Programmer<br></br>
        Responsibility: Develop and design an Employee Self-Service System based on HRMS standard. <br></br>
        The system can be used in either desktop or mobile by web application using PHP and responsiveness environments.
        </div>
        <div id="skill">
        <h2>skill</h2>
        Front-end<br></br>
        HTML5, CSS, JavaScript, JQuery
        Bootstrap, Semantic UI<br></br>
        Back-end<br></br>
        PHP, Oracle Database, Oracle applications, MariaDB(MySQL)
        Laravel
        Web Service
        Control Version<br></br>
        Git
        </div>
        <div id="activity">
        <h2>activity</h2>
        - UX meet-up by UX Connect. <br></br>
        - VV Photography see source code <a href="#"><i className="fa fa-github"></i></a>&nbsp;github
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
        <i className="fa fa-home blue"></i> &nbsp;Address :<br></br>
        39/154 Bangmaengmai, Maeng samutparkan, Srinakarin Rd., Samutparkan,10270, Thailand <br></br>
        <i className="fa fa-mobile blue"></i> &nbsp;Mobile :<br></br>
        090-556-8788   <br></br>
        <i className="fa fa-comment-o blue"></i> &nbsp;E-mail :<br></br>
        pohnsawan.k@gmail.com <br></br>
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
