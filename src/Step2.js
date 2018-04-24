import React, { Component } from 'react';
import './css/Step2.css'

class Step2 extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div className="step2">
        <h2 className="lefter">
          Step 2 Review Services and Pricing:
        </h2>
        <p> All Plans Come With Free Consultation! </p>
        <table>
          <tbody>
            <tr>
              <th>
                Plan 1
              </th>
              <th>
              </th>
              <th>
              </th>
              <th>
              </th>
            </tr>
            <tr>
              <th>
                Plan 2
              </th>
              <th>
              </th>
              <th>
              </th>
              <th>
              </th>
            </tr>
            <tr>
              <th>
                Plan 3
              </th>
              <th>
              </th>
              <th>
              </th>
              <th>
              </th>
            </tr>
            <tr>
              <th>
                Plan 4
              </th>
              <th>
              </th>
              <th>
              </th>
              <th>
              </th>
            </tr>
            <tr>
              <th>
                Plan 5
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
