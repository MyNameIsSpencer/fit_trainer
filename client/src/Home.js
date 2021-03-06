import React, {Component} from 'react';
import on_bike_crop from './pics/on_bike_crop.jpg';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import './css/Home.css';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      goal: 'Not Sure',
      plan: 'None'
    }
    this.updateGoal = this.updateGoal.bind(this);
    this.updatePlan = this.updatePlan.bind(this);
  }

  updateGoal(e) {
    this.setState({
      goal: e.target.value
    })
  }

  updatePlan(e) {
    this.setState({
      plan: e.target.value
    })
  }

  render() {
    return (
      <div>
        <div id="top-pic">
        </div>
        <h2 className="titler"> BioLogic Fitness and Health </h2>
        <div className="centre-column">
          <h3> Reinvigorate Your Life! </h3>
          <p>
            We specialize in Health and Fitness programs for individuals age 50+.
             Your needs are unique, and we will help you reach them!
             <br/>
             <br/>
             <br/>
          </p>
        </div>
        <div className="centre-column">
          <Step1 updateGoal={this.updateGoal}/>
        </div>
        <div className="home-background">
          <div className="centre-column">
            <Step2 updatePlan={this.updatePlan}/>
          </div>
        </div>
        <div className="centre-column">
          <Step3 goal={this.state.goal} plan={this.state.plan}/>
        </div>
      </div>
    )
  }
}

export default Home;
