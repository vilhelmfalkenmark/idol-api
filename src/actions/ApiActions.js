import axios from "axios";

 export function getAllParticipants() {
  console.log("kallas på!");
  return function(dispatch) {
    axios.get("http://api.tv4play.se/site/programs/idol")
    .then((response) => {
      console.log(response.data);
      dispatch({type: "PARTICIPANTS_FETCHED", payload: response.data})
    })
    .catch((err) => {
      dispatch({type: "PARTICIPANTS_REJECTED", payload: err})
    })
  }
}


//  const getAllDatas = () => {
//   // return function(dispatch) {
//   //   axios.get("http://api.tv4play.se/site/programs/idol")
//   //   .then((response) => {
//   //     console.log(response.data);
//   //     dispatch({type: "CHANNELS_FETCHED", payload: response.data})
//   //   })
//   //   .catch((err) => {
//   //     dispatch({type: "EVENTS_REJECTED", payload: err})
//   //   })
//   // }
// }

// export default {
//  getAllData
// }
