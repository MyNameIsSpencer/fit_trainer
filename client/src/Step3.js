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
    const emailPackage = {
      ...this.state,
      ...this.props
    }
    console.log('>>>>', 'new code');
    debugger;
    fetch('/api/mail', {
      method: 'POST',
      body: JSON.stringify(emailPackage),
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    })
    .then(res => {
      console.log('HuurrAAAYYY');
      alert('Email has been sent');
      this.setState({
        name: '',
        email: '',
        phone: '',
        message: ''
      })
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
          <b className="spacer">Step 3   </b> Contact BFH Wellness Coach!
        </h2>
          <form className="step3-form">
            <div id="top-of-form">
              <div className="left-wrapper">
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
                  <select className="step3-select" name="goals">
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
                  <select className="step3-select" name="plans">
                    <option value="plan1" selected={this.props.plan === 'plan1'}>Plan 1 </option>
                    <option value="plan2" selected={this.props.plan === 'plan2'}>Plan 2 </option>
                    <option value="plan3" selected={this.props.plan === 'plan3'}>Plan 3 </option>
                    <option value="plan4" selected={this.props.plan === 'plan4'}>Plan 4 </option>
                    <option value="plan5" selected={this.props.plan === 'plan5'}>Plan 5 </option>

                  </select>
                </label>
              </div>
              <div className="message-wrapper">
                <label className="message-label">
                  Message <br/>
                </label>
                <input type="textarea" name='message' placeholder="Include a message here if you'd like" onChange={e => this.onChange(e)} value={this.state.message}/>
              </div>
              <input onClick={this.handleContactFormSubmit}  type="submit" value="Submit" />
            </div>
          </form>

      </div>
    )
  }
}

export default Step3
