import React from 'react';
import Event from '../Event'
//import { connect } from "react-redux";
//
//import { getChannels } from "../../actions/ChannelActions";

export default class Channel extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      swipe: (((props.events.length-2) * 600)*-1),
      fetched: 1 // How many into the future we will fetch
    }
  }
  swipeEvents(direction){
    let channelID = this.props.channelID;
    let fetched = this.state.fetched;

    let swipe = this.state.swipe;

    if (direction === 'left') {
      swipe += 600;
      fetched--;
      swipe > 0 ? swipe = 0 : null
      fetched < 0 ? fetched = 0 : null

      this.setState({
        swipe,
        fetched
      })
    }
    else {
      this.props.direction(direction, channelID, this.props.index, fetched);
        
      fetched++;

      swipe -= 600;
      this.setState({
        swipe,
        fetched
      })


      console.log(this.state.swipe);
      console.log(this.state.fetched);
    }
  }

  render() {
    const { channelName, prgSvcID, events, darkImage, lightImage, qualifiers, currentTime } = this.props;
    const styles = {
      transform: `translateX(${this.state.swipe}px)`
    };

    return (
      <li className="Channel">
        <div className="Channel-col-icon">
          <img src= {lightImage} role="presentation" alt="test"/>
        </div>
        <div className="Channel-col-preview">
          <div className="Channel-arrow Channel-arrow--left" onClick={() => this.swipeEvents("left")}><span></span></div>
          <div className="Channel-arrow Channel-arrow--right" onClick={() => this.swipeEvents("right")}><span></span></div>
          <div className="Channel-col-preview-inner" style={styles}>
            {events.map(function(event, i){
              return <Event
                key={i}
                eventName={event.programName}
                eventImage={event.imageURL}
                eventDesc={event.description}
                eventEnd={event.ends}
                eventStart={event.starts}
                currentTime = {currentTime}
                />
            }, this)}
          </div>
      </div>
      </li>
    )
  }
}
