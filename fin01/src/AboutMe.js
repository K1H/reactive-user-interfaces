import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './AboutMe.css';

class AboutMe extends Component {
  render() {

    return <div className="AboutMe">

        <img className="Aboutmepic" src= "/images/coverpic.jpg"/>
        <h3>Kilian Hauser: Student & Freelancer</h3>
        <p>Hello! I graduated from NYU Shanghai with a Bachelor of Science. I concentrated in Interactive Media Arts (IMA) which is a multidisciplinary track that teaches a diverse and unique set skills. If asked what I learn specifically over this track I would have to say how to learn. From Ideation, Design, and Fabrication, we were expose to numerous contrasting disiplines and in the process learned various ways to learn inorder to cope with the sheer amount of diversity and difficulty in content. I am currently honing my skillset with the projects you see so please enjoy!  </p>
    </div>;
  }
}

export default AboutMe;
