import React, { Component } from 'react';
import './css/Step1.css';
import apple from './pics/apple.jpeg';
import dog from './pics/dog2.jpg';
import bencher from './pics/bencher.jpg';
import getFitterPic from './pics/get-fit.png';
import babies from './pics/babies.jpeg';


const optionDescriptions = {
  default: "Choose your goal from the options on the left",
  loseWeight: "You want to lose weight?  That's GREAT!!",
  reduceStress: "Life is stressful, let BFH help",
  improveHealth: "Get healthier, save MONEY!!!$$$",
  getFitter: "Get in the best shape of your LIFE!",
  notSure: "Not sure? Not problem!!  Come meet with us and we'll help you plan out your goals"
}

const optionPics = {
  default: "",
  loseWeight: apple,
  reduceStress: dog,
  improveHealth: "Get healthier, save MONEY!!!$$$",
  getFitter: "Get in the best shape of your LIFE!",
  notSure: "Not sure? Not problem!!  Come meet with us and we'll help you plan out your goals"
}

class Step1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      descriptor: optionDescriptions.default,
      picture: babies
    }
  }

  handleClick (e, descriptor) {
    console.log(descriptor);
    this.setState({
      descriptor: descriptor
    })
    this.props.updateGoal(e)
  }


  render() {
    return (
      <div className="step1">
        <h2 className="lefter">
          <b className="spacer">Step 1    </b>Choose Your Goal: "I want to..."
        </h2>

        <ul className="home-ul">
          <li><button value="loseWeight" onClick={(e) => this.handleClick(e, optionDescriptions.loseWeight)}>
              Lose Weight </button></li>
          <li><button value="reduceStress" onClick={(e) => this.handleClick(e, optionDescriptions.reduceStress)}>
              Reduce Stress</button></li>
          <li><button value="improveHealth" onClick={(e) => this.handleClick(e, optionDescriptions.improveHealth)}>
            Improve Health</button></li>
          <li><button value="getFitter" onClick={(e) => this.handleClick(e, optionDescriptions.getFitter)}>
            Get Fitter</button></li>
          <li><button value="notSure" onClick={(e) => this.handleClick(e, optionDescriptions.notSure)}>
            Not Sure</button></li>
        </ul>

        <div className="displayer">
          <div className="descriptor">
            {this.state.descriptor}
          </div>
          <div className="step1-pic">
            <img src={this.state.picture} alt="thumbsup"/>
          </div>
        </div>

      </div>
    )
  }
}

export default Step1
