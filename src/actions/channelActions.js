import axios from "axios";
// Get all the channels with the current program.
export function getChannels() {
  return function(dispatch) {
    axios.get("http://localhost:8080/channels")
    .then((response) => {
      dispatch({type: "CHANNELS_FETCHED", payload: response.data})
    })
    .catch((err) => {
      dispatch({type: "EVENTS_REJECTED", payload: err})
    })
  }
}
// Get programs of a channel depending on the direction.

// Eventcount is the number of items we want to fetch

export function getChannelEvents(direction, channel, index, eventCount) {
  // console.log(eventCount);
  return function(dispatch) {
    axios.get("http://localhost:8080/channel-event/",{
          params: {
            direction: direction,
            channelID : channel,
            eventCount : eventCount
          }
        }
        )
        .then((response) => {
          dispatch({type: "CHANNELS_EVENTS_FETCHED", payload: {
            response: response.data,
            index: index
          }}
          )
        })
        .catch((err) => {
          dispatch({type: "CHANNELS_EVENTS_REJECTED", payload: err})
        })
  }
}
