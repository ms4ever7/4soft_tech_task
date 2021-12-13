import { RECEIVE_APPLICATIONS_LIST_DATA, RECEIVE_APPLICATIONS_LIST_ITEM } from "./main.types";

// TODO: CREATE DIFFERENT FILE like main.state for saving initial state
const initialMainState = { data: [] };

function mainReducer(state = initialMainState, action) {
  switch (action.type) {
    case RECEIVE_APPLICATIONS_LIST_DATA: {
      const { data } = action;

      return {
        ...state,
        data
      }
    };
    case RECEIVE_APPLICATIONS_LIST_ITEM: {
      const { data } = action;

      return {
        ...state,
        selectedItem: data
      }
    };
    default:
      return state;
  }
}

export default mainReducer;