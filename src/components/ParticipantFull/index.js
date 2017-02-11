import React from 'react';
import { connect } from "react-redux";
import { getSpecificParticipant, getVideos } from "../../actions/ApiActions";

class ParticipantFull extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
     participantSearched: false
    }
  }
  findParticipant() {
   const {params: id, participants: participants} = this.props;
   const {participantSearched} = this.state;
    participants.participants ?
    participants.participants.map((participant) => {
     if(participant.person_tag === id.id && !participantSearched) {
      this.props.dispatch(getSpecificParticipant(participant))
      this.props.dispatch(getVideos(participant.person_tag))
      this.setState({ participantSearched: true })
     }
    }) : null
  }
  componentDidUpdate() {
   this.findParticipant();
  }
  componentDidMount() {
   this.findParticipant();
  }
  componentDidUnMount() {
    this.props.dispatch(getSpecificParticipant({}))
    this.props.dispatch(getVideos(""))
  }

  render() {

   const {participant, videos} = this.props;

    // console.log(participant);
    console.log(videos,"videos");
    // console.log(participant.image.url);
    return (
     <section >
      {
       Object.keys(participant).length > 0 && Object.keys(videos).length > 0 ? <div>
        <h1>Fullständig info om idoldeltagaren {participant.name}</h1>
        <img src={participant.image.url} />
        <p>{participant.description}</p>
        <h3>Videos relaterade till {participant.name}</h3>
        <div className="ParticipantFull-video-container">
        {
         videos.results.map((video,i) => {
          return <div key={i} className="ParticipantFull-video-col">
            <h4>{video.title}</h4>
            <div className="ParticipantFull-video-bottom">
             <div className="ParticipantFull-video-thumbnail" style={{backgroundImage: `url(${video.image})`}}></div>
             <a href={`http://www.tv4play.se/program/idol?video_id=${video.id}`} target="_blank">Se klipp på TV4.se</a>
            </div>
          </div>
         })
        }
        </div>
       </div> : null
      }
     </section>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    participants: state.data.participants,
    participant: state.data.specificParticiant,
    videos: state.data.videos
  }
}
export default connect(mapStateToProps)(ParticipantFull);
