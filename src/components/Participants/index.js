import React from 'react';
import { connect } from "react-redux";
import { getAllParticipants } from "../../actions/ApiActions";
import Participant from "./Participant";

class Participants extends React.Component {

  constructor(props) {
    super(props)
    this.state = {

    }
  }
  componentDidMount() {
   this.props.dispatch(getAllParticipants());
  }

  render() {
    const {name, participants} = this.props.participants.participants
    console.log(participants);
    return (
     <section >
      <h2>{name}</h2>
      <div className="Participants-container">
      {
       participants ?
       participants.map((participant,i) =>
       <Participant key={i} participant={participant} pathname={this.props.pathname}/>
      ) : null


      }
      </div>
     </section>
    )


  }
}
const mapStateToProps = (state) => {
  return {
    participants: state.participants
  }
}
export default connect(mapStateToProps)(Participants);
