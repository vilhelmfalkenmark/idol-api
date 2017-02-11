import React from 'react';
import { connect } from "react-redux";

class ParticipantFull extends React.Component {
  constructor(props) {
    super(props)

  }
  componentDidMount() {



  }
  componentDidUnMount() {



  }

  render() {
    return (
     <section >
      <h2>Fullständig info om idoldeltagaren</h2>
     </section>
    )


  }
}
const mapStateToProps = (state) => {
  return {
    participants: state.participants
  }
}
export default connect(mapStateToProps)(ParticipantFull);
