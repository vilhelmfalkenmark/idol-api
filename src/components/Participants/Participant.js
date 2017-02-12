import React from 'react';
import { Match , Link, Miss} from 'react-router';

export default class Participant extends React.Component {
  render() {
     const {participant, pathname} = this.props;
    return (
     <div className="Participant-teaser">
      <h3>{participant.name}</h3>
      <img src={participant.image.url} alt={participant.name}/>
      <Link to={`${pathname}/${participant.person_tag}`} activeClassName="is-active"><i className="flaticon-folded-newspaper"></i>Läs mer</Link>
     </div>
    )
  }
}
