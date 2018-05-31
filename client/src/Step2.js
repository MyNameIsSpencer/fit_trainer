import React, { Component } from 'react';
import './css/Step2.css'

class Step2 extends Component {
  constructor(props) {
    super(props)
  }

  handleClick (e) {
    this.props.updatePlan(e)
  }

  render() {
    return(
      <div className="step2">
        <h2 className="lefter">
          <b className="step2-spacer">Step 2   </b> Review Services and Pricing:
        </h2>
        <p> All Plans Come With Free Consultation! </p>
        <table>
          <tbody>
            <tr>
              <th className="seperator">
                <button value="plan1" onClick={(e) => this.handleClick(e)}> Plan 1</button>
              </th>
              <th>
              </th>
              <th>
              </th>
              <th>
              </th>
            </tr>
            <tr>
              <th className="seperator">
                <button value="plan2" onClick={(e) => this.handleClick(e)}> Plan 2 </button>
              </th>
              <th>
              </th>
              <th>
              </th>
              <th>
              </th>
            </tr>
            <tr>
              <th className="seperator">
                <button value="plan3" onClick={(e) => this.handleClick(e)}> Plan 3 </button>
              </th>
              <th>
              </th>
              <th>
              </th>
              <th>
              </th>
            </tr>
            <tr>
              <th className="seperator">
                <button value="plan4" onClick={(e) => this.handleClick(e)}> Plan 4 </button>
              </th>
              <th>
              </th>
              <th>
              </th>
              <th>
              </th>
            </tr>
            <tr>
              <th className="seperator">
                <button value="plan5" onClick={(e) => this.handleClick(e)}> Plan 5 </button>
              </th>
              <th>
              </th>
              <th>
              </th>
              <th>
              </th>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}


export default Step2
