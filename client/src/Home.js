import React, {Component} from 'react';
import thumbsup from './pics/thumbsupcrop.jpg';
import on_bike_crop from './pics/on_bike_crop.jpg';
import Step1 from './Step1'
import Step2 from './Step2'
import Step3 from './Step3'
import './css/Home.css';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      goal: '',
      plan: ''
    }
    this.updateGoal = this.updateGoal.bind(this);
    this.updatePlan = this.updatePlan.bind(this);
  }

  updateGoal(e) {
    this.setState({
      goal: e
    })
  }

  updatePlan(e) {
    this.setState({
      plan: e
    })
  }

  render() {
    return (
      <div>
        <div className="top-pic">
          <img src={thumbsup} alt="thumbsup"/>
        </div>
        {/*<h2 className="titler"> BioLogic Fitness and Health </h2>*/}
        <div className="centre-column">
          <h3> Reinvigorate Your Life! </h3>
          <p>
            {"We specialize in Health and Fitness programs for individuals age 50+."}
            {" Your needs are unique, and we'll help you reach them!"}
          </p>

          <div>
            <Step1 myGoal={this.updateGoal}/>
            <Step2 myPlan={this.updatePlan}/>
            <Step3 goal={this.state.goal} plan={this.state.plan}/>
          </div>
        </div>
      </div>
    )


  }

}

export default Home;
