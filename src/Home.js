import React, {Component} from 'react';
import thumbsup from './pics/thumbsupcrop.jpg';
import on_bike_crop from './pics/on_bike_crop.jpg';
import Step1 from './Step1'
import './css/Home.css';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
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
            <div>
              <h2 className="lefter">
                Step 1 Choose Your Goal: "I want to..."
              </h2>
              <Step1 />
            </div>

            <h2>

            </h2>
            <h2 className="lefter">
              Step 2 Review Services and Pricing:
            </h2>
            <h2 className="lefter">
              Step 3 Contact BFH Wellness Coach!:
            </h2>
          </div>
        </div>

      </div>
    )


  }

}

export default Home;
