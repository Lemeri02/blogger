import * as actions from '../actions/'

const initialState = {}

export default (state = initialState, action) => {
  switch(action.type) {
    case actions.ERROR:
      return { ...action.error };

    case actions.CLEAR_ERRORS:
      return {}
    default:
      return state;
  }
}
