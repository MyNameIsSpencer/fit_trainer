import React, {Component} from 'react';
import './css/About.css';

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <div>
        <div className="centre-column">
          <div className="first-clump">
            <br/>
            <h1 className="heading"> We can help you <b>Reinvigorate Your Life!</b></h1>
            <hr/>

            <p>
              We specialize in health and fitness programs for individuals over 50. Are you worried about your health? <br/>
                Do you live with any of the following:
            </p>
            <ul>
              <li>Muscle Weakness</li>
              <li>Reduced Bone Density</li>
              <li>Type 2 Diabetes</li>
              <li>High Cholesterol</li>
              <li>Feeling Tired or Stressed</li>
            </ul>
            <p>
              Your needs are unique! Get a program that caters specifically to you.
              <br/>
              <br/>
              <br/>
            </p>

            <h1 className="heading"> What we do for You!</h1>
            <hr/>

            <p>
              Convenient: We come to you!  We are a <b>home-based service</b> located in the East Scarborough/Pickering area.
              We focus all of our attention on you.  No need for expensive equipment to get and stay fit!
            </p>
            <p>
              Quality: We provide simple-to-follow activieties that are safe and gradually build your <b>strength, endurance, </b>
              and <b>confidence!</b>
            </p>
            <p>Inclusive: We provide a 12-week <b>healthy eating program</b> that has proven success, to help you stay in control!
              <br/>
              <br/>
              <br/>
            </p>

            <h1 className="heading"> Your Healthy Living Support Team!</h1>
            <hr />

            <p>We are a part of your Healthy Living Support Team.</p>
            <p>Has your doctor suggested you</p>
            <ul>
              <li>Lose weight or</li>
              <li>Become more active?</li>
            </ul>
            <br/>
            <p>We <b>support</b> you</p>
            <ul>
              <li>One-on-one or</li>
              <li>In small groups</li>
            </ul>

            <br/>

            <h1 className="heading"> Contact Us Today For Your <b>FREE</b> Consultaion!</h1>
            <hr/>
            <p>
              In your first consultation we'll discuss your goals and unique needs.
              What's better, your first consultation is completely free!
              We take pride in helping you reach your desired fitness goals.
            </p>
            <p>
              Phone us at: 647-573-2636<br/><br/>

              or email: biologicfitnessandhealth@gmail.com<br/><br/>

              Let BioLogic Fitness and Health help you <b>Reinvigorate Your Life!</b>
              <br/>
              <br/>
            </p>

          </div>


        </div>
      </div>
    )
  }
}

export default About;
