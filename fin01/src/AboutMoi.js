import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './AboutMoi.css';

class AboutMoi extends Component {
  render() {

    return <div className="AboutMoi">
    <h3>You Found me!</h3>
    <img className="Aboutmoipic" src= "/images/moi4.jpg"/>
    <p>Congratulations! you found this little easter egg (: </p>
    <p>My name is Kilian and I am a dreamer and creator. I am an athlete, adventurer, explorer, a risk taker with dash of goofball thrown in here and there. </p>
    <p>Favorite quotes at the moment: "Do or do not, there is no try" & "It is not death that I fear, it is not living up to my potential"</p>
    </div>;
  }
}

export default AboutMoi;
