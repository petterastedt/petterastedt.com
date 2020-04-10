import React from 'react';
import profile from './../../assets/images/profile-min.jpg'

const Intro = () => (
  <div className="intro componentSpacing" id="intro" data-aos="fade-up">
    <div className="content">
      <img src={profile} className="content-image" alt="Portrait"/>
      <p className="content-text">I'm a hungry web developer with a demonstrated history of working with modern technologies such as <strong>ES6+, Node.js, Express, MongoDb and React.</strong> In addition to this I have professional experience developing pixel perfect components to clients using <strong>JS, PHP and Sass</strong>. Excellent people skills due to my background in tourism and service, curious by nature, <strong>highly motivated to learn and to develop myself professionally.</strong></p>
    </div>
  </div>
)

export default Intro