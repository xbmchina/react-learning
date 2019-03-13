import * as types from '../../constants/types'

  const initState = {
      comment:''
  }
  export function comments(state=initState, action) {

      switch(action.type){
        case types.ADD_COMMENT:
          return {
            ...state,
            comment: state.comment
          }
        
        default:
          return state
      }
  }