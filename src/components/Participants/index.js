import React from 'react';
import { connect } from "react-redux";
import Participant from "./Participant";

class Participants extends React.Component {
  render() {
    const {name, participants} = this.props.participants
    return (
     <section >
      <h2>{name}</h2>
      <p className="text">hej</p>
      <div className="Participants-container">
      {
       participants ?
       participants.map((participant,i) =>
       <Participant
        key={i}
        participant={participant}
        pathname={this.props.pathname}/>
      ) : null
      }
      </div>
     </section>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    participants: state.data.participants
  }
}
export default connect(mapStateToProps)(Participants);
