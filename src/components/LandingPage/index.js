import React from 'react';
import { connect } from "react-redux";

class LandingPage extends React.Component {

  constructor(props) {
    super(props)
    this.state = {

    }
  }
  componentDidMount() {
   // this.props.dispatch(getAllParticipants());
  }

  render() {
    return (
     <section >
      <h2>Välkommen till villes feta sida!</h2>
     </section>
    )


  }
}
const mapStateToProps = (state) => {
  return {
    participants: state.participants
  }
}
export default connect(mapStateToProps)(LandingPage);
