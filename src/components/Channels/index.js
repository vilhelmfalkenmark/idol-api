import React from 'react';
import Channel from '../Channel/';
import { connect } from "react-redux";
import { getChannels } from "../../actions/ChannelActions";
import { getChannelEvents } from "../../actions/ChannelActions";

class Channels extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      currentTime: Date.now()
    }


    this.direction = this.direction.bind(this);
  }

  componentWillMount() {
    this.props.dispatch(getChannels());
  }

  direction(direction, channelID, index, eventLength) {
    console.log(eventLength);
    
    this.props.dispatch(getChannelEvents(direction, channelID, index, eventLength));
  }

  render() {
    const { channels, fetched}=this.props.channels;
    return (
      <div>
        <h4>Proof of concept</h4>
        <ul className="Channels">
          {
            fetched ?
            channels.map( function (channel, i) {
              return <Channel
                direction={this.direction}
                key={i}
                index={i}
                channelName={channel.channelName}
                darkImage={channel.imageOnDarkURL}
                lightImage={channel.imageOnLightURL}
                channelID={channel.channelID}
                events={channel.events}
                currentTime = {this.state.currentTime}
                />;
            },this) : null
          }
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    channels: state.channels
  }
}

export default connect(mapStateToProps)(Channels);
