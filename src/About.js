import React, {Component} from 'react';

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <div>
        I am About


        <p>
          Do you live with any of the following:
        </p>
        <ul>
          <li>Muscle Weakness</li>
          <li>Reduced Bone Density</li>
          <li>Type 2 Diabetes</li>
          <li>High Cholesterol or</li>
          <li>Feeling Tired or Stressed</li>
        </ul>
      </div>
    )
  }
}

export default About;
