import React, { Component } from 'react';
import './css/Step3.css';


const optionDescriptions = {
  default: "Choose your goal from the options on the left",
  loseWeight: "You want to lose weight?  That's GREAT!!",
  reduceStress: "Life is stressful, let BFH help",
  improveHealth: "Get healthier, save MONEY!!!$$$",
  getFitter: "Get in the best shape of your LIFE!",
  notSure: "Not sure? Not problem!!  Come meet with us and we'll help you plan out your goals"
}


class Step3 extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      phone: '',
      goal: '',
      plan: '',
      message: ''
    }

  }


  render() {
    return(
      <div>
              <h2 className="lefter">
                Step 3 Contact BFH Wellness Coach!
              </h2>
              <div>
                <form className="lefter">
                  <label>
                    Name {' '}
                    <input type="text" placeholder="Name" value={this.state.name} />
                  </label>
                  <br />
                  <label>
                    Email {' '}
                    <input type="email" placeholder="Email" value={this.state.email}/>
                  </label>
                  <br />
                 <label>
                    Phone {' '}
                    <input type="tel" placeholder="Phone" value={this.state.phone}/>
                  </label>
                  <br />

                  <label>
                    Goal {' '}
                    <select name="goals">
                      <option value="loseWeight">Lose Weight </option>
                      <option value="reduceStress">Reduce Stress </option>
                      <option value="improveHealth">Improve Health </option>
                      <option value="getFitter">Get Fitter </option>
                      <option value="notSure">Not Sure </option>
                    </select>
                  </label>
                  <br />

                  <label>
                    Plan {' '}
                    <select name="goals">
                      <option>Plan 1 </option>
                      <option>Plan 2 </option>
                      <option>Plan 3 </option>
                      <option>Plan 4 </option>
                      <option>Plan 5 </option>
                    </select>
                  </label>
                  <br />

                  <label>
                    Message {' '}
                  </label>
                  <br />
                  <input type="textarea" placeholder="Include a message here if you'd like" value={this.state.message}/>
                </form>
              </div>
            </div>
    )
  }
}

export default Step3
