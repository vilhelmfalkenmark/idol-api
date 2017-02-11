export default function participants(state = {
  participants: {},
  specificParticiant: {},
  description: "",
  programImage: "",
  videos: {},
  fetched: false,
}, action) {
//////////////////////////////////////////
// INITIAL FETCH OF DATA
//////////////////////////////////////////
if (action.type === "DATA_FETCHED") {
  return {
    ...state,
    participants: action.payload.participant_groups[0],
    description: action.payload.description,
    programImage: action.payload.program_image,
    fetched: true
  }
}
if (action.type === "DATA_REJECTED") {
  return {
    ...state,
    participants: [],
    fetched: false
  }
}
//////////////////////////////////////////
// SPECIFIC PARTICIPANT
//////////////////////////////////////////
if (action.type === "PARTICIPANT_SELECTED") {
  return {
    ...state,
    specificParticiant: action.payload
  }
}
if (action.type === "PARTICIPANT_NOT_FOUND") {
  return {
    ...state,
    fetched: false,
    specificParticiant: {}
  }
}
//////////////////////////////////////////
// VIDEOS
//////////////////////////////////////////
if (action.type === "VIDEOS_FETCHED") {
  return {
    ...state,
    videos: action.payload
  }
}
if (action.type === "VIDEOS_REJECTED") {
  return {
    ...state,
    fetched: false,
    specificParticiant: {}
  }
}


return state;
}
