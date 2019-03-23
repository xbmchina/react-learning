import * as types from '../../constants/types';


const initState = {
  comment: 1
}

export function comments(state = initState, action) {

  switch (action.type) {
    case types.ADD_COMMENT:
      console.log("reducer comments...."+action.payload.comment);
      return {
        ...state,
        comment: action.payload.comment
      };
    default:
      return state;
  }

}