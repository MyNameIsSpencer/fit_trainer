import React, { Component } from 'react';
import './css/Step1.css'

const optionDescriptions = {
  default: "Choose your goal from the options on the left",
  loseWeight: "You want to lose weight?  That's GREAT!!",
  reduceStress: "Life is stressful, let BFH help",
  improveHealth: "Get healthier, save MONEY!!!$$$",
  getFitter: "Get in the best shape of your LIFE!",
  notSure: "Not sure? Not problem!!  Come meet with us and we'll help you plan out your goals"
}

class Step1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      descriptor: optionDescriptions.default
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
      <div className="whiteback">
        <h2 className="lefter">
          Step 1 Choose Your Goal: "I want to..."
        </h2>
        <table>
          <tbody>
            <tr>
              <th className="seperator">
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
              </th>
              <th className="descriptor">
                {this.state.descriptor}
              </th>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

export default Step1
