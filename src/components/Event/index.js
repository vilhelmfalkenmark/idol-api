import React from 'react';
export default class Event extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startMinute: new Date(props.eventStart).getMinutes() < 10 ? "0" + new Date(props.eventStart).getMinutes() : new Date(props.eventStart).getMinutes(),
      startHour: new Date(props.eventStart).getHours(),
      endMinute: new Date(props.eventEnd).getMinutes()  < 10 ? "0" + new Date(props.eventEnd).getMinutes() : new Date(props.eventEnd).getMinutes(),
      endHour: new Date(props.eventEnd).getHours(),
    }
  }
  componentDidMount() {

  }

  render() {
    const { eventName, eventImage, eventDesc, eventEnd, eventStart, currentTime } = this.props;
    const {startMinute, startHour, endMinute, endHour} = this.state;

    var running ;

    var dateObject = {
      now: new Date(currentTime),
      start: new Date(eventStart),
      end: new Date(eventEnd)
    }
    var passedTime = 100;

    if(dateObject.now > dateObject.end) {
      running = "Har redan passerat"
    }

    else if (dateObject.now > dateObject.start && dateObject.now  < dateObject.end  ) {
      running = "pågår"

      passedTime = ((currentTime - eventStart) / ( eventEnd - eventStart)*100)
    } else if(dateObject.start > dateObject.now) {
        passedTime = 0;
        running = "Ska visas"
    }

    const styles = {
      width: passedTime+`%`
    };


    return (
      <div className="Event">
        <div className="Event-image">
          <img src={eventImage + "?maxHeight=160"} role="presentation" alt="test"/>
        </div>
        <div className="Event-info">
          <h3>{eventName}</h3>
          <span className="Event-description">{eventDesc}</span>
          <p className="Event-timespan">{startHour +":"+ startMinute} - {endHour +":"+ endMinute}</p>
          <div className="Event-progressbar" ><span style={styles}></span></div>
        </div>
      </div>
    )
  }
}
