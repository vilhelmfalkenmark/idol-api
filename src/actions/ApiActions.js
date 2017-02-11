import axios from "axios";

 export function getAllData() {
  return function(dispatch) {
    axios.get("http://api.tv4play.se/site/programs/idol")
    .then((response) => {
      console.log(response.data);
      dispatch({type: "DATA_FETCHED", payload: response.data})
    })
    .catch((err) => {
      dispatch({type: "DATA_REJECTED", payload: err})
    })
  }
}

 export function getSpecificParticipant(participant) {
  return function(dispatch) {
     dispatch({type: "PARTICIPANT_SELECTED", payload: participant})
  }
}

 export function getVideos(tag) {
  return function(dispatch) {
   axios.get(`http://api.tv4play.se/play/video_assets.json?tags=${tag}`)
   .then((response) => {
     // console.log(response.data);
     dispatch({type: "VIDEOS_FETCHED", payload: response.data})
   })
   .catch((err) => {
     dispatch({type: "VIDEOS_REJECTED", payload: err})
   })
  }
}
