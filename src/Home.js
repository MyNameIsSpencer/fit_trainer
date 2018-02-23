import React, {Component} from 'react';
import thumbsup from './pics/thumbsup.jpg';

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
        <div className="centre-column">
          <div className="p-tagger">
            <p> here is the p tag </p>
          </div>
        </div>
      </div>
    )


  }

}

export default Home;
