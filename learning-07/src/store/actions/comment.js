import * as types from '../constants/types'


export function addComment(data) {
    return {
      type: types.ADD_COMMENT,
      payload: data
    }
  }


