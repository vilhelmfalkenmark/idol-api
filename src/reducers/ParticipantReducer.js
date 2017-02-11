export default function participants(state = {
  participants: {},
  fetched: false
}, action) {
    //////////////////////////////////////////
    // INITIAL FETCH OF DATA
    //////////////////////////////////////////
    if (action.type === "PARTICIPANTS_FETCHED") {
      return {
        ...state,
        participants: action.payload.participant_groups[0],
        fetched: true
      }
    }
    if (action.type === "PARTICIPANTS_REJECTED") {
      return {
        ...state,
        participants: [],
        fetched: false
      }
    }

    return state;
}
