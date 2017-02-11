import React from 'react';
import { connect } from "react-redux";

class LandingPage extends React.Component {



  render() {

    const {data} = this.props;
    console.log(data);
    return (
     <section>
      <h1>{data.description}</h1>
      <img src={data.programImage} />
     </section>
    )


  }
}
const mapStateToProps = (state) => {
  return {
    data: state.data
  }
}
export default connect(mapStateToProps)(LandingPage);
