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
      message: ''
    }
    this.handleContactFormSubmit = this.handleContactFormSubmit.bind(this);
  }

  handleContactFormSubmit(e) {
    e.preventDefault();
    // const message = {
    //   name: this.state.name,
    //   email: this.state.email,
    //   phone: this.state.phone,
    //   goal: this.props.goal,
    //   plan: this.props.plan,
    //   message: this.state.message
    // }
    const message = {
      ...this.state,
      ...this.props
    }
    fetch('http://localhost:5000/api/mail', {
      method: 'POST',
      body: JSON.stringify(message),
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    })
    .then(res => {
      console.log('HuurrAAAYYY');
    })
  }

  onChange(e) {
    e.preventDefault();
    const key = e.target.getAttribute('name');
    this.setState({
      [key]: e.target.value
    })
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
              <input type="text" name='name' placeholder="Name" onChange={e => this.onChange(e)} value={this.state.name} />
            </label>
            <br />
            <label>
              Email {' '}
              <input type="email" name='email' placeholder="Email" onChange={e => this.onChange(e)} value={this.state.email}/>
            </label>
            <br />
           <label>
              Phone {' '}
              <input type="tel" name='phone' placeholder="Phone" onChange={e => this.onChange(e)} value={this.state.phone}/>
            </label>
            <br />

            <label>
              Goal {' '}
              <select name="goals">
                <option value="loseWeight" selected={this.props.goal === 'loseWeight'}>Lose Weight </option>
                <option value="reduceStress" selected={this.props.goal === 'reduceStress'}>Reduce Stress </option>
                <option value="improveHealth" selected={this.props.goal === 'improveHealth'}>Improve Health </option>
                <option value="getFitter" selected={this.props.goal === 'getFitter'}>Get Fitter </option>
                <option value="notSure" selected={this.props.goal === 'notSure'} >Not Sure </option>
              </select>
            </label>
            <br />

            <label>
              Plan {' '}
              <select name="plans">
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
            <input type="textarea" name='message' placeholder="Include a message here if you'd like" onChange={e => this.onChange(e)} value={this.state.message}/>
            <input onClick={this.handleContactFormSubmit}  type="submit" value="Submit" />
          </form>
        </div>
      </div>
    )
  }
}

export default Step3
