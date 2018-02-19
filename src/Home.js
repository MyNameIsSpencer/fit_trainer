import React, {Component} from 'react';
import thumbsup from './pics/thumbsupcrop.jpg';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <div>
        <div class="top-pic">
          <img src={thumbsup} alt="thumbsup"/>
        </div>
        <div class="centre-column">
          <div>
            <p> here is the p tag </p>
          </div>
        </div>
      </div>
    )


  }

}

export default Home;
