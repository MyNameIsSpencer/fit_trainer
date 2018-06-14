import React, {Component} from 'react';
import Youtuber from './Youtuber';
import './css/FitTips.css';

class FitTips extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return(
      <div>
        <Youtuber url="https://www.youtube.com/embed/nJEP2CE8oGM" title="Chair Exercise" description="Turn your chair into a grueling training regimen"/>
        <Youtuber url="https://www.youtube.com/embed/6gOv516iooU"  title="Seated Hip Flexion" description="Sit on the chair and get those hips flexing"/>
        <Youtuber url="https://www.youtube.com/embed/mQLzNf8VOIc" title="Standing Exercises" description="Lot's o standing exercises that will get you burning!"/>
      </div>
    )
  }

}


export default FitTips;
