import React from 'react';
import Layout from '@theme/Layout';
import './Resume.css';

function Resume() {
  return (
    <Layout>
      <div className='container'>
          <div className='basicInfo'>
            <div className='headShot'><img src={require('@site/static/img/resume/headshot.jpg').default}></img></div>
            <div className='infos'>
              <h1>Tzu Hsuan Yeh</h1>
              <div className="education"><span>Department of Transportation and Logistic Management,<a href='https://www.nycu.edu.tw/'>National Yang Ming Chiao Tung University</a></span></div>
              <div className="contact"><img src={require('@site/static/img/resume/icon_website.png').default}alt="myWebsite" /><a href='https://yehs1225.github.io/'>https://yehs1225.github.io/</a></div>
              <div className="contact"><img src={require('@site/static/img/resume/icon_github.png').default} alt="myGithub" /><a href='https://github.com/yehs1225'>https://github.com/yehs1225</a></div>
              <div className="contact"><img src={require('@site/static/img/resume/icon_email.png').default} alt="myEmail" /><a href='mailto:yeh.mentos@gmail.com'>yeh.mentos@gmail.com
</a></div>
              <div className="contact"><img src={require('@site/static/img/resume/icon_phone.png').default} alt="myPhone" />0955-225-320</div>
            </div>
          </div>
          <div className="section">
            <h3 className='section__title'>About Me</h3>
            <p>
              Three words to describe myself is <strong>active</strong> ,<strong>responsible</strong> ,and <strong>organized</strong>. 
              I am keen on basketball since I love the feeling of growth with my team. 
              I used to be a leader of the basketball team, which enhance my skills to communicate and collaborate with others. 
              <br/><br/>
              I am a senior student now and have used some programming language like python, c++ ,JavaScript in my previous courses.
              It’s amazing to make everything more efficient and convenient by coding.
              Building a website is really fascinating, my dream is to build a website that have clear interface and appropriate data structures. Therefore, both customer and Company can get benefits from it.
              I really hope to have a chance to be a be a better Web Developer. 
            </p>
          </div>
          <div className="section">
            <h3 className='section__title'>Courses</h3>
            <div className="course">
                <h5>
                  <strong>JavaScript Web Programming</strong>
                  <br/><span className='skills' >Html / css  / JavaScript</span>
                </h5>
                <p>
                  <ul>
                    <li>Learning the basic of web programming.</li>
                    <li>Build a small web game as final project - <a href="https://yehs1225.github.io/JavaScript_Game_PinBall"> PinBall</a></li>     
                  </ul>
                </p>
            </div>
            <div className="course">
                <h5>
                  <strong>Database Management</strong>
                  <br/><span className='skills' >MySQL / PHP</span>
                </h5>
                <p>
                  <ul>
                    <li>Knowledge of Relational Database.</li>
                    <li>Build a Movie ticket booking website as final project. (Responsible for DB Schema & backend. )</li>     
                  </ul>
                </p>
            </div>
            <div className="course">
                <h5>
                  <strong>DataStructures</strong>
                  <br/><span className='skills' >C++</span>
                </h5>
                <p>
                  <ul>
                    <li>Knowledge of how to use data more efficiently</li>
                    <li>Implement the concept by programming - <a href="https://drive.google.com/drive/folders/1wuqDBbMI0Dr6uMr36jKYiPVX5_Wq9_Ms?usp=sharing"> Programs zip file</a></li>     
                  </ul>
                </p>
            </div>
            <div className="course">
                <h5>
                  <strong>Lidemy <a href='https://lidemy.com'>(Online course)</a></strong>
                  <br/><span className='skills' >Git / React / Webpack / Babel</span>
                </h5>
                <p>
                  <ul>
                    <li>The whole structure of how to build a website (entry level). </li>
                  </ul>
                </p>
            </div>
          </div>
      </div>
    </Layout>
  )
}

export default Resume
