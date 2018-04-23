import React, { Component } from 'react';
import './css/Step1.css'

const optionDescriptions = {
  loseWeight: "You want to lose weight?  That's GREAT!!",
  reduceStress: "Life is stressful, let BFH help",
  
}

class Step1 extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }

  }
  render() {
    return (
      <div>
        <table>
          <tr>
            <th>
              <ul className="home-ul">
                <li>Lose Weight</li>
                <li>Reduce Stress</li>
                <li>Improve Health</li>
                <li>Get Fitter</li>
                <li>Not Sure</li>
              </ul>
            </th>
            <th>
              <div className="descriptor">
                Here is some stuff
              </div>
            </th>
          </tr>
        </table>
      </div>
    )
  }
}

export default Step1
